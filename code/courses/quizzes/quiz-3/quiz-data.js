const questionBank = [
  // True/False Questions
  {
    question: "Active Directory (AD) serves as a central repository of networked device information used for querying, updating, and authenticating against data.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "A workgroup allows for centralized management of users and resources on a network.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Domain controllers within the same site replicate changes almost instantly (e.g., within 15 seconds).",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "A schema in Active Directory is a template for objects, and administrators cannot extend or modify it.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Universal groups can be replicated across all domains in a forest and contain members from any domain within the forest.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Active Directory is dependent on DNS (Domain Name Service) for its operation.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "A site in Active Directory represents the logical structure of a network.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Group Policy Objects (GPOs) can only be linked to domains.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "The Default Domain Policy is created when the first domain controller is installed in a domain.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "The PDC Emulator FSMO role must be hosted on the same server as the Global Catalog in a multi-domain forest.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Replication between sites typically occurs within 15 seconds.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Users created in Active Directory are authenticated using the Kerberos protocol by default.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Objects within Active Directory are instances of schema-defined classes.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },

  // Multiple Choice Questions
  {
    question: "Which of the following is a key characteristic of a domain in Active Directory?",
    answers: [
      { text: "A. No centralized management", correct: false },
      { text: "B. Each user account is isolated across computers", correct: false },
      { text: "C. Shared database for managing objects", correct: true },
      { text: "D. Changes to objects need to be manually replicated across systems", correct: false },
      { text: "E. No dependencies between computers", correct: false },
    ],
  },
  {
    question: "What is a primary function of the Group Policy Objects (GPOs) in Active Directory?",
    answers: [
      { text: "A. To assign unique security IDs to users", correct: false },
      { text: "B. To replicate domain controller changes across sites", correct: false },
      { text: "C. To configure and apply settings to users and computers in an organizational unit", correct: true },
      { text: "D. To extend the schema for additional object attributes", correct: false },
      { text: "E. To define the physical topology of the network", correct: false },
    ],
  },
  {
    question: "What is the significance of the Global Catalog in a multi-domain forest?",
    answers: [
      { text: "A. It provides DNS services for the forest.", correct: false },
      { text: "B. It maintains references to all objects in the directory.", correct: true },
      { text: "C. It houses the Namespace root for the domain.", correct: false },
      { text: "D. It ensures replication latency is minimized within a site.", correct: false },
      { text: "E. It limits user authentication to local domains only.", correct: false },
    ],
  },
  {
    question: "What happens if a Global Catalog server fails in a single-domain forest?",
    answers: [
      { text: "A. The forest loses all functionality.", correct: false },
      { text: "B. Only password changes can propagate.", correct: false },
      { text: "C. The domain remains fully functional.", correct: true },
      { text: "D. Replication across sites halts.", correct: false },
      { text: "E. Kerberos authentication fails completely.", correct: false },
    ],
  },
  {
    question: "Which protocol does Active Directory use by default for user authentication?",
    answers: [
      { text: "A. NTLM", correct: false },
      { text: "B. Kerberos", correct: true },
      { text: "C. LDAP", correct: false },
      { text: "D. SSL", correct: false },
      { text: "E. DNS", correct: false },
    ],
  },
];
