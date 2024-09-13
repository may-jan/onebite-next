"use strict";
exports.__esModule = true;
var searchable_layout_1 = require("@/components/searchable-layout");
var router_1 = require("next/router");
function Page() {
    var router = router_1.useRouter();
    var q = router.query.q;
    return React.createElement("h1", null,
        "\uAC80\uC0C9 \uACB0\uACFC : ",
        q,
        " ");
}
exports["default"] = Page;
Page.getLayout = function (page) {
    return React.createElement(searchable_layout_1["default"], null, page);
};
