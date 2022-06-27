"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WalletIcon = exports.TezosWalletMenuDisconnect = exports.TezosWallet = exports.TestnetIcon = exports.NetworkIcon = exports.DisconnectIcon = void 0;
exports.getIpfsLink = getIpfsLink;
exports.truncateAddress = truncateAddress;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _identityImg = require("identity-img");

var _formatNumber = _interopRequireDefault(require("format-number"));

require("./TezosWallet.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function getIpfsLink(ipfsPath) {
  var base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'https://ipfs.infura.io/ipfs';
  return "".concat(base, "/").concat(ipfsPath === null || ipfsPath === void 0 ? void 0 : ipfsPath.split('ipfs://')[1]);
}

function truncateAddress(addr) {
  if (!addr) return '';
  if (addr.indexOf('tz') == 0) return "".concat(addr.substring(0, 7), "...").concat(addr.substring(addr.length - 4, addr.length));
  return addr.substring(0, 14);
}

var WalletIcon = function WalletIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", _extends({}, props, {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 16 16",
    height: "1.8em",
    width: "1.8em",
    xmlns: "http://www.w3.org/2000/svg"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    d: "M1.5 3a.5.5 0 00-.5.5v2h5a.5.5 0 01.5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 01.5-.5h5v-2a.5.5 0 00-.5-.5h-13zM15 6.5h-4.551a2.678 2.678 0 01-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 015.551 6.5H1v6a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-6zm-15-3A1.5 1.5 0 011.5 2h13A1.5 1.5 0 0116 3.5v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 12.5v-9z",
    clipRule: "evenodd"
  }));
};

exports.WalletIcon = WalletIcon;

var DisconnectIcon = function DisconnectIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 1024 1024",
    height: "1.3em",
    width: "1.3em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M832.6 191.4c-84.6-84.6-221.5-84.6-306 0l-96.9 96.9 51 51 96.9-96.9c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204l-96.9 96.9 51.1 51.1 96.9-96.9c84.4-84.6 84.4-221.5-.1-306.1zM446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l96.9-96.9-51.1-51.1-96.9 96.9c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l96.9-96.9-51-51-96.8 97zM260.3 209.4a8.03 8.03 0 0 0-11.3 0L209.4 249a8.03 8.03 0 0 0 0 11.3l554.4 554.4c3.1 3.1 8.2 3.1 11.3 0l39.6-39.6c3.1-3.1 3.1-8.2 0-11.3L260.3 209.4z"
  }));
};

exports.DisconnectIcon = DisconnectIcon;

var NetworkIcon = function NetworkIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: "none",
    stroke: "#000000",
    strokeWidth: "2",
    d: "M7.5,7 L7.5,15.5142857 C7.5,19.7571429 13,18.3428571 13,22.1142857 L13,24 M11,10 L7.5,7 L4,10 M16.5,2 L16.5,10.440516 C16.5,14.5083612 13,13.1524128 13,16.7682752 L13,24 M13,5 L16.5,2 L20,5"
  }));
};

exports.NetworkIcon = NetworkIcon;

var TestnetIcon = function TestnetIcon(props) {
  return /*#__PURE__*/_react.default.createElement("svg", {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("path", {
    fill: "none",
    d: "M0 0H24V24H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M17 2v2h-1v14c0 2.21-1.79 4-4 4s-4-1.79-4-4V4H7V2h10zm-3 8h-4v8c0 1.105.895 2 2 2s2-.895 2-2v-8zm-1 5c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm-2-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm3-8h-4v4h4V4z"
  })));
};

exports.TestnetIcon = TestnetIcon;

var TezosWalletMenuDisconnect = function TezosWalletMenuDisconnect(props) {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "disconnect",
    onClick: props.onClick
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "label"
  }, "Disconnect"), /*#__PURE__*/_react.default.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/_react.default.createElement(DisconnectIcon, null)));
};

exports.TezosWalletMenuDisconnect = TezosWalletMenuDisconnect;

