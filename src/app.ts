
type Scientist = {
  name: string;
  age: number;
  henchmen: number;
  description: string;
};

let scientistDB: {
  scientists: Scientist[];
  addScientist: (n: string, a: number, h: number, d: string) => void;
  loadScientist: (arr: Scientist[]) => void;
  clearScientists: () => void;
} = {
  scientists: [
    {
      name: "Victor Frankenstein",
      age: 37,
      henchmen: 2,
      description: "Likes to write poetry",
    },
    {
      name: "Alfred Nobel",
      age: 26,
      henchmen: 1,
      description: "Killed his brother in a factory accident",
    },
  ],

  clearScientists: function () {
    const clearCards = document.querySelectorAll('.scientist-card');
    clearCards.forEach(card => card.remove());
  },

  addScientist: function (
    name: string,
    age: number,
    henchmen: number,
    description: string
  ): void {

    const newScientist: Scientist = {
      name: name,
      age: age,
      henchmen: henchmen,
      description: description,
    };
    this.scientists.push(newScientist);
  },

  loadScientist: function (arr) {
    arr.forEach(sci => {

      const allScientists = document.querySelector('.All-Scientist') as HTMLElement;

      const scientistCard = document.createElement('section');
      scientistCard.className = "scientist-card"
      allScientists.append(scientistCard)

      const scientistName = document.createElement('h3');
      scientistName.textContent = sci.name;
      scientistCard.append(scientistName);
    });
  },
};

// ========== Lägger till en scientist och pushar in i array + uppdaterar listan
const addBtn = document.querySelector('.addButton') as HTMLButtonElement;

addBtn?.addEventListener('click', function (e) {
  e.preventDefault();

  const sciName = document.querySelector('.name-input') as HTMLInputElement;
  const sciAge = document.querySelector('.age-input') as HTMLInputElement;
  const sciHenchmen = document.querySelector('.henchmen-input') as HTMLInputElement;
  const sciDescription = document.querySelector('.inputfält4') as HTMLInputElement;

  if (sciName.value.length !== 0 && sciAge.value.length !== 0 && sciHenchmen.value.length !== 0 && sciDescription.value.length !== 0) {
    scientistDB.addScientist(sciName.value, parseFloat(sciAge.value), parseFloat(sciHenchmen.value), sciDescription.value)
    scientistDB.clearScientists();
    scientistDB.loadScientist(scientistDB.scientists);
    (document.querySelector('#scientist-form') as HTMLFormElement).reset();
  } else {
    alert(`Please fill in all fields about the scientist!`)
  }

})





// Laddar de två scientists vi har i arrayen än så länge
scientistDB.loadScientist(scientistDB.scientists);

