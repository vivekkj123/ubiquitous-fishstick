let container = document.querySelector(".container");
var svgElement = document.querySelector(".dog");
let story = [
  "It was a beautiful day in the park, and people were enjoying picnics, playing sports, and walking their dogs.",
  "But as the day went on, the garbage cans started overflowing, and litter began to accumulate on the ground.",
  "A group of young children noticed this and decided to take action. They gathered some gloves and trash bags and began picking up the litter.",
  "Soon, other people in the park saw what the children were doing and joined in, picking up trash and disposing of it properly.",
  "As the group worked together, they started talking about the importance of taking care of the environment and conserving nature for future generations.",
  "They discussed ideas like recycling, reducing plastic waste, and using eco-friendly products.",
  "By the end of the day, the park was clean and beautiful once again, and the group of people felt a sense of accomplishment and pride for taking care of their environment.",
  "They all vowed to continue conserving nature in their everyday lives and to inspire others to do the same for a better tomorrow.",
  
];
function createSlide(text) {
  let div = document.createElement("div");
  div.className = "slide";
  let textEL = document.createElement("h3");
  div.append(textEL);
  textEL.textContent = text;
  return div;
}
function createMessage() {
  let div = document.createElement("div");
  div.className = "slide message";
  let textEL = document.createElement("h3");
  div.append(textEL);
  textEL.textContent = "Save Nature for better Tomorrow #SaveNature #ConserveNature";
  let imageEl = document.createElement("img")
  imageEl.src = '/tree.png'
  div.append(imageEl)
  return div;
}
story.map((st) => {
  container.appendChild(createSlide(st));
});
container.appendChild(createMessage());

function moveSvg() {
  var scrollPosition = container.scrollTop;
  let scroll = (scrollPosition / container.scrollHeight) * 100;
  console.log(scroll);
  svgElement.style.transform = "translateX(" + scroll + "vw)";
}
container.addEventListener("scroll", moveSvg);
let options = {
  cursorOuter: "circle-basic",
  hoverEffect: "circle-move",
  hoverItemMove: false,
  defaultCursor: false,
  outerWidth: 30,
  outerHeight: 30,
};
magicMouse(options);
