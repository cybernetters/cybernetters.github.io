const questionBank = [
  // True/False Questions
  {
    question: "What is the primary function of virtualization in IT?",
    answers: [
        { text: "To emulate hardware for multiple logical systems", correct: true },
        { text: "To create physical hardware", correct: false },
        { text: "To design custom hardware components", correct: false },
        { text: "To eliminate the need for operating systems", correct: false },
        { text: "To replace client-server architecture", correct: false }
    ]
  },
  {
    question: "True or False: Virtualization always requires a separate operating system.",
    answers: [
        { text: "True", correct: false },
        { text: "False", correct: true }
    ]
  },
  {
    question: "What is one advantage of virtualization?",
    answers: [
        { text: "Increased hardware utilization", correct: true },
        { text: "Increased hardware manufacturing", correct: false },
        { text: "Reduced software development", correct: false },
        { text: "Reduced need for IT support", correct: false },
        { text: "Elimination of physical servers", correct: false }
    ]
  },
  {
    question: "Which of the following is a key component of a virtualized system?",
    answers: [
        { text: "Hypervisor", correct: true },
        { text: "Motherboard", correct: false },
        { text: "Router", correct: false },
        { text: "Firewall", correct: false },
        { text: "GPU", correct: false }
    ]
  },
  {
    question: "True or False: A single point of failure is a disadvantage of virtualization.",
    answers: [
        { text: "True", correct: true },
        { text: "False", correct: false }
    ]
  },
  {
    question: "What is one disadvantage of virtualization?",
    answers: [
        { text: "Complicates hardware maintenance", correct: true },
        { text: "Increases physical space requirements", correct: false },
        { text: "Increases energy costs", correct: false },
        { text: "Eliminates test environments", correct: false },
        { text: "Requires dedicated servers for each OS", correct: false }
    ]
  },
  {
    question: "What does 'bare-metal' architecture in virtualization imply?",
    answers: [
        { text: "Virtualization layer installed directly on hardware", correct: true },
        { text: "Virtualization layer installed within an operating system", correct: false },
        { text: "Virtualization layer emulating software only", correct: false },
        { text: "Host operating system dependent virtualization", correct: false },
        { text: "Hardware and software completely decoupled", correct: false }
    ]
  },
  {
    question: "True or False: A guest operating system requires a hypervisor to function.",
    answers: [
        { text: "True", correct: true },
        { text: "False", correct: false }
    ]
  },
  {
    question: "Which of the following virtualization methods has excellent compatibility but lower performance?",
    answers: [
        { text: "Hardware-assisted virtualization", correct: true },
        { text: "Paravirtualization", correct: false },
        { text: "Full virtualization", correct: false },
        { text: "Binary translation", correct: false },
        { text: "Hypervisor-independent virtualization", correct: false }
    ]
  },
  {
    question: "What is the main purpose of memory virtualization?",
    answers: [
        { text: "To allow VMs to perceive contiguous memory space", correct: true },
        { text: "To isolate physical memory from virtual devices", correct: false },
        { text: "To restrict memory access for security", correct: false },
        { text: "To improve graphics processing", correct: false },
        { text: "To enable real-time data encryption", correct: false }
    ]
  }
];
