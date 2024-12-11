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
    "question": "The Default Domain Policy applies settings to all objects in a domain by default.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Sites in Active Directory are used to logically group objects for easier management.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The RID Master FSMO role is responsible for assigning unique RIDs to security principals in a domain.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Active Directory uses LDAP (Lightweight Directory Access Protocol) to query and retrieve directory information.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Schema Master FSMO role is only needed during schema modifications.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Group Policy Objects (GPOs) can only be applied to organizational units (OUs).",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A Global Catalog Server contains a partial, read-only replica of all objects in the forest.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The PDC Emulator FSMO role is required for time synchronization in a domain.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Organizational Units (OUs) are used to define the physical structure of a network.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Replication between domain controllers within a site happens within 180 minutes by default.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "In Active Directory, Kerberos is the default protocol for authentication.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A workgroup supports centralized management and authentication.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Universal groups can contain members from any domain in the forest.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Default Domain Controllers Policy is linked to the domain by default.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Forest trusts allow users from one forest to access resources in another forest.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Active Directory domains use NTLM as their default authentication protocol.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A Global Group can only contain members from its own domain.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Active Directory replication uses sites and subnets to optimize traffic between domain controllers.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Infrastructure Master FSMO role is responsible for managing group memberships.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Group Policy can override local security policies on client machines.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Objects in Active Directory are created based on predefined templates called classes.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Domain Naming Master FSMO role ensures unique naming across the forest.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Replication schedules are configured in the Group Policy Management Tool.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "In Active Directory, a forest is the smallest security boundary.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Default Domain Policy cannot be modified by administrators.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A site link determines replication between domain controllers in different sites.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A tree in Active Directory contains multiple forests.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Organizational Units (OUs) are typically used for delegating control and applying GPOs.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Security groups can be used for email distribution.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Schema extensions are necessary when adding attributes for a new software application.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Which of the following is a characteristic of Active Directory objects?",
    "answers": [
      { "text": "Each object is an instance of a schema class", "correct": true },
      { "text": "Objects cannot be modified once created", "correct": false },
      { "text": "Objects are limited to users and computers", "correct": false },
      { "text": "Objects are stored only in Global Catalog servers", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which FSMO role is responsible for handling password changes?",
    "answers": [
      { "text": "Schema Master", "correct": false },
      { "text": "PDC Emulator", "correct": true },
      { "text": "Domain Naming Master", "correct": false },
      { "text": "RID Master", "correct": false },
      { "text": "Infrastructure Master", "correct": false }
    ]
  },
  {
    "question": "What is the primary function of the Global Catalog in Active Directory?",
    "answers": [
      { "text": "Managing replication schedules", "correct": false },
      { "text": "Providing a complete listing of all objects in the forest", "correct": true },
      { "text": "Assigning security IDs to new objects", "correct": false },
      { "text": "Authenticating domain logins", "correct": false },
      { "text": "Managing schema modifications", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a valid group type in Active Directory?",
    "answers": [
      { "text": "Universal Group", "correct": false },
      { "text": "Global Group", "correct": false },
      { "text": "Domain Local Group", "correct": false },
      { "text": "Workgroup", "correct": true },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which protocol does Active Directory use for authentication by default?",
    "answers": [
      { "text": "LDAP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "Kerberos", "correct": true },
      { "text": "NTLM", "correct": false },
      { "text": "RADIUS", "correct": false }
    ]
  },
  {
    "question": "What is the function of the Domain Naming Master FSMO role?",
    "answers": [
      { "text": "Managing domain-wide replication", "correct": false },
      { "text": "Creating and modifying domains in the forest", "correct": true },
      { "text": "Assigning unique security IDs", "correct": false },
      { "text": "Handling backward compatibility with NT4 systems", "correct": false },
      { "text": "Maintaining references to objects in other domains", "correct": false }
    ]
  },
  {
    "question": "What defines the physical structure of a network in Active Directory?",
    "answers": [
      { "text": "Domains", "correct": false },
      { "text": "Sites", "correct": true },
      { "text": "Organizational Units", "correct": false },
      { "text": "Schemas", "correct": false },
      { "text": "Group Policies", "correct": false }
    ]
  },
  {
    "question": "Which group scope can be used across multiple domains in a forest?",
    "answers": [
      { "text": "Global Group", "correct": false },
      { "text": "Domain Local Group", "correct": false },
      { "text": "Universal Group", "correct": true },
      { "text": "Workgroup", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which tool is used to modify Active Directory schema?",
    "answers": [
      { "text": "ADSI Edit", "correct": true },
      { "text": "Group Policy Management Tool", "correct": false },
      { "text": "Active Directory Sites and Services", "correct": false },
      { "text": "DNS Manager", "correct": false },
      { "text": "Global Catalog Editor", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of the Default Domain Controllers Policy?",
    "answers": [
      { "text": "To apply GPO settings to all domain controllers", "correct": true },
      { "text": "To replicate domain controller changes across sites", "correct": false },
      { "text": "To define the schema attributes for all objects", "correct": false },
      { "text": "To manage trust relationships within the forest", "correct": false },
      { "text": "To configure replication intervals", "correct": false }
    ]
  },
  {
    "question": "What is required for cross-domain authentication in a forest?",
    "answers": [
      { "text": "Global Catalog", "correct": true },
      { "text": "Domain Naming Master", "correct": false },
      { "text": "Universal Group Membership Caching", "correct": false },
      { "text": "Infrastructure Master", "correct": false },
      { "text": "Schema Master", "correct": false }
    ]
  },
  {
    "question": "Which FSMO role ensures that all SIDs in a domain remain unique?",
    "answers": [
      { "text": "Infrastructure Master", "correct": false },
      { "text": "RID Master", "correct": true },
      { "text": "Domain Naming Master", "correct": false },
      { "text": "Schema Master", "correct": false },
      { "text": "Global Catalog", "correct": false }
    ]
  },
  {
    "question": "What type of group is typically used for email distribution lists?",
    "answers": [
      { "text": "Security Group", "correct": false },
      { "text": "Distribution Group", "correct": true },
      { "text": "Domain Local Group", "correct": false },
      { "text": "Universal Group", "correct": false },
      { "text": "Global Group", "correct": false }
    ]
  },
  {
    "question": "Which of the following GPOs is created automatically in a new domain?",
    "answers": [
      { "text": "Default OU Policy", "correct": false },
      { "text": "Default Domain Policy", "correct": true },
      { "text": "Default Workgroup Policy", "correct": false },
      { "text": "Default Schema Policy", "correct": false },
      { "text": "Default Replication Policy", "correct": false }
    ]
  },
  {
    "question": "Which FSMO role is forest-wide?",
    "answers": [
      { "text": "Infrastructure Master", "correct": false },
      { "text": "RID Master", "correct": false },
      { "text": "PDC Emulator", "correct": false },
      { "text": "Domain Naming Master", "correct": true },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "How is a domain in Active Directory defined?",
    "answers": [
      { "text": "A collection of well-connected subnets", "correct": false },
      { "text": "A collection of objects sharing a common database", "correct": true },
      { "text": "A logical grouping of GPOs", "correct": false },
      { "text": "A physical network structure", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which of the following is used to link a GPO to users and computers?",
    "answers": [
      { "text": "Domain controllers", "correct": false },
      { "text": "Organizational Units (OUs)", "correct": true },
      { "text": "Forests", "correct": false },
      { "text": "Global Catalog", "correct": false },
      { "text": "Sites", "correct": false }
    ]
  },
  {
    "question": "What is a key feature of a forest in Active Directory?",
    "answers": [
      { "text": "Each forest has a unique schema shared by all domains", "correct": true },
      { "text": "Forests do not support replication", "correct": false },
      { "text": "Forests contain only one domain by default", "correct": false },
      { "text": "Forests are the smallest administrative unit in AD", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What determines replication intervals in Active Directory?",
    "answers": [
      { "text": "Domain policies", "correct": false },
      { "text": "Site links", "correct": true },
      { "text": "Schema settings", "correct": false },
      { "text": "GPO configurations", "correct": false },
      { "text": "User permissions", "correct": false }
    ]
  },
  {
    "question": "Which FSMO role is responsible for backward compatibility with NT4 systems?",
    "answers": [
      { "text": "RID Master", "correct": false },
      { "text": "PDC Emulator", "correct": true },
      { "text": "Infrastructure Master", "correct": false },
      { "text": "Domain Naming Master", "correct": false },
      { "text": "Schema Master", "correct": false }
    ]
  }
];
