"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var book_item_module_css_1 = require("./book-item.module.css");
function BookItem(_a) {
    var id = _a.id, title = _a.title, subTitle = _a.subTitle, description = _a.description, author = _a.author, publisher = _a.publisher, coverImgUrl = _a.coverImgUrl;
    return (React.createElement(link_1["default"], { href: "/book/" + id, className: book_item_module_css_1["default"].container },
        React.createElement("img", { src: coverImgUrl }),
        React.createElement("div", null,
            React.createElement("div", { className: book_item_module_css_1["default"].title }, title),
            React.createElement("div", { className: book_item_module_css_1["default"].subTitle }, subTitle),
            React.createElement("br", null),
            React.createElement("div", { className: book_item_module_css_1["default"].author },
                author,
                " | ",
                publisher))));
}
exports["default"] = BookItem;
