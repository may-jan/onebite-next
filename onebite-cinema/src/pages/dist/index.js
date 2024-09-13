"use strict";
exports.__esModule = true;
var searchable_layout_1 = require("@/components/searchable-layout");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null)));
}
exports["default"] = Home;
Home.getLayout = function (page) {
    return React.createElement(searchable_layout_1["default"], null, page);
};
