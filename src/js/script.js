// This line of code will make sure the page is fully loaded
window.onload = function () {
  // Write the logic in this function

  // 1. Get the excuse element
  const excuse = document.getElementById("excuse");

  // 2. Generate a random excuse
  const excuses1 = [
    "Batman",
    "Deadpool",
    "Arrow",
    "Spiderman",
    "Wolverine",
    "Catwoman",
    "Homelander",
    "Starlight",
  ];
  const excuses2 = [
    "punched",
    "helped",
    "drove",
    "borrowed",
    "stole",
    "hid",
    "destroyed",
    "moved",
  ];
  const excuses3 = ["my", "the", "our", "their", "your", "Ragil's", "Elon Musk's"];
  const excuses4 = [
    "homework",
    "car",
    "laptop",
    "phone",
    "keys",
    "wallet",
    "document",
    "presentation",
  ];

  const indexPart1 = Math.floor(Math.random() * excuses1.length);
  const indexPart2 = Math.floor(Math.random() * excuses2.length);
  const indexPart3 = Math.floor(Math.random() * excuses3.length);
  const indexPart4 = Math.floor(Math.random() * excuses4.length);

  const excuseText = `${excuses1[indexPart1]} ${excuses2[indexPart2]} ${excuses3[indexPart3]} ${excuses4[indexPart4]}`;

  // 3. Inseart the excuse into the excuse element
  excuse.innerHTML = excuseText;
};

