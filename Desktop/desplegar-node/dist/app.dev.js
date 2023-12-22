"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var PORT = process.env.PORT || 3000;
app.use(_bodyParser["default"].urlencoded({
  "extends": true
}));
app.use(_bodyParser["default"].json());
app.listen(PORT, function () {
  console.log("Escuchando en el puerto ".concat(PORT));
});
app.get('/', function (req, res) {
  res.send("hola usuario");
});
app.post('/inicio', function (req, res) {
  var username = req.body.username;
  res.send({
    msg: "Bienvenido ".concat(username)
  });
});