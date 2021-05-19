# tezos-wallet-component

> Tezos Wallet React Component

[![NPM](https://img.shields.io/npm/v/tezos-wallet-component.svg)](https://www.npmjs.com/package/tezos-wallet-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Tezos Wallet React Component aims to provide a responsive and flexible wallet component for Tezos dapps created using React. It is a pure UI component and does not bind to any particular wallet. All state and wallet interactions must be handles by the user. It aims to be modular and pluggable in how it handles menu items where components are passed as children.

See example below.

Lots of room for improvements! HELP WANTED!!

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

## Props

```
address         - The wallet address. If this is null or undefined the "Connect wallet" is displayed.
balance         - The wallet balance.
showMenu        - Indicates wether the menu should be shown.
onToggleMenu    - Function called when appropriate parts of the UI is clicked for a open/close menu action.
onConnectWallet - Function called when appropriate parts in the UI is clicked for a wallet connect action.
networks        - List of networks the dapp supports connecting to. Requires a list of objects with *type* and *label* fields. Will be passed as callback to onConnectWallet.
formatBalance   - Function to format balance if you want to change how it is presented.
hideBalance     - Boolean to indicate if you want to hide balance (this might currently screw up media query layouts)
hideSpacer      - Boolean to indicate if you want to hide spacer between balance and identity image (this might currently screw up media query layouts)
hideIdImage     - Boolean to indicate if you want to hide identity image (this might currently screw up media query layouts)
hideAddress     - Boolean to indicate if you want to hide address (this might currently screw up media query layouts)
```

![screenshot1](screenshots/NotConnected.png?raw=true "Screenshot1")  
![screenshot2](screenshots/Connected.png?raw=true "Screenshot2")  
![screenshot3](screenshots/WithMenu.png?raw=true "Screenshot3")  
![screenshot4](screenshots/ConnectedSmall.png?raw=true "Screenshot4")  

## License

MIT © [asbjornenge](https://github.com/asbjornenge)
