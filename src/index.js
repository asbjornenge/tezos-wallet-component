import React from 'react'
import { create as createIdentityImage } from 'identity-img'
import formatNumber from 'format-number'
import './index.css'

export function truncateAddress(addr) {
  return `${addr.substring(0,7)}..${addr.substring(addr.length-5,addr.length-1)}`
}

export const WalletIcon = (props) => <svg {...props} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.8em" width="1.8em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1.5 3a.5.5 0 00-.5.5v2h5a.5.5 0 01.5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 01.5-.5h5v-2a.5.5 0 00-.5-.5h-13zM15 6.5h-4.551a2.678 2.678 0 01-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 015.551 6.5H1v6a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-6zm-15-3A1.5 1.5 0 011.5 2h13A1.5 1.5 0 0116 3.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 12.5v-9z" clipRule="evenodd"></path></svg>

export const DisconnectIcon = (props) => <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M832.6 191.4c-84.6-84.6-221.5-84.6-306 0l-96.9 96.9 51 51 96.9-96.9c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204l-96.9 96.9 51.1 51.1 96.9-96.9c84.4-84.6 84.4-221.5-.1-306.1zM446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l96.9-96.9-51.1-51.1-96.9 96.9c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l96.9-96.9-51-51-96.8 97zM260.3 209.4a8.03 8.03 0 0 0-11.3 0L209.4 249a8.03 8.03 0 0 0 0 11.3l554.4 554.4c3.1 3.1 8.2 3.1 11.3 0l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3L260.3 209.4z"></path></svg>

export const TezosWalletMenuDisconnect = (props) => {
  return (
    <div className="disconnect" onClick={props.onClick}>
      <div className="label">Disconnect</div>
      <div className="icon"><DisconnectIcon /></div>
    </div>
  )
}

export const TezosWallet = (props) => {
  const stopPropagation = (e) => {
    e.stopPropagation()
  }
  const formatBalance = props.formatBalance || formatNumber({ round: 2})

  if (!props.address) {
    const networkMenuItems = (props.networks || []).map(n => {
      return (
        <div key={n.type} onClick={() => { props.onConnectWallet(n) }}>
          <div className="label">{n.label}</div>
          <div className="icon"></div>
        </div> 
      )
    }) 
    const handleToggleMenuOrNetworkConnect = () => {
      if ((props.networks || []).length > 0) props.onToggleMenu()
      else props.onConnectWallet()
    } 
    return (
      <div className={`TezosWallet ${props.showMenu ? 'withmenu' : ''}`} onClick={handleToggleMenuOrNetworkConnect}> 
        <div className="connectWalletText">Connect Wallet</div>
        <div className="connectWalletIcon"><WalletIcon /></div>
        <div className="TezosWalletMenu" style={{ display: props.showMenu ? 'flex' : 'none' }} onClick={stopPropagation}>
          {networkMenuItems} 
        </div>
      </div>
    )
  }

  let idimg = null
  if (props.address != null) {
    idimg = new Image()
    idimg.src = createIdentityImage(props.address)
  }

  return (
    <div className={`TezosWallet ${props.showMenu ? 'withmenu' : ''}`} onClick={props.onToggleMenu}> 
      { !props.hideBalance &&
        <div className="balance">{formatBalance(props.balance || 0)} ꜩ</div>
      }
      { !props.hideSpacer &&
        <div className="spacer"></div>
      }
      { !props.hideIdImage && idimg != null &&
        <div className="identityImage">
          <img alt="identity" src={idimg.src} />
        </div>
      }
      { !props.hideAddress &&
        <div className="address">{truncateAddress(props.address)}</div>
      }
      <div className="TezosWalletMenu" style={{ display: props.showMenu ? 'flex' : 'none' }} onClick={stopPropagation}>
        {props.children}
      </div>
    </div>
  )
}
