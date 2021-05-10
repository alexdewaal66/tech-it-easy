import { setLoadTime, createButtonGroup, appendRadioLikeButton } from './utils.js';

import { inventory } from './inventory.js';


setLoadTime(); // just there to see if browser responds

// opdracht 1a
function countItemsToSell() {
    let total = 0;
    for (const item of inventory) {
        total += item.originalStock - item.sold;
    }
    return total;
}

// opdracht 1b
const itemsLeft = document.getElementById("items-to-sell-amount");
itemsLeft.innerText = countItemsToSell().toString();

// opdracht 2a
const tvTypes = inventory.map((item) => item.type);
console.log(`tvTypes:`, tvTypes);

// opdracht 2b
const tvsSoldOut = inventory.filter((item) => item.sold === item.originalStock);
console.log(`tvsSoldOut:`, tvsSoldOut);

// opdracht 2c
const ambiLightModels = inventory.filter((item) => item.options.ambiLight);
console.log(`ambiLightModels:`, ambiLightModels);

// opdracht 2d
function sortByPrice(list) {
    list.sort((a, b) => a.price - b.price);
}

sortByPrice(inventory);
console.log(`sorted inventory:`, inventory);

// opdracht 3a
const reducer3a = (amount, item) => amount + item.price * (item.originalStock - item.sold);
const proceedsTarget = inventory.reduce(reducer3a, 0);
console.log(`proceedsTarget:`, proceedsTarget);

const proceedsTargetEl = document.createElement('p');
proceedsTargetEl.setAttribute('id', 'proceeds-target');
proceedsTargetEl.innerText = `Doel opbrengst: ${proceedsTarget}`;
document.body.appendChild(proceedsTargetEl);

// opdracht 3b
const reducer3b = (amount, item) => amount + item.price * item.sold;
const proceedsCurrent = inventory.reduce(reducer3b, 0);
console.log(`proceedsCurrent:`, proceedsCurrent);

const proceedsCurrentEl = document.createElement('p');
proceedsCurrentEl.setAttribute('id', 'proceeds-current');
proceedsCurrentEl.innerText = `Huidige opbrengst: ${proceedsCurrent}`;
document.body.appendChild(proceedsCurrentEl);

// opdracht 4
const tvType1 = document.createElement('p');
tvType1.innerText = inventory[0].type;
const tvType2 = document.createElement('p');
tvType2.innerText = inventory[1].type;

document.body.appendChild(tvType1);
document.body.appendChild(tvType2);

// opdracht 5a
function summarizeTv(tv) {
    return tv.brand + ' ' + tv.type + ' - ' + tv.name;
}

console.log(`summarizeTv(inventory[0]):`, summarizeTv(inventory[0]));
console.log(`summarizeTv(inventory[1]):`, summarizeTv(inventory[1]));

// opdracht 5b
function formatPrice(price) {
    return '€' + price.toFixed(0) + ',-';
}

console.log(`formatPrice(inventory[0].price):`, formatPrice(inventory[0].price));

// opdracht 5c
function formatSize(sizeInch) {
    const sizeCm = (2.54 * sizeInch).toFixed(0);
    return `${sizeInch} inch (${sizeCm} cm)`;
}

function formatTvSizes(tv) {
    return tv.availableSizes
        .map((size) => formatSize(size))
        .join(' | ');
}

console.log(`formatTvSizes(inventory[1]):`, formatTvSizes(inventory[1]));
console.log(`formatTvSizes(inventory[5]):`, formatTvSizes(inventory[5]));

// opdracht 5d
const tv = inventory[5];
const tvEl = document.createElement('div');

const tvSummaryEl = document.createElement('p');
const tvPriceEl = document.createElement('p');
const tvSizesEl = document.createElement('p');

tvSummaryEl.innerText = summarizeTv(tv);
tvPriceEl.innerText = formatPrice(tv.price);
tvSizesEl.innerText = formatTvSizes(tv);

tvEl.appendChild(tvSummaryEl);
tvEl.appendChild(tvPriceEl);
tvEl.appendChild(tvSizesEl);

document.body.appendChild(tvEl);

// opdracht 5e
function appendline(text, node) {
    const el = document.createElement('p');
    el.setAttribute('class', 'line')
    el.innerText = text;
    node.appendChild(el);
}

function displayTv(tv, node) {
    const tvEl = document.createElement('div');
    tvEl.setAttribute('class', 'tv'); //  + inventory.indexOf(tv)

    appendline(summarizeTv(tv), tvEl);
    appendline(formatPrice(tv.price), tvEl);
    appendline(formatTvSizes(tv), tvEl);

    node.appendChild(tvEl);
}

const tvContainer = document.createElement('div');
tvContainer.setAttribute('class', 'items-container')
document.body.appendChild(tvContainer);

function displayAllTvs(tvs, node) {
    node.innerHTML = ''; // in case of re-display
    for (const tv of tvs) {
        displayTv(tv, node);
    }
}

displayAllTvs(inventory, tvContainer);

// Bonusopdracht
// Sorteer op
//      prijs : inventory
//      AmbiLight TV's : ambiLightModels
//      Uitverkochte exemplaren :tvsSoldOut


const buttonContainer = createButtonGroup('tv-selection');
document.body.insertBefore(buttonContainer, tvContainer);


appendRadioLikeButton('Sorteer op prijs', priceHandler, buttonContainer);
appendRadioLikeButton('AmbiLight TV\'s', ambilightHandler, buttonContainer);
appendRadioLikeButton('Uitverkocht', soldOutHandler, buttonContainer);

function priceHandler() {
    sortByPrice(inventory);
    console.log('inventory:', inventory);
    displayAllTvs(inventory, tvContainer);
}

function ambilightHandler() {
    console.log('ambiLightModels:', ambiLightModels);
    displayAllTvs(ambiLightModels, tvContainer);
}

function soldOutHandler() {
    console.log('tvsSoldOut:', tvsSoldOut);
    displayAllTvs(tvsSoldOut, tvContainer);
}
