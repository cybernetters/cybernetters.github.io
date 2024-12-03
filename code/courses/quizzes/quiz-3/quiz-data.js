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

  // Multiple Choice Questions (MCQs)
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
    question: "Which of the following replication behaviors is accurate within Active Directory?",
    answers: [
      { text: "A. Replication between sites occurs within 15 seconds.", correct: false },
      { text: "B. Replication is managed through the Group Policy Management Tool.", correct: false },
      { text: "C. Changes on one domain controller are propagated automatically to others.", correct: true },
      { text: "D. Replication is limited to schema attributes.", correct: false },
      { text: "E. None of the above.", correct: false },
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
    question: "What is the purpose of the RID Master FSMO role in Active Directory?",
    answers: [
      { text: "A. Propagating password changes quickly across domain controllers", correct: false },
      { text: "B. Ensuring security IDs (SIDs) remain unique within a domain", correct: true },
      { text: "C. Managing schema changes in the directory", correct: false },
      { text: "D. Maintaining references to objects in other domains", correct: false },
      { text: "E. Creating and managing the global catalog", correct: false },
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
    question: "Organizational Units (OUs) allow for delegation of control within Active Directory.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Active Directory's schema contains the definitions for all object classes and their attributes.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "A Global Group can be used across multiple forests in Active Directory.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "In a single-domain forest, all domain controllers should function as Global Catalog Servers.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "The Infrastructure Master FSMO role is responsible for ensuring SIDs are unique within a domain.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "A forest is a security boundary in Active Directory.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Distribution groups can be used for access control within Active Directory.",
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
    question: "What is the primary purpose of Active Directory?",
    answers: [
      { text: "A. Centralized management of email", correct: false },
      { text: "B. Centralized repository for network authentication and resource management", correct: true },
      { text: "C. Management of external network connections", correct: false },
      { text: "D. Securing external databases", correct: false },
      { text: "E. Organizing physical network layouts", correct: false },
    ],
  },
  {
    question: "Which tool is used to manage replication within Active Directory?",
    answers: [
      { text: "A. ADSI Edit", correct: false },
      { text: "B. Group Policy Management Tool", correct: false },
      { text: "C. Active Directory Sites and Services", correct: true },
      { text: "D. Active Directory Users and Computers", correct: false },
      { text: "E. DNS Manager", correct: false },
    ],
  },
  {
    question: "What is the role of the Schema Master FSMO?",
    answers: [
      { text: "A. Manage password propagation", correct: false },
      { text: "B. Maintain object references in other domains", correct: false },
      { text: "C. Allow changes to schema definitions in the directory", correct: true },
      { text: "D. Propagate replication updates", correct: false },
      { text: "E. Assign unique security IDs", correct: false },
    ],
  },
  {
    question: "Which of the following is true about domain controllers in Active Directory?",
    answers: [
      { text: "A. Only one domain controller is allowed in a domain", correct: false },
      { text: "B. They authenticate users within a domain", correct: true },
      { text: "C. They store physical network topology", correct: false },
      { text: "D. They are used only for backup and restoration purposes", correct: false },
      { text: "E. They do not replicate any data", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a group scope in Active Directory?",
    answers: [
      { text: "A. Domain Local Group", correct: false },
      { text: "B. Universal Group", correct: false },
      { text: "C. Local Administrator Group", correct: true },
      { text: "D. Global Group", correct: false },
      { text: "E. None of the above", correct: false },
    ],
  }
];
