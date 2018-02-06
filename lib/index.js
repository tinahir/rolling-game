'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _RollNumberModel = require('./shared/RollNumberModel');

var _RollNumberModel2 = _interopRequireDefault(_RollNumberModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(_express2.default.static("client/build"));
}

app.get("/api/rollnumbers", function (req, res) {
  var param = req.query.q;

  if (!param) {
    res.json({
      error: "Missing required parameter `q`"
    });
    return;
  }

  res.json(new _RollNumberModel2.default(3).toJson());
});

app.listen(app.get("port"), function () {
  console.log('Find the server at: http://localhost:' + app.get("port") + '/'); // eslint-disable-line no-console
});