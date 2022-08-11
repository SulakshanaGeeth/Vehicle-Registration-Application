"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Container = _interopRequireDefault(require("react-bootstrap/Container"));

var _Nav = _interopRequireDefault(require("react-bootstrap/Nav"));

var _Navbar = _interopRequireDefault(require("react-bootstrap/Navbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function navBar() {
  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_Navbar["default"], {
    bg: "light",
    expand: "lg"
  }, /*#__PURE__*/_react["default"].createElement(_Container["default"], null, /*#__PURE__*/_react["default"].createElement(_Navbar["default"].Brand, {
    href: "/"
  }, "Vehicle Registration"), /*#__PURE__*/_react["default"].createElement(_Navbar["default"].Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), /*#__PURE__*/_react["default"].createElement(_Navbar["default"].Collapse, {
    id: "basic-navbar-nav"
  }, /*#__PURE__*/_react["default"].createElement(_Nav["default"], {
    className: "me-auto"
  }, /*#__PURE__*/_react["default"].createElement(_Nav["default"].Link, {
    href: "/list",
    style: {
      color: "black",
      fontSize: "20px"
    }
  }, "Registration List"))))));
}

var _default = navBar;
exports["default"] = _default;