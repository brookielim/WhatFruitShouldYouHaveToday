const fruitData = {
  Banana: {
    desc: "Bananas provide natural sugars and potassium, which help restore energy and support muscle function. They are a good choice when you feel tired, low in energy, or need recovery after physical activity.",
    image: "Banana.png",
    color: "#F6D410"
  },

  Orange: {
    desc: "Oranges are refreshing and rich in vitamin C. They are a good choice when you need immunity, freshness, or something bright during the day.",
    image: "Orange.png",
    color: "#FF4B1E"
  },

  Watermelon: {
    desc: "Watermelon is light, hydrating, and refreshing. It is a good choice when you feel dehydrated, hot, or want something fresh.",
    image: "Watermelon.png",
    color: "#58D0AC"
  },

  Grape: {
    desc: "Grapes are sweet, easy to eat, and comforting. They are a good choice when you want something sweet, feel moody, or need a small comfort snack.",
    image: "Grape.png",
    color: "#6058BB"
  },

  Apple: {
    desc: "Apples are simple, balanced, and easy on the body. They are a good choice when you need focus, something light, or a stable everyday fruit.",
    image: "Apple.png",
    color: "#FEC5EE"
  },

  Lemon: {
    desc: "Lemon feels sharp, fresh, and energizing. It is a good choice when you feel mentally foggy, need freshness, or want to wake yourself up.",
    image: "Lemon.png",
    color: "#D6FF25"
  }
};

const state = JSON.parse(localStorage.getItem("fruitSwitchState")) || {};

const scores = {
  Banana: 0,
  Orange: 0,
  Watermelon: 0,
  Grape: 0,
  Apple: 0,
  Lemon: 0
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
remember(state.physicallyDrained, "physically drained");
remember(state.needRecovery, "need recovery");
remember(state.needFocus, "need focus");
remember(state.mentallyFoggy, "mentally foggy");
remember(state.stressed, "stressed");
remember(state.anxious, "anxious");
remember(state.moody, "moody");
remember(state.dehydrated, "dehydrated");
remember(state.bloated, "bloated");
remember(state.constipated, "constipated");
remember(state.sensitiveStomach, "sensitive stomach");
remember(state.needImmunity, "need immunity");
remember(state.skippedBreakfast, "skipped breakfast");
remember(state.workedOut, "worked out today");
remember(state.stayingUpLate, "staying up late");
remember(state.needSomethingLight, "need something light");
remember(state.wantSomethingSweet, "want something sweet");
remember(state.hotDay, "hot day");
remember(state.coldDay, "cold day");
remember(state.wantFreshness, "want freshness");
remember(state.needComfort, "need comfort");
remember(state.skinFeelsDull, "skin feels dull");

add(state.tired, "Banana", 2);
add(state.lowEnergy, "Banana", 2);
add(state.needRecovery, "Banana", 2);
add(state.workedOut, "Banana", 2);
add(state.skippedBreakfast, "Banana", 1);

add(state.needImmunity, "Orange", 2);
add(state.coldDay, "Orange", 1);
add(state.skinFeelsDull, "Orange", 2);

add(state.dehydrated, "Watermelon", 3);
add(state.hotDay, "Watermelon", 2);
add(state.wantFreshness, "Watermelon", 2);
add(state.needSomethingLight, "Watermelon", 1);

add(state.moody, "Grape", 2);
add(state.wantSomethingSweet, "Grape", 2);
add(state.needComfort, "Grape", 2);
add(state.anxious, "Grape", 1);

add(state.needFocus, "Apple", 2);
add(state.sensitiveStomach, "Apple", 2);
add(state.bloated, "Apple", 1);
add(state.constipated, "Apple", 1);
add(state.needSomethingLight, "Apple", 1);

add(state.mentallyFoggy > 0, "Lemon", 2);
add(state.stayingUpLate, "Lemon", 2);
add(state.sleepy, "Lemon", 1);
add(state.wantFreshness, "Lemon", 2);
add(state.stressed, "Lemon", 1);

let resultName = "Banana";
let highestScore = -1;

for(const fruit in scores){
  if(scores[fruit] > highestScore){
    highestScore = scores[fruit];
    resultName = fruit;
  }
}

const result = fruitData[resultName];

document.getElementById("fruitName").textContent = resultName;
document.getElementById("fruitDesc").textContent = result.desc;
document.getElementById("fruitImage").src = result.image;
document.getElementById("fruitImage").alt = resultName;

document.body.style.backgroundColor = result.color;

document.getElementById("selectedList").textContent =
  selected.length > 0 ? selected.join(", ") : "No condition selected";
