import { Component } from "@angular/core";

@Component({
    selector: 'app-learning',
    templateUrl: './learning.component.html',
    styles: [`
        .horde {
            color: white;
        }
        .alliance {
            color: yellow;
        }
    `]
})
export class LearningComponent {
    characterName: string = 'Juda';
    faction: string = 'Horde';

    constructor () {
        this.faction = Math.random() > 0.5 ? 'Horde' : 'Alliance';
    }

    getFaction() {
        return this.faction
    }

    getColor () {
        return this.faction === 'Horde' ? 'red' : 'blue';
    }
}