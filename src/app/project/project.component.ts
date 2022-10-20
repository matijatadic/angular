import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  // template: `
  // <app-learning></app-learning>
  // <app-learning></app-learning>`,
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  allowNewCharacter = false;
  characterCreationStatus = 'No character was created!';
  characterName = 'Unnamed character';
  characterCreated = false;
  characters = ['Raskoth', 'Mutombu'];


  constructor() { 
    setTimeout(() => {
      this.allowNewCharacter = true;
    },2000);
  }

  ngOnInit(): void {
  }


  onCreateCharacter () {
    this.characterCreated = true;
    this.characters.push(this.characterName);
    this.characterCreationStatus = 'Character was created! Name is '+this.characterName;
  }

  onUpdateCharacterName (event: Event) {
    this.characterName = (<HTMLInputElement>event.target).value;
  }
}
