# tezos-wallet-component

> Tezos Wallet React Component

[![NPM](https://img.shields.io/npm/v/tezos-wallet-component.svg)](https://www.npmjs.com/package/tezos-wallet-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save tezos-wallet-component
```

## Usage

```jsx
import { 
  TezosWallet,
  TezosWalletMenuDisconnect 
} from 'tezos-wallet-component'
import 'tezos-wallet-component/dist/index.css'

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
    <div>
      <TezosWallet
        address={wallet?.address}
        balance={wallet?.balance}
        showMenu={showMenu}
        onToggleMenu={() => setShowMenu(!showMenu)}
        onConnectWallet={handleConnectWallet}
       >
        <TezosWalletMenuDisconnect onClick={handleDisconnectWallet} />
      </TezosWallet>
    </div>
  )
}
```

![screenshot1](screenshots/NotConnected.png?raw=true "Screenshot1")  
![screenshot2](screenshots/Connected.png?raw=true "Screenshot2")  
![screenshot3](screenshots/WithMenu.png?raw=true "Screenshot3")  
![video1](screenshots/demo.gif?raw=true "Video1")  

## License

MIT © [asbjornenge](https://github.com/asbjornenge)
