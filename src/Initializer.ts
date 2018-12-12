import {MazeBuilder, MazeRenderer} from 'cm-maze';
export class Initializer {
    constructor(canvasId: string) {
        const mazeBuilder = new MazeBuilder();
        const mazeRenderer = new MazeRenderer(canvasId, mazeBuilder.buildMaze());
    }
}