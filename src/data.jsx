import smokySouthImg from './assets/images/smokySouth.jpg';
import saucyImg from './assets/images/Saucy.jpg';
import doubleCheeseImg from './assets/images/doubleCheese.jpg';
import saucyChickenImg from './assets/images/saucyChicken.jpg';
import hotChickenImg from './assets/images/hotChicken.jpg';
import friesImg from './assets/images/fries.jpg';
import cornImg from './assets/images/corn.jpg';
import chocOreoShakeImg from './assets/images/chocOreoShake.jpg';


export const food = [
  {
    id: {
      $oid: "6622706b1702377477efec31"
      },
      name: "Smoky South Burger",
      foodType: "Burger",
      imageUrl: "smokysouthImg", 
      price: 10,
      description: "Our specialty- quarter ounce burger, cheddar cheese, and our house sauce on a toasted wheat bun.",
      featured: true
    },
    {
      id: {
        $oid: "6622706b1702377477efec30"
        },
        name: "Saucy Burger",
        foodType: "Burger",
        imageUrl: 'saucyImg', 
        price: 10,
        description: "Two smoked patties, cheddar cheese, peppers, tomatos, pickles, and our signature Smoky Sauce on a sesame seed bun. Comes with a side of fries.",
        featured: true
      },
      {
        id: {
          $oid: "662270761702377477efec32"
        },
        name: "Double Cheesebuger",
        foodType: "Burger",
        imageUrl:'doubleCheeseImg', 
        price: 8,
        description: "Classic double patty with cheddar cheese, peppers, mushrooms, mayo, and mustard on a sesame seed bun. Comes with a side of fries."
      },
      {
        id: {
          $oid: "662270801702377477efec34"
        },
        name: "Saucy Chicken Burger",
        foodType: "Burger",
        imageUrl: 'saucyChicken.jpg', 
        price: 9,
        description: "Fried chicken patty topped with lettuce and Smoky Sauce on a bed of pickles. Comes with a side of fries."
      },
      {
        id: {
          $oid: "6622708a1702377477efec36"
        },
        name: "Hot Chicken Burger",
        foodType: "Burger",
        imageUrl: 'hotChicken.jpg', 
        price: 9,
        description: "Fried chicken patty tossed in a special firey seasoning. Topped with coleslaw and pickles. Comes with a side of fries.",
        featured: true
      },
      {
        id: {
          $oid: "662270c91702377477efec38"
        },
        name: "Seasoned Fries",
        foodType: "Side",
        imageUrl: 'fries.jpg', 
        price: 3,
        description: "Fresh fries tossed in Smoky South seasonings."
      },
      {
        id: {
          $oid: "6622718d1702377477efec3b"
        },
        name: "Steamed Corn",
        foodType: "Side",
        imageUrl: 'corn.jpg', 
        price: 2,
        description: "Sweet kernal corn steamed just right and tossed in seasonings."
      },
      {
        id: {
          $oid: "662271a31702377477efec3d"
        },
        name: "Fried Pickles",
        foodType: "Side",
        price: 3,
        description: "Fresh pickles fried and tossed in Smoky South seasonings."
      },
      {
        id: {
          $oid: "662271b11702377477efec3f"
        },
        name: "Fountain Soda",
        foodType: "Drink",
        price: 2,
        description: "Sodas and other fountain drinks"
      },
      {
        id: {
          $oid: "662271bd1702377477efec41"
        },
        name: "House Lemonade",
        foodType: "Drink",
        price: 3,
        description: "Lemonade made fresh daily"
      },
      {
        id: {
          $oid: "662271cd1702377477efec43"
        },
        name: "Sweet Tea",
        foodType: "Drink",
        price: 2,
        description: "Taste a traditional family recipe! Made fresh daily."
      },
      {
        id: {
          $oid: "662271d61702377477efec45"
        },
        name: "Chocolate Oreo Milkshake",
        foodType: "Dessert",
        imageUrl: 'chocOreoShake.jpg', 
        price: 6,
        description: "Thick sweet treats to cap a great meal!"
      },
      {
        id: {
          $oid: "662271db1702377477efec47"
        },
        name: "Peach Cobbler",
        foodType: "Dessert",
        price: 3,
        description: "Fresh peaches in a golden crust."
      }
]