const questionBank = [
  {
    question: "How are things organized in a directory server?",
    answers: [
      { text: "By a hierarchical model of objects and containers", correct: true },
      { text: "By random allocation of user accounts", correct: false },
      { text: "By IP addresses and subnets", correct: false },
      { text: "By alphabetical sorting of usernames", correct: false }
    ]
  },
  {
    question: "In order to authenticate user accounts against AD, what must be done to the computer first?",
    answers: [
      { text: "Join it to the domain", correct: true },
      { text: "Install Active Directory on the computer", correct: false },
      { text: "Set up a local user account with the same username", correct: false },
      { text: "Connect the computer to the internet", correct: false }
    ]
  },
  {
    question: "What would you use if you wanted to set a default wallpaper background for all machines in your company, but still wanted users to be able to set their own wallpaper?",
    answers: [
      { text: "A preference", correct: true },
      { text: "A policy", correct: false },
      { text: "A registry key", correct: false },
      { text: "A group membership", correct: false }
    ]
  },
  // True/False Questions
  {
    question: "Directory services only store information about users and computers.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Directories use hierarchical structures to organize and store data.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Objects in a directory inherit attributes only if they are manually assigned.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "LDAP operates over TCP port 389.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Pruning and grafting allow moving the root of a directory to a different location.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },

  // Multiple Choice Questions (MCQs)
  {
    question: "Which of the following is NOT a function of directory services?",
    answers: [
      { text: "A. Centralized authentication for users and systems", correct: false },
      { text: "B. Facilitating single sign-on for applications", correct: false },
      { text: "C. Providing a hierarchical structure for data storage", correct: false },
      { text: "D. Running operating system updates", correct: true },
      { text: "E. Offering granularity of administrative control", correct: false },
    ],
  },
  {
    question: "What distinguishes a leaf object in a directory?",
    answers: [
      { text: "A. It has no parent object.", correct: false },
      { text: "B. It cannot contain other objects.", correct: true },
      { text: "C. It defines schema attributes.", correct: false },
      { text: "D. It represents the root of the directory.", correct: false },
      { text: "E. It inherits all attributes of the directory.", correct: false },
    ],
  },
  {
    question: "Which of the following describes pruning and grafting in a directory?",
    answers: [
      { text: "A. Creating new containers for objects", correct: false },
      { text: "B. Allowing a directory to span multiple geographical locations", correct: false },
      { text: "C. Moving objects between different locations in the directory tree", correct: true },
      { text: "D. Restricting access to specific parts of a directory", correct: false },
      { text: "E. Duplicating attributes of directory objects", correct: false },
    ],
  },
  {
    question: "Which protocol is used for querying and modifying directory information?",
    answers: [
      { text: "A. DNS", correct: false },
      { text: "B. LDAP", correct: true },
      { text: "C. FTP", correct: false },
      { text: "D. HTTP", correct: false },
      { text: "E. SNMP", correct: false },
    ],
  },
  {
    question: "In an LDAP directory naming convention, what does ou represent?",
    answers: [
      { text: "A. Organizational Name", correct: false },
      { text: "B. Organizational Unit", correct: true },
      { text: "C. Organization User", correct: false },
      { text: "D. Overall Unit", correct: false },
      { text: "E. Operating User", correct: false },
    ],
  },
];

