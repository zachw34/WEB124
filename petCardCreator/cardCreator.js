// Constructor function for the animals we will list
function Pet(name, type, age, owner) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.owner = owner;
  
  // Create a Symbol for a unique ID key
  const idPetKey = Symbol('petId');
  
  // Methods "this" and "return"
  this.getDescription = function() {
    return `${this.name} is a ${this.type} and is ${this.age} years old`;
  };
  
  this.haveBirthday = function() {
    this.age += 1;
  };
  
  this.getOwnerName = function() {
    // Uses optional chaining to safely return the name or "none"
    return this.owner?.name ?? "none";
  };
  
  this.getID = function() {
    return idPetKey;
  };
}

// Create at least 3 pets (one has an owner, one doesn't) "new" operator
const pet1 = new Pet("Stanley", "cat", 6, { name: "Alice" });
const pet2 = new Pet("Rex", "dog", 3, { name: "Bob" });
const pet3 = new Pet("Sky", "falcon", 2); // No owner passed;

const pets = [pet1, pet2, pet3];

// In the console, display: name, type, age, owner name
console.log("--- Initial Pet Info ---");
pets.forEach(pet => {
  console.log("Name:", pet.name);
  console.log("Type:", pet.type);
  console.log("Age:", pet.age);
  console.log("Owner Name:", pet.getOwnerName());
  console.log("------------------------");
});

// Calling haveBirthday() on at least one pet and display updated info
console.log("--- After Birthday ---");
pet1.haveBirthday();
console.log(pet1.getDescription());
console.log("Updated Age:", pet1.age);
console.log("------------------------");

// Here display the current date and time using the Date object 
console.log("Current Date & Time:", new Date().toString());
