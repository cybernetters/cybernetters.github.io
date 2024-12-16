const questionBank = [
    {
      "question": "Which layer of the OSI model is responsible for reliable transmission of data?",
      "answers": [
        { "text": "Network Layer", "correct": false },
        { "text": "Data Link Layer", "correct": false },
        { "text": "Transport Layer", "correct": true },
        { "text": "Physical Layer", "correct": false },
        { "text": "Session Layer", "correct": false }
      ]
    },
    {
      "question": "What protocol is used for secure remote logins?",
      "answers": [
        { "text": "FTP", "correct": false },
        { "text": "SSH", "correct": true },
        { "text": "Telnet", "correct": false },
        { "text": "HTTP", "correct": false },
        { "text": "SMTP", "correct": false }
      ]
    },
    {
      "question": "What does the Presentation Layer of the OSI model handle?",
      "answers": [
        { "text": "Routing data between networks", "correct": false },
        { "text": "Data compression and encryption", "correct": true },
        { "text": "Physical connectivity", "correct": false },
        { "text": "Error detection", "correct": false },
        { "text": "Flow control", "correct": false }
      ]
    },
    {
      "question": "Which protocol is responsible for resolving domain names to IP addresses?",
      "answers": [
        { "text": "HTTP", "correct": false },
        { "text": "DNS", "correct": true },
        { "text": "SMTP", "correct": false },
        { "text": "SNMP", "correct": false },
        { "text": "ARP", "correct": false }
      ]
    },
    {
      "question": "Which of the following protocols operates at the Data Link Layer?",
      "answers": [
        { "text": "IP", "correct": false },
        { "text": "ARP", "correct": true },
        { "text": "TCP", "correct": false },
        { "text": "UDP", "correct": false },
        { "text": "DNS", "correct": false }
      ]
    },
    {
      "question": "What is a key benefit of subnetting?",
      "answers": [
        { "text": "Reduces routing table size", "correct": true },
        { "text": "Increases IP address availability", "correct": false },
        { "text": "Increases bandwidth", "correct": false },
        { "text": "Ensures encryption", "correct": false },
        { "text": "Creates new VLANs", "correct": false }
      ]
    },
    {
      "question": "Which layer of the TCP/IP model corresponds to the OSI Session Layer?",
      "answers": [
        { "text": "Application", "correct": true },
        { "text": "Transport", "correct": false },
        { "text": "Internet", "correct": false },
        { "text": "Network Access", "correct": false },
        { "text": "Physical", "correct": false }
      ]
    },
    {
      "question": "What is the purpose of ARP?",
      "answers": [
        { "text": "Encrypting data", "correct": false },
        { "text": "Mapping IP addresses to MAC addresses", "correct": true },
        { "text": "Resolving domain names", "correct": false },
        { "text": "Routing data", "correct": false },
        { "text": "Compression of data", "correct": false }
      ]
    },
    {
      "question": "Which protocol uses port 443 by default?",
      "answers": [
        { "text": "HTTP", "correct": false },
        { "text": "HTTPS", "correct": true },
        { "text": "FTP", "correct": false },
        { "text": "SMTP", "correct": false },
        { "text": "SNMP", "correct": false }
      ]
    },
    {
      "question": "What is the main function of a router?",
      "answers": [
        { "text": "Forward packets based on IP address", "correct": true },
        { "text": "Control data link layer communication", "correct": false },
        { "text": "Encrypt all traffic", "correct": false },
        { "text": "Perform error checking", "correct": false },
        { "text": "Terminate physical circuits", "correct": false }
      ]
    },
    {
      "question": "The OSI model has 7 layers.",
      "answers": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ]
    },
    {
      "question": "HTTP operates at the Transport Layer of the OSI model.",
      "answers": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
      ]
    },
    {
      "question": "DNS translates domain names to IP addresses.",
      "answers": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ]
    },
    {
      "question": "TCP provides connectionless communication.",
      "answers": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
      ]
    },
    {
      "question": "FTP uses port 21 for control commands.",
      "answers": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ]
    },
    {
      "question": "ARP resolves MAC addresses to IP addresses.",
      "answers": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
      ]
    },
    {
      "question": "NAT is used to translate private IPs to public IPs.",
      "answers": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ]
    },
    {
      "question": "The TCP/IP model has 5 layers.",
      "answers": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
      ]
    },
    {
      "question": "Spanning Tree Protocol prevents switching loops.",
      "answers": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ]
    },
    {
      "question": "VLANs operate at the Physical Layer of the OSI model.",
      "answers": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
      ]
    },
    {
      "question": "A client requires encrypted file transfer. Which protocol should you recommend?",
      "answers": [
        { "text": "FTP", "correct": false },
        { "text": "SFTP", "correct": true },
        { "text": "HTTP", "correct": false },
        { "text": "SMTP", "correct": false },
        { "text": "SNMP", "correct": false }
      ]
    },
    {
      "question": "What protocol should be used to resolve a hostname to an IP address?",
      "answers": [
        { "text": "DNS", "correct": true },
        { "text": "ARP", "correct": false },
        { "text": "SMTP", "correct": false },
        { "text": "Telnet", "correct": false },
        { "text": "FTP", "correct": false }
      ]
    },
    {
      "question": "An administrator needs to ensure packets are delivered reliably between two systems. Which protocol should be used?",
      "answers": [
        { "text": "UDP", "correct": false },
        { "text": "TCP", "correct": true },
        { "text": "ICMP", "correct": false },
        { "text": "IP", "correct": false },
        { "text": "FTP", "correct": false }
      ]
    },
    {
      "question": "Which tool would you use to check connectivity between two devices on a network?",
      "answers": [
        { "text": "Traceroute", "correct": false },
        { "text": "Ping", "correct": true },
        { "text": "DNS Lookup", "correct": false },
        { "text": "Netstat", "correct": false },
        { "text": "SSH", "correct": false }
      ]
    },
    {
      "question": "A network engineer needs to find the MAC address of a neighboring device. Which command should they use?",
      "answers": [
        { "text": "ping", "correct": false },
        { "text": "arp", "correct": true },
        { "text": "traceroute", "correct": false },
        { "text": "ipconfig", "correct": false },
        { "text": "nslookup", "correct": false }
      ]
    },
    {
      "question": "You are tasked with ensuring all communication within your internal network is encrypted. Which protocol should be implemented?",
      "answers": [
        { "text": "HTTP", "correct": false },
        { "text": "HTTPS", "correct": true },
        { "text": "FTP", "correct": false },
        { "text": "SMTP", "correct": false },
        { "text": "Telnet", "correct": false }
      ]
    },
    {
      "question": "Which port number must be open to allow secure shell access to a remote server?",
      "answers": [
        { "text": "80", "correct": false },
        { "text": "443", "correct": false },
        { "text": "22", "correct": true },
        { "text": "25", "correct": false },
        { "text": "53", "correct": false }
      ]
    },
    {
      "question": "An IT administrator wants to monitor traffic between two routers. Which protocol is commonly used?",
      "answers": [
        { "text": "SMTP", "correct": false },
        { "text": "SNMP", "correct": true },
        { "text": "FTP", "correct": false },
        { "text": "ARP", "correct": false },
        { "text": "DHCP", "correct": false }
      ]
    },
    {
      "question": "What protocol is used to automatically assign IP addresses in a network?",
      "answers": [
        { "text": "DNS", "correct": false },
        { "text": "DHCP", "correct": true },
        { "text": "NAT", "correct": false },
        { "text": "ARP", "correct": false },
        { "text": "HTTP", "correct": false }
      ]
    },
    {
      "question": "A technician needs to map a shared folder on a Windows system. Which protocol should they use?",
      "answers": [
        { "text": "SNMP", "correct": false },
        { "text": "SMB", "correct": true },
        { "text": "SMTP", "correct": false },
        { "text": "HTTPS", "correct": false },
        { "text": "FTP", "correct": false }
      ]
    },
    {
      "question": "Which of the following commands can be used to display the current routing table on a Linux system?",
      "answers": [
        { "text": "netstat -r", "correct": true },
        { "text": "ping", "correct": false },
        { "text": "traceroute", "correct": false },
        { "text": "ifconfig", "correct": false },
        { "text": "nslookup", "correct": false }
      ]
    },
    {
      "question": "A user reports slow network performance. What tool would you use to analyze the path of packets between source and destination?",
      "answers": [
        { "text": "ping", "correct": false },
        { "text": "traceroute", "correct": true },
        { "text": "arp", "correct": false },
        { "text": "nslookup", "correct": false },
        { "text": "ipconfig", "correct": false }
      ]
    },
    {
      "question": "Which network device is used to break up collision domains?",
      "answers": [
        { "text": "Hub", "correct": false },
        { "text": "Switch", "correct": true },
        { "text": "Router", "correct": false },
        { "text": "Access Point", "correct": false },
        { "text": "Repeater", "correct": false }
      ]
    },
    {
      "question": "What is the default subnet mask for a Class B network?",
      "answers": [
        { "text": "255.255.255.0", "correct": false },
        { "text": "255.255.0.0", "correct": true },
        { "text": "255.0.0.0", "correct": false },
        { "text": "255.255.255.255", "correct": false },
        { "text": "255.0.255.0", "correct": false }
      ]
    },
    {
    "question": "Which layer of the OSI model is responsible for reliable transmission of data?",
    "answers": [
        { "text": "Network Layer", "correct": false },
        { "text": "Data Link Layer", "correct": false },
        { "text": "Transport Layer", "correct": true },
        { "text": "Physical Layer", "correct": false }
    ]
    },
    {
    "question": "What is the primary purpose of the TCP/IP model?",
    "answers": [
        { "text": "To encrypt all communications", "correct": false },
        { "text": "To standardize network communication protocols", "correct": true },
        { "text": "To replace the OSI model", "correct": false },
        { "text": "To manage hardware-level communication", "correct": false }
    ]
    },
    {
    "question": "The OSI model has 7 layers.",
    "answers": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
    ]
    },
    {
    "question": "TCP provides connectionless communication.",
    "answers": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
    ]
    },
    {
    "question": "A technician is troubleshooting a network issue and wants to check connectivity. Which tool should they use?",
    "answers": [
        { "text": "traceroute", "correct": false },
        { "text": "ping", "correct": true },
        { "text": "arp", "correct": false },
        { "text": "ipconfig", "correct": false }
    ]
    },
    {
    "question": "Which protocol should you use to securely access a remote server via command line?",
    "answers": [
        { "text": "Telnet", "correct": false },
        { "text": "SSH", "correct": true },
        { "text": "HTTP", "correct": false },
        { "text": "FTP", "correct": false }
    ]
    }
  ];