const questionBank = [
  // True/False Questions
  {
    question: "What is the primary function of virtualization in IT?",
    answers: [
        { text: "To emulate hardware for multiple logical systems", correct: true },
        { text: "To create physical hardware", correct: false },
        { text: "To design custom hardware components", correct: false },
        { text: "To eliminate the need for operating systems", correct: false },
        { text: "To replace client-server architecture", correct: false }
    ]
  },
  {
    question: "True or False: Virtualization always requires a separate operating system.",
    answers: [
        { text: "True", correct: false },
        { text: "False", correct: true }
    ]
  },
  {
    question: "What is one advantage of virtualization?",
    answers: [
        { text: "Increased hardware utilization", correct: true },
        { text: "Increased hardware manufacturing", correct: false },
        { text: "Reduced software development", correct: false },
        { text: "Reduced need for IT support", correct: false },
        { text: "Elimination of physical servers", correct: false }
    ]
  },
  {
    question: "Which of the following is a key component of a virtualized system?",
    answers: [
        { text: "Hypervisor", correct: true },
        { text: "Motherboard", correct: false },
        { text: "Router", correct: false },
        { text: "Firewall", correct: false },
        { text: "GPU", correct: false }
    ]
  },
  {
    question: "True or False: A single point of failure is a disadvantage of virtualization.",
    answers: [
        { text: "True", correct: true },
        { text: "False", correct: false }
    ]
  },
  {
    question: "What is one disadvantage of virtualization?",
    answers: [
        { text: "Complicates hardware maintenance", correct: true },
        { text: "Increases physical space requirements", correct: false },
        { text: "Increases energy costs", correct: false },
        { text: "Eliminates test environments", correct: false },
        { text: "Requires dedicated servers for each OS", correct: false }
    ]
  },
  {
    question: "What does 'bare-metal' architecture in virtualization imply?",
    answers: [
        { text: "Virtualization layer installed directly on hardware", correct: true },
        { text: "Virtualization layer installed within an operating system", correct: false },
        { text: "Virtualization layer emulating software only", correct: false },
        { text: "Host operating system dependent virtualization", correct: false },
        { text: "Hardware and software completely decoupled", correct: false }
    ]
  },
  {
    question: "True or False: A guest operating system requires a hypervisor to function.",
    answers: [
        { text: "True", correct: true },
        { text: "False", correct: false }
    ]
  },
  {
    question: "Which of the following virtualization methods has excellent compatibility but lower performance?",
    answers: [
        { text: "Hardware-assisted virtualization", correct: true },
        { text: "Paravirtualization", correct: false },
        { text: "Full virtualization", correct: false },
        { text: "Binary translation", correct: false },
        { text: "Hypervisor-independent virtualization", correct: false }
    ]
  },
  {
    question: "What is the main purpose of memory virtualization?",
    answers: [
        { text: "To allow VMs to perceive contiguous memory space", correct: true },
        { text: "To isolate physical memory from virtual devices", correct: false },
        { text: "To restrict memory access for security", correct: false },
        { text: "To improve graphics processing", correct: false },
        { text: "To enable real-time data encryption", correct: false }
    ]
  },
  {
    "question": "Which of the following is a defining feature of virtualization?",
    "answers": [
      { "text": "Dedicated hardware for each OS", "correct": false },
      { "text": "Simultaneous operation of multiple OS on a single computer", "correct": true },
      { "text": "Absence of a hypervisor", "correct": false },
      { "text": "Physical-to-physical isolation only", "correct": false },
      { "text": "Single operating system per server", "correct": false }
    ]
  },
  {
    "question": "What is a key difference between bare-metal and hosted virtualization?",
    "answers": [
      { "text": "Hosted virtualization does not require an operating system", "correct": false },
      { "text": "Bare-metal is less efficient", "correct": false },
      { "text": "Hosted virtualization installs on top of an existing OS", "correct": true },
      { "text": "Bare-metal does not use a hypervisor", "correct": false },
      { "text": "Hosted virtualization is hardware-independent", "correct": false }
    ]
  },
  {
    "question": "What problem was virtualization introduced to address in the 1990s?",
    "answers": [
      { "text": "Server under-utilization", "correct": true },
      { "text": "Lack of compatible hardware", "correct": false },
      { "text": "Limited availability of cloud services", "correct": false },
      { "text": "High software costs", "correct": false },
      { "text": "Insufficient network storage solutions", "correct": false }
    ]
  },
  {
    "question": "What is an advantage of full virtualization?",
    "answers": [
      { "text": "Excellent compatibility with unmodified guest OS", "correct": false },
      { "text": "Simplified guest OS installation", "correct": false },
      { "text": "Best isolation and security among VMs", "correct": true },
      { "text": "Low resource requirements", "correct": false },
      { "text": "Faster setup process", "correct": false }
    ]
  },
  {
    "question": "Which virtualization type relies on a modified guest OS to improve performance?",
    "answers": [
      { "text": "Full virtualization", "correct": false },
      { "text": "Memory virtualization", "correct": false },
      { "text": "Hardware-assisted virtualization", "correct": false },
      { "text": "Paravirtualization", "correct": true },
      { "text": "Device virtualization", "correct": false }
    ]
  },
  {
    "question": "Which virtualization approach is least efficient in terms of resource use?",
    "answers": [
      { "text": "Bare-metal hypervisor", "correct": false },
      { "text": "Hosted virtualization", "correct": true },
      { "text": "Paravirtualization", "correct": false },
      { "text": "Hardware-assisted virtualization", "correct": false },
      { "text": "Full virtualization", "correct": false }
    ]
  },
  {
    "question": "Which is an example of hypervisor software?",
    "answers": [
      { "text": "Windows Virtual PC", "correct": false },
      { "text": "VMware Fusion", "correct": false },
      { "text": "KVM (Kernel Virtual Mode)", "correct": false },
      { "text": "VMware ESXi", "correct": false },
      { "text": "All of the above", "correct": true }
    ]
  },
  {
    "question": "What is the primary role of the hypervisor in system virtualization?",
    "answers": [
      { "text": "Manage OS installation", "correct": false },
      { "text": "Provide hardware emulation and resource allocation", "correct": true },
      { "text": "Monitor network traffic", "correct": false },
      { "text": "Act as the operating system", "correct": false },
      { "text": "Optimize power consumption", "correct": false }
    ]
  },
  {
    "question": "What is a primary benefit of virtualization for disaster recovery?",
    "answers": [
      { "text": "Hardware cloning", "correct": false },
      { "text": "Reduced reliance on backup systems", "correct": false },
      { "text": "Ability to move VMs to functional servers", "correct": true },
      { "text": "Simplified hardware maintenance", "correct": false },
      { "text": "Elimination of downtime", "correct": false }
    ]
  },
  {
    "question": "What is a significant disadvantage of virtualization?",
    "answers": [
      { "text": "Reduced system reliability", "correct": false },
      { "text": "Single point of failure in host system", "correct": true },
      { "text": "Higher energy consumption", "correct": false },
      { "text": "Poor scalability", "correct": false },
      { "text": "Inefficient use of resources", "correct": false }
    ]
  }
  {
    "question": "Virtualization was first introduced in the 1980s to address x86 server inefficiencies.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Hosted virtualization installs on top of existing hardware without an operating system.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Hardware-assisted virtualization offers the best compatibility.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Virtual machines can only be moved between servers with identical hardware configurations.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Memory virtualization involves mapping virtual memory to physical memory by the hypervisor.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Device and I/O virtualization causes significant performance impacts.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "VMware vSphere is an example of a bare-metal hypervisor.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "OpenVZ is primarily used for client-based virtualization in Linux environments.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Hypervisor virtualization removes the need for binary translation.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Paravirtualization requires a standard, unmodified guest OS for compatibility.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The hypervisor in bare-metal architectures directly manages the hardware resources.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A key advantage of virtualization is the consistent hardware interface it provides.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  }
  {
    "question": "Virtual appliances help simplify software installation and debugging.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A major disadvantage of virtualization is reduced hardware utilization.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Virtualization was first introduced by VMware in 1998.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Cloning virtual machines requires complex hardware reconfiguration.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Virtualization reduces energy costs by minimizing power and cooling needs.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The concept of virtualization is a recent innovation from the 2000s.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "One drawback of virtualization is the difficulty in tracking virtualized systems.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Parallels is an example of virtualization software for Mac systems.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Which virtualization method would you recommend for a high-performance computing cluster requiring minimal latency?",
    "answers": [
      { "text": "Hosted virtualization", "correct": false },
      { "text": "Paravirtualization", "correct": false },
      { "text": "Full virtualization", "correct": false },
      { "text": "Hardware-assisted virtualization", "correct": false },
      { "text": "Bare-metal hypervisor", "correct": true }
    ]
  },
  {
    "question": "What configuration might best support a consistent development environment across geographically dispersed teams?",
    "answers": [
      { "text": "Hosted virtualization with VirtualBox", "correct": false },
      { "text": "Cloud-based hypervisor solutions like Microsoft Azure", "correct": true },
      { "text": "Hardware-assisted virtualization on local servers", "correct": false },
      { "text": "Full virtualization on client machines", "correct": false },
      { "text": "Paravirtualization with modified guest OS", "correct": false }
    ]
  },
  {
    "question": "An organization wants to scale server resources during peak traffic. Which feature is most relevant?",
    "answers": [
      { "text": "OS independence", "correct": false },
      { "text": "Failover capability", "correct": false },
      { "text": "Cloning VMs", "correct": false },
      { "text": "Dynamic resource allocation in virtualization", "correct": true },
      { "text": "Memory mapping", "correct": false }
    ]
  },
  {
    "question": "Which tool is most appropriate for testing software on different operating systems without purchasing multiple devices?",
    "answers": [
      { "text": "VMware ESXi", "correct": false },
      { "text": "Microsoft Virtual PC", "correct": false },
      { "text": "VMware Workstation", "correct": true },
      { "text": "Xen", "correct": false },
      { "text": "OpenVZ", "correct": false }
    ]
  },
  {
    "question": "What virtualization type offers the easiest hardware maintenance?",
    "answers": [
      { "text": "Hosted virtualization", "correct": true },
      { "text": "Bare-metal hypervisor", "correct": false },
      { "text": "Full virtualization", "correct": false },
      { "text": "Memory virtualization", "correct": false },
      { "text": "None", "correct": false }
    ]
  }
];
