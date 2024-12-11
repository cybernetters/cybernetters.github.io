const questionBank = [
  {
    "question": "Which of the following describes a key function of an Active Directory Forest?",
    "answers": [
      { "text": "Manages replication between sites", "correct": false },
      { "text": "Provides a global listing of all objects in the directory", "correct": false },
      { "text": "Establishes transitive trusts between domains", "correct": true },
      { "text": "Determines client authentication servers", "correct": false },
      { "text": "Creates a bridgehead server for site replication", "correct": false }
    ]
  },
  {
    "question": "What is the primary purpose of Active Directory Sites?",
    "answers": [
      { "text": "To organize logical structures like OUs", "correct": false },
      { "text": "To define physical network locations for optimized replication", "correct": true },
      { "text": "To establish permissions across forests", "correct": false },
      { "text": "To maintain DNS services in each domain", "correct": false },
      { "text": "To manage schema changes in the forest", "correct": false }
    ]
  },
  {
    "question": "Which FSMO role is responsible for maintaining unique SIDs within a domain?",
    "answers": [
      { "text": "Schema Master", "correct": false },
      { "text": "PDC Emulator", "correct": false },
      { "text": "RID Master", "correct": true },
      { "text": "Infrastructure Master", "correct": false },
      { "text": "Domain Naming Master", "correct": false }
    ]
  },
  {
    "question": "What is a primary advantage of defining a site in Active Directory?",
    "answers": [
      { "text": "Reduces overall replication costs", "correct": false },
      { "text": "Ensures that GPO changes are applied immediately", "correct": false },
      { "text": "Facilitates authentication against the closest domain controller", "correct": true },
      { "text": "Guarantees single-master operations in the forest", "correct": false },
      { "text": "Allocates unique RIDs across all domains", "correct": false }
    ]
  },
  {
    "question": "Which of the following FSMO roles is forest-wide in scope?",
    "answers": [
      { "text": "RID Master", "correct": false },
      { "text": "Infrastructure Master", "correct": false },
      { "text": "Schema Master", "correct": true },
      { "text": "PDC Emulator", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "When is it necessary to seize an FSMO role?",
    "answers": [
      { "text": "During scheduled maintenance", "correct": false },
      { "text": "When the source server is permanently unavailable", "correct": true },
      { "text": "When upgrading the forest functional level", "correct": false },
      { "text": "For performance optimization", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which tool is commonly used to transfer the Schema Master role?",
    "answers": [
      { "text": "Active Directory Users and Computers", "correct": false },
      { "text": "Active Directory Schema snap-in", "correct": true },
      { "text": "ntdsutil command-line tool", "correct": false },
      { "text": "Active Directory Sites and Services", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What is the significance of the Global Catalog (GC) server in a multi-domain forest?",
    "answers": [
      { "text": "It enforces password changes across all domains", "correct": false },
      { "text": "It provides cross-domain object searches", "correct": true },
      { "text": "It manages domain naming across forests", "correct": false },
      { "text": "It allocates RIDs for all domains", "correct": false },
      { "text": "It ensures schema changes propagate across forests", "correct": false }
    ]
  },
  {
    "question": "Which server type is designated to manage replication between sites in Active Directory?",
    "answers": [
      { "text": "Schema Master", "correct": false },
      { "text": "Bridgehead Server", "correct": true },
      { "text": "RID Master", "correct": false },
      { "text": "Domain Controller", "correct": false },
      { "text": "Infrastructure Master", "correct": false }
    ]
  },
  {
    "question": "What is a key function of the Infrastructure Master role?",
    "answers": [
      { "text": "Manages schema changes", "correct": false },
      { "text": "Ensures SIDs are unique", "correct": false },
      { "text": "Updates references to objects in other domains", "correct": true },
      { "text": "Acts as the root time server for the domain", "correct": false },
      { "text": "Allocates RIDs within the domain", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a valid FSMO role?",
    "answers": [
      { "text": "Schema Master", "correct": false },
      { "text": "Domain Naming Master", "correct": false },
      { "text": "Global Catalog Master", "correct": true },
      { "text": "PDC Emulator", "correct": false },
      { "text": "Infrastructure Master", "correct": false }
    ]
  },
  {
    "question": "When should you avoid assigning the Infrastructure Master to a Global Catalog server?",
    "answers": [
      { "text": "If the server handles multiple FSMO roles", "correct": false },
      { "text": "If there are multiple domains in the forest", "correct": true },
      { "text": "If schema changes are being made frequently", "correct": false },
      { "text": "If the domain is running out of RIDs", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What happens if the PDC Emulator role is unavailable?",
    "answers": [
      { "text": "RID allocation stops entirely", "correct": false },
      { "text": "Authentication across domains halts", "correct": false },
      { "text": "Password changes may take longer to propagate", "correct": true },
      { "text": "Schema updates cannot occur", "correct": false },
      { "text": "No impact unless the RID pool is exhausted", "correct": false }
    ]
  },
  {
    "question": "Which of the following tools can be used to seize FSMO roles?",
    "answers": [
      { "text": "Active Directory Users and Computers", "correct": false },
      { "text": "Active Directory Domains and Trusts", "correct": false },
      { "text": "Active Directory Sites and Services", "correct": false },
      { "text": "ntdsutil", "correct": true },
      { "text": "All of the above", "correct": false }
    ]
  },
  {
    "question": "Why might an organization configure a standby operations master DC?",
    "answers": [
      { "text": "To improve global catalog searches", "correct": false },
      { "text": "To act as a fallback for FSMO roles", "correct": true },
      { "text": "To enforce domain-wide replication schedules", "correct": false },
      { "text": "To optimize cross-site authentication", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which of the following is true about the Schema Master role?",
    "answers": [
      { "text": "It is domain-wide in scope", "correct": false },
      { "text": "It controls modifications to AD schema", "correct": true },
      { "text": "It can exist on multiple domain controllers", "correct": false },
      { "text": "It requires frequent updates", "correct": false },
      { "text": "It facilitates SID allocations across the domain", "correct": false }
    ]
  },
  {
    "question": "Which FSMO role is critical during the creation of a new domain?",
    "answers": [
      { "text": "Schema Master", "correct": false },
      { "text": "Domain Naming Master", "correct": true },
      { "text": "PDC Emulator", "correct": false },
      { "text": "RID Master", "correct": false },
      { "text": "Infrastructure Master", "correct": false }
    ]
  },
  {
    "question": "What tool is typically used for defining Active Directory sites?",
    "answers": [
      { "text": "Active Directory Schema snap-in", "correct": false },
      { "text": "ntdsutil", "correct": false },
      { "text": "Active Directory Sites and Services", "correct": true },
      { "text": "Active Directory Users and Computers", "correct": false },
      { "text": "Active Directory Domains and Trusts", "correct": false }
    ]
  },
  {
    "question": "What type of network typically connects sites in Active Directory?",
    "answers": [
      { "text": "LAN", "correct": false },
      { "text": "WAN", "correct": true },
      { "text": "VPN", "correct": false },
      { "text": "MAN", "correct": false },
      { "text": "VLAN", "correct": false }
    ]
  },
  {
    "question": "Which FSMO role manages domain-specific RID allocations?",
    "answers": [
      { "text": "Schema Master", "correct": false },
      { "text": "Domain Naming Master", "correct": false },
      { "text": "RID Master", "correct": true },
      { "text": "PDC Emulator", "correct": false },
      { "text": "Infrastructure Master", "correct": false }
    ]
  }
];
