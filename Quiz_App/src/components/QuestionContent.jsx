class questionContent {
  constructor(question, options, correctOption) {
    this.question = question;
    this.options = options;
    this.correctOption = correctOption;
  }
}
export const content = [
  new questionContent(
    "What is the name of the first electronic general-purpose computer?",
    ["ENIAC", "IBM PC", "Apple I", "Commodore 64"],
    1 // Adjusted correct option index
  ),
  new questionContent(
    "Who is often referred to as the 'Father of Computers'?",
    ["Bill Gates", "Steve Jobs", "Alan Turing", "Charles Babbage"],
    4 // Adjusted correct option index
  ),
  new questionContent(
    "What does RAM stand for?",
    [
      "Random Access Memory",
      "Read-Only Memory",
      "Random Application Memory",
      "Remote Access Module",
    ],
    1 // Adjusted correct option index
  ),
  new questionContent(
    "What is the main function of a CPU?",
    [
      "To perform calculations and execute instructions",
      "To store long-term data",
      "To display images on the screen",
      "To provide network connectivity",
    ],
    1 // Adjusted correct option index
  ),
  new questionContent(
    "What is the largest unit of storage in a computer?",
    ["Byte", "Kilobyte", "Megabyte", "Terabyte"],
    4 // Adjusted correct option index
  ),
  new questionContent(
    "What is the purpose of the MVC (Model-View-Controller) architectural pattern?",
    [
      "To define the data structure of a database",
      "To separate concerns within an application and facilitate modular development",
      "To optimize code execution speed",
      "To handle user authentication",
    ],
    2 // Adjusted correct option index
  ),

  new questionContent(
    "What is the Agile software development methodology known for?",
    [
      "Iterative and incremental development",
      "Strict adherence to a predefined plan",
      "Heavy documentation at the beginning of a project",
      "Long release cycles",
    ],
    1 // Adjusted correct option index
  ),
  new questionContent(
    "What is a design pattern in software engineering?",
    [
      "A blueprint for designing user interfaces",
      "A programming language feature for defining data structures",
      "A method for writing pseudocode",
      "A general reusable solution to a commonly occurring problem within a given context",
    ],
    4 // Adjusted correct option index
  ),
  new questionContent(
    "What is a linked list?",
    [
      "An associative array that maps keys to values",
      "A tree structure with exactly two children for each node",
      "A linear data structure consisting of nodes, where each node points to the next node in the sequence",

      "A sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.",
    ],
    3 // Adjusted correct option index
  ),
  new questionContent(
    "What is the time complexity of a bubble sort algorithm?",
    ["O(n)", "O(log n)", "O(n^2)", "O(n!)"],
    3 // Adjusted correct option index
  ),
  new questionContent(
    "What is the purpose of a loop in programming?",
    [
      "To repeat a block of code multiple times",
      "To define a new variable",
      "To perform arithmetic operations",
      "To display output on the screen",
    ],
    1 // Adjusted correct option index
  ),
  new questionContent(
    "What is the difference between '==' and '===' in JavaScript?",
    [
      "'==' is used for assignment, while '===' is used for comparison.",
      "'==' is used for comparison, while '===' is used for assignment.",
      "'==' compares two values for equality with type coercion, while '===' compares two values for equality without type coercion.",
      "'==' compares two values for equality without type coercion, while '===' compares two values for equality with type coercion.",
    ],
    3 // Adjusted correct option index
  ),
  new questionContent(
    "What does the acronym 'HTML' stand for?",
    [
      "High Transmission Main Line",
      "Hyper Transit Main Language",
      "Hotmail",
      "Hyper Text Markup Language",
    ],
    4 // Adjusted correct option index
  ),
  new questionContent(
    "Which of the following is NOT a programming language?",
    ["Java", "Python", "HTML", "C++"],
    3 // Adjusted correct option index
  ),
  new questionContent(
    "What is a function in programming?",
    [
      "A variable that stores text data",
      "A data structure for storing multiple values",
      "A reusable block of code that performs a specific task",
      "A condition for executing a block of code",
    ],
    3 // Adjusted correct option index
  ),
];
export default questionContent;
