"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cm_maze_1 = require("cm-maze");
var cm_dungeon_1 = require("cm-dungeon");
var Initializer = /** @class */ (function () {
    function Initializer() {
    }
    Initializer.Initialize = function (canvasId) {
        var mazeBuilder = new cm_maze_1.MazeBuilder();
        var mazeRenderer = new cm_maze_1.MazeRenderer(canvasId, mazeBuilder.buildMaze());
        mazeRenderer.render2D();
    };
    Initializer.CreateHero = function () {
        var character = new cm_dungeon_1.Character();
    };
    return Initializer;
}());
exports.Initializer = Initializer;
//# sourceMappingURL=Initializer.js.map