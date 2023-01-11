
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

  addScientist: function (
    name: string,
    age: number,
    henchmen: number,
    description: string
  ): void {
    const x: Scientist = {
      name: name,
      age: age,
      henchmen: henchmen,
      description: description,
    };
    this.scientists.push(x);
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



// Laddar de två scientists vi har i arrayen än så länge
scientistDB.loadScientist(scientistDB.scientists);

const nameInput = document.querySelector('.name-input') as HTMLInputElement;
const addBtn = document.querySelector('.addButton') as HTMLButtonElement;



addBtn?.addEventListener('click', function (e) {
  e.preventDefault();

  

})