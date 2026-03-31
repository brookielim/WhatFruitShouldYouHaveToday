const raw = localStorage.getItem("fruitSwitchState");

const labels = {
  tired: "tired",
  lowEnergy: "low energy",
  sleepy: "sleepy",
  physicallyDrained: "physically drained",
  needRecovery: "need recovery",
  needFocus: "need focus",
  mentallyFoggy: "mentally foggy",
  stressed: "stressed",
  anxious: "anxious",
  moody: "moody",
  dehydrated: "dehydrated",
  bloated: "bloated",
  constipated: "constipated",
  sensitiveStomach: "sensitive stomach",
  needImmunity: "need immunity",
  skippedBreakfast: "skipped breakfast",
  workedOut: "worked out today",
  stayingUpLate: "staying up late",
  needSomethingLight: "need something light",
  wantSomethingSweet: "want something sweet",
  hotDay: "hot day",
  coldDay: "cold day",
  wantFreshness: "want freshness",
  needComfort: "need comfort",
  skinFeelsDull: "skin feels dull"
};

const fruits = {
  banana: {
    name: "Banana",
    image: "Banana.png",
    desc: "Bananas provide natural sugars and potassium, which help restore energy and support muscle function. They are a good choice when you feel tired, low in energy, or need recovery after physical activity."
  },
  blueberry: {
    name: "Blueberry",
    image: "Blueberry.png",
    desc: "Blueberries are rich in antioxidants and are known to support brain health, memory, and concentration. They are a strong recommendation when you need focus or feel mentally foggy."
  },
  orange: {
    name: "Orange",
    image: "Orange.png",
    desc: "Oranges are rich in vitamin C and help support immunity while also benefiting skin health."
  },
  kiwi: {
    name: "Kiwi",
    image: "Kiwi.png",
    desc: "Kiwis contain vitamin C and compounds associated with mood, sleep, and immune support. They are a good match when you feel stressed, anxious, or run down."
  },
  watermelon: {
    name: "Watermelon",
    image: "Watermelon.png",
    desc: "Watermelon is highly hydrating and refreshing, making it ideal for hot days, dehydration, or when you want something light and cooling."
  },
  apple: {
    name: "Apple",
    image: "Apple.png",
    desc: "Apples are rich in fiber and provide a refreshing, balanced option that supports digestion and overall wellness."
  },
  papaya: {
    name: "Papaya",
    image: "Papaya.png",
    desc: "Papaya contains digestive enzymes that support gut health and may help relieve bloating or digestive discomfort."
  },
  strawberry: {
    name: "Strawberry",
    image: "Strawberry.png",
    desc: "Strawberries are rich in antioxidants and vitamin C, making them a bright, sweet option that can support skin health."
  },
  mango: {
    name: "Mango",
    image: "Mango.png",
    desc: "Mangoes are naturally sweet and rich in vitamins, making them a comforting fruit for recovery and low energy."
  },
  pomegranate: {
    name: "Pomegranate",
    image: "Pomegranate.png",
    desc: "Pomegranates are rich in antioxidants and may support circulation, recovery, and overall wellness."
  }
};

const scores = {
  banana: 0,
  blueberry: 0,
  orange: 0,
  kiwi: 0,
  watermelon: 0,
  apple: 0,
  papaya: 0,
  strawberry: 0,
  mango: 0,
  pomegranate: 0
};

let state = {};
if (raw) {
  state = JSON.parse(raw);
}

function addScore(fruit, amount) {
  scores[fruit] += amount;
}

if (state.tired) addScore("banana", 3);
if (state.lowEnergy) { addScore("banana", 3); addScore("mango", 1); }
if (state.sleepy) { addScore("kiwi", 2); addScore("blueberry", 1); }
if (state.physicallyDrained) { addScore("pomegranate", 3); addScore("banana", 1); }
if (state.needRecovery) { addScore("banana", 2); addScore("mango", 2); addScore("pomegranate", 1); }
if (state.needFocus) addScore("blueberry", 3);
if (state.mentallyFoggy >= 1) addScore("blueberry", state.mentallyFoggy * 2);
if (state.stressed) addScore("kiwi", 3);
if (state.anxious) addScore("kiwi", 3);
if (state.moody) { addScore("strawberry", 2); addScore("mango", 1); }
if (state.dehydrated) addScore("watermelon", 4);
if (state.bloated) addScore("papaya", 3);
if (state.constipated) addScore("papaya", 3);
if (state.sensitiveStomach) addScore("papaya", 4);
if (state.needImmunity) { addScore("orange", 3); addScore("kiwi", 2); }
if (state.skippedBreakfast) addScore("banana", 2);
if (state.workedOut) { addScore("banana", 2); addScore("pomegranate", 1); }
if (state.stayingUpLate) { addScore("blueberry", 2); addScore("kiwi", 1); }
if (state.needSomethingLight) { addScore("watermelon", 2); addScore("apple", 2); }
if (state.wantSomethingSweet) { addScore("strawberry", 2); addScore("mango", 2); }
if (state.hotDay) addScore("watermelon", 3);
if (state.coldDay) { addScore("orange", 2); addScore("apple", 1); }
if (state.wantFreshness) { addScore("apple", 2); addScore("watermelon", 1); }
if (state.needComfort) { addScore("apple", 2); addScore("mango", 1); }
if (state.skinFeelsDull >= 1) {
  addScore("orange", state.skinFeelsDull * 2);
  addScore("strawberry", state.skinFeelsDull);
}

let bestFruitKey = "apple";
let highestScore = -1;

for (const fruit in scores) {
  if (scores[fruit] > highestScore) {
    highestScore = scores[fruit];
    bestFruitKey = fruit;
  }
}

const bestFruit = fruits[bestFruitKey];

document.getElementById("fruitName").textContent = bestFruit.name;
document.getElementById("fruitDesc").textContent = bestFruit.desc;
document.getElementById("fruitImage").src = bestFruit.image;
document.getElementById("fruitImage").alt = bestFruit.name;

const selected = [];
for (const key in state) {
  if (typeof state[key] === "boolean" && state[key]) {
    selected.push(labels[key]);
  }
  if (typeof state[key] === "number" && state[key] > 0) {
    selected.push(`${labels[key]} level ${state[key]}`);
  }
}

document.getElementById("selectedList").textContent =
  selected.length > 0 ? selected.join(", ") : "No specific condition selected.";