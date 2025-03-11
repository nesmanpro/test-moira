import { enjoyItems, learnItems, playItems } from "./src/mock/cardItems.js";


const playContainer = document.querySelector('.play-cards-container');
const learnContainer = document.querySelector('.learn-cards-container');
const enjoyContainer = document.querySelector('.enjoy-cards-container');

const cardLayout = (card) => {

    const cardWrapper = document.createElement("a");
    cardWrapper.classList.add("card-wrapper");
    cardWrapper.href = "#";

    // Contenedor interno
    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    // Imagen principal
    const cardImage = document.createElement("img");
    cardImage.classList.add("card-image");
    cardImage.src = card.image;
    cardImage.alt = card.title;

    // Sección de texto
    const cardText = document.createElement("div");
    cardText.classList.add("card-text");

    // Icono de la tarjeta
    const cardIcon = document.createElement("img");
    cardIcon.classList.add("card-icon");
    cardIcon.src = card.image;
    cardIcon.alt = card.title;

    // Contenedor de información
    const cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");

    // Título
    const title = document.createElement("h3");
    title.textContent = card.title;

    // raiting
    const cardRating = document.createElement("div");
    const starWrapper = document.createElement("div");
    cardRating.classList.add("card-rating");

    for (let i = 0; i < card.rating; i++) {
        const star = document.createElement("span");
        star.textContent = "★";
        starWrapper.appendChild(star);
    }
    cardRating.appendChild(starWrapper);

    // Botón
    const button = document.createElement("button");
    button.textContent = "Get";

    // Descripción
    const cardDescription = document.createElement("p");
    cardDescription.classList.add("card-description");
    cardDescription.textContent = card.description;



    // info block
    cardInfo.appendChild(title);

    if (card.description && card.rating) {

        // raiting
        cardRating.appendChild(button);
        cardInfo.appendChild(cardRating);

        // description
        cardInfo.appendChild(cardDescription);
        // icon
        cardText.appendChild(cardIcon);
    }

    // text 
    cardText.appendChild(cardInfo);

    // card inner
    cardInner.appendChild(cardImage);
    cardInner.appendChild(cardText);
    cardWrapper.appendChild(cardInner);

    return cardWrapper;
};


const renderCards = (containr, items) => {
    items.forEach((card) => {
        containr.appendChild(cardLayout(card));
    });
};

renderCards(playContainer, playItems);
renderCards(learnContainer, learnItems);
renderCards(enjoyContainer, enjoyItems);


const openMenu = document.querySelector('.btn-open-menu');
const closeMenu = document.querySelector('.close-menu-btn');
const menu = document.querySelector('.navbar-wrapper');

openMenu.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.remove('close');
});

closeMenu.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.add('close');
});
