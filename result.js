const fruitData = {

  Banana: {
    desc: "Bananas provide natural sugars and potassium, which help restore energy.",
    image: "Banana.png",
    color: "#F6D410"
  },

  Apple: {
    desc: "Apples are balanced and refreshing.",
    image: "Apple.png",
    color: "#FF6B5E"
  },

  Orange: {
    desc: "Oranges are refreshing and rich in vitamin C.",
    image: "Orange.png",
    color: "#FF8A1E"
  },

  Watermelon: {
    desc: "Watermelon is hydrating and refreshing.",
    image: "Watermelon.png",
    color: "#58D0AC"
  },

  Grape: {
    desc: "Grapes are sweet and comforting.",
    image: "Grape.png",
    color: "#7B61FF"
  },

  Lemon: {
    desc: "Lemon feels bright and energizing.",
    image: "Lemon.png",
    color: "#D6FF25"
  },

  Kiwi: {
    desc: "Kiwi is fresh and rich in vitamin C.",
    image: "Kiwi.png",
    color: "#8BC34A"
  },

  Papaya: {
    desc: "Papaya is soft and easy on the stomach.",
    image: "Papaya.png",
    color: "#FFB347"
  },

  Strawberry: {
    desc: "Strawberries are bright and sweet.",
    image: "Strawberry.png",
    color: "#FF4F7B"
  },

  Blueberry: {
    desc: "Blueberries are rich and refreshing.",
    image: "Blueberry.png",
    color: "#5450EB"
  },

  Mango: {
    desc: "Mangoes are juicy and energizing.",
    image: "Mango.png",
    color: "#FFC933"
  }

};

const state =
  JSON.parse(localStorage.getItem("fruitSwitchState")) || {};

const scores = {
  Banana:0,
  Apple:0,
  Orange:0,
  Watermelon:0,
  Grape:0,
  Lemon:0,
  Kiwi:0,
  Papaya:0,
  Strawberry:0,
  Blueberry:0,
  Mango:0
};

const selected = [];

function add(condition, fruit, point = 1){

  if(condition){
    scores[fruit] += point;
  }

}

function remember(condition, label){

  if(condition){
    selected.push(label);
  }

}

remember(state.tired, "tired");
remember(state.lowEnergy, "low energy");
remember(state.sleepy, "sleepy");
remember(state.needRecovery, "need recovery");
remember(state.anxious, "anxious");
remember(state.wantFreshness, "want freshness");
remember(state.needImmunity, "need immunity");
remember(state.needSomethingLight, "need something light");
remember(state.dehydrated, "dehydrated");
remember(state.wantSomethingSweet, "want something sweet");

add(state.tired, "Banana", 2);
add(state.lowEnergy, "Banana", 2);
add(state.needRecovery, "Banana", 2);

add(state.needImmunity, "Orange", 2);

add(state.dehydrated, "Watermelon", 3);
add(state.hotDay, "Watermelon", 2);

add(state.wantSomethingSweet, "Grape", 2);
add(state.moody, "Grape", 2);

add(state.needFocus, "Apple", 2);

add(state.sleepy, "Lemon", 2);
add(state.mentallyFoggy, "Lemon", 2);

add(state.wantFreshness, "Kiwi", 2);
add(state.needImmunity, "Kiwi", 2);

add(state.needSomethingLight, "Papaya", 2);
add(state.sensitiveStomach, "Papaya", 2);

add(state.wantFreshness, "Strawberry", 2);

add(state.needFocus, "Blueberry", 2);

add(state.needComfort, "Mango", 2);
add(state.lowEnergy, "Mango", 1);

let resultName = "Banana";
let highestScore = -1;

for(const fruit in scores){

  if(scores[fruit] > highestScore){

    highestScore = scores[fruit];
    resultName = fruit;

  }

}

const result = fruitData[resultName];

document.getElementById("fruitName").textContent =
  resultName;

document.getElementById("fruitDesc").textContent =
  result.desc;

document.getElementById("fruitImage").src =
  result.image;

document.getElementById("fruitImage").alt =
  resultName;

document.getElementById("selectedList").textContent =
  selected.length > 0
  ? selected.join(", ")
  : "No condition selected";

document.body.style.backgroundColor =
  result.color;
