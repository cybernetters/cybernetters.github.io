const questionBank = [
  {
    "question": "Which of the following is a benefit of resource virtualization?",
    "answers": [
      { "text": "Increase in physical hardware requirements", "correct": false },
      { "text": "Provision resources more efficiently", "correct": true },
      { "text": "Restrict resource sharing", "correct": false },
      { "text": "Reduce the need for software updates", "correct": false },
      { "text": "Eliminate network redundancy", "correct": false }
    ]
  },
  {
    "question": "Storage virtualization involves:",
    "answers": [
      { "text": "Encapsulation of apps in a bubble", "correct": false },
      { "text": "Use of RAID arrays", "correct": true },
      { "text": "Virtualized CPU environments", "correct": false },
      { "text": "Creation of VLANs", "correct": false },
      { "text": "Exclusive use of NAS", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a type of virtualization?",
    "answers": [
      { "text": "Network virtualization", "correct": false },
      { "text": "CPU virtualization", "correct": false },
      { "text": "File compression", "correct": true },
      { "text": "Storage virtualization", "correct": false },
      { "text": "Application virtualization", "correct": false }
    ]
  },
  {
    "question": "Application virtualization encapsulates apps by:",
    "answers": [
      { "text": "Directly modifying the OS", "correct": false },
      { "text": "Using bubbles to isolate them", "correct": true },
      { "text": "Increasing resource usage", "correct": false },
      { "text": "Merging with hardware resources", "correct": false },
      { "text": "Requiring specialized thin clients", "correct": false }
    ]
  },
  {
    "question": "VMware ThinApp is an example of:",
    "answers": [
      { "text": "Network virtualization", "correct": false },
      { "text": "Desktop virtualization", "correct": false },
      { "text": "Storage virtualization", "correct": false },
      { "text": "Application virtualization", "correct": true },
      { "text": "Grid computing", "correct": false }
    ]
  },
  {
    "question": "A key disadvantage of desktop virtualization is:",
    "answers": [
      { "text": "Improved hardware standardization", "correct": false },
      { "text": "Centralized management", "correct": false },
      { "text": "Single points of failure", "correct": true },
      { "text": "Enhanced remote access", "correct": false },
      { "text": "Greater hardware costs", "correct": false }
    ]
  },
  {
    "question": "Desktop virtualization differs from server virtualization primarily because:",
    "answers": [
      { "text": "It reduces desktop autonomy", "correct": false },
      { "text": "It focuses on hardware consolidation", "correct": false },
      { "text": "Desktop management is a core goal", "correct": true },
      { "text": "It limits the use of VMotion", "correct": false },
      { "text": "Users lose access to apps", "correct": false }
    ]
  },
  {
    "question": "Virtual Desktop Infrastructure (VDI) allows:",
    "answers": [
      { "text": "Complete decentralization of desktops", "correct": false },
      { "text": "Delivery of desktops as a managed service", "correct": true },
      { "text": "Increased hardware dependencies", "correct": false },
      { "text": "Users to manage OS patches", "correct": false },
      { "text": "Reduction of user autonomy perceptions", "correct": false }
    ]
  },
  {
    "question": "One of the benefits of VDI is:",
    "answers": [
      { "text": "Eliminating patch updates", "correct": false },
      { "text": "Decoupling desktop environments from hardware", "correct": true },
      { "text": "Reducing server workloads", "correct": false },
      { "text": "Eliminating software conflicts", "correct": false },
      { "text": "Avoiding standard desktop environments", "correct": false }
    ]
  },
  {
    "question": "Which of the following is considered a drawback of VDI?",
    "answers": [
      { "text": "Single points of failure", "correct": true },
      { "text": "Centralized OS management", "correct": false },
      { "text": "Increased application conflicts", "correct": false },
      { "text": "Decentralized data storage", "correct": false },
      { "text": "Lack of remote access", "correct": false }
    ]
  },
  {
    "question": "App virtualization protects the OS by:",
    "answers": [
      { "text": "Merging apps with the OS kernel", "correct": false },
      { "text": "Isolating poorly written apps", "correct": true },
      { "text": "Allowing complex driver integration", "correct": false },
      { "text": "Disabling registry access", "correct": false },
      { "text": "Blocking all updates", "correct": false }
    ]
  },
  {
    "question": "A common benefit of desktop virtualization is:",
    "answers": [
      { "text": "Decoupling network resources from hardware", "correct": false },
      { "text": "Simplifying OS migrations", "correct": true },
      { "text": "Increasing dependency on proprietary hardware", "correct": false },
      { "text": "Lowering support requirements for apps", "correct": false },
      { "text": "Restricting remote access", "correct": false }
    ]
  },
  {
    "question": "Which vendor offers VMware View for desktop virtualization?",
    "answers": [
      { "text": "Citrix", "correct": false },
      { "text": "Novell", "correct": false },
      { "text": "Microsoft", "correct": false },
      { "text": "VMware", "correct": true },
      { "text": "Oracle", "correct": false }
    ]
  },
  {
    "question": "Application bubbles in virtualization are:",
    "answers": [
      { "text": "Permanent OS modifications", "correct": false },
      { "text": "Deleted after app execution ends", "correct": true },
      { "text": "Limited to CPU virtualization", "correct": false },
      { "text": "Stored only on user hardware", "correct": false },
      { "text": "Independent of all OS variables", "correct": false }
    ]
  },
  {
    "question": "VDI solutions often rely on:",
    "answers": [
      { "text": "Decentralized server environments", "correct": false },
      { "text": "Remote access to centralized desktops", "correct": true },
      { "text": "Direct hardware execution", "correct": false },
      { "text": "Eliminating network dependencies", "correct": false },
      { "text": "Disabling virtualized apps", "correct": false }
    ]
  },
  {
    "question": "Which of the following solutions requires no agent for application virtualization?",
    "answers": [
      { "text": "Microsoft App-V", "correct": false },
      { "text": "VMware ThinApp", "correct": true },
      { "text": "Citrix XenApp", "correct": false },
      { "text": "Novell ZENworks", "correct": false },
      { "text": "MED-V", "correct": false }
    ]
  },
  {
    "question": "Which of these represents network virtualization?",
    "answers": [
      { "text": "VLANs", "correct": true },
      { "text": "SAN storage", "correct": false },
      { "text": "Virtual CPUs", "correct": false },
      { "text": "App bubbles", "correct": false },
      { "text": "RAID configurations", "correct": false }
    ]
  },
  {
    "question": "Thin clients primarily relate to:",
    "answers": [
      { "text": "Network virtualization", "correct": false },
      { "text": "App virtualization", "correct": true },
      { "text": "Storage abstraction", "correct": false },
      { "text": "CPU clustering", "correct": false },
      { "text": "Centralized server access", "correct": false }
    ]
  },
  {
    "question": "SAN in storage virtualization refers to:",
    "answers": [
      { "text": "Secure Application Nodes", "correct": false },
      { "text": "Storage Area Network", "correct": true },
      { "text": "Simple Access Network", "correct": false },
      { "text": "Software Application Network", "correct": false },
      { "text": "Shared Application Network", "correct": false }
    ]
  },
  {
    "question": "Desktop virtualization helps companies by:",
    "answers": [
      { "text": "Reducing network resources", "correct": false },
      { "text": "Improving desktop management", "correct": true },
      { "text": "Replacing all physical desktops", "correct": false },
      { "text": "Eliminating desktop OS upgrades", "correct": false },
      { "text": "Increasing hardware autonomy", "correct": false }
    ]
  },
  {
    "question": "Virtual memory is a form of resource virtualization.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "RAID arrays are unrelated to storage virtualization.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Virtual Desktop Infrastructure is primarily aimed at hardware consolidation.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "App bubbles protect the OS from poorly written apps.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Application virtualization eliminates the need for agents in all cases.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Desktop virtualization simplifies the provisioning of desktops for new users.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Network virtualization includes VLANs as a technique.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "VMware ThinApp requires an agent for its functioning.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Centralized OS storage is a key feature of VDI.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Virtual desktops are always faster than physical desktops.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "VDI users are always limited by specific hardware.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Centralized management is a disadvantage of desktop virtualization.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "App virtualization encapsulates applications from the underlying OS.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "All virtualized desktops rely on agent-based solutions.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "CPU virtualization is synonymous with grid computing.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "VMware View is not a desktop virtualization solution.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Desktop management is not simplified with virtualization.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Application conflicts can be eliminated with virtualization.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Virtualization can provide resources that do not physically exist.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Thin clients are always hardware devices.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A company wants to allow employees remote access to standardized desktop environments while simplifying management. Which solution should they consider?",
    "answers": [
      { "text": "Storage virtualization", "correct": false },
      { "text": "Virtual Desktop Infrastructure (VDI)", "correct": true },
      { "text": "Local app installations", "correct": false },
      { "text": "Thin clients only", "correct": false },
      { "text": "Network segmentation", "correct": false }
    ]
  },
  {
    "question": "An organization wants to reduce hardware dependencies while enabling centralized control of app environments. What approach is most suitable?",
    "answers": [
      { "text": "Storage virtualization", "correct": false },
      { "text": "Application virtualization", "correct": true },
      { "text": "Network virtualization", "correct": false },
      { "text": "Grid computing", "correct": false },
      { "text": "SAN implementation", "correct": false }
    ]
  },
  {
    "question": "An IT administrator needs to manage multiple virtual desktops and ensure compliance with corporate security policies. Which feature of desktop virtualization is most relevant?",
    "answers": [
      { "text": "App encapsulation", "correct": false },
      { "text": "Centralized management", "correct": true },
      { "text": "Resource sharing", "correct": false },
      { "text": "Agent-free execution", "correct": false },
      { "text": "Thin client usage", "correct": false }
    ]
  },
  {
    "question": "A company experiences frequent application conflicts on user devices. Which virtualization technology can most effectively resolve this issue?",
    "answers": [
      { "text": "Network virtualization", "correct": false },
      { "text": "Application virtualization", "correct": true },
      { "text": "Desktop virtualization", "correct": false },
      { "text": "Storage virtualization", "correct": false },
      { "text": "CPU virtualization", "correct": false }
    ]
  },
  {
    "question": "An organization using VMware ThinApp wants to enable users to work on applications without installing them on their devices. This is achieved by:",
    "answers": [
      { "text": "Centralizing all OS and app storage", "correct": false },
      { "text": "Merging a virtual environment with local resources", "correct": true },
      { "text": "Creating dedicated VLANs for apps", "correct": false },
      { "text": "Using CPU clustering", "correct": false },
      { "text": "Deploying RAID-based storage solutions", "correct": false }
    ]
  },
  {
    "question": "A company requires a disaster recovery solution that enables seamless restoration of desktop environments. Which aspect of desktop virtualization supports this goal?",
    "answers": [
      { "text": "Provisioning desktops as virtual machines", "correct": true },
      { "text": "Encapsulation of desktops in app bubbles", "correct": false },
      { "text": "Use of dedicated SAN storage", "correct": false },
      { "text": "Hardware dependency elimination", "correct": false },
      { "text": "Driver/hardware compatibility standardization", "correct": false }
    ]
  },
  {
    "question": "Which scenario best highlights the benefit of application virtualization?",
    "answers": [
      { "text": "Allowing a user to access their desktop remotely from any device", "correct": false },
      { "text": "Ensuring an application runs without conflicts on various OS environments", "correct": true },
      { "text": "Reducing server workloads by distributing apps to local devices", "correct": false },
      { "text": "Eliminating the need for network connections for app execution", "correct": false },
      { "text": "Upgrading physical desktops to higher hardware specifications", "correct": false }
    ]
  },
  {
    "question": "An enterprise needs to deliver desktops to users in branch offices with minimal local hardware management. Which virtualization method is most suitable?",
    "answers": [
      { "text": "Storage virtualization", "correct": false },
      { "text": "Virtual Desktop Infrastructure (VDI)", "correct": true },
      { "text": "Application encapsulation", "correct": false },
      { "text": "CPU grid computing", "correct": false },
      { "text": "Local app installations", "correct": false }
    ]
  },
  {
    "question": "A company wants to enforce standardized application versions across all devices while preventing registry changes. Which solution would work best?",
    "answers": [
      { "text": "Storage virtualization", "correct": false },
      { "text": "Desktop virtualization", "correct": false },
      { "text": "Application virtualization", "correct": true },
      { "text": "RAID implementations", "correct": false },
      { "text": "VLAN-based isolation", "correct": false }
    ]
  },
  {
    "question": "An organization is concerned about single points of failure in its desktop virtualization solution. How can this issue be mitigated?",
    "answers": [
      { "text": "Use redundant servers for hosting virtual desktops", "correct": true },
      { "text": "Migrate all users to thin clients", "correct": false },
      { "text": "Install local applications on user devices", "correct": false },
      { "text": "Use only VLANs for network segmentation", "correct": false },
      { "text": "Avoid centralizing desktop storage", "correct": false }
    ]
  }
];
