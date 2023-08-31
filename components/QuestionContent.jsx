class questionContent {
  constructor(question, options, correctOption) {
    this.question = question;
    this.options = options;
    this.correctOption = correctOption;
  }
}
export const content = [
  new questionContent(
    "Fishes breathe through thier _________.",
    ["Fins", "Gills", "Mouth", "Tail"],
    2
  ),
  new questionContent(
    "Birds are able to fly because they have _________.",
    ["wings", "beak", "teeth", "scales"],
    1
  ),
  new questionContent("How many legs does a lizard have?", [1, 2, 3, 4], 4),
  new questionContent(
    "The following are characteristics of a fish EXCEPT ___________. ",
    ["scales", "hair", "fins", "gills"],
    2
  ),
  new questionContent(
    "Which animal can fly?",
    ["lizard", "bat", "dog", "man"],
    2
  ),
  new questionContent(
    "Which was used int he first computer",
    ["vacuum tube", "integrated circuit", "micro chip", "SSD"],
    1
  ),
  new questionContent(
    "Which animal can lay eggs?",
    ["lizard", "bat", "dog", "fish"],
    4
  ),
  new questionContent(
    "What is the brain of the computer",
    ["hard drive", "cpu", "pc brain", "memory card"],
    2
  ),
];
export default questionContent;
