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
      "question": "What is the primary benefit of subnetting in a network?",
      "answers": [
        { "text": "Reduces the size of routing tables", "correct": true },
        { "text": "Improves encryption of data", "correct": false },
        { "text": "Increases physical bandwidth", "correct": false },
        { "text": "Eliminates IP address conflicts", "correct": false },
        { "text": "Simplifies VLAN configuration", "correct": false }
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
    "question": "What protocol is used to automatically assign IP addresses in a network?",
    "answers": [
        { "text": "DNS", "correct": false },
        { "text": "DHCP", "correct": true },
        { "text": "NAT", "correct": false },
        { "text": "ARP", "correct": false }
      ]
    },
    {
    "question": "Which protocol resolves domain names to IP addresses?",
    "answers": [
        { "text": "HTTP", "correct": false },
        { "text": "DNS", "correct": true },
        { "text": "FTP", "correct": false },
        { "text": "ARP", "correct": false }
      ]
    },
    {
    "question": "What is the primary function of the Physical Layer in the OSI model?",
    "answers": [
        { "text": "Ensuring data integrity", "correct": false },
        { "text": "Routing packets", "correct": false },
        { "text": "Transmission of raw bitstreams", "correct": true },
        { "text": "Data encryption", "correct": false }
      ]
    },
    {
    "question": "Which protocol operates at port 22 and is used for secure remote logins?",
    "answers": [
        { "text": "FTP", "correct": false },
        { "text": "Telnet", "correct": false },
        { "text": "SSH", "correct": true },
        { "text": "SMTP", "correct": false }
      ]
    },
    {
    "question": "What is a key feature of the Transport Layer in the OSI model?",
    "answers": [
        { "text": "Frame creation", "correct": false },
        { "text": "End-to-end communication reliability", "correct": true },
        { "text": "Data encapsulation", "correct": false },
        { "text": "Signal transmission", "correct": false }
      ]
    },
    {
    "question": "The OSI model has how many layers?",
    "answers": [
        { "text": "4", "correct": false },
        { "text": "5", "correct": false },
        { "text": "6", "correct": false },
        { "text": "7", "correct": true }
      ]
    },
    {
    "question": "Which layer is responsible for logical addressing and routing?",
    "answers": [
        { "text": "Data Link Layer", "correct": false },
        { "text": "Network Layer", "correct": true },
        { "text": "Physical Layer", "correct": false },
        { "text": "Session Layer", "correct": false }
      ]
    },
    {
    "question": "What is the purpose of ARP?",
    "answers": [
        { "text": "Resolve IP to MAC addresses", "correct": true },
        { "text": "Resolve domain names", "correct": false },
        { "text": "Route packets", "correct": false },
        { "text": "Secure remote access", "correct": false }
      ]
    },
    {
    "question": "Which protocol operates at the Application Layer of the OSI model?",
    "answers": [
        { "text": "TCP", "correct": false },
        { "text": "UDP", "correct": false },
        { "text": "HTTP", "correct": true },
        { "text": "IP", "correct": false }
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
    "question": "The Physical Layer handles encryption of data.",
    "answers": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
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
    "question": "FTP uses port 21 for transferring files.",
    "answers": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ]
    },
    {
    "question": "ARP is used to resolve IP addresses to MAC addresses.",
    "answers": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ]
    },
    {
    "question": "A technician needs to check connectivity between two systems. Which tool should they use?",
    "answers": [
        { "text": "traceroute", "correct": false },
        { "text": "ping", "correct": true },
        { "text": "arp", "correct": false },
        { "text": "ipconfig", "correct": false }
      ]
    },
    {
    "question": "What protocol should you use to securely access a remote server via command line?",
    "answers": [
        { "text": "Telnet", "correct": false },
        { "text": "SSH", "correct": true },
        { "text": "HTTP", "correct": false },
        { "text": "FTP", "correct": false }
      ]
    },
    {
    "question": "What is the default subnet mask for a Class B network?",
    "answers": [
        { "text": "255.255.255.0", "correct": false },
        { "text": "255.255.0.0", "correct": true },
        { "text": "255.0.0.0", "correct": false },
        { "text": "255.255.255.255", "correct": false }
      ]
    },
    {
    "question": "A technician is tasked with resolving MAC addresses to IP addresses. Which protocol is used?",
    "answers": [
        { "text": "DNS", "correct": false },
        { "text": "NAT", "correct": false },
        { "text": "ARP", "correct": true },
        { "text": "FTP", "correct": false }
      ]
    },
    {
    "question": "Which tool is used to check the path packets take to a destination?",
    "answers": [
        { "text": "ping", "correct": false },
        { "text": "ipconfig", "correct": false },
        { "text": "traceroute", "correct": true },
        { "text": "netstat", "correct": false }
      ]
    },
    {
      "question": "What is the primary purpose of the OSI model?",
      "answers": [
        { "text": "To encrypt all communications", "correct": false },
        { "text": "To provide a standard framework for network communication", "correct": true },
        { "text": "To replace all network protocols", "correct": false },
        { "text": "To manage physical devices", "correct": false }
      ]
    },
    {
      "question": "Which OSI layer is responsible for managing how data is presented?",
      "answers": [
        { "text": "Application Layer", "correct": false },
        { "text": "Presentation Layer", "correct": true },
        { "text": "Session Layer", "correct": false },
        { "text": "Network Layer", "correct": false }
      ]
    },
    {
      "question": "Which layer ensures host-to-host communication integrity?",
      "answers": [
        { "text": "Data Link Layer", "correct": false },
        { "text": "Transport Layer", "correct": true },
        { "text": "Session Layer", "correct": false },
        { "text": "Network Layer", "correct": false }
      ]
    },
    {
      "question": "What is the function of the Session Layer?",
      "answers": [
        { "text": "To establish and manage interactive communication sessions", "correct": true },
        { "text": "To handle error correction and retransmission", "correct": false },
        { "text": "To route packets", "correct": false },
        { "text": "To compress data", "correct": false }
      ]
    },
    {
      "question": "What does the Network Layer provide?",
      "answers": [
        { "text": "Point-to-point communication", "correct": false },
        { "text": "Globally-unique addressing and routing", "correct": true },
        { "text": "Data encryption", "correct": false },
        { "text": "Error correction", "correct": false }
      ]
    },
    {
      "question": "Which layer uses frames for data transmission?",
      "answers": [
        { "text": "Physical Layer", "correct": false },
        { "text": "Data Link Layer", "correct": true },
        { "text": "Network Layer", "correct": false },
        { "text": "Transport Layer", "correct": false }
      ]
    },
    {
      "question": "What is encapsulation in the OSI model?",
      "answers": [
        { "text": "The process of breaking down data into layers", "correct": false },
        { "text": "The process of adding headers and footers at each layer", "correct": true },
        { "text": "The process of routing packets", "correct": false },
        { "text": "The process of checking errors in frames", "correct": false }
      ]
    },
    {
      "question": "Which protocols exist at the OSI Application Layer?",
      "answers": [
        { "text": "HTTP, SMTP, and Telnet", "correct": true },
        { "text": "IP and ICMP", "correct": false },
        { "text": "TCP and UDP", "correct": false },
        { "text": "ARP and RARP", "correct": false }
      ]
    },
    {
      "question": "What is the function of the Data Link Layer?",
      "answers": [
        { "text": "To establish physical connections", "correct": false },
        { "text": "To ensure point-to-point validity of data", "correct": true },
        { "text": "To provide routing services", "correct": false },
        { "text": "To present data to applications", "correct": false }
      ]
    },
    {
      "question": "Which layer is responsible for encryption and compression?",
      "answers": [
        { "text": "Network Layer", "correct": false },
        { "text": "Transport Layer", "correct": false },
        { "text": "Presentation Layer", "correct": true },
        { "text": "Session Layer", "correct": false }
      ]
    },
    {
      "question": "What does the Physical Layer handle?",
      "answers": [
        { "text": "Logical addressing", "correct": false },
        { "text": "Transmission and receipt of raw bitstreams", "correct": true },
        { "text": "Error correction", "correct": false },
        { "text": "Frame validation", "correct": false }
      ]
    },
    {
      "question": "What protocols operate at the Transport Layer?",
      "answers": [
        { "text": "HTTP and FTP", "correct": false },
        { "text": "IP and ICMP", "correct": false },
        { "text": "TCP and UDP", "correct": true },
        { "text": "DNS and ARP", "correct": false }
      ]
    },
    {
      "question": "Which layer determines routes between source and destination networks?",
      "answers": [
        { "text": "Data Link Layer", "correct": false },
        { "text": "Network Layer", "correct": true },
        { "text": "Transport Layer", "correct": false },
        { "text": "Session Layer", "correct": false }
      ]
    },
    {
      "question": "Which layer introduces Logical Adjacency?",
      "answers": [
        { "text": "Data Link Layer", "correct": false },
        { "text": "Session Layer", "correct": false },
        { "text": "Physical Layer", "correct": true },
        { "text": "Presentation Layer", "correct": false }
      ]
    },
    {
      "question": "What is the key difference between TCP/IP and OSI models?",
      "answers": [
        { "text": "TCP/IP has 4 layers, OSI has 7", "correct": true },
        { "text": "TCP/IP manages only routing", "correct": false },
        { "text": "OSI includes all internet protocols", "correct": false },
        { "text": "TCP/IP replaces the Network Layer", "correct": false }
      ]
    },
    {
      "question": "The OSI model has seven layers.",
      "answers": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ]
    },
    {
      "question": "The Data Link Layer uses packets for transmission.",
      "answers": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
      ]
    },
    {
      "question": "The Presentation Layer is responsible for data encryption.",
      "answers": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ]
    },
    {
      "question": "The Physical Layer includes the physical media itself.",
      "answers": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
      ]
    },
    {
      "question": "Encapsulation involves adding headers and footers to data.",
      "answers": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ]
    },
    {
      "question": "TCP and UDP operate at the Network Layer.",
      "answers": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
      ]
    },
    {
      "question": "The Network Layer is responsible for globally unique addressing.",
      "answers": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ]
    },
    {
      "question": "The OSI model standardizes network components for interoperability.",
      "answers": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ]
    },
    {
      "question": "Logical adjacency allows layers to communicate directly.",
      "answers": [
        { "text": "True", "correct": false },
        { "text": "False", "correct": true }
      ]
    },
    {
      "question": "The Application Layer handles user-to-user communication.",
      "answers": [
        { "text": "True", "correct": true },
        { "text": "False", "correct": false }
      ]
    }
  ];