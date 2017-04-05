import { Component } from '@angular/core';

@Component({
  selector: 'animal-chooser',
  templateUrl: 'templates/animal-chooser.html'
})
export class AnimalChooserComponent  { 

  chosenCategory = "";

  animals = {
    Dogs: [
      {name:"Fritz", img:"dog1.jpg"},
      {name:"Fido", img:"dog2.jpg"},
      {name:"Blixten", img:"dog3.jpg"},
      {name:"Fabian", img:"dog4.jpg"},
    ],
    Cats: [
      {name:"Gustav", img:"cat1.jpg"},
      {name:"Boris", img:"cat2.jpg"},
      {name:"Moxie", img:"cat3.jpg"}
    ],
    Bunnies: [
      {name:"Doris", img:"bunny1.jpg"},
      {name:"Snickers", img:"bunny2.jpg"}
    ]
  }

  animalCategories(){
    return Object.keys(this.animals);
  }

  chooseCategory(category: string){
    this.chosenCategory = category;
  }

}
