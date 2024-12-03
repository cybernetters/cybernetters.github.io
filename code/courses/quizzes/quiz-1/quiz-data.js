const questionBank = [
  // True/False Questions
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
  },

  // Application-Based Questions
  {
    question: "You are tasked with setting up a branch office for your organization. How would you define this branch office in Active Directory?",
    answers: [
      { text: "A. Create a new domain in the forest", correct: false },
      { text: "B. Configure a new site for the branch office", correct: true },
      { text: "C. Set up a separate forest for the branch office", correct: false },
      { text: "D. Add the branch office subnet to an existing site", correct: false },
      { text: "E. Assign the branch office as a schema master", correct: false },
    ],
  },
  {
    question: "Your organization needs to restrict access to a specific application for users in a single department. What is the best approach?",
    answers: [
      { text: "A. Create a security group for the department and assign permissions", correct: true },
      { text: "B. Use the Default Domain Policy to configure restrictions", correct: false },
      { text: "C. Configure a new schema class for the application", correct: false },
      { text: "D. Create a new OU for the department and apply a GPO", correct: false },
      { text: "E. Use transitive trusts to restrict access", correct: false },
    ],
  },
];
