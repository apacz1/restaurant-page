const dishes = [
  {
    name: "Burger One",
    price: 12,
    ingredients: ["200g beef", "lettuce", "tomato", "onion", "hot sauce"],
  },
  {
    name: "Burger Two",
    price: 10,
    ingredients: ["200g beef", "tomato", "onion", "mild sauce"],
  },
  {
    name: "Burger Three",
    price: 14,
    ingredients: ["200g beef", "lettuce", "cheese", "onion", "hot sauce"],
  },
  {
    name: "Burger Four",
    price: 20,
    ingredients: [
      "2x 200g beef",
      "lettuce",
      "tomato",
      "cheese",
      "onion",
      "bbq sauce",
    ],
  },
  {
    name: "Spaghetti Bolognese",
    price: 16,
    ingredients: ["pasta", "fresh tomatoes", "oregano"],
  },
  {
    name: "Spaghetti Carbonara",
    price: 18,
    ingredients: ["pasta", "egg yolk", "bacon"],
  },
];

const drinks = [
  {
    name: "Coca-cola",
    price: 4,
    capacity: "0.4L",
  },
  {
    name: "Pepsi",
    price: 4,
    capacity: "0.4L",
  },
  {
    name: "Fanta",
    price: 4,
    capacity: "0.4L",
  },
  {
    name: "Sprite",
    price: 4,
    capacity: "0.4L",
  },
  {
    name: "Tea",
    price: 6,
    capacity: "0.3L",
  },
  {
    name: "Coffee",
    price: 7,
    capacity: "0.3L",
  },
];

export function menu() {
  //clearing content
  document.querySelector("#app").innerHTML = "";

  //creating/selecting elements
  const app = document.querySelector("#app");
  const h2Dishes = document.createElement("h2");
  const h2Drinks = document.createElement("h2");
  const dishDiv = document.createElement("div");
  const drinkDiv = document.createElement("div");
  const menuContainer = document.createElement("div");

  //adding properties to elements
  menuContainer.className = "menu-container";

  //loop to get dishes from array
  for (let i = 0; i < dishes.length; i++) {
    const dishContainer = document.createElement("div");
    const nameIngredients = document.createElement("div");
    const dishName = document.createElement("div");
    const dishIngredients = document.createElement("div");
    const dishPrice = document.createElement("div");

    dishContainer.className = "dish-container";
    nameIngredients.className = "name-ingredients";
    dishName.className = "dish-name";
    dishIngredients.className = "dish-ingredients";
    dishPrice.className = "dish-price";

    dishName.textContent = dishes[i].name;
    dishIngredients.textContent = dishes[i].ingredients.join(", ");
    dishPrice.textContent = `${dishes[i].price}$`;

    nameIngredients.appendChild(dishName);
    nameIngredients.appendChild(dishIngredients);
    dishContainer.appendChild(nameIngredients);
    dishContainer.appendChild(dishPrice);
    dishDiv.appendChild(dishContainer);
  }

  //looping to get drinks from array
  for (let j = 0; j < drinks.length; j++) {
    const drinkContainer = document.createElement("div");
    const drinkNameCapacity = document.createElement("div");
    const drinkPrice = document.createElement("div");

    drinkContainer.className = "drink-container";
    drinkNameCapacity.className = "name-capacity";
    drinkPrice.className = "drink-price";

    drinkNameCapacity.textContent = `${drinks[j].name} ${drinks[j].capacity}`;
    drinkPrice.textContent = `${drinks[j].price}$`;

    drinkContainer.appendChild(drinkNameCapacity);
    drinkContainer.appendChild(drinkPrice);
    drinkDiv.appendChild(drinkContainer);
  }

  //adding content to elements
  h2Dishes.textContent = "Dishes";
  h2Drinks.textContent = "Drinks";

  //appending elements
  menuContainer.appendChild(h2Dishes);
  menuContainer.appendChild(dishDiv);
  menuContainer.appendChild(h2Drinks);
  menuContainer.appendChild(drinkDiv);
  app.appendChild(menuContainer);
}
