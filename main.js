// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

function setLoadTime() {
  const timeEl = document.getElementById("load-time");
  timeEl.innerText = new Date().toLocaleTimeString();
}

setLoadTime();

// opdracht 1a
function countItemsToSell() {
  let total = 0;
  for (const item of inventory) {
    total += item.originalStock - item.sold;
  }
  return total;
}

// opdracht 1b
itemsLeft = document.getElementById("items-to-sell-amount");
itemsLeft.innerText = countItemsToSell();

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
function sortByPrice() {
  inventory.sort((a, b) => a.price - b.price );
}

sortByPrice();
console.log(`sorted inventory:`, inventory);

// opdracht 3a
const reducer3a = (amount, item) => amount + item.price * (item.originalStock - item.sold) ;
const proceedsTarget  = inventory.reduce( reducer3a, 0 );
console.log(`proceedsTarget:`, proceedsTarget);

const proceedsTargetEl = document.createElement('p');
proceedsTargetEl.setAttribute('id', 'proceeds-target');
proceedsTargetEl.innerText = `Doel opbrengst: ${proceedsTarget}`;
document.body.appendChild(proceedsTargetEl);

// opdracht 3b
const reducer3b = (amount, item) => amount + item.price * item.sold;
const proceedsCurrent = inventory.reduce( reducer3b, 0);
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

