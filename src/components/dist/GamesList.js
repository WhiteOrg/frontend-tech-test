"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.GamesList = void 0;
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var uuid_1 = require("uuid");
var StyledGamesList = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  width: 200px;\n  display: grid;\n  grid-template-columns: 2fr 2fr;\n  grid-template-rows: 3fr 3fr 3fr;\n  justify-items: stretch;\n\n  .game-pic {\n    /* justify-self: stretch; */\n    max-width: 100%;\n  }\n"], ["\n  position: relative;\n  width: 200px;\n  display: grid;\n  grid-template-columns: 2fr 2fr;\n  grid-template-rows: 3fr 3fr 3fr;\n  justify-items: stretch;\n\n  .game-pic {\n    /* justify-self: stretch; */\n    max-width: 100%;\n  }\n"])));
exports.GamesList = function (_a) {
    var games = _a.games;
    var renderGames = function () {
        return games === null || games === void 0 ? void 0 : games.map(function (game) { return react_1["default"].createElement("img", { className: "game-pic", src: game.src, alt: game.title, key: uuid_1.v4() }); });
    };
    return (react_1["default"].createElement(StyledGamesList, null, renderGames()));
};
var templateObject_1;
