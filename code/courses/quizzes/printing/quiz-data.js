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
  {
    question: "PCL is more tolerant of errors than PostScript.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Print pooling allows multiple printers to share a single queue.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "RAW printing protocol requires setting up a queue for each print job.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "The 'Manage Printers' permission allows users to delete their own print jobs.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "PostScript treats text and images as raster objects for printing.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "The print spooler service operates only on client-side systems.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "CUPS is a default printing system available on Windows platforms.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "A print server can be built into the printer itself.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "The SPOOL service ensures simultaneous operations between a printer and client.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "A physical printer can be mapped to multiple logical queues.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "The 'Print' permission allows users to reorder jobs in the queue.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "LPR protocol can time out after 4 minutes.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "CUPS includes a spooler, scheduler, and backend services.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "The 'Manage Documents' permission lets users re-order other users' print jobs.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "The USB connection is the most common for consumer printers.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Printer pooling requires identical print drivers for all printers in the pool.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "RAW is now the default protocol for network printing in modern Windows systems.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "PostScript was developed by HP for inkjet printers.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "LPR jobs require accurate job sizing.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "The print router determines which print provider to use.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "What is a major benefit of incorporating printers into Active Directory?",
    answers: [
      { text: "A. Reduced driver installation time", correct: false },
      { text: "B. Enhanced print job prioritization", correct: false },
      { text: "C. Easier discovery of printers with specific features", correct: true },
      { text: "D. Automated queue configuration", correct: false },
      { text: "E. Load balancing for multiple queues", correct: false },
    ],
  },
  {
    question: "Which component in the print job path determines the correct print provider to use?",
    answers: [
      { text: "A. Print Monitor", correct: false },
      { text: "B. Spooler", correct: false },
      { text: "C. Print Router", correct: true },
      { text: "D. Local Print Provider", correct: false },
      { text: "E. GDI", correct: false },
    ],
  },
  {
    question: "Which of the following describes a limitation of CUPS on Windows platforms?",
    answers: [
      { text: "A. It lacks spooling capabilities.", correct: false },
      { text: "B. It does not support TCP/IP printing.", correct: false },
      { text: "C. It is unavailable on Windows systems.", correct: true },
      { text: "D. It cannot handle RAW protocol.", correct: false },
      { text: "E. It only supports ASCII printing.", correct: false },
    ],
  },
  {
    question: "What happens if different drivers are used in a printer pool?",
    answers: [
      { text: "A. Load balancing fails.", correct: false },
      { text: "B. Printer pooling becomes more efficient.", correct: false },
      { text: "C. Print jobs may not render correctly.", correct: true },
      { text: "D. Automatic driver installation resolves the issue.", correct: false },
      { text: "E. Drivers are synchronized automatically.", correct: false },
    ],
  },
  {
    question: "Which scenario justifies the use of 'Manage Printers' permission for a user?",
    answers: [
      { text: "A. To print documents in a shared environment.", correct: false },
      { text: "B. To reorder their own print jobs in a queue.", correct: false },
      { text: "C. To modify printer configurations.", correct: true },
      { text: "D. To delete their print jobs after printing.", correct: false },
      { text: "E. To handle document management permissions.", correct: false },
    ],
  },
  // True/False Questions
  {
    question: "RAW protocol does not require setting up a specific queue for print jobs.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Printer pooling allows multiple users to manage separate queues for the same printer.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "PostScript enables raster scaling, rotation, and proportional adjustments for images and text.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "LPR protocol is bi-directional, unlike RAW protocol.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Spooling services are required for simultaneous operations in network printing.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    "question": "What is the role of the Print Spooler service in network printing?",
    "answers": [
      { "text": "Converts print jobs to PostScript.", "correct": false },
      { "text": "Buffers and schedules print jobs.", "correct": true },
      { "text": "Manages printer permissions.", "correct": false },
      { "text": "Locates the appropriate print provider.", "correct": false },
      { "text": "Handles raster-to-text conversion.", "correct": false }
    ]
  },
  {
    "question": "Which protocol is the default for modern Windows network printing systems?",
    "answers": [
      { "text": "LPR", "correct": false },
      { "text": "RAW", "correct": true },
      { "text": "CUPS", "correct": false },
      { "text": "PCL", "correct": false },
      { "text": "PostScript", "correct": false }
    ]
  },
  {
    "question": "What does the Print Monitor enable in the network print job path?",
    "answers": [
      { "text": "Load balancing between printers.", "correct": false },
      { "text": "Conversion of print jobs into PDL.", "correct": false },
      { "text": "Bi-directional communication with the printer.", "correct": true },
      { "text": "Scheduling of received print jobs.", "correct": false },
      { "text": "Assigning user permissions for the printer.", "correct": false }
    ]
  },
  {
    "question": "What does a queue configuration labeled 'RAW' assume about a print job?",
    "answers": [
      { "text": "It contains only ASCII text.", "correct": false },
      { "text": "It is formatted using a PDL.", "correct": true },
      { "text": "It requires the CUPS protocol.", "correct": false },
      { "text": "It requires job resizing.", "correct": false },
      { "text": "It uses proportional scaling by default.", "correct": false }
    ]
  },
  {
    "question": "Which of the following can cause delays in network printing?",
    "answers": [
      { "text": "Bi-directional communication.", "correct": false },
      { "text": "Absence of a spooler service.", "correct": true },
      { "text": "Use of automatic driver installation.", "correct": false },
      { "text": "Incorporation into Active Directory.", "correct": false },
      { "text": "Use of lightweight PDLs.", "correct": false }
    ]
  },
  {
    "question": "What is one advantage of using PostScript over PCL?",
    "answers": [
      { "text": "Higher speed for text rendering.", "correct": false },
      { "text": "Lightweight and efficient design.", "correct": false },
      { "text": "Superior image scaling and transformation.", "correct": true },
      { "text": "Less tolerance for errors.", "correct": false },
      { "text": "Compatibility with inkjet printers.", "correct": false }
    ]
  },
  {
    "question": "Which type of connection is most common for consumer printers?",
    "answers": [
      { "text": "Serial", "correct": false },
      { "text": "Parallel", "correct": false },
      { "text": "USB", "correct": true },
      { "text": "Ethernet", "correct": false },
      { "text": "Bluetooth", "correct": false }
    ]
  },
  {
    "question": "What is a critical requirement for printer pooling?",
    "answers": [
      { "text": "All printers must share the same driver.", "correct": true },
      { "text": "Separate queues must be configured for each user.", "correct": false },
      { "text": "The printers must support LPR.", "correct": false },
      { "text": "Load balancing must be manually configured.", "correct": false },
      { "text": "Automatic installation must be disabled.", "correct": false }
    ]
  },
  {
    "question": "Which permission is required for a user to delete their own print jobs?",
    "answers": [
      { "text": "Manage Printers", "correct": false },
      { "text": "Manage Documents", "correct": false },
      { "text": "Creator/Owner", "correct": true },
      { "text": "Print", "correct": false },
      { "text": "Administrator", "correct": false }
    ]
  },
  {
    "question": "What is a primary feature of the LPR protocol?",
    "answers": [
      { "text": "Allows bi-directional communication.", "correct": false },
      { "text": "Requires accurate job sizing.", "correct": true },
      { "text": "Eliminates port limitations.", "correct": false },
      { "text": "Functions as a spooler service.", "correct": false },
      { "text": "Supports driver-free installations.", "correct": false }
    ]
  },
  {
    "question": "What is one disadvantage of PostScript as a Page Description Language?",
    "answers": [
      { "text": "Incompatibility with modern printers.", "correct": false },
      { "text": "Requires proprietary drivers.", "correct": false },
      { "text": "Slower font rendering due to raster conversion.", "correct": true },
      { "text": "Limited to text-only documents.", "correct": false },
      { "text": "Does not support scaling or rotation.", "correct": false }
    ]
  },
  {
    "question": "What component handles job control in the print job path?",
    "answers": [
      { "text": "Print Router", "correct": false },
      { "text": "Local Print Provider", "correct": true },
      { "text": "GDI", "correct": false },
      { "text": "Print Monitor", "correct": false },
      { "text": "Spooler", "correct": false }
    ]
  },
  {
    "question": "What distinguishes PCL from PostScript in network printing?",
    "answers": [
      { "text": "PCL supports proportional scaling.", "correct": false },
      { "text": "PostScript is optimized for inkjet printers.", "correct": false },
      { "text": "PCL is lighter and faster for text-based jobs.", "correct": true },
      { "text": "PostScript lacks support for ASCII files.", "correct": false },
      { "text": "PCL requires proprietary software.", "correct": false }
    ]
  },
  {
    "question": "Why might an administrator assign 'Manage Printers' permissions to a user?",
    "answers": [
      { "text": "To handle driver installation.", "correct": false },
      { "text": "To modify printer settings.", "correct": true },
      { "text": "To reorder print jobs in a queue.", "correct": false },
      { "text": "To restrict access to a specific printer.", "correct": false },
      { "text": "To prioritize their own print jobs.", "correct": false }
    ]
  },
  {
    "question": "What does the Common UNIX Printing System (CUPS) include?",
    "answers": [
      { "text": "Spooler and scheduler.", "correct": true },
      { "text": "GDI and raster converter.", "correct": false },
      { "text": "RAW and ASCII queues.", "correct": false },
      { "text": "Driver installer.", "correct": false },
      { "text": "Port assignment tool.", "correct": false }
    ]
  },
  {
    "question": "PCL is more lightweight than PostScript for text-based printing.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The 'Manage Documents' permission allows a user to reorder other users' print jobs.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "LPR protocol includes support for bi-directional communication.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Printer pooling requires all printers to use identical drivers.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "RAW protocol eliminates port limitations in network printing.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "CUPS is a protocol specifically designed for Windows platforms.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The spooler service schedules and buffers print jobs in network printing.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "PostScript renders text directly without raster conversion.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Active Directory integration simplifies the discovery of printers with specific features.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The 'Print' permission allows users to change printer configurations.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Print jobs formatted with RAW require specific queue configurations.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "LPR jobs are time-sensitive and may fail after a timeout period.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Print Monitor is responsible for bi-directional communication in the job path.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Printer pooling improves load balancing by sharing jobs across multiple printers.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A user with 'Creator/Owner' permissions can delete other users' print jobs.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  }
];
  
