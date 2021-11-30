import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Row, Card, Col, Avatar } from 'antd'

import PHANTOM from 'os/static/images/phantom.png'
import { RootDispatch, RootState } from 'os/store'
import { connectWallet } from 'os/store/wallet.reducer'
import { PhantomWallet } from '../../lib'

const Phantom = () => {
  const dispatch = useDispatch<RootDispatch>()
  const { infix } = useSelector((state: RootState) => state.ui)

  const connect = async () => {
    const { solana } = window
    if (!solana?.isPhantom)
      return window.notify({
        type: 'warning',
        description:
          'Phantom Wallet is not installed. If this is the first time you install Phantom wallet, please restart your browser to complete the setup.',
      })
    const wallet = new PhantomWallet()
    try {
      await dispatch(connectWallet(wallet)).unwrap()
    } catch (er: any) {
      return window.notify({ type: 'error', description: er.message })
    }
  }

  const avatarSize = useMemo(() => {
    return infix === 'lg' ? 32 : 64
  }, [infix])

  return (
    <Card
      onClick={connect}
      style={{ cursor: 'pointer' }}
      bordered={false}
      hoverable
    >
      <Row gutter={[16, 16]} justify="center">
        <Col>
          <Avatar size={avatarSize} shape="square" src={PHANTOM} />
        </Col>
        <Col span={24}>
          <p style={{ margin: 0, textAlign: 'center' }}>Phantom</p>
        </Col>
      </Row>
    </Card>
  )
}

export default Phantom
