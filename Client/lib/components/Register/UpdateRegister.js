"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactBootstrap = require("react-bootstrap");

var _index = require("../constant/index");

var _axios = _interopRequireDefault(require("axios"));

var _NavBar = _interopRequireDefault(require("./NavBar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UpdateRegistration = function UpdateRegistration(props) {
  var id = location.pathname.substring(8);
  console.log(id);

  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      plateNumber = _useState2[0],
      setplateNumber = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoaded = _useState4[0],
      setIsLoaded = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  (0, _react.useEffect)(function () {
    fetch("".concat(_index.BACKEND_BASE_URL, "/registration/get/").concat(id)).then(function (res) {
      return res.json();
    }).then(function (result) {
      setIsLoaded(true);
      setplateNumber(result.plateNumber);
    }, function (error) {
      setIsLoaded(true);
      setError(error);
    });
  }, []);

  var UpdateData = function UpdateData(e) {
    e.preventDefault();

    _axios["default"].put("".concat(_index.BACKEND_BASE_URL, "/registration/update/").concat(id), {
      plateNumber: plateNumber
    }).then(function () {
      alert("Registration Updated");
      window.location.replace("/list");
    })["catch"](function (err) {
      alert(err);
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_NavBar["default"], null), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      textAlign: "center",
      marginTop: "10px",
      marginBottom: "20px"
    }
  }, "Update Registration"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form, null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Group, {
    className: "mb-3",
    controlId: "Registration"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Label, {
    style: {
      marginRight: "10%"
    }
  }, "Registration Number"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form.Control, {
    type: "text",
    value: plateNumber,
    onChange: function onChange(e) {
      setplateNumber(e.target.value);
    },
    style: {
      width: "20%",
      marginLeft: "40%"
    }
  })), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
    onClick: UpdateData,
    variant: "primary",
    type: "submit"
  }, "Submit"))));
};

var _default = UpdateRegistration;
exports["default"] = _default;