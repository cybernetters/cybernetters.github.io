const questionBank = [
  {
    question: "How are things organized in a directory server?",
    answers: [
      { text: "By a hierarchical model of objects and containers", correct: true },
      { text: "By random allocation of user accounts", correct: false },
      { text: "By IP addresses and subnets", correct: false },
      { text: "By alphabetical sorting of usernames", correct: false }
    ]
  },
  {
    question: "In order to authenticate user accounts against AD, what must be done to the computer first?",
    answers: [
      { text: "Join it to the domain", correct: true },
      { text: "Install Active Directory on the computer", correct: false },
      { text: "Set up a local user account with the same username", correct: false },
      { text: "Connect the computer to the internet", correct: false }
    ]
  },
  {
    question: "What would you use if you wanted to set a default wallpaper background for all machines in your company, but still wanted users to be able to set their own wallpaper?",
    answers: [
      { text: "A preference", correct: true },
      { text: "A policy", correct: false },
      { text: "A registry key", correct: false },
      { text: "A group membership", correct: false }
    ]
  },
  // True/False Questions
  {
    question: "Directory services only store information about users and computers.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Directories use hierarchical structures to organize and store data.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Objects in a directory inherit attributes only if they are manually assigned.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "LDAP operates over TCP port 389.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Pruning and grafting allow moving the root of a directory to a different location.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },

  // Multiple Choice Questions (MCQs)
  {
    question: "Which of the following is NOT a function of directory services?",
    answers: [
      { text: "A. Centralized authentication for users and systems", correct: false },
      { text: "B. Facilitating single sign-on for applications", correct: false },
      { text: "C. Providing a hierarchical structure for data storage", correct: false },
      { text: "D. Running operating system updates", correct: true },
      { text: "E. Offering granularity of administrative control", correct: false },
    ],
  },
  {
    question: "What distinguishes a leaf object in a directory?",
    answers: [
      { text: "A. It has no parent object.", correct: false },
      { text: "B. It cannot contain other objects.", correct: true },
      { text: "C. It defines schema attributes.", correct: false },
      { text: "D. It represents the root of the directory.", correct: false },
      { text: "E. It inherits all attributes of the directory.", correct: false },
    ],
  },
  {
    question: "Which of the following describes pruning and grafting in a directory?",
    answers: [
      { text: "A. Creating new containers for objects", correct: false },
      { text: "B. Allowing a directory to span multiple geographical locations", correct: false },
      { text: "C. Moving objects between different locations in the directory tree", correct: true },
      { text: "D. Restricting access to specific parts of a directory", correct: false },
      { text: "E. Duplicating attributes of directory objects", correct: false },
    ],
  },
  {
    question: "Which protocol is used for querying and modifying directory information?",
    answers: [
      { text: "A. DNS", correct: false },
      { text: "B. LDAP", correct: true },
      { text: "C. FTP", correct: false },
      { text: "D. HTTP", correct: false },
      { text: "E. SNMP", correct: false },
    ],
  },
  {
    question: "In an LDAP directory naming convention, what does ou represent?",
    answers: [
      { text: "A. Organizational Name", correct: false },
      { text: "B. Organizational Unit", correct: true },
      { text: "C. Organization User", correct: false },
      { text: "D. Overall Unit", correct: false },
      { text: "E. Operating User", correct: false },
    ],
  },
  {
    question: "Directory services only store information about users and computers.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Directories use hierarchical structures to organize and store data.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Objects in a directory inherit attributes only if they are manually assigned.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "LDAP operates over TCP port 389.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Pruning and grafting allow moving the root of a directory to a different location.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Distinguished Names (DNs) in a directory can be either absolute or relative.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "A directory's schema defines the allowable structure and attributes of objects.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "LDAP does not support modifying information in a directory.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Objects in a directory always retain their inherited attributes, even when moved.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Active Directory uses LDAP as its native directory access protocol.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "An organizational unit (OU) can contain leaf objects, but not other OUs.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },

  // Multiple Choice Questions (MCQs)
  {
    question: "Which of the following is NOT a function of directory services?",
    answers: [
      { text: "A. Centralized authentication for users and systems", correct: false },
      { text: "B. Facilitating single sign-on for applications", correct: false },
      { text: "C. Providing a hierarchical structure for data storage", correct: false },
      { text: "D. Running operating system updates", correct: true },
      { text: "E. Offering granularity of administrative control", correct: false },
    ],
  },
  {
    question: "What distinguishes a leaf object in a directory?",
    answers: [
      { text: "A. It has no parent object.", correct: false },
      { text: "B. It cannot contain other objects.", correct: true },
      { text: "C. It defines schema attributes.", correct: false },
      { text: "D. It represents the root of the directory.", correct: false },
      { text: "E. It inherits all attributes of the directory.", correct: false },
    ],
  },
  {
    question: "Which of the following describes pruning and grafting in a directory?",
    answers: [
      { text: "A. Creating new containers for objects", correct: false },
      { text: "B. Allowing a directory to span multiple geographical locations", correct: false },
      { text: "C. Moving objects between different locations in the directory tree", correct: true },
      { text: "D. Restricting access to specific parts of a directory", correct: false },
      { text: "E. Duplicating attributes of directory objects", correct: false },
    ],
  },
  {
    question: "Which protocol is used for querying and modifying directory information?",
    answers: [
      { text: "A. DNS", correct: false },
      { text: "B. LDAP", correct: true },
      { text: "C. FTP", correct: false },
      { text: "D. HTTP", correct: false },
      { text: "E. SNMP", correct: false },
    ],
  },
  {
    question: "In an LDAP directory naming convention, what does ou represent?",
    answers: [
      { text: "A. Organizational Name", correct: false },
      { text: "B. Organizational Unit", correct: true },
      { text: "C. Organization User", correct: false },
      { text: "D. Overall Unit", correct: false },
      { text: "E. Operating User", correct: false },
    ],
  },
  {
    question: "What is an example of a directory protocol?",
    answers: [
      { text: "A. DNS", correct: false },
      { text: "B. LDAP", correct: true },
      { text: "C. DHCP", correct: false },
      { text: "D. TCP/IP", correct: false },
      { text: "E. SNMP", correct: false },
    ],
  },
  {
    question: "Which of the following operations is NOT typically supported by LDAP?",
    answers: [
      { text: "A. Bind", correct: false },
      { text: "B. Add", correct: false },
      { text: "C. Delete", correct: false },
      { text: "D. Modify", correct: false },
      { text: "E. Backup", correct: true },
    ],
  },
  {
    question: "What type of object is an organizational unit (OU) in a directory?",
    answers: [
      { text: "A. A leaf object", correct: false },
      { text: "B. A container object", correct: true },
      { text: "C. A schema object", correct: false },
      { text: "D. A root object", correct: false },
      { text: "E. A standalone object", correct: false },
    ],
  },
  {
    question: "Which of the following is a characteristic of directory-enabled applications?",
    answers: [
      { text: "A. They rely on hierarchical databases.", correct: false },
      { text: "B. They do not interact with external authentication systems.", correct: false },
      { text: "C. They authenticate users using directory information.", correct: true },
      { text: "D. They avoid using single sign-on methods.", correct: false },
      { text: "E. They require manual configuration of each user.", correct: false },
    ],
  },
  {
    question: "Which of the following is NOT an attribute of a printer object in a directory?",
    answers: [
      { text: "A. Color or black-and-white capability", correct: false },
      { text: "B. Available paper sizes", correct: false },
      { text: "C. IP address of the printer", correct: true },
      { text: "D. Duplex printing capability", correct: false },
      { text: "E. Model and make", correct: false },
    ],
  },
  // Multiple Choice Questions
  {
    question: "A company implements a directory service for centralized authentication. Which scenario demonstrates the correct application of this feature?",
    answers: [
      { text: "A. Users log in once and gain access to multiple applications without additional credentials.", correct: true },
      { text: "B. Administrators configure unique credentials for each user across all systems.", correct: false },
      { text: "C. The directory service is only used for network printer configurations.", correct: false },
      { text: "D. The directory service blocks all users not manually added to the firewall.", correct: false },
      { text: "E. The service operates independently of all external applications.", correct: false },
    ],
  },
  {
    question: "An administrator is tasked with enabling secure VPN access for remote employees. Which directory-enabled application functionality is most relevant?",
    answers: [
      { text: "A. Granularity of administrative control", correct: false },
      { text: "B. Storage of digital certificates for authentication", correct: true },
      { text: "C. Moving directory objects between locations", correct: false },
      { text: "D. Schema modification for container objects", correct: false },
      { text: "E. Restricting user access to leaf objects only", correct: false },
    ],
  },
  {
    question: "A network engineer is designing a directory structure for a multinational corporation. What approach should be taken to accommodate geographical locations effectively?",
    answers: [
      { text: "A. Use a functional directory structure with departments as roots.", correct: false },
      { text: "B. Employ a flat directory structure to simplify the design.", correct: false },
      { text: "C. Create separate directory trees for each location.", correct: false },
      { text: "D. Arrange the directory hierarchically by country and region.", correct: true },
      { text: "E. Define a single root with no organizational units for simplicity.", correct: false },
    ],
  },
  {
    question: "A user reports difficulty logging into a shared application. The application relies on the directory for authentication. What is the most likely cause?",
    answers: [
      { text: "A. The user's account is not located in the directory tree.", correct: true },
      { text: "B. The directory service does not support single sign-on.", correct: false },
      { text: "C. The application does not query the directory for user credentials.", correct: false },
      { text: "D. The directory schema is improperly configured.", correct: false },
      { text: "E. The user is attempting to log in from an unauthorized device.", correct: false },
    ],
  },
  {
    question: "An organization wants to simplify user account naming conventions while maintaining uniqueness within each department. What configuration should the administrator implement?",
    answers: [
      { text: "A. Use absolute distinguished names (DNs) for all accounts.", correct: false },
      { text: "B. Define relative distinguished names (RDNs) based on department-specific contexts.", correct: true },
      { text: "C. Configure one schema for the entire directory with no subdivisions.", correct: false },
      { text: "D. Limit inheritance of attributes to root objects only.", correct: false },
      { text: "E. Assign duplicate names to accounts across different locations.", correct: false },
    ],
  },

  // True/False Questions
  {
    question: "Directories provide a single logical view of all network resources regardless of their physical locations.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "In a directory, granularity of administrative control means that all administrators have full control over the entire directory.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Pruning and grafting enable the restructuring of directory trees without affecting the objects' inherited attributes.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "LDAP is designed to operate exclusively over UDP.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Distinguished Names (DNs) include a complete path to the object in the directory tree.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Leaf objects in a directory cannot be further divided into container objects.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Attributes of directory objects are defined by the directory schema.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Relative distinguished names (RDNs) are fully specified paths that begin at the root of the directory.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Active Directory supports integration with Kerberos for authentication.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "A directory service does not allow for multiple authentication methods to be exposed to third-party applications.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  // Additional Multiple Choice Questions
  {
    question: "Which of the following attributes is typically inherited in a directory structure?",
    answers: [
      { text: "A. IP address of a device", correct: false },
      { text: "B. Group membership of a user", correct: false },
      { text: "C. Location-based permissions", correct: true },
      { text: "D. Specific user login credentials", correct: false },
      { text: "E. Print job prioritization", correct: false },
    ],
  },
  {
    question: "Which layer in a typical directory naming convention represents the organization name?",
    answers: [
      { text: "A. c", correct: false },
      { text: "B. o", correct: true },
      { text: "C. ou", correct: false },
      { text: "D. cn", correct: false },
      { text: "E. sn", correct: false },
    ],
  },
  {
    question: "What is a unique feature of directory-enabled applications?",
    answers: [
      { text: "A. They are standalone and do not require authentication.", correct: false },
      { text: "B. They synchronize data across multiple directory systems.", correct: false },
      { text: "C. They rely on directories for user logon and authentication.", correct: true },
      { text: "D. They bypass schema-defined attributes.", correct: false },
      { text: "E. They store data independently from the directory.", correct: false },
    ],
  },
  {
    question: "What happens when a directory object's inherited attributes are incorrectly configured?",
    answers: [
      { text: "A. The directory object becomes inaccessible.", correct: false },
      { text: "B. The object loses its absolute distinguished name.", correct: false },
      { text: "C. The object may not conform to administrative policies.", correct: true },
      { text: "D. The schema of the directory is reset.", correct: false },
      { text: "E. The directory tree collapses into a flat structure.", correct: false },
    ],
  },
  {
    question: "Why are distinguished names important in directory services?",
    answers: [
      { text: "A. They assign static permissions to objects.", correct: false },
      { text: "B. They ensure uniqueness of objects within the directory.", correct: true },
      { text: "C. They replace schema attributes for identification.", correct: false },
      { text: "D. They allow dynamic changes to object locations.", correct: false },
      { text: "E. They enforce security policies across the network.", correct: false },
    ],
  },

  // Additional True/False Questions
  {
    question: "A schema defines the types of attributes and objects a directory can contain.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Container objects cannot be nested within other container objects.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Relative distinguished names (RDNs) require the directory context to be set for resolution.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "An object's absolute distinguished name (DN) includes its position from the directory root.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Directories typically use flat structures rather than hierarchical ones.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },

  // Additional Application-Based Questions
  {
    "question": "Identify the Absolute Distinguished Name (DN) in the following examples:",
    "answers": [
      { "text": "A. .companyx.us.finance.sarahbrown", "correct": true },
      { "text": "B. .hr.sarahbrown", "correct": false },
      { "text": "C. .companyx.uk", "correct": false },
      { "text": "D. .finance.johndoe", "correct": false },
      { "text": "E. .companyx.context.sarah", "correct": false }
    ]
  }
{
    question: "Which of the following illustrates a Relative Distinguished Name (RDN) within the Finance context?",
    answers: [
      { text: "A. cn=Mike Johnson, ou=Finance, o=CorpX, c=US", correct: false },
      { text: "B. cn=Mike Johnson, ou=Finance", correct: false },
      { text: "C. o=CorpX, c=UK", correct: false },
      { text: "D. Mike relative to ou=Finance", correct: true },
      { text: "E. context=CorpX.Mike", correct: false },
    ],
  },

];

// Additional Multiple Choice Questions
questionBank.push(
  {
    question: "What is the purpose of a Directory System Agent (DSA) in X.500 directories?",
    answers: [
      { text: "To authenticate users across the directory", correct: false },
      { text: "To provide an interface for applications to query directory data", correct: false },
      { text: "To facilitate communication between directory services", correct: true },
      { text: "To act as a schema management tool", correct: false },
      { text: "To enforce hierarchical permissions", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of an object attribute in a directory?",
    answers: [
      { text: "Container name", correct: false },
      { text: "Printer paper size", correct: true },
      { text: "Distinguished name format", correct: false },
      { text: "Organizational unit location", correct: false },
      { text: "Directory protocol", correct: false }
    ]
  },
  {
    question: "What directory component is typically used to group users and resources based on department or function?",
    answers: [
      { text: "Leaf objects", correct: false },
      { text: "Organizational Units (OUs)", correct: true },
      { text: "Schema definitions", correct: false },
      { text: "Distinguished names", correct: false },
      { text: "Namespace roots", correct: false }
    ]
  },
  {
    question: "Which feature is essential for enabling directory-based single sign-on (SSO)?",
    answers: [
      { text: "Integration with LDAP over UDP", correct: false },
      { text: "Directory schema customization", correct: false },
      { text: "Centralized authentication protocols", correct: true },
      { text: "Pruning and grafting of directory objects", correct: false },
      { text: "Use of alias objects", correct: false }
    ]
  },
  {
    question: "In LDAP operations, which function is used to verify directory credentials?",
    answers: [
      { text: "Modify", correct: false },
      { text: "Search", correct: false },
      { text: "Compare", correct: false },
      { text: "Bind", correct: true },
      { text: "Unbind", correct: false }
    ]
  }
);

// Additional True/False Questions
questionBank.push(
  {
    question: "Directory services allow the use of alias objects to reference other entries in the directory.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "An organizational unit (OU) in a directory can contain other OUs but cannot contain leaf objects.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "The X.500 directory standard introduced the concepts of a tree, leaf objects, and distinguished names.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "Pruning and grafting allow administrators to duplicate objects in multiple directory locations.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "Attributes such as location or department can help directories organize and manage objects effectively.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  }
);

// True/False Questions
questionBank.push(
  {
    question: "LDAP uses TCP port 636 for secure communication.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "A directory schema defines both the attributes and the hierarchical structure of objects.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "Alias objects in a directory can point to other directory entries without storing their data.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "Pruning and grafting in a directory can only move individual users, not entire groups or sections.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "Organizational units (OUs) can be nested within other OUs to reflect a hierarchy.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  }
);

// Multiple Choice Questions
questionBank.push(
  {
    question: "What is a primary benefit of using a hierarchical structure in directories?",
    answers: [
      { text: "Reduces administrative effort by simplifying permissions", correct: false },
      { text: "Supports flat and linear naming conventions", correct: false },
      { text: "Provides a single logical view of network resources", correct: true },
      { text: "Limits the scope of directories to small organizations", correct: false },
      { text: "Ensures that objects cannot inherit attributes", correct: false }
    ]
  },
  {
    question: "Which of the following is an example of an alias object in a directory?",
    answers: [
      { text: "A reference to a user account with full data storage", correct: false },
      { text: "A printer object pointing to another printer in a different location", correct: true },
      { text: "A container object used to group organizational units", correct: false },
      { text: "A schema definition for leaf objects", correct: false },
      { text: "A distinguished name with a context", correct: false }
    ]
  },
  {
    question: "Which operation is NOT supported by LDAP?",
    answers: [
      { text: "Bind", correct: false },
      { text: "Search", correct: false },
      { text: "Delete", correct: false },
      { text: "Print", correct: true },
      { text: "Modify", correct: false }
    ]
  },
  {
    question: "In directory terminology, what does 'pruning' refer to?",
    answers: [
      { text: "Adding new objects to a container", correct: false },
      { text: "Moving objects from one directory location to another", correct: true },
      { text: "Deleting an entire directory structure", correct: false },
      { text: "Assigning permissions to an organizational unit", correct: false },
      { text: "Removing schema definitions from leaf objects", correct: false }
    ]
  },
  {
    question: "Which naming convention example reflects an Absolute Distinguished Name (DN) using LDAP?",
    answers: [
      { text: "cn=John Doe, ou=Sales, o=Company, c=US", correct: true },
      { text: "cn=John, ou=Sales relative to o=Company", correct: false },
      { text: ".Sales.JohnDoe", correct: false },
      { text: "context=Sales.Company.US.John", correct: false },
      { text: "Sales.o=Company", correct: false }
    ]
  }
);
