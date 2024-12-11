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
  },
  {
    "question": "Seizing FSMO roles should be a last resort.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The RID Master assigns security identifiers for all domains in a forest.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Transitive trusts exist automatically between domains in the same forest.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Domain Naming Master is required when creating new organizational units.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Sites are composed of servers and configuration objects.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The PDC Emulator should ideally not reside on the same server as the Global Catalog.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Schema Master role controls updates to the forest schema.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Relative IDs are used to ensure SIDs are unique within a domain.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Global Catalog is a single-master operation in Active Directory.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A single IP subnet can span multiple sites in Active Directory.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "You are tasked with optimizing replication between two sites. Which approach should you consider?",
    "answers": [
      { "text": "Enable the PDC Emulator role in both sites", "correct": false },
      { "text": "Configure relative costs between site links", "correct": true },
      { "text": "Deploy an additional Schema Master in each site", "correct": false },
      { "text": "Merge the sites into a single subnet", "correct": false },
      { "text": "Increase the replication interval for all domain controllers", "correct": false }
    ]
  },
  {
    "question": "A domain controller handling the RID Master role is offline. What is the potential impact?",
    "answers": [
      { "text": "Authentication will fail across the domain", "correct": false },
      { "text": "Schema changes cannot be made", "correct": false },
      { "text": "New security objects cannot be created if RIDs are exhausted", "correct": true },
      { "text": "Replication between sites will stop", "correct": false },
      { "text": "Cross-domain queries will fail", "correct": false }
    ]
  },
  {
    "question": "During a planned maintenance window, you need to take the Infrastructure Master offline. What precautions should you take?",
    "answers": [
      { "text": "Move all FSMO roles to another server", "correct": false },
      { "text": "Ensure no schema changes are planned", "correct": false },
      { "text": "Confirm that no cross-domain object updates are expected", "correct": true },
      { "text": "Disable replication between sites temporarily", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What is the first step when transferring the Domain Naming Master role to another server?",
    "answers": [
      { "text": "Open Active Directory Users and Computers", "correct": false },
      { "text": "Access the ntdsutil tool", "correct": false },
      { "text": "Launch Active Directory Domains and Trusts", "correct": true },
      { "text": "Define a new Global Catalog server", "correct": false },
      { "text": "Configure the relative cost for site links", "correct": false }
    ]
  },
  {
    "question": "A network administrator needs to ensure efficient authentication for clients in remote offices. What should they configure?",
    "answers": [
      { "text": "Global Catalog servers in all remote offices", "correct": false },
      { "text": "Active Directory Sites and associated subnets", "correct": true },
      { "text": "Schema Master on each domain controller", "correct": false },
      { "text": "Multiple PDC Emulators within the same domain", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What is the main consideration when deciding to seize an FSMO role?",
    "answers": [
      { "text": "If schema changes are pending", "correct": false },
      { "text": "If the source server will not come back online", "correct": true },
      { "text": "Whether cross-domain authentication is required", "correct": false },
      { "text": "If replication conflicts are frequent", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "You observe slow replication between two sites. What could be a potential cause?",
    "answers": [
      { "text": "The Schema Master is offline", "correct": false },
      { "text": "The bridgehead server is overloaded", "correct": true },
      { "text": "The RID Master role has been seized", "correct": false },
      { "text": "Multiple PDC Emulators are active", "correct": false },
      { "text": "The site is missing from Active Directory", "correct": false }
    ]
  },
  {
    "question": "A client is failing to authenticate within a site. What is the most likely issue?",
    "answers": [
      { "text": "The PDC Emulator is unavailable", "correct": false },
      { "text": "No subnet has been defined for the site", "correct": true },
      { "text": "The Schema Master role is offline", "correct": false },
      { "text": "The RID pool is depleted", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "You are configuring a new site in Active Directory. What is the primary reason for doing so?",
    "answers": [
      { "text": "To support additional FSMO roles", "correct": false },
      { "text": "To define a new schema for the forest", "correct": false },
      { "text": "To optimize DC replication and client authentication", "correct": true },
      { "text": "To reduce WAN traffic globally", "correct": false },
      { "text": "To ensure all GPOs are applied consistently", "correct": false }
    ]
  },
  {
    "question": "Which FSMO role must be available during the addition of a new domain?",
    "answers": [
      { "text": "Schema Master", "correct": false },
      { "text": "RID Master", "correct": false },
      { "text": "Infrastructure Master", "correct": false },
      { "text": "Domain Naming Master", "correct": true },
      { "text": "PDC Emulator", "correct": false }
    ]
  }
];
