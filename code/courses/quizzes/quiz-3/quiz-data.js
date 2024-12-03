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
// More Multiple Choice Questions
questionBank.push(
  {
    question: "What is a key feature of Organizational Units (OUs)?",
    answers: [
      { text: "A. Serve as a security boundary", correct: false },
      { text: "B. Allow for delegation of control", correct: true },
      { text: "C. Manage physical topology of the network", correct: false },
      { text: "D. Replace domain controllers in a forest", correct: false },
      { text: "E. Enable Kerberos-based authentication", correct: false },
    ],
  },
  {
    question: "How does replication differ between sites in Active Directory?",
    answers: [
      { text: "A. It uses DNS records to prioritize servers.", correct: false },
      { text: "B. It happens instantaneously between domain controllers.", correct: false },
      { text: "C. It occurs within a timeframe of 15–180 minutes.", correct: true },
      { text: "D. It is managed through the Group Policy Editor.", correct: false },
      { text: "E. None of the above.", correct: false },
    ],
  },
  {
    question: "What is the purpose of transitive trusts in a forest?",
    answers: [
      { text: "A. They manage replication schedules between domain controllers.", correct: false },
      { text: "B. They enable cross-domain authentication within the forest.", correct: true },
      { text: "C. They prevent unauthorized access to global catalogs.", correct: false },
      { text: "D. They are used for defining object permissions.", correct: false },
      { text: "E. They manage schema updates across the forest.", correct: false },
    ],
  },
  {
    question: "What happens when a user logs in to an Active Directory domain?",
    answers: [
      { text: "A. The user is authenticated using NTLM protocol.", correct: false },
      { text: "B. The user's security token is assigned based on group memberships.", correct: true },
      { text: "C. The login is verified by the schema.", correct: false },
      { text: "D. Replication begins across domain controllers.", correct: false },
      { text: "E. The domain controller extends the user’s SID.", correct: false },
    ],
  },
  {
    question: "Which of the following is required for an Active Directory Forest?",
    answers: [
      { text: "A. At least two domain controllers in each domain", correct: false },
      { text: "B. One or more domains sharing a common schema", correct: true },
      { text: "C. A physical network topology", correct: false },
      { text: "D. All groups must be universal in scope", correct: false },
      { text: "E. Kerberos delegation must be configured", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT a default policy in Active Directory?",
    answers: [
      { text: "A. Default Domain Policy", correct: false },
      { text: "B. Default Domain Controllers Policy", correct: false },
      { text: "C. Default Group Policy Object", correct: true },
      { text: "D. None of the above", correct: false },
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
  {
    question: "Which group scope allows members from any domain in the forest?",
    answers: [
      { text: "A. Universal Group", correct: true },
      { text: "B. Domain Local Group", correct: false },
      { text: "C. Global Group", correct: false },
      { text: "D. Security Group", correct: false },
      { text: "E. Distribution Group", correct: false },
    ],
  },
  {
    question: "What defines the physical structure of a network in Active Directory?",
    answers: [
      { text: "A. Domains", correct: false },
      { text: "B. Sites", correct: true },
      { text: "C. Organizational Units", correct: false },
      { text: "D. Schemas", correct: false },
      { text: "E. Group Policy", correct: false },
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

  // Application-Based Multiple Choice Questions
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
  {
    question: "A new application requires extending the schema in Active Directory. What must you ensure before making schema changes?",
    answers: [
      { text: "A. The changes are made on any domain controller", correct: false },
      { text: "B. The Schema Master FSMO role is accessible", correct: true },
      { text: "C. All Global Catalog servers are online", correct: false },
      { text: "D. Group policies are updated beforehand", correct: false },
      { text: "E. None of the above", correct: false },
    ],
  },
  {
    question: "Your domain has several domain controllers. How would you optimize replication between them?",
    answers: [
      { text: "A. Use Group Policy to enable replication", correct: false },
      { text: "B. Define sites and associate subnets for controlled replication", correct: true },
      { text: "C. Restrict replication to a single FSMO role holder", correct: false },
      { text: "D. Disable replication for less critical domain controllers", correct: false },
      { text: "E. Set all domain controllers as Global Catalog servers", correct: false },
    ],
  },
  {
    question: "A user is unable to access shared network resources despite being a member of the correct security group. What is the most likely issue?",
    answers: [
      { text: "A. The security group is a distribution group, not a security group.", correct: true },
      { text: "B. The user’s account is not replicated across domain controllers.", correct: false },
      { text: "C. The schema definition for the user account is incorrect.", correct: false },
      { text: "D. The domain controller responsible for the resource is offline.", correct: false },
      { text: "E. The site topology is misconfigured.", correct: false },
    ],
  }
);

];
