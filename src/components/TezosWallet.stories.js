import React from 'react';

import { TezosWallet } from './TezosWallet';

export default {
  title: 'Example/TezosWallet',
  component: TezosWallet,
}

const Template = (props) => {
  return (
    <TezosWallet {...props}>
      <div>MenuItem 1</div>
      <div>MenuItem 2</div>
    </TezosWallet>
  )
}

export const Default = Template.bind({});
Default.args = {
  address: 'tz1UZZnrre9H7KzAufFVm7ubuJh5cCfjGwam',
  balance: '1234', 
  showMenu: false,
  network: 'mainnet',
  networks: [
    { name: 'mainnet' },
    { name: 'ithacanet', testnet: true }
  ], 
  tezidProfile: true,
};
