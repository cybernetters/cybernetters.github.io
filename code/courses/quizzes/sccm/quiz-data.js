const questionBank = [
  {
    "question": "What is the primary function of BranchCache in Windows?",
    "answers": [
      { "text": "Block malicious files", "correct": false },
      { "text": "Cache WAN content locally for branch offices", "correct": true },
      { "text": "Synchronize software updates", "correct": false },
      { "text": "Enhance SQL Server functionality", "correct": false },
      { "text": "Manage AD configurations", "correct": false }
    ]
  },
  {
    "question": "Which of the following technologies does SCCM use to manage network bandwidth?",
    "answers": [
      { "text": "IIS and SQL Server", "correct": false },
      { "text": "BITS and BranchCache", "correct": true },
      { "text": "PowerShell scripts", "correct": false },
      { "text": "AD replication", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "SCCM relies primarily on which of the following to synchronize software updates across sites?",
    "answers": [
      { "text": "AD Schema", "correct": false },
      { "text": "WSUS", "correct": true },
      { "text": "SQL Server", "correct": false },
      { "text": "IIS", "correct": false },
      { "text": "BranchCache", "correct": false }
    ]
  },
  {
    "question": "Which SCCM tool is used to capture an image of the operating system?",
    "answers": [
      { "text": "Create Deployment Type Wizard", "correct": false },
      { "text": "Task Sequence", "correct": true },
      { "text": "Application Deployment Flow", "correct": false },
      { "text": "SQL Server Reporting Services", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which of the following is not a key capability of SCCM?",
    "answers": [
      { "text": "Application Management", "correct": false },
      { "text": "Remote Control", "correct": false },
      { "text": "Enhanced WAN connectivity", "correct": true },
      { "text": "OS Deployment", "correct": false },
      { "text": "Software Updates", "correct": false }
    ]
  },
  {
    "question": "In SCCM, which wizard is used to create multiple deployment types for an application?",
    "answers": [
      { "text": "Deploy Software Wizard", "correct": false },
      { "text": "Create Deployment Type Wizard", "correct": true },
      { "text": "Monitoring Wizard", "correct": false },
      { "text": "Configuration Wizard", "correct": false },
      { "text": "Software Synchronization Wizard", "correct": false }
    ]
  },
  {
    "question": "What is the role of SQL Server in SCCM?",
    "answers": [
      { "text": "To extend the AD schema", "correct": false },
      { "text": "To manage application deployment", "correct": false },
      { "text": "To serve as a distributed change management database", "correct": true },
      { "text": "To optimize WAN bandwidth", "correct": false },
      { "text": "To synchronize endpoints", "correct": false }
    ]
  },
  {
    "question": "Which of the following editions include BranchCache functionality?",
    "answers": [
      { "text": "Windows Server 2008 only", "correct": false },
      { "text": "All Windows editions", "correct": false },
      { "text": "Some editions of Windows Server and client OS (7, 8, 10)", "correct": true },
      { "text": "SQL Server Standard Edition", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which SCCM feature enables administrators to monitor license usage?",
    "answers": [
      { "text": "Endpoint Protection", "correct": false },
      { "text": "Inventory", "correct": true },
      { "text": "Reporting", "correct": false },
      { "text": "Software Updates", "correct": false },
      { "text": "Application Management", "correct": false }
    ]
  },
  {
    "question": "What is the first step in SCCM's OS deployment process?",
    "answers": [
      { "text": "Create a task sequence", "correct": false },
      { "text": "Capture an OS image", "correct": false },
      { "text": "Identify required drivers", "correct": true },
      { "text": "Distribute boot images", "correct": false },
      { "text": "Extend AD schema", "correct": false }
    ]
  },
  {
    "question": "What tool is used to extend the schema in Active Directory for SCCM?",
    "answers": [
      { "text": "SCCM Console", "correct": false },
      { "text": "ADSI Edit", "correct": true },
      { "text": "WSUS", "correct": false },
      { "text": "IIS", "correct": false },
      { "text": "SQL Server", "correct": false }
    ]
  },
  {
    "question": "Which of the following best describes the purpose of BITS in SCCM?",
    "answers": [
      { "text": "Optimize WAN caching", "correct": false },
      { "text": "Transfer files asynchronously", "correct": true },
      { "text": "Collect inventory data", "correct": false },
      { "text": "Synchronize software updates", "correct": false },
      { "text": "Configure AD security", "correct": false }
    ]
  },
  {
    "question": "Which of the following SCCM tools monitors software updates not found in WSUS?",
    "answers": [
      { "text": "Create Deployment Type Wizard", "correct": false },
      { "text": "Reporting Services", "correct": false },
      { "text": "Network Access Protection", "correct": false },
      { "text": "Software Updates", "correct": true },
      { "text": "BranchCache", "correct": false }
    ]
  },
  {
    "question": "In SCCM, what is the purpose of simulated deployments?",
    "answers": [
      { "text": "Testing application deployment applicability", "correct": true },
      { "text": "Monitoring software updates", "correct": false },
      { "text": "Synchronizing AD settings", "correct": false },
      { "text": "Configuring firewall settings", "correct": false },
      { "text": "Extending schema", "correct": false }
    ]
  },
  {
    "question": "Which of the following prerequisites must be installed before deploying SCCM?",
    "answers": [
      { "text": "WSUS only", "correct": false },
      { "text": "SQL Server, IIS, .NET", "correct": true },
      { "text": "BranchCache and PowerShell", "correct": false },
      { "text": "BITS only", "correct": false },
      { "text": "AD Schema Extensions", "correct": false }
    ]
  },
  {
    "question": "What type of updates does SCCM manage that WSUS does not typically support?",
    "answers": [
      { "text": "Security updates", "correct": false },
      { "text": "Hardware inventory updates", "correct": false },
      { "text": "Additional software updates", "correct": true },
      { "text": "Active Directory updates", "correct": false },
      { "text": "Printer driver updates", "correct": false }
    ]
  },
  {
    "question": "What functionality does the Create Application Wizard provide in SCCM?",
    "answers": [
      { "text": "Extends schema", "correct": false },
      { "text": "Creates deployment types", "correct": false },
      { "text": "Manages endpoint protection", "correct": false },
      { "text": "Creates applications", "correct": true },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "How does SCCM manage power settings for client devices?",
    "answers": [
      { "text": "Through AD Group Policy", "correct": false },
      { "text": "Using a task sequence", "correct": false },
      { "text": "As part of its power management capability", "correct": true },
      { "text": "Via software updates", "correct": false },
      { "text": "Using BranchCache", "correct": false }
    ]
  },
  {
    "question": "How often does Heartbeat Discovery typically occur in a production SCCM environment?",
    "answers": [
      { "text": "Every hour", "correct": false },
      { "text": "Every day", "correct": false },
      { "text": "Every week", "correct": true },
      { "text": "Every month", "correct": false },
      { "text": "It must be manually triggered", "correct": false }
    ]
  },
  {
    "question": "What is a critical step before deploying SCCM clients to computers?",
    "answers": [
      { "text": "Monitor deployment", "correct": false },
      { "text": "Synchronize WSUS updates", "correct": false },
      { "text": "Discover client computers", "correct": true },
      { "text": "Install IIS", "correct": false },
      { "text": "Create an OS task sequence", "correct": false }
    ]
  },
  {
    "question": "BranchCache reduces WAN bandwidth usage by caching content locally.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "BITS is used for synchronizing Active Directory settings in SCCM.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "SCCM uses SQL Server for reporting and data management.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "BranchCache can be used on all editions of Windows.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "WSUS is required for SCCM to manage software updates.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "IIS is not a prerequisite for SCCM installation.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "SCCM supports deploying OS images to multiple devices.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Deploy Software Wizard allows application uninstallations.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Heartbeat Discovery in SCCM is used for collecting hardware inventory data.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "SQL Server Reporting Services provide detailed logs of OS deployments.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "AD schema extensions are optional for SCCM deployment.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "BranchCache is optimized for WAN and branch offices.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "SCCM cannot manage endpoint firewalls or anti-malware settings.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "WSUS synchronizes updates across sites, which SCCM can enhance.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Simulated deployments ensure an application is safe before real deployment.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Task sequences in SCCM are only used for updating applications.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "SCCM's primary role is WAN optimization.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "BITS supports resuming file transfers after interruptions.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "SQL Server must be installed on the same server as SCCM.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "IIS is required to provide SCCM management functionalities.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Your organization plans to use SCCM for deploying applications across all client computers. What wizard would you use first?",
    "answers": [
      { "text": "Task Sequence Wizard", "correct": false },
      { "text": "Create Application Wizard", "correct": true },
      { "text": "Software Updates Wizard", "correct": false },
      { "text": "Deploy Software Wizard", "correct": false },
      { "text": "Inventory Wizard", "correct": false }
    ]
  },
  {
    "question": "A remote branch office is experiencing slow WAN speeds. Which SCCM feature would you recommend enabling?",
    "answers": [
      { "text": "Endpoint Protection", "correct": false },
      { "text": "Task Sequences", "correct": false },
      { "text": "BranchCache", "correct": true },
      { "text": "SQL Server Reporting", "correct": false },
      { "text": "BITS", "correct": false }
    ]
  },
  {
    "question": "You need to ensure SCCM client installation begins within hours of discovery. What setting would you adjust?",
    "answers": [
      { "text": "Heartbeat Discovery frequency", "correct": true },
      { "text": "Task Sequence schedule", "correct": false },
      { "text": "WSUS synchronization", "correct": false },
      { "text": "Reporting services", "correct": false },
      { "text": "Boot image configuration", "correct": false }
    ]
  },
  {
    "question": "What is the most appropriate feature for managing compliance of security settings in SCCM?",
    "answers": [
      { "text": "OS Deployment", "correct": false },
      { "text": "Endpoint Protection", "correct": true },
      { "text": "Reporting", "correct": false },
      { "text": "Power Management", "correct": false },
      { "text": "Application Management", "correct": false }
    ]
  },
  {
    "question": "You need to capture an image of a custom Windows OS for deployment. Which SCCM feature would you use?",
    "answers": [
      { "text": "Create Deployment Type Wizard", "correct": false },
      { "text": "Task Sequence", "correct": true },
      { "text": "Application Wizard", "correct": false },
      { "text": "Reporting Console", "correct": false },
      { "text": "BranchCache", "correct": false }
    ]
  },
  {
    "question": "What SCCM feature would you use to assess whether an update is installed on a client computer?",
    "answers": [
      { "text": "Endpoint Protection", "correct": false },
      { "text": "Inventory", "correct": false },
      { "text": "Reporting", "correct": false },
      { "text": "Software Updates", "correct": true },
      { "text": "Create Deployment Type Wizard", "correct": false }
    ]
  },
  {
    "question": "To optimize bandwidth, you want to deploy large updates during off-peak hours. Which tool in SCCM is most relevant?",
    "answers": [
      { "text": "Software Updates", "correct": true },
      { "text": "BranchCache", "correct": false },
      { "text": "Deploy Software Wizard", "correct": false },
      { "text": "Reporting", "correct": false },
      { "text": "Heartbeat Discovery", "correct": false }
    ]
  },
  {
    "question": "What is the role of WSUS in SCCM’s software update management?",
    "answers": [
      { "text": "Configures SQL Server databases", "correct": false },
      { "text": "Provides tools for OS image deployment", "correct": false },
      { "text": "Synchronizes updates across sites", "correct": true },
      { "text": "Manages endpoint firewalls", "correct": false },
      { "text": "Monitors client devices", "correct": false }
    ]
  },
  {
    "question": "You must ensure that SCCM can use SQL Server Reporting for detailed data analysis. What prerequisite must be installed?",
    "answers": [
      { "text": "WSUS", "correct": false },
      { "text": "IIS", "correct": true },
      { "text": "BranchCache", "correct": false },
      { "text": "BITS", "correct": false },
      { "text": "Power Management", "correct": false }
    ]
  },
  {
    "question": "Your team wants to test application compatibility before deployment. Which SCCM feature is appropriate?",
    "answers": [
      { "text": "Simulated Deployment", "correct": true },
      { "text": "Task Sequence", "correct": false },
      { "text": "Heartbeat Discovery", "correct": false },
      { "text": "OS Deployment", "correct": false },
      { "text": "Endpoint Protection", "correct": false }
    ]
  }
  
];
  
