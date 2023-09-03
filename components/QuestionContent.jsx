class questionContent {
  constructor(question, options, correctOption) {
    this.question = question;
    this.options = options;
    this.correctOption = correctOption;
  }
}
export const content = [
  new questionContent(
    "Computers surf the internet through a _________.",
    ["network device", "data", "programmming language", "browser"],
    4
  ),
  new questionContent(
    "We can track his location with a  _________ technology.",
    ["Micro Chip", "Tracker", "GPS", "Address"],
    3
  ),
  new questionContent("How many legs does a lizard have?", [1, 2, 3, 4], 4),
  new questionContent(
    "The following are characteristics of a computer EXCEPT ___________. ",
    ["general purpose", "expensive", "reliable", "slow"],
    4
  ),
  new questionContent(
    "How many bytes are in a mega-byte?",
    ["1 million bytes", "1 trillion bytes", "1000 bits", "2000 bytes"],
    1
  ),
  new questionContent(
    "What is the meaning of LAN?",
    [
      "Low Access Network",
      "Local Area Network",
      "Local Access Network",
      "Large Area Network",
    ],
    2
  ),
  new questionContent(
    "Which was used int he first computer",
    ["vacuum tube", "integrated circuit", "micro chip", "SSD"],
    1
  ),
  new questionContent(
    "Which of the following is a storage device?",
    ["mouse", "cpu", "keyboard", "SSD"],
    4
  ),
  new questionContent(
    "What is the brain of the computer",
    ["hard drive", "cpu", "pc brain", "memory card"],
    2
  ),
  new questionContent(
    "What type of device is a keyboard",
    ["input", "output", "none", "both"],
    1
  ),
  new questionContent(
    "Which of the following is a browser",
    ["file explorer", "Ms Word", "chrome", "none of the above"],
    3
  ),
  new questionContent(
    "What is the meaning of HTML",
    [
      "High Transmission Main Line",
      "Hyper Text Markup Language",
      "Hyper Transit Main Language",
      "none of the above",
    ],
    2
  ),
  new questionContent(
    "What does GUI stand for?",
    [
      "Grey Unit Image",
      "Grid Union Index",
      "Graphic User Interface",
      "Graphic User Information",
    ],
    3
  ),
  new questionContent(
    "What does GUI stand for?",
    [
      "Grey Unit Image",
      "Grid Union Index",
      "Graphic User Interface",
      "Graphic User Information",
    ],
    3
  ),
];
export default questionContent;
