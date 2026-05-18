import '../css/style.css';
import { Actor, Engine, Font, Label, Vector } from "excalibur";
import { ResourceLoader, Resources } from './resources.ts';
import { Pile } from './classes/pile.ts';
import Score from './classes/score.ts';

export class Game extends Engine {
    constructor() {
        super({
            width: 1024,
            height: 720,
        });
        this.start(ResourceLoader).then(() => this.startGame());
    }

    startGame() {
        const scoreLabel = new Score(this);
        this.add(scoreLabel);

        for (let i = 0; i < 10; i++) {
            this.add(new Pile(scoreLabel))
        }
    }



}

new Game();