import { Document } from 'flexsearch'
import { TokenListProvider, TokenInfo } from '@solana/spl-token-registry'

import { net } from 'shared/runtime'
import configs from 'os/configs'
import supplementary, { sen, sol } from './supplementary'

const {
  sol: { chainId },
} = configs
const DELIMITER = /[\W_]+/g
const PRESET = {
  tokenize: 'full',
  context: true,
  minlength: 3,
}
const DOCUMENT = {
  document: {
    id: 'address',
    index: [
      { field: 'symbol', ...PRESET },
      { field: 'name', ...PRESET },
    ],
  },
}

class TokenProvider {
  private tokenList: TokenInfo[]
  private mapTokenList: Map<string, TokenInfo>
  private engine: typeof Document | undefined
  readonly chainId: typeof chainId
  readonly cluster: typeof net

  constructor() {
    this.tokenList = []
    this.mapTokenList = new Map<string, TokenInfo>()
    this.engine = undefined
    this.chainId = chainId
    this.cluster = net
    // Init
    this._init()
  }

  private _init = async (): Promise<TokenInfo[]> => {
    if (this.tokenList.length) return this.tokenList
    let tokenList = await (await new TokenListProvider().resolve())
      .filterByChainId(this.chainId)
      .getList()
    if (this.cluster === 'devnet') tokenList = tokenList.concat(supplementary)
    if (this.cluster === 'testnet')
      tokenList = tokenList.concat([sen(102), sol(102)])
    else tokenList = tokenList.concat([sen(101), sol(101)])

    for (const token of tokenList)
      this.mapTokenList.set(token.address, token)
    this.tokenList = tokenList
    return this.tokenList
  }

  private _engine = async () => {
    if (this.engine) return this.engine
    const tl = await this._init()
    this.engine = new Document(DOCUMENT)
    tl.forEach(({ address, ...doc }) => this.engine.add(address, doc))
    return this.engine
  }

  all = async (): Promise<TokenInfo[]> => {
    return await this._init()
  }

  findByAddress = async (addr: string): Promise<TokenInfo | undefined> => {
    await this._init()
    return this.mapTokenList.get(addr)
  }

  find = async (keyword: string, limit?: 10): Promise<TokenInfo[]> => {
    const tl = await this._init()
    const engine = await this._engine()
    let tokens: TokenInfo[] = []
    keyword.split(DELIMITER).forEach((key) => {
      const raw: Array<{ result: string[] }> = engine.search(key, limit)
      return raw.forEach(({ result }) => {
        return result.forEach((id: string) => {
          if (tokens.findIndex(({ address }) => address === id) < 0) {
            const token = tl.find(({ address }) => address === id)
            if (token) tokens.push(token)
          }
        })
      })
    })
    return tokens
  }
}

export default TokenProvider
