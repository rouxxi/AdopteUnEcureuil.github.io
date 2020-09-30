const cards = document.querySelector(".cards");

const animalsToAdopt = [ { name: "Cracotte", info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, libero fugiat.  ex!", picture: "cucu-2" },
 { name: "Twiggy", info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, libero fugiat. Enim esse animi deserunt p" , picture: "cucu-3" }, 
 { name: "Tic", info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, libero fugiat. Enim esse animi deserunt porr" ,  picture: "cucu-4" }, 
 { name: "Tac",info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, libero fugiat. Enim esse animi deserunt porro", picture: "cucu-5" }, 
 { name: "Marcellus", info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, libero fugiat. Enim esse animi deserun", picture: "cucu-6" }, 
 { name: "Uguette", info:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, libero fugiat. Enim esse animi deserunt p", picture: "cucu-7" } ];



function createCard(title, info , imageUrl) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `../img/profil-${imageUrl}.jpg`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);

  // Step1: Create the cardBody div, add the class card-body and add it to the card
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  // Step2: Create the cardTitle h2, add the class card-title,
  // set the text inside the tag to the "title" parameter of this function
  // and add it to the cardBody
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = `${title}`;
  cardBody.appendChild(cardTitle);

  //creation des info d'écureuils
  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");
  cardInfo.innerHTML = `${info}`;
  cardBody.appendChild(cardInfo)

  // Step3: Create the cardButton button, add the class card-button,
  // set the text inside the tag to be "Adopt Now"
  // and add it to the cardBody
  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.innerHTML = "Adopt now";
  cardBody.appendChild(cardButton);


}

/* Step 4: Create a for loop, for each element of the array, 
 call the function createCard with the corresponding parameter */

for (let i in animalsToAdopt) {
  console.log(`${animalsToAdopt[i].name} ,${animalsToAdopt[i].info}, ${animalsToAdopt[i].picture}`);
  createCard(`${animalsToAdopt[i].name}`,`${animalsToAdopt[i].info}` , `${animalsToAdopt[i].picture}`);
}
