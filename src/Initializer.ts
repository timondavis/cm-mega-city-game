import {MazeBuilder, MazeRenderer} from 'cm-maze';
import {Character, Ability} from 'cm-dungeon';
export class Initializer {

    private constructor() {}

    public static Initialize(canvasId: string) {
        const mazeBuilder = new MazeBuilder();
        const mazeRenderer = new MazeRenderer(canvasId, mazeBuilder.buildMaze());
        mazeRenderer.render2D();
    }

    private static CreateHero() {

    }
}