const questionBank = [
  {
    "question": "Which of the following best describes the binary number system?",
    "answers": [
      { "text": "It uses only the digits 0 and 1", "correct": true },
      { "text": "It uses the digits 0–9", "correct": false },
      { "text": "It uses letters A–F only", "correct": false },
      { "text": "It uses digits 0–7", "correct": false }
    ]
  },
  {
    "question": "What is the decimal equivalent of the binary octet 11001001?",
    "answers": [
      { "text": "201", "correct": true },
      { "text": "192", "correct": false },
      { "text": "173", "correct": false },
      { "text": "209", "correct": false }
    ]
  },
  {
    "question": "In IPv4 classful addressing, which class uses a default subnet mask of 255.255.255.0?",
    "answers": [
      { "text": "Class A", "correct": false },
      { "text": "Class B", "correct": false },
      { "text": "Class C", "correct": true },
      { "text": "Class D", "correct": false }
    ]
  },
  {
    "question": "What does a subnet mask primarily do?",
    "answers": [
      { "text": "Divides an IP address into its network and host portions", "correct": true },
      { "text": "Determines the speed of the network", "correct": false },
      { "text": "Assigns dynamic IP addresses to hosts", "correct": false },
      { "text": "Identifies the physical location of a device", "correct": false }
    ]
  },
  {
    "question": "How many usable host addresses are available in a standard Class C network?",
    "answers": [
      { "text": "254", "correct": true },
      { "text": "256", "correct": false },
      { "text": "255", "correct": false },
      { "text": "253", "correct": false }
    ]
  },
  {
    "question": "Which formula is used to determine the number of usable host addresses in an IP network?",
    "answers": [
      { "text": "2^n – 2", "correct": true },
      { "text": "2^(n–2)", "correct": false },
      { "text": "2^n – 1", "correct": false },
      { "text": "2^(n–1) – 1", "correct": false }
    ]
  },
  {
    "question": "Which IP address is reserved as the loopback address?",
    "answers": [
      { "text": "127.0.0.1", "correct": true },
      { "text": "192.168.1.1", "correct": false },
      { "text": "0.0.0.0", "correct": false },
      { "text": "255.255.255.255", "correct": false }
    ]
  },
  {
    "question": "What is the default subnet mask for a Class A network?",
    "answers": [
      { "text": "255.0.0.0", "correct": true },
      { "text": "255.255.0.0", "correct": false },
      { "text": "255.255.255.0", "correct": false },
      { "text": "255.255.255.255", "correct": false }
    ]
  },
  {
    "question": "In positional notation, what does the position of a digit determine?",
    "answers": [
      { "text": "The digit’s face value only", "correct": false },
      { "text": "Its value multiplied by the power of the base according to its position", "correct": true },
      { "text": "The color of the digit", "correct": false },
      { "text": "Its order in the number", "correct": false }
    ]
  },
  {
    "question": "Which IP class offers the highest number of host addresses per network?",
    "answers": [
      { "text": "Class A", "correct": true },
      { "text": "Class B", "correct": false },
      { "text": "Class C", "correct": false },
      { "text": "Class D", "correct": false }
    ]
  },
  {
    "question": "For a Class B network, how many usable host addresses are available?",
    "answers": [
      { "text": "65,534", "correct": true },
      { "text": "65,536", "correct": false },
      { "text": "65,535", "correct": false },
      { "text": "65,533", "correct": false }
    ]
  },
  {
    "question": "The binary string “11001001000100010001110100000100” converts to which IPv4 address?",
    "answers": [
      { "text": "201.17.29.4", "correct": true },
      { "text": "192.168.1.1", "correct": false },
      { "text": "130.61.22.204", "correct": false },
      { "text": "197.101.28.83", "correct": false }
    ]
  },
  {
    "question": "What does “VLSM” stand for in classless addressing?",
    "answers": [
      { "text": "Variable Length Subnet Masking", "correct": true },
      { "text": "Virtual Local Subnet Mask", "correct": false },
      { "text": "Variable Logical Subnet Method", "correct": false },
      { "text": "Variable Length Security Module", "correct": false }
    ]
  },
  {
    "question": "Which of the following is a valid private IP address range?",
    "answers": [
      { "text": "10.0.0.0/8", "correct": false },
      { "text": "172.16.0.0/12", "correct": false },
      { "text": "192.168.0.0/16", "correct": false },
      { "text": "All of the above", "correct": true }
    ]
  },
  {
    "question": "What does the term “host bits” refer to in an IP address?",
    "answers": [
      { "text": "Bits used to designate individual devices", "correct": true },
      { "text": "Bits used to identify the network", "correct": false },
      { "text": "Bits reserved for the subnet mask only", "correct": false },
      { "text": "Bits indicating broadcast addresses", "correct": false }
    ]
  },
  {
    "question": "What is the binary representation of the decimal number 29 (ignoring leading zeros)?",
    "answers": [
      { "text": "11101", "correct": true },
      { "text": "11010", "correct": false },
      { "text": "10111", "correct": false },
      { "text": "10011", "correct": false }
    ]
  },
  {
    "question": "Which class is identified by a first octet range of 192 to 223?",
    "answers": [
      { "text": "Class A", "correct": false },
      { "text": "Class B", "correct": false },
      { "text": "Class C", "correct": true },
      { "text": "Class D", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of a broadcast address in an IP network?",
    "answers": [
      { "text": "To send messages to all hosts on the network", "correct": true },
      { "text": "To assign dynamic IP addresses", "correct": false },
      { "text": "To route traffic between different networks", "correct": false },
      { "text": "To encrypt network communications", "correct": false }
    ]
  },
  {
    "question": "Which factor is NOT determined by the subnet mask?",
    "answers": [
      { "text": "The division between network and host portions", "correct": false },
      { "text": "The network’s physical location", "correct": true },
      { "text": "The number of host bits available", "correct": false },
      { "text": "The network portion of the IP address", "correct": false }
    ]
  },
  {
    "question": "In decimal-to-binary conversion for the base-10 system, if a digit is in the third position from the right, what is its multiplier?",
    "answers": [
      { "text": "10²", "correct": true },
      { "text": "10³", "correct": false },
      { "text": "10¹", "correct": false },
      { "text": "10⁰", "correct": false }
    ]
  },
  {
    "question": "Binary number systems use only two digits: 0 and 1.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "In positional notation, the value of a digit is independent of its position.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A Class C network uses the default subnet mask 255.255.255.0.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A Class A network has 24 host bits.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The IPv4 loopback address is 127.0.0.1.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The formula to calculate usable host addresses in a network is 2^n – 2.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Class B networks use a default subnet mask of 255.255.0.0.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "IPv4 classful addressing assigns networks without the use of a subnet mask.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Variable Length Subnet Masking (VLSM) is used in classless addressing to allocate IP addresses more efficiently.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Binary conversion involves multiplying each digit by the base raised to the power of its position.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "When all host bits are set to 0, the resulting address is the network address.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "When all host bits are set to 1, the resulting address is the broadcast address.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Private IP addresses can include addresses like 192.168.1.1.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "In a Class A network, the number of usable hosts is calculated as 2^24.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Class C addresses have a first octet range from 192 to 223.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "In classful addressing, the high order bits are constant for all addresses within a class.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "An IP address is divided into a network portion and a host portion based on the subnet mask.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The binary equivalent of the decimal number 108 is 1101100.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "In Class B addressing, there are 65,536 usable host addresses.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A /32 subnet mask indicates a network with only one usable host address.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A network administrator is configuring a router to forward packets between networks. Which part of the IPv4 address helps the router determine the correct destination network?",
    "answers": [
      { "text": "Host portion", "correct": false },
      { "text": "Subnet mask", "correct": false },
      { "text": "Network portion", "correct": true },
      { "text": "Default gateway", "correct": false }
    ]
  },
  {
    "question": "During troubleshooting, a host cannot reach a server on a remote network. Which configuration should be verified first?",
    "answers": [
      { "text": "MAC address table", "correct": false },
      { "text": "Default gateway configuration", "correct": true },
      { "text": "IP header length", "correct": false },
      { "text": "IPv6 address format", "correct": false }
    ]
  },
  {
    "question": "If a packet is too large for a network segment’s MTU, what action does the router take?",
    "answers": [
      { "text": "Encapsulates the packet in a new header", "correct": false },
      { "text": "Aggregates the packet with others", "correct": false },
      { "text": "Fragments the packet into smaller pieces", "correct": true },
      { "text": "Drops the packet immediately", "correct": false }
    ]
  },
  {
    "question": "When using CIDR notation, what does the number after the slash indicate?",
    "answers": [
      { "text": "The number of bits allocated to the host portion", "correct": false },
      { "text": "The number of bits allocated to the network portion", "correct": true },
      { "text": "The total number of bits in the IP address", "correct": false },
      { "text": "The number of available subnets", "correct": false }
    ]
  },
  {
    "question": "A student sees an IPv6 address written as “ABCD::20:1919:A12:0:7201”. This notation demonstrates which IPv6 addressing rule?",
    "answers": [
      { "text": "Skipping leading zeros in each tuple", "correct": false },
      { "text": "Compressing one sequence of all-zero tuples", "correct": true },
      { "text": "Using dotted decimal notation", "correct": false },
      { "text": "Replacing the last two tuples with a double colon", "correct": false }
    ]
  },
  {
    "question": "In a network with varied media types, a technician notices packet fragmentation. Which factor is most likely responsible?",
    "answers": [
      { "text": "A mismatch between the IP version and hardware", "correct": false },
      { "text": "Variation in MTU values across different media", "correct": true },
      { "text": "Incorrect entries in the ARP table", "correct": false },
      { "text": "Using IPv6 addresses on an IPv4 network", "correct": false }
    ]
  },
  {
    "question": "A network engineer is configuring a copper serial connection using Frame Relay. What is the appropriate MTU value for this connection?",
    "answers": [
      { "text": "1518 bytes", "correct": false },
      { "text": "512 bytes", "correct": true },
      { "text": "2272 bytes", "correct": false },
      { "text": "17,966 bytes", "correct": false }
    ]
  },
  {
    "question": "When assigning an IPv4 address with a subnet mask of 255.255.255.0, which CIDR notation is equivalent?",
    "answers": [
      { "text": "/24", "correct": true },
      { "text": "/16", "correct": false },
      { "text": "/8", "correct": false },
      { "text": "/32", "correct": false }
    ]
  },
  {
    "question": "If an IP packet’s header does not correctly separate the network and host portions, which element is most likely misconfigured?",
    "answers": [
      { "text": "Default gateway", "correct": false },
      { "text": "Subnet mask", "correct": true },
      { "text": "MTU setting", "correct": false },
      { "text": "ARP cache", "correct": false }
    ]
  },
  {
    "question": "As a network specialist transitions from IPv4 to IPv6, what key change in address representation must be considered?",
    "answers": [
      { "text": "Moving from dotted decimal to colon-hexadecimal format", "correct": true },
      { "text": "Changing the default gateway configuration", "correct": false },
      { "text": "Adjusting MTU values for every media type", "correct": false },
      { "text": "Disabling ARP functionality", "correct": false }
    ]
  }
]