var TezosWallet = function TezosWallet(props) {
  var _props$tezIDProfile, _props$tezIDProfile3, _props$tezIDProfile4;

  var stopPropagation = function stopPropagation(e) {
    e.stopPropagation();
  };

  var formatBalance = props.formatBalance || (0, _formatNumber.default)({
    round: 2
  });

  if (!props.address) {
    var networkMenuItems = (props.networks || []).map(function (n) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: n.name,
        onClick: function onClick() {
          props.onConnectWallet(n);
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "label"
      }, n.label), /*#__PURE__*/_react.default.createElement("div", {
        className: "icon"
      }, n.testnet && /*#__PURE__*/_react.default.createElement(TestnetIcon, null), /*#__PURE__*/_react.default.createElement(NetworkIcon, null)));
    });

    var handleToggleMenuOrNetworkConnect = function handleToggleMenuOrNetworkConnect() {
      if ((props.networks || []).length > 0) props.onToggleMenu();else props.onConnectWallet();
    };

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "TezosWallet ".concat(props.showMenu ? 'withmenu' : ''),
      onClick: handleToggleMenuOrNetworkConnect
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "connectWalletText"
    }, "Connect Wallet"), /*#__PURE__*/_react.default.createElement("div", {
      className: "connectWalletIcon"
    }, /*#__PURE__*/_react.default.createElement(WalletIcon, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: "TezosWalletMenu",
      style: {
        display: props.showMenu ? 'flex' : 'none'
      },
      onClick: stopPropagation
    }, networkMenuItems));
  }

  var idimg = null;
  var idimgStyle = null;

  if (!props.tezIDProfile && props.address != null) {
    idimg = new Image();
    idimg.src = (0, _identityImg.create)(props.address);
  }

  if (props.tezIDProfile && props !== null && props !== void 0 && (_props$tezIDProfile = props.tezIDProfile) !== null && _props$tezIDProfile !== void 0 && _props$tezIDProfile.avatar) {
    var _props$tezIDProfile2;

    idimgStyle = {
      backgroundImage: "url(".concat(getIpfsLink(props === null || props === void 0 ? void 0 : (_props$tezIDProfile2 = props.tezIDProfile) === null || _props$tezIDProfile2 === void 0 ? void 0 : _props$tezIDProfile2.avatar), ")")
    };
  }

  var walletName = props === null || props === void 0 ? void 0 : props.address;
  if (props.tezIDProfile && props !== null && props !== void 0 && (_props$tezIDProfile3 = props.tezIDProfile) !== null && _props$tezIDProfile3 !== void 0 && _props$tezIDProfile3.name) walletName = props === null || props === void 0 ? void 0 : (_props$tezIDProfile4 = props.tezIDProfile) === null || _props$tezIDProfile4 === void 0 ? void 0 : _props$tezIDProfile4.name;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "TezosWallet ".concat(props.showMenu ? 'withmenu' : ''),
    onClick: props.onToggleMenu
  }, !props.hideBalance && /*#__PURE__*/_react.default.createElement("div", {
    className: "balance"
  }, formatBalance(props.balance || 0), " \uA729"), !props.hideSpacer && /*#__PURE__*/_react.default.createElement("div", {
    className: "spacer"
  }), !props.hideIdImage && (idimg != null || idimgStyle != null) && /*#__PURE__*/_react.default.createElement("div", {
    className: "identityImage",
    style: idimgStyle
  }, idimg != null && /*#__PURE__*/_react.default.createElement("img", {
    alt: "identity",
    src: idimg.src
  })), !props.hideAddress && /*#__PURE__*/_react.default.createElement("div", {
    className: "address"
  }, truncateAddress(walletName)), /*#__PURE__*/_react.default.createElement("div", {
    className: "TezosWalletMenu",
    style: {
      display: props.showMenu ? 'flex' : 'none'
    },
    onClick: stopPropagation
  }, props.children));
};

exports.TezosWallet = TezosWallet;