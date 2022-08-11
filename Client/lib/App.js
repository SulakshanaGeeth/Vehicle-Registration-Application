"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = App;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Register = _interopRequireDefault(require("./components/Register/Register"));

var _List = _interopRequireDefault(require("./components/Register/List"));

var _UpdateRegister = _interopRequireDefault(require("./components/Register/UpdateRegister"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function App() {
  return /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react["default"].createElement(_Register["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/list",
    element: /*#__PURE__*/_react["default"].createElement(_List["default"], null)
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/update/:id",
    element: /*#__PURE__*/_react["default"].createElement(_UpdateRegister["default"], null)
  })));
}