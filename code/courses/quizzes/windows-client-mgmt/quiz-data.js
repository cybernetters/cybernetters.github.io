const questionBank = [
  {
    "question": "Which of the following is a key benefit of system imaging?",
    "answers": [
      { "text": "Increased software diversity", "correct": false },
      { "text": "Reduced time for individual installations", "correct": true },
      { "text": "Improved hardware lifespan", "correct": false },
      { "text": "Decreased need for software audits", "correct": false },
      { "text": "Elimination of hardware issues", "correct": false }
    ]
  },
  {
    "question": "What utility is used during image preparation to remove identifying information?",
    "answers": [
      { "text": "SCCM", "correct": false },
      { "text": "WSUS", "correct": false },
      { "text": "sysprep", "correct": true },
      { "text": "Acronis True Image", "correct": false },
      { "text": "PING", "correct": false }
    ]
  },
  {
    "question": "Which technology is specifically mentioned as an example for software imaging?",
    "answers": [
      { "text": "IBM Tivoli", "correct": false },
      { "text": "Symantec Ghost", "correct": true },
      { "text": "Microsoft Update", "correct": false },
      { "text": "Oracle VirtualBox", "correct": false },
      { "text": "VMware Workstation", "correct": false }
    ]
  },
  {
    "question": "Why is hardware consistency crucial in enterprise IT?",
    "answers": [
      { "text": "To reduce network latency", "correct": false },
      { "text": "To ensure hardware lifespan consistency", "correct": false },
      { "text": "To facilitate imaging and software distribution", "correct": true },
      { "text": "To prevent hardware upgrades", "correct": false },
      { "text": "To maximize CPU efficiency", "correct": false }
    ]
  },
  {
    "question": "Which installation method requires a .msi file and Group Policy Object (GPO)?",
    "answers": [
      { "text": "Manual installation", "correct": false },
      { "text": "Install from a server", "correct": false },
      { "text": "Install using Group Policy", "correct": true },
      { "text": "Virtual Desktop Infrastructure", "correct": false },
      { "text": "Install remotely", "correct": false }
    ]
  },
  {
    "question": "Which of these is a primary advantage of automatic installation and distribution?",
    "answers": [
      { "text": "Elimination of hardware issues", "correct": false },
      { "text": "No user intervention required", "correct": true },
      { "text": "Improved manual troubleshooting", "correct": false },
      { "text": "Enhanced patching accuracy", "correct": false },
      { "text": "Increased software diversity", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of Windows Server Update Services (WSUS)?",
    "answers": [
      { "text": "To run applications from a server", "correct": false },
      { "text": "To automate software distribution", "correct": false },
      { "text": "To manage and test Windows updates", "correct": true },
      { "text": "To create software images", "correct": false },
      { "text": "To configure hardware consistency", "correct": false }
    ]
  },
  {
    "question": "What is the primary risk of untested automatic patch installations in enterprises?",
    "answers": [
      { "text": "Increased labor costs", "correct": false },
      { "text": "Conflicts with required applications", "correct": true },
      { "text": "Hardware incompatibility", "correct": false },
      { "text": "Decreased system uptime", "correct": false },
      { "text": "Licensing issues", "correct": false }
    ]
  },
  {
    "question": "Which port is the default for WSUS from version 10 onwards?",
    "answers": [
      { "text": "TCP 443", "correct": false },
      { "text": "TCP 8080", "correct": false },
      { "text": "TCP 8530", "correct": true },
      { "text": "UDP 8000", "correct": false },
      { "text": "UDP 8020", "correct": false }
    ]
  },
  {
    "question": "What is a critical challenge with purchasing machines over time for enterprise IT?",
    "answers": [
      { "text": "Increased software diversity", "correct": false },
      { "text": "Decreased performance consistency", "correct": false },
      { "text": "Inability to use group policies", "correct": false },
      { "text": "Variability in hardware configurations", "correct": true },
      { "text": "Need for advanced installation methods", "correct": false }
    ]
  },
  {
    "question": "What is a recommended practice to maintain hardware consistency?",
    "answers": [
      { "text": "Use consumer-class hardware", "correct": false },
      { "text": "Purchase machines sporadically", "correct": false },
      { "text": "Perform hardware audits periodically", "correct": true },
      { "text": "Avoid upgrades", "correct": false },
      { "text": "Use different models for different departments", "correct": false }
    ]
  },
  {
    "question": "What type of installation is best suited for small client bases with less than 20 devices?",
    "answers": [
      { "text": "Group Policy-based installation", "correct": false },
      { "text": "Manual installation", "correct": true },
      { "text": "Automated installation", "correct": false },
      { "text": "Virtualized desktops", "correct": false },
      { "text": "WSUS-based installation", "correct": false }
    ]
  },
  {
    "question": "Which of the following is not a feature of business-class hardware?",
    "answers": [
      { "text": "Longer lifespans", "correct": false },
      { "text": "Easier to expand", "correct": false },
      { "text": "Consistent hardware", "correct": false },
      { "text": "Lower cost than consumer models", "correct": true },
      { "text": "Better warranties", "correct": false }
    ]
  },
  {
    "question": "What is the first step in creating a system image?",
    "answers": [
      { "text": "Prepare the system using sysprep", "correct": false },
      { "text": "Restart into the pre-installation environment", "correct": false },
      { "text": "Install Windows and applications on the base machine", "correct": true },
      { "text": "Distribute the image to other systems", "correct": false },
      { "text": "Copy the image using network boot", "correct": false }
    ]
  },
  {
    "question": "What is a common method for distributing images over a network?",
    "answers": [
      { "text": "Manual hard drive copies", "correct": false },
      { "text": "Directly booting into BIOS", "correct": false },
      { "text": "Configuring computers to 'network boot'", "correct": true },
      { "text": "Using .msi files with GPO", "correct": false },
      { "text": "Installing applications remotely", "correct": false }
    ]
  },
  {
    "question": "Which technology is a formal example of automatic software distribution?",
    "answers": [
      { "text": "Microsoft SMS", "correct": false },
      { "text": "Acronis True Image", "correct": false },
      { "text": "Windows Update", "correct": false },
      { "text": "Symantec Ghost", "correct": false },
      { "text": "SCCM", "correct": true }
    ]
  },
  {
    "question": "What additional step is required for server-based application installation?",
    "answers": [
      { "text": "Installing sysprep", "correct": false },
      { "text": "Removing duplicate SIDs", "correct": false },
      { "text": "Adding local shortcuts on clients", "correct": true },
      { "text": "Creating a system image", "correct": false },
      { "text": "Running the application directly on the server", "correct": false }
    ]
  },
  {
    "question": "Which term best describes WSUS?",
    "answers": [
      { "text": "Software audit tool", "correct": false },
      { "text": "Update distribution mechanism", "correct": true },
      { "text": "Virtualized imaging software", "correct": false },
      { "text": "License management system", "correct": false },
      { "text": "Group policy enforcer", "correct": false }
    ]
  },
  {
    "question": "What component is critical for automated OS updates in enterprises?",
    "answers": [
      { "text": "Remote installation methods", "correct": false },
      { "text": "Manual patch testing", "correct": true },
      { "text": "Hardware audits", "correct": false },
      { "text": "Standardized imaging", "correct": false },
      { "text": "Network-bootable software", "correct": false }
    ]
  },
  {
    "question": "Why might a hardware vendor assist with imaging?",
    "answers": [
      { "text": "To maintain a hardware database", "correct": false },
      { "text": "To troubleshoot software updates", "correct": false },
      { "text": "To perform hard drive to hard drive copies", "correct": true },
      { "text": "To eliminate system audits", "correct": false },
      { "text": "To implement WSUS", "correct": false }
    ]
  },
  {
    "question": "Group Policy installation requires an .msi file to function.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "SCCM is used for creating system images.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Automated software distribution eliminates all manual problem resolution.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Hardware consistency reduces troubleshooting complexity.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "WSUS is a tool exclusive to Windows OS updates.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Manual installation is time-consuming but sometimes necessary for inconsistent hardware.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Applications installed via Group Policy are always available without user login.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "System imaging ensures hardware compatibility issues are resolved.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Business-class hardware generally has longer lifespans than consumer models.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Software audits help track software licenses and compliance.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Installing software on a server simplifies client-side application configuration.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "WSUS can be configured to work with existing Windows Update mechanisms.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Symantec Ghost is an example of automated patching software.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Automatic installation requires an agent to be placed on client machines.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Network boot is unnecessary for imaging distribution.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Sysprep removes identifying information, including duplicate SIDs.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Imaging software is typically used in environments with inconsistent hardware.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Periodic hardware audits ensure compliance with enterprise standards.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Applications installed via a server can always run without local dependencies.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "WSUS allows updates to be tested before enterprise-wide deployment.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "You are tasked with deploying an update across 1,000 machines. Which method minimizes user disruption?",
    "answers": [
      { "text": "Manual installation", "correct": false },
      { "text": "Server-based installation", "correct": false },
      { "text": "WSUS", "correct": true },
      { "text": "SCCM", "correct": false },
      { "text": "Group Policy installation", "correct": false }
    ]
  },
  {
    "question": "An enterprise has varied hardware due to inconsistent purchases. What is the best way to standardize software installations?",
    "answers": [
      { "text": "Use business-class hardware", "correct": false },
      { "text": "Implement system imaging", "correct": true },
      { "text": "Conduct manual installations", "correct": false },
      { "text": "Install using server shares", "correct": false },
      { "text": "Apply Group Policy", "correct": false }
    ]
  },
  {
    "question": "What would you use to ensure updates don’t interfere with critical applications?",
    "answers": [
      { "text": "SCCM", "correct": false },
      { "text": "Imaging software", "correct": false },
      { "text": "WSUS with testing", "correct": true },
      { "text": "Network boot configurations", "correct": false },
      { "text": "Hardware audits", "correct": false }
    ]
  },
  {
    "question": "A client complains of different installation paths for the same software. What technology ensures consistency?",
    "answers": [
      { "text": "WSUS", "correct": false },
      { "text": "System imaging", "correct": true },
      { "text": "Manual installation", "correct": false },
      { "text": "Server-based execution", "correct": false },
      { "text": "Group Policy Objects", "correct": false }
    ]
  },
  {
    "question": "Which scenario requires using sysprep?",
    "answers": [
      { "text": "Troubleshooting hardware inconsistencies", "correct": false },
      { "text": "Preparing a machine for imaging", "correct": true },
      { "text": "Running server-based applications", "correct": false },
      { "text": "Installing Windows updates", "correct": false },
      { "text": "Conducting software audits", "correct": false }
    ]
  },
  {
    "question": "A new application must be installed enterprise-wide over a weekend. What do you use?",
    "answers": [
      { "text": "WSUS", "correct": false },
      { "text": "SCCM", "correct": true },
      { "text": "Manual installation", "correct": false },
      { "text": "Server-based applications", "correct": false },
      { "text": "Group Policy", "correct": false }
    ]
  },
  {
    "question": "How do you distribute images to machines with no pre-installed OS?",
    "answers": [
      { "text": "Manual copying", "correct": false },
      { "text": "Using sysprep", "correct": false },
      { "text": "Network boot", "correct": true },
      { "text": "Install from server", "correct": false },
      { "text": "Hardware audit", "correct": false }
    ]
  },
  {
    "question": "Which installation method balances minimal labor with maximum automation?",
    "answers": [
      { "text": "SCCM", "correct": true },
      { "text": "Manual installation", "correct": false },
      { "text": "Imaging using PING", "correct": false },
      { "text": "WSUS", "correct": false },
      { "text": "Application virtualization", "correct": false }
    ]
  },
  {
    "question": "Which solution ensures only licensed software is used enterprise-wide?",
    "answers": [
      { "text": "SCCM", "correct": false },
      { "text": "Software audits", "correct": true },
      { "text": "WSUS", "correct": false },
      { "text": "Manual installation", "correct": false },
      { "text": "Sysprep", "correct": false }
    ]
  },
  {
    "question": "What is a major advantage of using business-class hardware?",
    "answers": [
      { "text": "Reduced upfront costs", "correct": false },
      { "text": "Increased installation diversity", "correct": false },
      { "text": "Easier imaging and distribution", "correct": true },
      { "text": "Enhanced manual installation speed", "correct": false },
      { "text": "Elimination of system audits", "correct": false }
    ]
  }
];
