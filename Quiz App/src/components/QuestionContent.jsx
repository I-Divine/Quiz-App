class questionContent {
  constructor(question, options, correctOption) {
    this.question = question;
    this.options = options;
    this.correctOption = correctOption;
  }
}
export const content = [
  new questionContent(
    "_______ is a data structure that holds attributes and method.",
    ["Class", "Interface", "Array", "Object"],
    1
  ),
  new questionContent(
    "We can track his location with  _________ technology.",
    ["Micro Chip", "Tracker", "GPS", "Address"],
    3
  ),
  new questionContent(
    'What requirement asks "Who are you ?" ?',
    ["Authorization", "Auditing", "Access Control", "Authentication"],
    4
  ),
  new questionContent(
    "Which of these encryption methods is irreversible ? ",
    [
      "One-Way Encryption",
      "Asymmetric Encryption",
      "Symmetric Encryption",
      "Hashing",
    ],
    4
  ),
  new questionContent(
    "1101 & 1100 , evaluates to __________.",
    ["1100", "1100", "1101", "1111"],
    1
  ),
  new questionContent(
    "Which is NOT a way to scale a web based application ?",
    [
      "Load Balancers",
      "Content Delivery Networks",
      "Increasing Resources",
      "Mitigate Injections",
    ],
    4
  ),
  new questionContent(
    "Which is not a programming language",
    [".NET", "JavaScript", "HTML", "Kotlin"],
    3
  ),
  new questionContent(
    "What is the purpose of version control systems in software development?",
    [
      "To track changes in code over time",
      "To optimize code execution speed",
      "To handle user authentication",
      "To design user interfaces",
    ],
    1
  ),
  new questionContent(
    "Which of the following is NOT a software development methodology?",
    ["Waterfall", "Agile", "Scrum", "Assembly"],
    4
  ),
  new questionContent(
    "What is the Big O notation used for in computer science?",
    [
      "To describe the performance or complexity of an algorithm",
      "To represent large datasets",
      "To calculate memory usage",
      "To measure network latency",
    ],
    1
  ),
  new questionContent(
    "Which data structure follows the Last In, First Out (LIFO) principle?",
    ["Queue", "Stack", "Heap", "LinkedList"],
    1
  ),
  new questionContent(
    "What is a binary search?",
    [
      "A search algorithm that divides the search space in half at each step",
      "A search algorithm that uses random sampling",
      "A search algorithm that performs linear scans",
      "A search algorithm that utilizes hash tables",
    ],
    1
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
    "What is the purpose of a constructor in object-oriented programming?",
    [
      "To create instances of a class",
      "To destroy instances of a class",
      "To modify instances of a class",
      "To define static methods",
    ],
    1 // Adjusted correct option index
  ),
  new questionContent(
    "What is recursion in programming?",
    [
      "A function calling itself",
      "A function calling another function",
      "A function returning multiple values",
      "A function taking no arguments",
    ],
    1 // Adjusted correct option index
  ),
  new questionContent(
    "What is the purpose of an API (Application Programming Interface)?",
    [
      "To define how software components interact",
      "To execute SQL queries",
      "To store user authentication data",
      "To manage server hardware",
    ],
    1 // Adjusted correct option index
  ),
  new questionContent(
    "What is the time complexity of binary search?",
    ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    2 // Adjusted correct option index
  ),
  new questionContent(
    "Who created linux?",
    ["Linus Torvald", "Charles Babbage", "Brendan Eich", "Steve Jobs"],
    1
  ),
];
export default questionContent;
