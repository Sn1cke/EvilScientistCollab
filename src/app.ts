type Scientist = {
  name: string;
  age: number | string;
  henchmen: number | string;
  description: string;
};

const madScientist: Scientist[] = [
  {
    name: "Marco",
    age: 22,
    henchmen: 2,
    description: "En riktig maskin vid namn Marco",
  },
  {
    name: "Polo",
    age: 50,
    henchmen: 50,
    description: "En riktig grävmaskin vid namn Polo",
  },
  {
    name: "Niklas",
    age: 40,
    henchmen: 1,
    description: "En Lärare vid namn Niklas",
  },
];

const addBtn = document.querySelector("#addButton") as HTMLButtonElement;
let divLocation = document.querySelector("#divlocation") as HTMLElement;
let high = document.querySelector("#descriptionlocation") as HTMLElement;

let printcard = function () {
  let length = madScientist.length;

  for (let i = 0; i < length; i++) {
    let div1 = document.createElement("div") as HTMLDivElement;
    div1.className = "card";
    div1.innerHTML = `${madScientist[i].name}`;
    divLocation.append(div1);
    div1.addEventListener("click", function (): void {
      high.innerHTML = "";
      const name = this.innerHTML;
      // console.log(name);
      let match = madScientist.find((o) => o.name === name);
      // console.log(match);

      let pName = document.createElement("p") as HTMLParagraphElement;
      pName.className = "pName";
      pName.innerHTML = `Name: ${match?.name}`;
      high.append(pName);
      let pAge = document.createElement("p") as HTMLParagraphElement;
      pAge.className = "pAge";
      pAge.innerHTML = `Age: ${match?.age}`;
      high.append(pAge);
      let pHenchmen = document.createElement("p") as HTMLParagraphElement;
      pHenchmen.className = "pHenchmen";
      pHenchmen.innerHTML = `Henchmen: ${match?.henchmen}`;
      high.append(pHenchmen);
      let pDescription = document.createElement("p") as HTMLParagraphElement;
      pDescription.className = "pDescription";
      pDescription.innerHTML = `Description: ${match?.description}`;
      high.append(pDescription);
    });
  }
};

addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let scientistName = document.querySelector("#name") as HTMLInputElement;
  let scientistAge = document.querySelector("#age") as HTMLInputElement;
  let scientistHenchmen = document.querySelector(
    "#henchmen"
  ) as HTMLInputElement;
  let scientistDescription = document.querySelector(
    "#description"
  ) as HTMLInputElement;

  let arr: Scientist = {
    name: scientistName.value,
    age: scientistAge.value,
    henchmen: scientistHenchmen.value,
    description: scientistDescription.value,
  };
  madScientist.push(arr);
  divLocation.innerHTML = "";
  printcard();
});

console.log(madScientist);
printcard();

// let cards = document.querySelector(".card") as HTMLDivElement;

// let showInfo = function () {
//   let length = madScientist.length
//   for ()
// }
