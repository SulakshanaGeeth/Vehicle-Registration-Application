"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Table = _interopRequireDefault(require("react-bootstrap/Table"));

var _reactBootstrap = require("react-bootstrap");

var _NavBar = _interopRequireDefault(require("./NavBar"));

var _index = require("../constant/index");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function List() {
  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      error = _useState2[0],
      setError = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoaded = _useState4[0],
      setIsLoaded = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      items = _useState6[0],
      setItems = _useState6[1];

  (0, _react.useEffect)(function () {
    fetch("".concat(_index.BACKEND_BASE_URL, "/registration/getAll")).then(function (res) {
      return res.json();
    }).then(function (result) {
      setIsLoaded(true);
      setItems(result);
    }, function (error) {
      setIsLoaded(true);
      setError(error);
    });
  }, []);

  var RemeoveData = function RemeoveData(id) {
    _axios["default"]["delete"]("".concat(_index.BACKEND_BASE_URL, "/registration/delete/").concat(id)).then(function () {
      alert("registration Deleted");
      window.location.replace("/list");
    })["catch"](function (err) {
      alert(err);
    });
  };

  return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_NavBar["default"], null), /*#__PURE__*/_react["default"].createElement("h4", {
    style: {
      textAlign: "center",
      marginTop: "10px",
      marginBottom: "20px"
    }
  }, "Registration List"), /*#__PURE__*/_react["default"].createElement(_Table["default"], {
    striped: true,
    bordered: true,
    hover: true
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "ID"), /*#__PURE__*/_react["default"].createElement("th", null, "Registration Number"), /*#__PURE__*/_react["default"].createElement("th", null, "Type"), /*#__PURE__*/_react["default"].createElement("th", null, "Update"), /*#__PURE__*/_react["default"].createElement("th", null, "Delete"))), /*#__PURE__*/_react["default"].createElement("tbody", null, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
      key: item._id
    }, item._id), /*#__PURE__*/_react["default"].createElement("td", null, item.plateNumber), /*#__PURE__*/_react["default"].createElement("td", null, item.type), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
      onClick: function onClick() {
        return window.location.replace("/update/" + item._id);
      },
      variant: "warning",
      type: "submit"
    }, "Update")), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
      onClick: function onClick() {
        return RemeoveData(item._id);
      },
      variant: "danger",
      type: "submit"
    }, "Delete")));
  }))));
}

var _default = List;
exports["default"] = _default;