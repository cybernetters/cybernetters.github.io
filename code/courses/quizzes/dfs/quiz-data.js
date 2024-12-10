const questionBank = [
  {
    "question": "Which of the following is a core component of DFS?",
    "answers": [
      { "text": "Universal Naming Convention", "correct": false },
      { "text": "Namespace", "correct": true },
      { "text": "Target Server", "correct": false },
      { "text": "Active Directory", "correct": false },
      { "text": "Referral", "correct": false }
    ]
  },
  {
    "question": "DFS started in which version of Windows Server?",
    "answers": [
      { "text": "Windows Server 2003", "correct": false },
      { "text": "Windows Server 2016", "correct": false },
      { "text": "Windows NT Server 4.0", "correct": true },
      { "text": "Windows Server 2008", "correct": false },
      { "text": "Windows Server 2012", "correct": false }
    ]
  },
  {
    "question": "What is required to create a Domain-Based DFS Namespace?",
    "answers": [
      { "text": "Active Directory", "correct": true },
      { "text": "Universal Naming Convention", "correct": false },
      { "text": "DFS Replication", "correct": false },
      { "text": "Standalone DFS", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "A DFS Folder without targets is used for:",
    "answers": [
      { "text": "Hosting data", "correct": false },
      { "text": "Referrals to network shares", "correct": false },
      { "text": "Creating namespace hierarchy", "correct": true },
      { "text": "Managing storage space", "correct": false },
      { "text": "Delegating management", "correct": false }
    ]
  },
  {
    "question": "What tool is used to manage DFS namespaces?",
    "answers": [
      { "text": "Server Manager", "correct": false },
      { "text": "DFS Management tool", "correct": true },
      { "text": "Sites and Services tool", "correct": false },
      { "text": "Active Directory Manager", "correct": false },
      { "text": "File Explorer", "correct": false }
    ]
  },
  {
    "question": "What happens during a DFS Referral process?",
    "answers": [
      { "text": "A target is deleted from the namespace", "correct": false },
      { "text": "A client is pointed to a specific network share", "correct": true },
      { "text": "Replication groups are scheduled", "correct": false },
      { "text": "Namespace folders are cached", "correct": false },
      { "text": "Redundant data is removed", "correct": false }
    ]
  },
  {
    "question": "In Standalone Namespaces, how many namespaces can be created on a single server?",
    "answers": [
      { "text": "Multiple", "correct": false },
      { "text": "Two", "correct": false },
      { "text": "One", "correct": true },
      { "text": "Unlimited", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which role must be installed to use DFS in Windows Server 2016?",
    "answers": [
      { "text": "Active Directory Services", "correct": false },
      { "text": "File and Storage Services", "correct": true },
      { "text": "Remote Desktop Services", "correct": false },
      { "text": "IIS Role", "correct": false },
      { "text": "Hyper-V Role", "correct": false }
    ]
  },
  {
    "question": "What is the naming format used in DFS for network paths?",
    "answers": [
      { "text": "IP-based Format", "correct": false },
      { "text": "Universal Naming Convention", "correct": true },
      { "text": "Domain Name System", "correct": false },
      { "text": "Namespace String", "correct": false },
      { "text": "Server Path Format", "correct": false }
    ]
  },
  {
    "question": "A key benefit of DFS is:",
    "answers": [
      { "text": "Increased client-side storage management", "correct": false },
      { "text": "Centralized control of IP addresses", "correct": false },
      { "text": "Consistent appearance of data for users", "correct": true },
      { "text": "Reduced bandwidth for replication", "correct": false },
      { "text": "Automated backup processes", "correct": false }
    ]
  },
  {
    "question": "Which of these tasks is involved in managing a DFS namespace root?",
    "answers": [
      { "text": "Deleting folder targets", "correct": false },
      { "text": "Using DFS Replication", "correct": true },
      { "text": "Running PowerShell scripts", "correct": false },
      { "text": "Renaming Active Directory objects", "correct": false },
      { "text": "Enabling server pooling", "correct": false }
    ]
  },
  {
    "question": "What defines a Namespace Server?",
    "answers": [
      { "text": "A server hosting all shared data", "correct": false },
      { "text": "A server that contains the namespace root", "correct": true },
      { "text": "A server with the referral process", "correct": false },
      { "text": "Any server with Active Directory", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "A domain-based namespace server uses what as its name?",
    "answers": [
      { "text": "The server hostname", "correct": false },
      { "text": "The DNS name of the domain", "correct": true },
      { "text": "The IP address of the namespace server", "correct": false },
      { "text": "A custom alias defined during setup", "correct": false },
      { "text": "The UNC path of the share", "correct": false }
    ]
  },
  {
    "question": "What feature allows DFS clients to connect to a closer network share?",
    "answers": [
      { "text": "Site-awareness", "correct": true },
      { "text": "Target Prioritization", "correct": false },
      { "text": "Dynamic Replication", "correct": false },
      { "text": "Namespace Delegation", "correct": false },
      { "text": "Bandwidth Limitation", "correct": false }
    ]
  },
  {
    "question": "Which of these is not a DFS Namespace type?",
    "answers": [
      { "text": "Standalone", "correct": false },
      { "text": "Active Directory-based", "correct": false },
      { "text": "Domain-based", "correct": false },
      { "text": "Local Server-based", "correct": true },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What is a DFS target?",
    "answers": [
      { "text": "A process to configure referrals", "correct": false },
      { "text": "A shared folder within the namespace", "correct": true },
      { "text": "A namespace root folder", "correct": false },
      { "text": "A server used for site-awareness", "correct": false },
      { "text": "A replication schedule", "correct": false }
    ]
  },
  {
    "question": "What is a primary benefit of DFS Replication?",
    "answers": [
      { "text": "Centralized backups", "correct": false },
      { "text": "Automatic data replication across targets", "correct": true },
      { "text": "Server pooling for client requests", "correct": false },
      { "text": "Automatic namespace creation", "correct": false },
      { "text": "Improved namespace hierarchy", "correct": false }
    ]
  },
  {
    "question": "Which replication option is not configurable in DFS?",
    "answers": [
      { "text": "Scheduling time", "correct": false },
      { "text": "Bandwidth limitation", "correct": false },
      { "text": "Number of referrals", "correct": true },
      { "text": "Selection of primary group member", "correct": false },
      { "text": "Target hierarchy", "correct": false }
    ]
  },
  {
    "question": "Namespace tuning does not include which option?",
    "answers": [
      { "text": "Configuring referral order", "correct": false },
      { "text": "Namespace polling configuration", "correct": false },
      { "text": "Adjusting bandwidth for replication", "correct": true },
      { "text": "Cache duration for folders", "correct": false },
      { "text": "Disabling folder targets", "correct": false }
    ]
  },
  {
    "question": "Which is not a reason for implementing DFS?",
    "answers": [
      { "text": "Simplified data access", "correct": false },
      { "text": "Reducing user-side storage costs", "correct": true },
      { "text": "Leveraging free server disk space", "correct": false },
      { "text": "Consistent naming of shares", "correct": false },
      { "text": "Reducing reconfiguration needs", "correct": false }
    ]
  },
  {
    "question": "DFS Namespaces require Active Directory to function.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Namespace folders can be virtual or refer to actual data targets.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "DFS replication works automatically without configuration.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A standalone namespace can be created without Active Directory.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "DFS simplifies user access to distributed shares.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Only a single domain-based namespace can exist per domain.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "DFS folders must always have targets for hierarchy creation.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Namespace servers can refer clients to closer targets based on their site.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "DFS inherently provides backup solutions.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Namespace polling duration is a configurable option.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Redundant targets improve reliability in DFS.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "DFS is only available in Windows Server 2016 and later.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "DFS replication limits bandwidth by default.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "DFS tuning involves setting referral priorities.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Namespace management can be delegated to other users.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "DFS replication can synchronize targets in real-time.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Virtual folders in DFS are used to hold data.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "DFS site-awareness improves access speed.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Replication group limits include scheduling and bandwidth.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A DFS root is automatically created during namespace installation.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A user reports slow access to files in a DFS Namespace. What feature should you check to ensure optimal access speed?",
    "answers": [
      { "text": "Replication schedules", "correct": false },
      { "text": "Site-awareness", "correct": true },
      { "text": "Cache duration", "correct": false },
      { "text": "Referral hierarchy", "correct": false },
      { "text": "Bandwidth limitations", "correct": false }
    ]
  },
  {
    "question": "During DFS replication, how should the primary group member be selected?",
    "answers": [
      { "text": "Based on server with the highest bandwidth", "correct": false },
      { "text": "Based on geographic proximity", "correct": false },
      { "text": "Based on the most current data", "correct": true },
      { "text": "Randomly to balance load", "correct": false },
      { "text": "Based on network administrator preference", "correct": false }
    ]
  },
  {
    "question": "An administrator wants to delegate management of DFS. What is the first step?",
    "answers": [
      { "text": "Right-click the namespace and select 'Delegate Management Permissions'", "correct": true },
      { "text": "Add the manager to the Active Directory group", "correct": false },
      { "text": "Modify the referral process", "correct": false },
      { "text": "Configure folder targets for delegation", "correct": false },
      { "text": "Create a new namespace folder", "correct": false }
    ]
  },
  {
    "question": "You are implementing redundancy in a namespace. Which of the following must you ensure?",
    "answers": [
      { "text": "Active Directory integration", "correct": false },
      { "text": "Synchronized targets", "correct": true },
      { "text": "Automatic site-awareness", "correct": false },
      { "text": "Bandwidth allocation", "correct": false },
      { "text": "Namespace tuning", "correct": false }
    ]
  },
  {
    "question": "A company wants to ensure that users only see updated data across DFS. Which feature should they prioritize?",
    "answers": [
      { "text": "Referral cache settings", "correct": false },
      { "text": "Regular replication scheduling", "correct": true },
      { "text": "Configuring primary group member", "correct": false },
      { "text": "Namespace polling intervals", "correct": false },
      { "text": "File and Storage Services role installation", "correct": false }
    ]
  },
  {
    "question": "While configuring a namespace, an administrator notices some folders cannot hold data. What is the issue?",
    "answers": [
      { "text": "The folders lack targets", "correct": true },
      { "text": "Active Directory is not installed", "correct": false },
      { "text": "Referral cache is misconfigured", "correct": false },
      { "text": "Namespace polling is disabled", "correct": false },
      { "text": "The folders are set as standalone", "correct": false }
    ]
  },
  {
    "question": "Which tool would you use to troubleshoot DFS replication issues?",
    "answers": [
      { "text": "Event Viewer", "correct": false },
      { "text": "DFS Management tool", "correct": false },
      { "text": "Active Directory Sites and Services", "correct": false },
      { "text": "Server Manager", "correct": false },
      { "text": "Windows PowerShell", "correct": true }
    ]
  },
  {
    "question": "To ensure high availability in a DFS Namespace, what feature is essential?",
    "answers": [
      { "text": "Multiple namespace roots", "correct": false },
      { "text": "Delegated management", "correct": false },
      { "text": "Referral hierarchy", "correct": false },
      { "text": "Redundant targets", "correct": true },
      { "text": "Site-awareness", "correct": false }
    ]
  },
  {
    "question": "A newly created namespace is not visible to users. What should the administrator check first?",
    "answers": [
      { "text": "Folder target configuration", "correct": false },
      { "text": "Namespace polling intervals", "correct": false },
      { "text": "DFS root share permissions", "correct": true },
      { "text": "Replication group limits", "correct": false },
      { "text": "Cache duration settings", "correct": false }
    ]
  },
  {
    "question": "An organization wants to save on WAN bandwidth during replication. What should they configure?",
    "answers": [
      { "text": "Site-awareness", "correct": false },
      { "text": "Bandwidth limits in replication groups", "correct": true },
      { "text": "Cache duration for namespace folders", "correct": false },
      { "text": "Tuning referral order", "correct": false },
      { "text": "Automatic replication schedules", "correct": false }
    ]
  }
];
