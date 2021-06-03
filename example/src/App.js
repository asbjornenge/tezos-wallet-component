import React, { useState } from 'react'
import './App.css'

import { 
  TezosWallet,
  TezosWalletMenuDisconnect 
} from 'tezos-wallet-component'
import 'tezos-wallet-component/dist/index.css'

const networks = [
  {
    label: 'Mainnet',
    type: 'mainnet'
  },
  {
    label: 'Edonet',
    type: 'edo2net',
    testnet: true
  }
]

const App = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [wallet, setWallet] = useState(null)

  const mockWallet = {
    address: 'tz1UZZnrre9H7KzAufFVm7ubuJh5cCfjGwam',
    balance: 125000
  }

  const handleConnectWallet = (selectedNetwork) => {
    setWallet(mockWallet)
  }

  const handleDisconnectWallet = () => {
    setWallet(null)
    setShowMenu(false)
  }

  return (
    <div className="App">
      <div className="header">
        <div className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tezos_logo.svg/1200px-Tezos_logo.svg.png" alt="logo" />
        </div>
        <h1>Dapp</h1>
        <div className="wallet">
          <TezosWallet
            address={wallet?.address}
            balance={wallet?.balance}
            networks={networks}
            showMenu={showMenu}
            onToggleMenu={() => setShowMenu(!showMenu)}
            onConnectWallet={handleConnectWallet}
           >
            <TezosWalletMenuDisconnect onClick={handleDisconnectWallet} />
          </TezosWallet>
        </div>
      </div>
    </div>
  )
}

export default App
