var person = {
    name: "Okram",
    age: 30,
    city: "Dallas"
}

//retriveing info from an object

console.log(person["name"]);
console.log(person.name);

//update data in objects

person["age"] += 1;
person.city = "Imphal";


//JS Objects can store any data types

var person = {
    name: "Bem",
    age: 29,
    kids: ["Arie"],
    son: {
        name: "Arie",
        age: 1
    }
}