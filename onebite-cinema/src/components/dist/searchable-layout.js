"use strict";
exports.__esModule = true;
var react_1 = require("react");
var searchable_layout_module_css_1 = require("./searchable-layout.module.css");
var router_1 = require("next/router");
function SearchalbeLayout(_a) {
    var children = _a.children;
    var router = router_1.useRouter();
    var _b = react_1.useState(''), search = _b[0], setSearch = _b[1];
    var q = router.query.q;
    react_1.useEffect(function () {
        setSearch(q || '');
    }, [q]);
    var onChangeSearch = function (e) {
        setSearch(e.target.value);
    };
    var onSubmit = function () {
        if (!search || q === search)
            return;
        router.push("/search?q=" + search);
    };
    var onKeyDown = function (e) {
        if (e.key === 'Enter') {
            onSubmit();
        }
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: searchable_layout_module_css_1["default"].searchbar_container },
            React.createElement("input", { value: search, onChange: onChangeSearch, onKeyDown: onKeyDown, placeholder: '\uAC80\uC0C9\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694 ... ' }),
            React.createElement("button", { onClick: onSubmit }, "\uAC80\uC0C9")),
        children));
}
exports["default"] = SearchalbeLayout;
