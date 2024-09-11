"use strict";
exports.__esModule = true;
function handler(req, res) {
    var data = new Date();
    res.json({ time: data.toLocaleString() });
}
exports["default"] = handler;
