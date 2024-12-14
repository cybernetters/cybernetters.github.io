const questionBank = [
  {
    "question": "What was the first commercial computer introduced in 1952?",
    "answers": [
      { "text": "IBM 701", "correct": true },
      { "text": "IBM 704", "correct": false },
      { "text": "UNIX V6", "correct": false },
      { "text": "Multics", "correct": false },
      { "text": "FreeBSD", "correct": false }
    ]
  },
  {
    "question": "Which operating system is Unix primarily based on?",
    "answers": [
      { "text": "Windows", "correct": false },
      { "text": "BSD", "correct": false },
      { "text": "AT&T Bell Labs UNIX", "correct": true },
      { "text": "Multics", "correct": false },
      { "text": "GNU/Linux", "correct": false }
    ]
  },
  {
    "question": "Which feature was introduced with UNIX System V Release 2 in 1984?",
    "answers": [
      { "text": "Time-sharing", "correct": false },
      { "text": "Shared memory", "correct": true },
      { "text": "64-bit processing", "correct": false },
      { "text": "Virtualization", "correct": false },
      { "text": "Thread support", "correct": false }
    ]
  },
  {
    "question": "Who created the first version of UNIX?",
    "answers": [
      { "text": "Linus Torvalds", "correct": false },
      { "text": "Andrew Tanenbaum", "correct": false },
      { "text": "Ken Thompson", "correct": true },
      { "text": "Bill Joy", "correct": false },
      { "text": "Dennis Ritchie", "correct": false }
    ]
  },
  {
    "question": "What is the primary philosophy of UNIX?",
    "answers": [
      { "text": "Maximize system compatibility", "correct": false },
      { "text": "Write programs that do one thing and do it well", "correct": true },
      { "text": "Centralize all operations", "correct": false },
      { "text": "Focus only on graphical interfaces", "correct": false },
      { "text": "Avoid modular programming", "correct": false }
    ]
  },
  {
    "question": "What was the main contribution of Bill Joy to UNIX?",
    "answers": [
      { "text": "Developed the Linux kernel", "correct": false },
      { "text": "Enhanced UNIX at MIT", "correct": false },
      { "text": "Created Sun Microsystems and SunOS", "correct": true },
      { "text": "Started the Multics project", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which UNIX clone served as the base for Linus Torvalds’ Linux kernel?",
    "answers": [
      { "text": "FreeBSD", "correct": false },
      { "text": "Minix", "correct": true },
      { "text": "GNU", "correct": false },
      { "text": "AT&T UNIX", "correct": false },
      { "text": "NetBSD", "correct": false }
    ]
  },
  {
    "question": "What was the main reason for UNIX administrators learning Windows NT in 1993?",
    "answers": [
      { "text": "Windows NT became open-source", "correct": false },
      { "text": "To replace UNIX with Windows NT", "correct": false },
      { "text": "UNIX's market share was declining", "correct": false },
      { "text": "Windows NT met government security needs", "correct": true },
      { "text": "UNIX became obsolete", "correct": false }
    ]
  },
  {
    "question": "Which of the following Linux distributions is specifically used for testing new features?",
    "answers": [
      { "text": "Debian", "correct": false },
      { "text": "Ubuntu", "correct": false },
      { "text": "Fedora", "correct": true },
      { "text": "CentOS", "correct": false },
      { "text": "Suse", "correct": false }
    ]
  },
  {
    "question": "Which organization held the first system administration conference in 1987?",
    "answers": [
      { "text": "DARPA", "correct": false },
      { "text": "USENIX Association", "correct": true },
      { "text": "Linux Foundation", "correct": false },
      { "text": "GNU Project", "correct": false },
      { "text": "SANS Institute", "correct": false }
    ]
  },
  {
    "question": "Which of these is a duty of a system administrator?",
    "answers": [
      { "text": "Writing operating system kernels", "correct": false },
      { "text": "Managing user access and accounts", "correct": true },
      { "text": "Designing hardware architecture", "correct": false },
      { "text": "Creating new programming languages", "correct": false },
      { "text": "Developing graphical applications", "correct": false }
    ]
  },
  {
    "question": "What is a key feature of FreeBSD 6.0 introduced in 2005?",
    "answers": [
      { "text": "Support for cloud computing", "correct": false },
      { "text": "Multithreaded file systems", "correct": true },
      { "text": "Expanded time-sharing capabilities", "correct": false },
      { "text": "64-bit kernel", "correct": false },
      { "text": "Built-in cloud sharing", "correct": false }
    ]
  },
  {
    "question": "What year was the GNU Project established?",
    "answers": [
      { "text": "1985", "correct": false },
      { "text": "1990", "correct": false },
      { "text": "1974", "correct": false },
      { "text": "1991", "correct": false },
      { "text": "1983", "correct": true }
    ]
  },
  {
    "question": "What made Linux widely successful during its early years?",
    "answers": [
      { "text": "Proprietary tools and software", "correct": false },
      { "text": "Backing by Microsoft", "correct": false },
      { "text": "Strong community support", "correct": true },
      { "text": "Absence of GNU tools", "correct": false },
      { "text": "Limited compatibility with UNIX", "correct": false }
    ]
  },
  {
    "question": "Which Linux distribution is free and derived from RedHat?",
    "answers": [
      { "text": "Suse Linux Enterprise", "correct": false },
      { "text": "CentOS", "correct": true },
      { "text": "Fedora", "correct": false },
      { "text": "Ubuntu", "correct": false },
      { "text": "Debian", "correct": false }
    ]
  },
  {
    "question": "Which UNIX derivative formed the core for MacOS?",
    "answers": [
      { "text": "Linux", "correct": false },
      { "text": "Solaris", "correct": false },
      { "text": "FreeBSD", "correct": true },
      { "text": "GNU", "correct": false },
      { "text": "System V", "correct": false }
    ]
  },
  {
    "question": "Which OS was first to support multithreading and wireless technology?",
    "answers": [
      { "text": "FreeBSD 6.0", "correct": true },
      { "text": "UNIX V6", "correct": false },
      { "text": "Mac OS X Cheetah", "correct": false },
      { "text": "System V Release 4", "correct": false },
      { "text": "Windows NT", "correct": false }
    ]
  },
  {
    "question": "What feature is associated with MacOS 10.6 Snow Leopard?",
    "answers": [
      { "text": "Cloud sharing", "correct": false },
      { "text": "A 64-bit kernel", "correct": true },
      { "text": "Expanded virtual memory", "correct": false },
      { "text": "Multithreading", "correct": false },
      { "text": "Real-time processing", "correct": false }
    ]
  },
  {
    "question": "What is the primary goal of the SANS Institute, established in 1990?",
    "answers": [
      { "text": "System administration training", "correct": true },
      { "text": "UNIX development", "correct": false },
      { "text": "Proprietary software licensing", "correct": false },
      { "text": "Cloud computing management", "correct": false },
      { "text": "Networking hardware sales", "correct": false }
    ]
  },
  {
    "question": "What significant trend occurred between 2000 and the present in UNIX/Linux?",
    "answers": [
      { "text": "Decline in usage", "correct": false },
      { "text": "Growth of virtualization and cloud computing", "correct": true },
      { "text": "Complete dominance of Windows servers", "correct": false },
      { "text": "End of UNIX development", "correct": false },
      { "text": "Transition to closed-source software", "correct": false }
    ]
  },
  {
    "question": "UNIX is based on Multics.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Linus Torvalds created GNU tools.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Time-sharing systems replaced single-purpose computing.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The UNIX philosophy emphasizes doing multiple things in a single program.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The first UNIX version was written in 1969.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "FreeBSD is not derived from BSD.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Linux gained popularity due to its strong community support.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "USENIX held its first system admin conference in 1987.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "RedHat Enterprise Linux is an open-source software.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "MacOS is built on a Linux kernel.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Windows NT replaced UNIX completely in government systems.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "GNU tools are crucial for Linux distributions.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Linux servers cost less than Windows servers.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Virtualization has reduced the importance of UNIX/Linux.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The GNU Project began in 1983.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Linux kernel was derived from Minix.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "MacOS Snow Leopard introduced 64-bit kernel support.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The SANS Institute focuses on marketing Linux distributions.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Fedora Linux is used for testing new features.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Cloud computing is unrelated to UNIX/Linux resurgence.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Which Linux distribution would you recommend for testing a new server feature?",
    "answers": [
      { "text": "Debian", "correct": false },
      { "text": "Fedora", "correct": true },
      { "text": "Ubuntu", "correct": false },
      { "text": "CentOS", "correct": false },
      { "text": "Suse", "correct": false }
    ]
  },
  {
    "question": "A system admin needs a free alternative to RedHat. Which distribution should they choose?",
    "answers": [
      { "text": "OpenSuse", "correct": false },
      { "text": "Fedora", "correct": false },
      { "text": "CentOS", "correct": true },
      { "text": "Debian", "correct": false },
      { "text": "MacOS", "correct": false }
    ]
  },
  {
    "question": "To ensure security on a Linux server, which task is most critical?",
    "answers": [
      { "text": "Upgrading hardware", "correct": false },
      { "text": "Automating tasks", "correct": false },
      { "text": "Vigilant monitoring", "correct": true },
      { "text": "Developing site policies", "correct": false },
      { "text": "Installing updates", "correct": false }
    ]
  },
  {
    "question": "What would be the first step when installing a new Linux distribution on a server?",
    "answers": [
      { "text": "Configure security policies", "correct": false },
      { "text": "Install and upgrade software", "correct": false },
      { "text": "Add hardware", "correct": false },
      { "text": "Configure access control", "correct": false },
      { "text": "Partition the disk and install the OS", "correct": true }
    ]
  },
  {
    "question": "Which feature makes FreeBSD a good choice for enterprise multithreading systems?",
    "answers": [
      { "text": "Cloud integration", "correct": false },
      { "text": "Multithreaded file system", "correct": true },
      { "text": "Enhanced graphics tools", "correct": false },
      { "text": "Proprietary tools", "correct": false },
      { "text": "System-wide upgrades", "correct": false }
    ]
  },
  {
    "question": "A company prioritizing cost-effectiveness should choose which server OS?",
    "answers": [
      { "text": "Windows NT", "correct": false },
      { "text": "FreeBSD", "correct": false },
      { "text": "MacOS", "correct": false },
      { "text": "RedHat", "correct": false },
      { "text": "Debian", "correct": true }
    ]
  },
  {
    "question": "If you want to experiment with cutting-edge Linux features, which OS is ideal?",
    "answers": [
      { "text": "Fedora", "correct": true },
      { "text": "Ubuntu", "correct": false },
      { "text": "CentOS", "correct": false },
      { "text": "OpenSuse", "correct": false },
      { "text": "MacOS", "correct": false }
    ]
  },
  {
    "question": "What is the best course of action for troubleshooting a failed server backup?",
    "answers": [
      { "text": "Add new hardware", "correct": false },
      { "text": "Review system logs", "correct": true },
      { "text": "Reinstall the OS", "correct": false },
      { "text": "Configure new users", "correct": false },
      { "text": "Install security patches", "correct": false }
    ]
  },
  {
    "question": "Which of the following tasks falls under automating system admin processes?",
    "answers": [
      { "text": "Controlling user access", "correct": false },
      { "text": "Configuring backups via scripts", "correct": true },
      { "text": "Installing Linux distributions", "correct": false },
      { "text": "Setting up cloud services", "correct": false },
      { "text": "Writing site policies", "correct": false }
    ]
  },
  {
    "question": "What task ensures maximum uptime for Linux servers?",
    "answers": [
      { "text": "Automating system updates", "correct": false },
      { "text": "Adding new accounts", "correct": false },
      { "text": "Removing unnecessary services", "correct": false },
      { "text": "Maintaining local documentation", "correct": false },
      { "text": "Monitoring system performance", "correct": true }
    ]
  }
];
