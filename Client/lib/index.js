"use strict";

var _reactDom = _interopRequireDefault(require("react-dom"));

var _App = require("./App");

require("bootstrap/dist/css/bootstrap.min.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = document.getElementById("app");

_reactDom["default"].render( /*#__PURE__*/React.createElement(_App.App, null), app);