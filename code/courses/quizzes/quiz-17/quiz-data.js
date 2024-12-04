const questionBank = [
  {
    question: "Which of the following is true about the SPOOL service in network printing?",
    answers: [
      { text: "A. It eliminates the need for drivers.", correct: false },
      { text: "B. It buffers print jobs to reduce delays.", correct: true },
      { text: "C. It converts print jobs into PDLs.", correct: false },
      { text: "D. It is specific to UNIX systems only.", correct: false },
      { text: "E. It directly communicates with the print device.", correct: false },
    ],
  },
  {
    question: "What is one key advantage of using RAW protocol over LPR in network printing?",
    answers: [
      { text: "A. Support for spooler services.", correct: false },
      { text: "B. No timeout limitations.", correct: true },
      { text: "C. Limited port configurations.", correct: false },
      { text: "D. Compatibility with UNIX systems.", correct: false },
      { text: "E. Faster text-to-raster conversion.", correct: false },
    ],
  },
  {
    question: "In Windows network printing, which permission allows a user to change printer settings?",
    answers: [
      { text: "A. Manage Documents", correct: false },
      { text: "B. Print", correct: false },
      { text: "C. Manage Printers", correct: true },
      { text: "D. Delete Jobs", correct: false },
      { text: "E. Edit Queue", correct: false },
    ],
  },
  {
    question: "Which of the following describes a feature of the PCL (Printer Command Language)?",
    answers: [
      { text: "A. High tolerance for errors.", correct: false },
      { text: "B. Proportional scaling and rotation of text.", correct: false },
      { text: "C. Lightweight and efficient design.", correct: true },
      { text: "D. Basis for PDF files.", correct: false },
      { text: "E. Slower for text rendering.", correct: false },
    ],
  },
  {
    question: "What does the term 'printer pooling' refer to?",
    answers: [
      { text: "A. Sharing one physical printer across multiple queues.", correct: false },
      { text: "B. Assigning multiple queues to one user.", correct: false },
      { text: "C. Grouping multiple physical printers into one logical printer.", correct: true },
      { text: "D. Using multiple print protocols simultaneously.", correct: false },
      { text: "E. Sharing print drivers across devices.", correct: false },
    ],
  },
  {
    question: "Which protocol is most commonly used for network printing in UNIX systems?",
    answers: [
      { text: "A. RAW", correct: false },
      { text: "B. LPR", correct: false },
      { text: "C. CUPS", correct: true },
      { text: "D. HTTP", correct: false },
      { text: "E. FTP", correct: false },
    ],
  },
  {
    question: "What does the 'Manage Documents' permission allow a user to do?",
    answers: [
      { text: "A. Delete other users' print jobs.", correct: false },
      { text: "B. Install drivers.", correct: false },
      { text: "C. Re-order print jobs in the queue.", correct: true },
      { text: "D. Assign print quotas.", correct: false },
      { text: "E. Modify printer pooling settings.", correct: false },
    ],
  },
  {
    question: "Which of the following best describes the purpose of a Print Monitor in the print job path?",
    answers: [
      { text: "A. Converts print jobs to a PDL.", correct: false },
      { text: "B. Handles scheduling of received print jobs.", correct: false },
      { text: "C. Sends print jobs to local or remote printers.", correct: true },
      { text: "D. Provides caching for the print driver.", correct: false },
      { text: "E. Manages client spooler requests.", correct: false },
    ],
  },
  {
    question: "What is the primary function of the Graphic Device Interface (GDI) in network printing?",
    answers: [
      { text: "A. Buffers print jobs for the spooler.", correct: false },
      { text: "B. Calls the proper print driver for the device.", correct: true },
      { text: "C. Manages permissions for print users.", correct: false },
      { text: "D. Handles bi-directional communication.", correct: false },
      { text: "E. Provides raster scaling for PostScript.", correct: false },
    ],
  },
  {
    question: "What is a limitation of LPR (Line Printer Remote) protocol?",
    answers: [
      { text: "A. Requires a high-speed network.", correct: false },
      { text: "B. Incompatible with Windows systems.", correct: false },
      { text: "C. Limited source ports.", correct: true },
      { text: "D. Cannot print color documents.", correct: false },
      { text: "E. Lacks spooling capabilities.", correct: false },
    ],
  },
];
  