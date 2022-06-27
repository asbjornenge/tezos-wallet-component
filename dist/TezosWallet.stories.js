"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _TezosWallet = require("./TezosWallet");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/TezosWallet',
  component: _TezosWallet.TezosWallet
};
exports.default = _default;

var Template = function Template(props) {
  return /*#__PURE__*/_react.default.createElement(_TezosWallet.TezosWallet, props, /*#__PURE__*/_react.default.createElement("div", null, "MenuItem 1"), /*#__PURE__*/_react.default.createElement("div", null, "MenuItem 2"));
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  address: 'tz1UZZnrre9H7KzAufFVm7ubuJh5cCfjGwam',
  balance: '1234',
  showMenu: false,
  network: 'mainnet',
  networks: [{
    name: 'mainnet'
  }, {
    name: 'ithacanet',
    testnet: true
  }],
  tezIDProfile: {
    name: 'asbjornenge',
    avatar: 'ipfs://QmUMat94rqkeRW93QMRdZTjEhnjn32ziuYaww4uoaXEugc'
  }
};