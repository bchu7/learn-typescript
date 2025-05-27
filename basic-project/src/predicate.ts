type Animal = Dog | Cat;

interface Dog {
    kind: "dog";
    bark: () => void;
}

interface Cat {
    kind: "cat";
    meow: () => void;
}

// predicate: animal is Cat
function isCat(animal: Animal): animal is Cat {
    return animal.kind === "cat";
}

// predicate: animal is Dog
function isDog(animal: Animal): animal is Dog {
    return animal.kind === "dog";
}

const cat: Animal = { kind: "cat", meow: () => console.log("Meow!") };
const dog: Animal = { kind: "dog", bark: () => console.log("Woof!") };

function createPet(): Animal {
    return true ? dog : cat;
}

const pet = createPet();

if (isCat(pet)) {
    pet.meow();  // ✅ TypeScript knows pet is a Cat here
} else {
    pet.bark();  // ✅ Here it's definitely a Dog
}

if (isDog(pet)) {
    pet.bark();
}
