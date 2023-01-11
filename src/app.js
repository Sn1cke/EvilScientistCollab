/*
const arrScientists: scientists[] = [
    {
    name: true,
    age: 36,
    henchmen: 2,
    description: "Stark som fan",
    },
    {
    name: "Ollof",
    age: 14,
    henchmen: 2,
    description: "Number1234",
    },
];

const numberArr: number[] = [1, "x", 3, 4];
*/
var scientistDB = {
    scientists: [
        {
            name: "Victor Frankenstein",
            age: 37,
            henchmen: 2,
            description: "Likes to write poetry"
        },
        {
            name: "Alfred Nobel",
            age: 26,
            henchmen: 1,
            description: "Killed his brother in a factory accident"
        }
    ],
    addScientist: function (name, age, henchmen, description) {
        var x = {
            name: name,
            age: age,
            henchmen: henchmen,
            description: description
        };
        this.scientists.push(x);
    }
};
