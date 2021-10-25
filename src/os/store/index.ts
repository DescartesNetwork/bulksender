import { configureStore } from '@reduxjs/toolkit'
import middleware from './middleware'
import devTools from './devTools'

import ui from './ui.reducer'
import flags from './flags.reducer'
import wallet from './wallet.reducer'
import accounts from './accounts.reducer'
import mints from './mints.reducer'
import pools from './pools.reducer'

const store = configureStore({
  middleware,
  devTools: devTools('senhub'),
  reducer: {
    ui,
    flags,
    wallet,
    accounts,
    mints,
    pools,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
export default store
