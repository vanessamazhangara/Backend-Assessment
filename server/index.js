const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const compliment = ["A faithful friend is a smart defense",
"A good friendship is often more important that passionate romance",
"A fresh start will put you on your way",
"Adventure can be real happniess",
"Allow compassion to giude your decisions",
];

let randomIdx = Math.floor(Math.random() * compliment.length);
let randomCompliment = compliment[randomIdx];

res.status(200).send(randomCompliment);
});


const messagesArr = [

]
app.post("/api/inspiration", (req,res) => {
  console.log(req.body)

  messagesArr.push(req.body);
  console.log(messagesArr);
  const inspiration = ["The best preparation for tomorrow is doing your best today",
"Everything that is created begins in the mind",
"Think whatever makes you truly happy to think ",
"The body feeds on man's words. Where those words are life-giving they are health-producing. ",
"You act out who you think you are",
];

let randomIndex = Math.floor(Math.random() * inspiration.length);
let randomInspiration = inspiration[randomIndex];


res.status(200).send(randomInspiration);
});

app.get("/api/emojiimage", (req, res) => {
  const compliment = ["Hey there, looking good!",
"I'd love to hear from you!",
"Smile. You're amazing.",
"It's great to see you. Write me a message below.",
"Welcome back!"
];

let randomIdx = Math.floor(Math.random() * compliment.length);
let randomCompliment = compliment[randomIdx];

res.status(200).send(randomCompliment);
});

app.get("/api/jokes", (req, res) => {
  const compliment = ["What did one ocean say to the other ocean? Nothing, it just waved.",
"Why do ducks have feathers? To cover their butt quacks?",
"What does a nosey pepper do? It gets jalapeno business.",
"Why should you never trust stairs? They're always up to something."
];

let randomIdx = Math.floor(Math.random() * compliment.length);
let randomCompliment = compliment[randomIdx];

res.status(200).send(randomCompliment);
});

app.listen(4000, () => console.log("Server running on 4000"));
