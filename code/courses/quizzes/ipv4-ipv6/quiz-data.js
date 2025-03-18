const questionBank = [
  {
    "question": "Which of the following is NOT a characteristic of IPv4?",
    "answers": [
      { "text": "Connectionless delivery", "correct": false },
      { "text": "Best effort delivery", "correct": false },
      { "text": "Media independence", "correct": false },
      { "text": "Built-in reliability", "correct": true }
    ]
  },
  {
    "question": "What does “best effort” delivery in IPv4 imply?",
    "answers": [
      { "text": "Guaranteed delivery of packets", "correct": false },
      { "text": "Unreliable delivery without error recovery", "correct": true },
      { "text": "Priority-based delivery", "correct": false },
      { "text": "Reliable handshaking between hosts", "correct": false }
    ]
  },
  {
    "question": "In IPv4 addressing, what role does the subnet mask play?",
    "answers": [
      { "text": "It determines the physical address", "correct": false },
      { "text": "It divides the address into network and host portions", "correct": true },
      { "text": "It encrypts the IP address", "correct": false },
      { "text": "It defines the default gateway", "correct": false }
    ]
  },
  {
    "question": "What is the primary purpose of a default gateway?",
    "answers": [
      { "text": "To assign IP addresses to hosts", "correct": false },
      { "text": "To serve as the router interface for network communications", "correct": true },
      { "text": "To manage MAC addresses", "correct": false },
      { "text": "To fragment packets", "correct": false }
    ]
  },
  {
    "question": "Which method of representing a subnet mask is used for Classless Interdomain Routing (CIDR)?",
    "answers": [
      { "text": "Dotted decimal notation", "correct": false },
      { "text": "Binary notation", "correct": false },
      { "text": "Slash (/) followed by the number of network bits", "correct": true },
      { "text": "Hexadecimal notation", "correct": false }
    ]
  },
  {
    "question": "What two parts make up an IPv4 address?",
    "answers": [
      { "text": "Network number and subnet mask", "correct": false },
      { "text": "Network number and host number", "correct": true },
      { "text": "Host number and default gateway", "correct": false },
      { "text": "MAC address and network number", "correct": false }
    ]
  },
  {
    "question": "Which MTU value is associated with Copper Ethernet as presented?",
    "answers": [
      { "text": "512 bytes", "correct": false },
      { "text": "1518 bytes", "correct": true },
      { "text": "2272 bytes", "correct": false },
      { "text": "17,966 bytes", "correct": false }
    ]
  },
  {
    "question": "What network device is responsible for fragmenting packets when necessary?",
    "answers": [
      { "text": "Switch", "correct": false },
      { "text": "Router", "correct": true },
      { "text": "Hub", "correct": false },
      { "text": "Bridge", "correct": false }
    ]
  },
  {
    "question": "Which protocol maps an IPv4 address to a MAC address?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "ARP", "correct": true },
      { "text": "ICMP", "correct": false }
    ]
  },
  {
    "question": "How are IPv6 addresses typically represented?",
    "answers": [
      { "text": "Dotted decimal format", "correct": false },
      { "text": "Colon-hexadecimal format", "correct": true },
      { "text": "Binary string", "correct": false },
      { "text": "Octal format", "correct": false }
    ]
  },
  {
    "question": "Which rule applies when condensing an IPv6 address?",
    "answers": [
      { "text": "Multiple sequences of zero tuples can be compressed", "correct": false },
      { "text": "Only one sequence of all-zero tuples can be compressed", "correct": true },
      { "text": "All leading zeros must be retained", "correct": false },
      { "text": "The address must always be written with eight complete tuples", "correct": false }
    ]
  },
  {
    "question": "What was one of the drivers for the development of IPv6?",
    "answers": [
      { "text": "To increase the size of packets", "correct": false },
      { "text": "To address IPv4 address exhaustion", "correct": true },
      { "text": "To eliminate the need for routing", "correct": false },
      { "text": "To simplify MAC addressing", "correct": false }
    ]
  },
  {
    "question": "Which protocol is used to map an IPv4 address to a corresponding MAC address?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false }
    ]
  },
  {
    "question": "What benefit does hierarchical addressing provide in IPv4?",
    "answers": [
      { "text": "It increases the size of the IP header", "correct": false },
      { "text": "It simplifies routing by using the network portion", "correct": true },
      { "text": "It expands the available address space", "correct": false },
      { "text": "It eliminates the need for fragmentation", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does the IP address operate?",
    "answers": [
      { "text": "Physical layer", "correct": false },
      { "text": "Data Link layer", "correct": false },
      { "text": "Network layer", "correct": true },
      { "text": "Transport layer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a method for assigning IPv6 addresses?",
    "answers": [
      { "text": "Manual addressing", "correct": false },
      { "text": "DHCPv6", "correct": false },
      { "text": "Stateless auto-configuration", "correct": false },
      { "text": "ARP-based configuration", "correct": true }
    ]
  },
  {
    "question": "In IPv4, what does “fragmentation” refer to?",
    "answers": [
      { "text": "Dividing a packet into smaller pieces due to MTU constraints", "correct": true },
      { "text": "Combining several packets into one larger packet", "correct": false },
      { "text": "Encrypting a packet for secure transmission", "correct": false },
      { "text": "Routing a packet through multiple gateways", "correct": false }
    ]
  },
  {
    "question": "What does each “1” bit in the subnet mask indicate?",
    "answers": [
      { "text": "A bit belonging to the host portion", "correct": false },
      { "text": "A bit belonging to the network portion", "correct": true },
      { "text": "A bit that represents the default gateway", "correct": false },
      { "text": "A bit used for error checking", "correct": false }
    ]
  },
  {
    "question": "Which media type has the smallest MTU as noted in the lecture?",
    "answers": [
      { "text": "Copper Ethernet", "correct": false },
      { "text": "Copper Serial: Frame Relay", "correct": true },
      { "text": "Optical Fiber: ATM", "correct": false },
      { "text": "Wireless: 802.11", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of the network layer in data communication?",
    "answers": [
      { "text": "Encrypting data for secure transmission", "correct": false },
      { "text": "Managing physical media connections", "correct": false },
      { "text": "Addressing and routing packets from host to host", "correct": true },
      { "text": "Handling application-level protocols", "correct": false }
    ]
  },
  {
    "question": "Which of the following is used to map an IPv4 address to a MAC address?",
    "answers": [
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "DHCP", "correct": false }
    ]
  },
  {
    "question": "How are IPv6 addresses typically represented?",
    "answers": [
      { "text": "Dotted decimal format", "correct": false },
      { "text": "Colon-hexadecimal format", "correct": true },
      { "text": "Binary string", "correct": false },
      { "text": "Octal format", "correct": false }
    ]
  },
  {
    "question": "Which rule applies when condensing an IPv6 address?",
    "answers": [
      { "text": "Multiple sequences of zero tuples can be compressed", "correct": false },
      { "text": "Only one sequence of all-zero tuples can be compressed", "correct": true },
      { "text": "All leading zeros must be retained", "correct": false },
      { "text": "The address must always be written with eight complete tuples", "correct": false }
    ]
  },
  {
    "question": "What was one of the drivers for the development of IPv6?",
    "answers": [
      { "text": "To increase the size of packets", "correct": false },
      { "text": "To address IPv4 address exhaustion", "correct": true },
      { "text": "To eliminate the need for routing", "correct": false },
      { "text": "To simplify MAC addressing", "correct": false }
    ]
  },
  {
    "question": "Which protocol is used to map an IPv4 address to a corresponding MAC address?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false }
    ]
  },
  {
    "question": "What benefit does hierarchical addressing provide in IPv4?",
    "answers": [
      { "text": "It increases the size of the IP header", "correct": false },
      { "text": "It simplifies routing by using the network portion", "correct": true },
      { "text": "It expands the available address space", "correct": false },
      { "text": "It eliminates the need for fragmentation", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does the IP address operate?",
    "answers": [
      { "text": "Physical layer", "correct": false },
      { "text": "Data Link layer", "correct": false },
      { "text": "Network layer", "correct": true },
      { "text": "Transport layer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a method for assigning IPv6 addresses?",
    "answers": [
      { "text": "Manual addressing", "correct": false },
      { "text": "DHCPv6", "correct": false },
      { "text": "Stateless auto-configuration", "correct": false },
      { "text": "ARP-based configuration", "correct": true }
    ]
  },
  {
    "question": "In IPv4, what does “fragmentation” refer to?",
    "answers": [
      { "text": "Dividing a packet into smaller pieces due to MTU constraints", "correct": true },
      { "text": "Combining several packets into one larger packet", "correct": false },
      { "text": "Encrypting a packet for secure transmission", "correct": false },
      { "text": "Routing a packet through multiple gateways", "correct": false }
    ]
  },
  {
    "question": "What does each “1” bit in the subnet mask indicate?",
    "answers": [
      { "text": "A bit belonging to the host portion", "correct": false },
      { "text": "A bit belonging to the network portion", "correct": true },
      { "text": "A bit that represents the default gateway", "correct": false },
      { "text": "A bit used for error checking", "correct": false }
    ]
  },
  {
    "question": "Which media type has the smallest MTU as noted in the lecture?",
    "answers": [
      { "text": "Copper Ethernet", "correct": false },
      { "text": "Copper Serial: Frame Relay", "correct": true },
      { "text": "Optical Fiber: ATM", "correct": false },
      { "text": "Wireless: 802.11", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of the network layer in data communication?",
    "answers": [
      { "text": "Encrypting data for secure transmission", "correct": false },
      { "text": "Managing physical media connections", "correct": false },
      { "text": "Addressing and routing packets from host to host", "correct": true },
      { "text": "Handling application-level protocols", "correct": false }
    ]
  },
  {
    "question": "Which of the following is used to map an IPv4 address to a MAC address?",
    "answers": [
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "DHCP", "correct": false }
    ]
  },
  {
    "question": "How are IPv6 addresses typically represented?",
    "answers": [
      { "text": "Dotted decimal format", "correct": false },
      { "text": "Colon-hexadecimal format", "correct": true },
      { "text": "Binary string", "correct": false },
      { "text": "Octal format", "correct": false }
    ]
  },
  {
    "question": "Which rule applies when condensing an IPv6 address?",
    "answers": [
      { "text": "Multiple sequences of zero tuples can be compressed", "correct": false },
      { "text": "Only one sequence of all-zero tuples can be compressed", "correct": true },
      { "text": "All leading zeros must be retained", "correct": false },
      { "text": "The address must always be written with eight complete tuples", "correct": false }
    ]
  },
  {
    "question": "What was one of the drivers for the development of IPv6?",
    "answers": [
      { "text": "To increase the size of packets", "correct": false },
      { "text": "To address IPv4 address exhaustion", "correct": true },
      { "text": "To eliminate the need for routing", "correct": false },
      { "text": "To simplify MAC addressing", "correct": false }
    ]
  },
  {
    "question": "Which protocol is used to map an IPv4 address to a corresponding MAC address?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false }
    ]
  },
  {
    "question": "What benefit does hierarchical addressing provide in IPv4?",
    "answers": [
      { "text": "It increases the size of the IP header", "correct": false },
      { "text": "It simplifies routing by using the network portion", "correct": true },
      { "text": "It expands the available address space", "correct": false },
      { "text": "It eliminates the need for fragmentation", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does the IP address operate?",
    "answers": [
      { "text": "Physical layer", "correct": false },
      { "text": "Data Link layer", "correct": false },
      { "text": "Network layer", "correct": true },
      { "text": "Transport layer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a method for assigning IPv6 addresses?",
    "answers": [
      { "text": "Manual addressing", "correct": false },
      { "text": "DHCPv6", "correct": false },
      { "text": "Stateless auto-configuration", "correct": false },
      { "text": "ARP-based configuration", "correct": true }
    ]
  },
  {
    "question": "In IPv4, what does “fragmentation” refer to?",
    "answers": [
      { "text": "Dividing a packet into smaller pieces due to MTU constraints", "correct": true },
      { "text": "Combining several packets into one larger packet", "correct": false },
      { "text": "Encrypting a packet for secure transmission", "correct": false },
      { "text": "Routing a packet through multiple gateways", "correct": false }
    ]
  },
  {
    "question": "What does each “1” bit in the subnet mask indicate?",
    "answers": [
      { "text": "A bit belonging to the host portion", "correct": false },
      { "text": "A bit belonging to the network portion", "correct": true },
      { "text": "A bit that represents the default gateway", "correct": false },
      { "text": "A bit used for error checking", "correct": false }
    ]
  },
  {
    "question": "Which media type has the smallest MTU as noted in the lecture?",
    "answers": [
      { "text": "Copper Ethernet", "correct": false },
      { "text": "Copper Serial: Frame Relay", "correct": true },
      { "text": "Optical Fiber: ATM", "correct": false },
      { "text": "Wireless: 802.11", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of the network layer in data communication?",
    "answers": [
      { "text": "Encrypting data for secure transmission", "correct": false },
      { "text": "Managing physical media connections", "correct": false },
      { "text": "Addressing and routing packets from host to host", "correct": true },
      { "text": "Handling application-level protocols", "correct": false }
    ]
  },
  {
    "question": "Which of the following is used to map an IPv4 address to a MAC address?",
    "answers": [
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "DHCP", "correct": false }
    ]
  },
  {
    "question": "How are IPv6 addresses typically represented?",
    "answers": [
      { "text": "Dotted decimal format", "correct": false },
      { "text": "Colon-hexadecimal format", "correct": true },
      { "text": "Binary string", "correct": false },
      { "text": "Octal format", "correct": false }
    ]
  },
  {
    "question": "Which rule applies when condensing an IPv6 address?",
    "answers": [
      { "text": "Multiple sequences of zero tuples can be compressed", "correct": false },
      { "text": "Only one sequence of all-zero tuples can be compressed", "correct": true },
      { "text": "All leading zeros must be retained", "correct": false },
      { "text": "The address must always be written with eight complete tuples", "correct": false }
    ]
  },
  {
    "question": "What was one of the drivers for the development of IPv6?",
    "answers": [
      { "text": "To increase the size of packets", "correct": false },
      { "text": "To address IPv4 address exhaustion", "correct": true },
      { "text": "To eliminate the need for routing", "correct": false },
      { "text": "To simplify MAC addressing", "correct": false }
    ]
  },
  {
    "question": "Which protocol is used to map an IPv4 address to a corresponding MAC address?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false }
    ]
  },
  {
    "question": "What benefit does hierarchical addressing provide in IPv4?",
    "answers": [
      { "text": "It increases the size of the IP header", "correct": false },
      { "text": "It simplifies routing by using the network portion", "correct": true },
      { "text": "It expands the available address space", "correct": false },
      { "text": "It eliminates the need for fragmentation", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does the IP address operate?",
    "answers": [
      { "text": "Physical layer", "correct": false },
      { "text": "Data Link layer", "correct": false },
      { "text": "Network layer", "correct": true },
      { "text": "Transport layer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a method for assigning IPv6 addresses?",
    "answers": [
      { "text": "Manual addressing", "correct": false },
      { "text": "DHCPv6", "correct": false },
      { "text": "Stateless auto-configuration", "correct": false },
      { "text": "ARP-based configuration", "correct": true }
    ]
  },
  {
    "question": "In IPv4, what does “fragmentation” refer to?",
    "answers": [
      { "text": "Dividing a packet into smaller pieces due to MTU constraints", "correct": true },
      { "text": "Combining several packets into one larger packet", "correct": false },
      { "text": "Encrypting a packet for secure transmission", "correct": false },
      { "text": "Routing a packet through multiple gateways", "correct": false }
    ]
  },
  {
    "question": "What does each “1” bit in the subnet mask indicate?",
    "answers": [
      { "text": "A bit belonging to the host portion", "correct": false },
      { "text": "A bit belonging to the network portion", "correct": true },
      { "text": "A bit that represents the default gateway", "correct": false },
      { "text": "A bit used for error checking", "correct": false }
    ]
  },
  {
    "question": "Which media type has the smallest MTU as noted in the lecture?",
    "answers": [
      { "text": "Copper Ethernet", "correct": false },
      { "text": "Copper Serial: Frame Relay", "correct": true },
      { "text": "Optical Fiber: ATM", "correct": false },
      { "text": "Wireless: 802.11", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of the network layer in data communication?",
    "answers": [
      { "text": "Encrypting data for secure transmission", "correct": false },
      { "text": "Managing physical media connections", "correct": false },
      { "text": "Addressing and routing packets from host to host", "correct": true },
      { "text": "Handling application-level protocols", "correct": false }
    ]
  },
  {
    "question": "Which of the following is used to map an IPv4 address to a MAC address?",
    "answers": [
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "DHCP", "correct": false }
    ]
  },
  {
    "question": "How are IPv6 addresses typically represented?",
    "answers": [
      { "text": "Dotted decimal format", "correct": false },
      { "text": "Colon-hexadecimal format", "correct": true },
      { "text": "Binary string", "correct": false },
      { "text": "Octal format", "correct": false }
    ]
  },
  {
    "question": "Which rule applies when condensing an IPv6 address?",
    "answers": [
      { "text": "Multiple sequences of zero tuples can be compressed", "correct": false },
      { "text": "Only one sequence of all-zero tuples can be compressed", "correct": true },
      { "text": "All leading zeros must be retained", "correct": false },
      { "text": "The address must always be written with eight complete tuples", "correct": false }
    ]
  },
  {
    "question": "What was one of the drivers for the development of IPv6?",
    "answers": [
      { "text": "To increase the size of packets", "correct": false },
      { "text": "To address IPv4 address exhaustion", "correct": true },
      { "text": "To eliminate the need for routing", "correct": false },
      { "text": "To simplify MAC addressing", "correct": false }
    ]
  },
  {
    "question": "Which protocol is used to map an IPv4 address to a corresponding MAC address?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false }
    ]
  },
  {
    "question": "What benefit does hierarchical addressing provide in IPv4?",
    "answers": [
      { "text": "It increases the size of the IP header", "correct": false },
      { "text": "It simplifies routing by using the network portion", "correct": true },
      { "text": "It expands the available address space", "correct": false },
      { "text": "It eliminates the need for fragmentation", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does the IP address operate?",
    "answers": [
      { "text": "Physical layer", "correct": false },
      { "text": "Data Link layer", "correct": false },
      { "text": "Network layer", "correct": true },
      { "text": "Transport layer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a method for assigning IPv6 addresses?",
    "answers": [
      { "text": "Manual addressing", "correct": false },
      { "text": "DHCPv6", "correct": false },
      { "text": "Stateless auto-configuration", "correct": false },
      { "text": "ARP-based configuration", "correct": true }
    ]
  },
  {
    "question": "In IPv4, what does “fragmentation” refer to?",
    "answers": [
      { "text": "Dividing a packet into smaller pieces due to MTU constraints", "correct": true },
      { "text": "Combining several packets into one larger packet", "correct": false },
      { "text": "Encrypting a packet for secure transmission", "correct": false },
      { "text": "Routing a packet through multiple gateways", "correct": false }
    ]
  },
  {
    "question": "What does each “1” bit in the subnet mask indicate?",
    "answers": [
      { "text": "A bit belonging to the host portion", "correct": false },
      { "text": "A bit belonging to the network portion", "correct": true },
      { "text": "A bit that represents the default gateway", "correct": false },
      { "text": "A bit used for error checking", "correct": false }
    ]
  },
  {
    "question": "Which media type has the smallest MTU as noted in the lecture?",
    "answers": [
      { "text": "Copper Ethernet", "correct": false },
      { "text": "Copper Serial: Frame Relay", "correct": true },
      { "text": "Optical Fiber: ATM", "correct": false },
      { "text": "Wireless: 802.11", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of the network layer in data communication?",
    "answers": [
      { "text": "Encrypting data for secure transmission", "correct": false },
      { "text": "Managing physical media connections", "correct": false },
      { "text": "Addressing and routing packets from host to host", "correct": true },
      { "text": "Handling application-level protocols", "correct": false }
    ]
  },
  {
    "question": "Which of the following is used to map an IPv4 address to a MAC address?",
    "answers": [
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "DHCP", "correct": false }
    ]
  },
  {
    "question": "How are IPv6 addresses typically represented?",
    "answers": [
      { "text": "Dotted decimal format", "correct": false },
      { "text": "Colon-hexadecimal format", "correct": true },
      { "text": "Binary string", "correct": false },
      { "text": "Octal format", "correct": false }
    ]
  },
  {
    "question": "Which rule applies when condensing an IPv6 address?",
    "answers": [
      { "text": "Multiple sequences of zero tuples can be compressed", "correct": false },
      { "text": "Only one sequence of all-zero tuples can be compressed", "correct": true },
      { "text": "All leading zeros must be retained", "correct": false },
      { "text": "The address must always be written with eight complete tuples", "correct": false }
    ]
  },
  {
    "question": "What was one of the drivers for the development of IPv6?",
    "answers": [
      { "text": "To increase the size of packets", "correct": false },
      { "text": "To address IPv4 address exhaustion", "correct": true },
      { "text": "To eliminate the need for routing", "correct": false },
      { "text": "To simplify MAC addressing", "correct": false }
    ]
  },
  {
    "question": "Which protocol is used to map an IPv4 address to a corresponding MAC address?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false }
    ]
  },
  {
    "question": "What benefit does hierarchical addressing provide in IPv4?",
    "answers": [
      { "text": "It increases the size of the IP header", "correct": false },
      { "text": "It simplifies routing by using the network portion", "correct": true },
      { "text": "It expands the available address space", "correct": false },
      { "text": "It eliminates the need for fragmentation", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does the IP address operate?",
    "answers": [
      { "text": "Physical layer", "correct": false },
      { "text": "Data Link layer", "correct": false },
      { "text": "Network layer", "correct": true },
      { "text": "Transport layer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a method for assigning IPv6 addresses?",
    "answers": [
      { "text": "Manual addressing", "correct": false },
      { "text": "DHCPv6", "correct": false },
      { "text": "Stateless auto-configuration", "correct": false },
      { "text": "ARP-based configuration", "correct": true }
    ]
  },
  {
    "question": "In IPv4, what does “fragmentation” refer to?",
    "answers": [
      { "text": "Dividing a packet into smaller pieces due to MTU constraints", "correct": true },
      { "text": "Combining several packets into one larger packet", "correct": false },
      { "text": "Encrypting a packet for secure transmission", "correct": false },
      { "text": "Routing a packet through multiple gateways", "correct": false }
    ]
  },
  {
    "question": "What does each “1” bit in the subnet mask indicate?",
    "answers": [
      { "text": "A bit belonging to the host portion", "correct": false },
      { "text": "A bit belonging to the network portion", "correct": true },
      { "text": "A bit that represents the default gateway", "correct": false },
      { "text": "A bit used for error checking", "correct": false }
    ]
  },
  {
    "question": "Which media type has the smallest MTU as noted in the lecture?",
    "answers": [
      { "text": "Copper Ethernet", "correct": false },
      { "text": "Copper Serial: Frame Relay", "correct": true },
      { "text": "Optical Fiber: ATM", "correct": false },
      { "text": "Wireless: 802.11", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of the network layer in data communication?",
    "answers": [
      { "text": "Encrypting data for secure transmission", "correct": false },
      { "text": "Managing physical media connections", "correct": false },
      { "text": "Addressing and routing packets from host to host", "correct": true },
      { "text": "Handling application-level protocols", "correct": false }
    ]
  },
  {
    "question": "Which of the following is used to map an IPv4 address to a MAC address?",
    "answers": [
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "DHCP", "correct": false }
    ]
  },
  {
    "question": "How are IPv6 addresses typically represented?",
    "answers": [
      { "text": "Dotted decimal format", "correct": false },
      { "text": "Colon-hexadecimal format", "correct": true },
      { "text": "Binary string", "correct": false },
      { "text": "Octal format", "correct": false }
    ]
  },
  {
    "question": "Which rule applies when condensing an IPv6 address?",
    "answers": [
      { "text": "Multiple sequences of zero tuples can be compressed", "correct": false },
      { "text": "Only one sequence of all-zero tuples can be compressed", "correct": true },
      { "text": "All leading zeros must be retained", "correct": false },
      { "text": "The address must always be written with eight complete tuples", "correct": false }
    ]
  },
  {
    "question": "What was one of the drivers for the development of IPv6?",
    "answers": [
      { "text": "To increase the size of packets", "correct": false },
      { "text": "To address IPv4 address exhaustion", "correct": true },
      { "text": "To eliminate the need for routing", "correct": false },
      { "text": "To simplify MAC addressing", "correct": false }
    ]
  },
  {
    "question": "Which protocol is used to map an IPv4 address to a corresponding MAC address?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false }
    ]
  },
  {
    "question": "What benefit does hierarchical addressing provide in IPv4?",
    "answers": [
      { "text": "It increases the size of the IP header", "correct": false },
      { "text": "It simplifies routing by using the network portion", "correct": true },
      { "text": "It expands the available address space", "correct": false },
      { "text": "It eliminates the need for fragmentation", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does the IP address operate?",
    "answers": [
      { "text": "Physical layer", "correct": false },
      { "text": "Data Link layer", "correct": false },
      { "text": "Network layer", "correct": true },
      { "text": "Transport layer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a method for assigning IPv6 addresses?",
    "answers": [
      { "text": "Manual addressing", "correct": false },
      { "text": "DHCPv6", "correct": false },
      { "text": "Stateless auto-configuration", "correct": false },
      { "text": "ARP-based configuration", "correct": true }
    ]
  },
  {
    "question": "In IPv4, what does “fragmentation” refer to?",
    "answers": [
      { "text": "Dividing a packet into smaller pieces due to MTU constraints", "correct": true },
      { "text": "Combining several packets into one larger packet", "correct": false },
      { "text": "Encrypting a packet for secure transmission", "correct": false },
      { "text": "Routing a packet through multiple gateways", "correct": false }
    ]
  },
  {
    "question": "What does each “1” bit in the subnet mask indicate?",
    "answers": [
      { "text": "A bit belonging to the host portion", "correct": false },
      { "text": "A bit belonging to the network portion", "correct": true },
      { "text": "A bit that represents the default gateway", "correct": false },
      { "text": "A bit used for error checking", "correct": false }
    ]
  },
  {
    "question": "Which media type has the smallest MTU as noted in the lecture?",
    "answers": [
      { "text": "Copper Ethernet", "correct": false },
      { "text": "Copper Serial: Frame Relay", "correct": true },
      { "text": "Optical Fiber: ATM", "correct": false },
      { "text": "Wireless: 802.11", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of the network layer in data communication?",
    "answers": [
      { "text": "Encrypting data for secure transmission", "correct": false },
      { "text": "Managing physical media connections", "correct": false },
      { "text": "Addressing and routing packets from host to host", "correct": true },
      { "text": "Handling application-level protocols", "correct": false }
    ]
  },
  {
    "question": "Which of the following is used to map an IPv4 address to a MAC address?",
    "answers": [
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "DHCP", "correct": false }
    ]
  },
  {
    "question": "How are IPv6 addresses typically represented?",
    "answers": [
      { "text": "Dotted decimal format", "correct": false },
      { "text": "Colon-hexadecimal format", "correct": true },
      { "text": "Binary string", "correct": false },
      { "text": "Octal format", "correct": false }
    ]
  },
  {
    "question": "Which rule applies when condensing an IPv6 address?",
    "answers": [
      { "text": "Multiple sequences of zero tuples can be compressed", "correct": false },
      { "text": "Only one sequence of all-zero tuples can be compressed", "correct": true },
      { "text": "All leading zeros must be retained", "correct": false },
      { "text": "The address must always be written with eight complete tuples", "correct": false }
    ]
  },
  {
    "question": "What was one of the drivers for the development of IPv6?",
    "answers": [
      { "text": "To increase the size of packets", "correct": false },
      { "text": "To address IPv4 address exhaustion", "correct": true },
      { "text": "To eliminate the need for routing", "correct": false },
      { "text": "To simplify MAC addressing", "correct": false }
    ]
  },
  {
    "question": "Which protocol is used to map an IPv4 address to a corresponding MAC address?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false }
    ]
  },
  {
    "question": "What benefit does hierarchical addressing provide in IPv4?",
    "answers": [
      { "text": "It increases the size of the IP header", "correct": false },
      { "text": "It simplifies routing by using the network portion", "correct": true },
      { "text": "It expands the available address space", "correct": false },
      { "text": "It eliminates the need for fragmentation", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does the IP address operate?",
    "answers": [
      { "text": "Physical layer", "correct": false },
      { "text": "Data Link layer", "correct": false },
      { "text": "Network layer", "correct": true },
      { "text": "Transport layer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a method for assigning IPv6 addresses?",
    "answers": [
      { "text": "Manual addressing", "correct": false },
      { "text": "DHCPv6", "correct": false },
      { "text": "Stateless auto-configuration", "correct": false },
      { "text": "ARP-based configuration", "correct": true }
    ]
  },
  {
    "question": "In IPv4, what does “fragmentation” refer to?",
    "answers": [
      { "text": "Dividing a packet into smaller pieces due to MTU constraints", "correct": true },
      { "text": "Combining several packets into one larger packet", "correct": false },
      { "text": "Encrypting a packet for secure transmission", "correct": false },
      { "text": "Routing a packet through multiple gateways", "correct": false }
    ]
  },
  {
    "question": "What does each “1” bit in the subnet mask indicate?",
    "answers": [
      { "text": "A bit belonging to the host portion", "correct": false },
      { "text": "A bit belonging to the network portion", "correct": true },
      { "text": "A bit that represents the default gateway", "correct": false },
      { "text": "A bit used for error checking", "correct": false }
    ]
  },
  {
    "question": "Which media type has the smallest MTU as noted in the lecture?",
    "answers": [
      { "text": "Copper Ethernet", "correct": false },
      { "text": "Copper Serial: Frame Relay", "correct": true },
      { "text": "Optical Fiber: ATM", "correct": false },
      { "text": "Wireless: 802.11", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of the network layer in data communication?",
    "answers": [
      { "text": "Encrypting data for secure transmission", "correct": false },
      { "text": "Managing physical media connections", "correct": false },
      { "text": "Addressing and routing packets from host to host", "correct": true },
      { "text": "Handling application-level protocols", "correct": false }
    ]
  },
  {
    "question": "Which of the following is used to map an IPv4 address to a MAC address?",
    "answers": [
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "DHCP", "correct": false }
    ]
  },
  {
    "question": "How are IPv6 addresses typically represented?",
    "answers": [
      { "text": "Dotted decimal format", "correct": false },
      { "text": "Colon-hexadecimal format", "correct": true },
      { "text": "Binary string", "correct": false },
      { "text": "Octal format", "correct": false }
    ]
  },
  {
    "question": "Which rule applies when condensing an IPv6 address?",
    "answers": [
      { "text": "Multiple sequences of zero tuples can be compressed", "correct": false },
      { "text": "Only one sequence of all-zero tuples can be compressed", "correct": true },
      { "text": "All leading zeros must be retained", "correct": false },
      { "text": "The address must always be written with eight complete tuples", "correct": false }
    ]
  },
  {
    "question": "What was one of the drivers for the development of IPv6?",
    "answers": [
      { "text": "To increase the size of packets", "correct": false },
      { "text": "To address IPv4 address exhaustion", "correct": true },
      { "text": "To eliminate the need for routing", "correct": false },
      { "text": "To simplify MAC addressing", "correct": false }
    ]
  },
  {
    "question": "Which protocol is used to map an IPv4 address to a corresponding MAC address?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false }
    ]
  },
  {
    "question": "What benefit does hierarchical addressing provide in IPv4?",
    "answers": [
      { "text": "It increases the size of the IP header", "correct": false },
      { "text": "It simplifies routing by using the network portion", "correct": true },
      { "text": "It expands the available address space", "correct": false },
      { "text": "It eliminates the need for fragmentation", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does the IP address operate?",
    "answers": [
      { "text": "Physical layer", "correct": false },
      { "text": "Data Link layer", "correct": false },
      { "text": "Network layer", "correct": true },
      { "text": "Transport layer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a method for assigning IPv6 addresses?",
    "answers": [
      { "text": "Manual addressing", "correct": false },
      { "text": "DHCPv6", "correct": false },
      { "text": "Stateless auto-configuration", "correct": false },
      { "text": "ARP-based configuration", "correct": true }
    ]
  },
  {
    "question": "In IPv4, what does “fragmentation” refer to?",
    "answers": [
      { "text": "Dividing a packet into smaller pieces due to MTU constraints", "correct": true },
      { "text": "Combining several packets into one larger packet", "correct": false },
      { "text": "Encrypting a packet for secure transmission", "correct": false },
      { "text": "Routing a packet through multiple gateways", "correct": false }
    ]
  },
  {
    "question": "What does each “1” bit in the subnet mask indicate?",
    "answers": [
      { "text": "A bit belonging to the host portion", "correct": false },
      { "text": "A bit belonging to the network portion", "correct": true },
      { "text": "A bit that represents the default gateway", "correct": false },
      { "text": "A bit used for error checking", "correct": false }
    ]
  },
  {
    "question": "Which media type has the smallest MTU as noted in the lecture?",
    "answers": [
      { "text": "Copper Ethernet", "correct": false },
      { "text": "Copper Serial: Frame Relay", "correct": true },
      { "text": "Optical Fiber: ATM", "correct": false },
      { "text": "Wireless: 802.11", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of the network layer in data communication?",
    "answers": [
      { "text": "Encrypting data for secure transmission", "correct": false },
      { "text": "Managing physical media connections", "correct": false },
      { "text": "Addressing and routing packets from host to host", "correct": true },
      { "text": "Handling application-level protocols", "correct": false }
    ]
  },
  {
    "question": "Which of the following is used to map an IPv4 address to a MAC address?",
    "answers": [
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "DHCP", "correct": false }
    ]
  },
  {
    "question": "How are IPv6 addresses typically represented?",
    "answers": [
      { "text": "Dotted decimal format", "correct": false },
      { "text": "Colon-hexadecimal format", "correct": true },
      { "text": "Binary string", "correct": false },
      { "text": "Octal format", "correct": false }
    ]
  },
  {
    "question": "Which rule applies when condensing an IPv6 address?",
    "answers": [
      { "text": "Multiple sequences of zero tuples can be compressed", "correct": false },
      { "text": "Only one sequence of all-zero tuples can be compressed", "correct": true },
      { "text": "All leading zeros must be retained", "correct": false },
      { "text": "The address must always be written with eight complete tuples", "correct": false }
    ]
  },
  {
    "question": "What was one of the drivers for the development of IPv6?",
    "answers": [
      { "text": "To increase the size of packets", "correct": false },
      { "text": "To address IPv4 address exhaustion", "correct": true },
      { "text": "To eliminate the need for routing", "correct": false },
      { "text": "To simplify MAC addressing", "correct": false }
    ]
  },
  {
    "question": "Which protocol is used to map an IPv4 address to a corresponding MAC address?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false }
    ]
  },
  {
    "question": "What benefit does hierarchical addressing provide in IPv4?",
    "answers": [
      { "text": "It increases the size of the IP header", "correct": false },
      { "text": "It simplifies routing by using the network portion", "correct": true },
      { "text": "It expands the available address space", "correct": false },
      { "text": "It eliminates the need for fragmentation", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does the IP address operate?",
    "answers": [
      { "text": "Physical layer", "correct": false },
      { "text": "Data Link layer", "correct": false },
      { "text": "Network layer", "correct": true },
      { "text": "Transport layer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a method for assigning IPv6 addresses?",
    "answers": [
      { "text": "Manual addressing", "correct": false },
      { "text": "DHCPv6", "correct": false },
      { "text": "Stateless auto-configuration", "correct": false },
      { "text": "ARP-based configuration", "correct": true }
    ]
  },
  {
    "question": "In IPv4, what does “fragmentation” refer to?",
    "answers": [
      { "text": "Dividing a packet into smaller pieces due to MTU constraints", "correct": true },
      { "text": "Combining several packets into one larger packet", "correct": false },
      { "text": "Encrypting a packet for secure transmission", "correct": false },
      { "text": "Routing a packet through multiple gateways", "correct": false }
    ]
  },
  {
    "question": "What does each “1” bit in the subnet mask indicate?",
    "answers": [
      { "text": "A bit belonging to the host portion", "correct": false },
      { "text": "A bit belonging to the network portion", "correct": true },
      { "text": "A bit that represents the default gateway", "correct": false },
      { "text": "A bit used for error checking", "correct": false }
    ]
  },
  {
    "question": "Which media type has the smallest MTU as noted in the lecture?",
    "answers": [
      { "text": "Copper Ethernet", "correct": false },
      { "text": "Copper Serial: Frame Relay", "correct": true },
      { "text": "Optical Fiber: ATM", "correct": false },
      { "text": "Wireless: 802.11", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of the network layer in data communication?",
    "answers": [
      { "text": "Encrypting data for secure transmission", "correct": false },
      { "text": "Managing physical media connections", "correct": false },
      { "text": "Addressing and routing packets from host to host", "correct": true },
      { "text": "Handling application-level protocols", "correct": false }
    ]
  },
  {
    "question": "Which of the following is used to map an IPv4 address to a MAC address?",
    "answers": [
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "DHCP", "correct": false }
    ]
  },
  {
    "question": "How are IPv6 addresses typically represented?",
    "answers": [
      { "text": "Dotted decimal format", "correct": false },
      { "text": "Colon-hexadecimal format", "correct": true },
      { "text": "Binary string", "correct": false },
      { "text": "Octal format", "correct": false }
    ]
  },
  {
    "question": "Which rule applies when condensing an IPv6 address?",
    "answers": [
      { "text": "Multiple sequences of zero tuples can be compressed", "correct": false },
      { "text": "Only one sequence of all-zero tuples can be compressed", "correct": true },
      { "text": "All leading zeros must be retained", "correct": false },
      { "text": "The address must always be written with eight complete tuples", "correct": false }
    ]
  },
  {
    "question": "What was one of the drivers for the development of IPv6?",
    "answers": [
      { "text": "To increase the size of packets", "correct": false },
      { "text": "To address IPv4 address exhaustion", "correct": true },
      { "text": "To eliminate the need for routing", "correct": false },
      { "text": "To simplify MAC addressing", "correct": false }
    ]
  },
  {
    "question": "Which protocol is used to map an IPv4 address to a corresponding MAC address?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false }
    ]
  },
  {
    "question": "What benefit does hierarchical addressing provide in IPv4?",
    "answers": [
      { "text": "It increases the size of the IP header", "correct": false },
      { "text": "It simplifies routing by using the network portion", "correct": true },
      { "text": "It expands the available address space", "correct": false },
      { "text": "It eliminates the need for fragmentation", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does the IP address operate?",
    "answers": [
      { "text": "Physical layer", "correct": false },
      { "text": "Data Link layer", "correct": false },
      { "text": "Network layer", "correct": true },
      { "text": "Transport layer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a method for assigning IPv6 addresses?",
    "answers": [
      { "text": "Manual addressing", "correct": false },
      { "text": "DHCPv6", "correct": false },
      { "text": "Stateless auto-configuration", "correct": false },
      { "text": "ARP-based configuration", "correct": true }
    ]
  },
  {
    "question": "In IPv4, what does “fragmentation” refer to?",
    "answers": [
      { "text": "Dividing a packet into smaller pieces due to MTU constraints", "correct": true },
      { "text": "Combining several packets into one larger packet", "correct": false },
      { "text": "Encrypting a packet for secure transmission", "correct": false },
      { "text": "Routing a packet through multiple gateways", "correct": false }
    ]
  },
  {
    "question": "What does each “1” bit in the subnet mask indicate?",
    "answers": [
      { "text": "A bit belonging to the host portion", "correct": false },
      { "text": "A bit belonging to the network portion", "correct": true },
      { "text": "A bit that represents the default gateway", "correct": false },
      { "text": "A bit used for error checking", "correct": false }
    ]
  },
  {
    "question": "Which media type has the smallest MTU as noted in the lecture?",
    "answers": [
      { "text": "Copper Ethernet", "correct": false },
      { "text": "Copper Serial: Frame Relay", "correct": true },
      { "text": "Optical Fiber: ATM", "correct": false },
      { "text": "Wireless: 802.11", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of the network layer in data communication?",
    "answers": [
      { "text": "Encrypting data for secure transmission", "correct": false },
      { "text": "Managing physical media connections", "correct": false },
      { "text": "Addressing and routing packets from host to host", "correct": true },
      { "text": "Handling application-level protocols", "correct": false }
    ]
  },
  {
    "question": "Which of the following is used to map an IPv4 address to a MAC address?",
    "answers": [
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "DHCP", "correct": false }
    ]
  },
  {
    "question": "How are IPv6 addresses typically represented?",
    "answers": [
      { "text": "Dotted decimal format", "correct": false },
      { "text": "Colon-hexadecimal format", "correct": true },
      { "text": "Binary string", "correct": false },
      { "text": "Octal format", "correct": false }
    ]
  },
  {
    "question": "Which rule applies when condensing an IPv6 address?",
    "answers": [
      { "text": "Multiple sequences of zero tuples can be compressed", "correct": false },
      { "text": "Only one sequence of all-zero tuples can be compressed", "correct": true },
      { "text": "All leading zeros must be retained", "correct": false },
      { "text": "The address must always be written with eight complete tuples", "correct": false }
    ]
  },
  {
    "question": "What was one of the drivers for the development of IPv6?",
    "answers": [
      { "text": "To increase the size of packets", "correct": false },
      { "text": "To address IPv4 address exhaustion", "correct": true },
      { "text": "To eliminate the need for routing", "correct": false },
      { "text": "To simplify MAC addressing", "correct": false }
    ]
  },
  {
    "question": "Which protocol is used to map an IPv4 address to a corresponding MAC address?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false }
    ]
  },
  {
    "question": "What benefit does hierarchical addressing provide in IPv4?",
    "answers": [
      { "text": "It increases the size of the IP header", "correct": false },
      { "text": "It simplifies routing by using the network portion", "correct": true },
      { "text": "It expands the available address space", "correct": false },
      { "text": "It eliminates the need for fragmentation", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does the IP address operate?",
    "answers": [
      { "text": "Physical layer", "correct": false },
      { "text": "Data Link layer", "correct": false },
      { "text": "Network layer", "correct": true },
      { "text": "Transport layer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a method for assigning IPv6 addresses?",
    "answers": [
      { "text": "Manual addressing", "correct": false },
      { "text": "DHCPv6", "correct": false },
      { "text": "Stateless auto-configuration", "correct": false },
      { "text": "ARP-based configuration", "correct": true }
    ]
  },
  {
    "question": "In IPv4, what does “fragmentation” refer to?",
    "answers": [
      { "text": "Dividing a packet into smaller pieces due to MTU constraints", "correct": true },
      { "text": "Combining several packets into one larger packet", "correct": false },
      { "text": "Encrypting a packet for secure transmission", "correct": false },
      { "text": "Routing a packet through multiple gateways", "correct": false }
    ]
  },
  {
    "question": "What does each “1” bit in the subnet mask indicate?",
    "answers": [
      { "text": "A bit belonging to the host portion", "correct": false },
      { "text": "A bit belonging to the network portion", "correct": true },
      { "text": "A bit that represents the default gateway", "correct": false },
      { "text": "A bit used for error checking", "correct": false }
    ]
  },
  {
    "question": "Which media type has the smallest MTU as noted in the lecture?",
    "answers": [
      { "text": "Copper Ethernet", "correct": false },
      { "text": "Copper Serial: Frame Relay", "correct": true },
      { "text": "Optical Fiber: ATM", "correct": false },
      { "text": "Wireless: 802.11", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of the network layer in data communication?",
    "answers": [
      { "text": "Encrypting data for secure transmission", "correct": false },
      { "text": "Managing physical media connections", "correct": false },
      { "text": "Addressing and routing packets from host to host", "correct": true },
      { "text": "Handling application-level protocols", "correct": false }
    ]
  },
  {
    "question": "Which of the following is used to map an IPv4 address to a MAC address?",
    "answers": [
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "DHCP", "correct": false }
    ]
  },
  {
    "question": "How are IPv6 addresses typically represented?",
    "answers": [
      { "text": "Dotted decimal format", "correct": false },
      { "text": "Colon-hexadecimal format", "correct": true },
      { "text": "Binary string", "correct": false },
      { "text": "Octal format", "correct": false }
    ]
  },
  {
    "question": "Which rule applies when condensing an IPv6 address?",
    "answers": [
      { "text": "Multiple sequences of zero tuples can be compressed", "correct": false },
      { "text": "Only one sequence of all-zero tuples can be compressed", "correct": true },
      { "text": "All leading zeros must be retained", "correct": false },
      { "text": "The address must always be written with eight complete tuples", "correct": false }
    ]
  },
  {
    "question": "What was one of the drivers for the development of IPv6?",
    "answers": [
      { "text": "To increase the size of packets", "correct": false },
      { "text": "To address IPv4 address exhaustion", "correct": true },
      { "text": "To eliminate the need for routing", "correct": false },
      { "text": "To simplify MAC addressing", "correct": false }
    ]
  },
  {
    "question": "Which protocol is used to map an IPv4 address to a corresponding MAC address?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false }
    ]
  },
  {
    "question": "What benefit does hierarchical addressing provide in IPv4?",
    "answers": [
      { "text": "It increases the size of the IP header", "correct": false },
      { "text": "It simplifies routing by using the network portion", "correct": true },
      { "text": "It expands the available address space", "correct": false },
      { "text": "It eliminates the need for fragmentation", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does the IP address operate?",
    "answers": [
      { "text": "Physical layer", "correct": false },
      { "text": "Data Link layer", "correct": false },
      { "text": "Network layer", "correct": true },
      { "text": "Transport layer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a method for assigning IPv6 addresses?",
    "answers": [
      { "text": "Manual addressing", "correct": false },
      { "text": "DHCPv6", "correct": false },
      { "text": "Stateless auto-configuration", "correct": false },
      { "text": "ARP-based configuration", "correct": true }
    ]
  },
  {
    "question": "In IPv4, what does “fragmentation” refer to?",
    "answers": [
      { "text": "Dividing a packet into smaller pieces due to MTU constraints", "correct": true },
      { "text": "Combining several packets into one larger packet", "correct": false },
      { "text": "Encrypting a packet for secure transmission", "correct": false },
      { "text": "Routing a packet through multiple gateways", "correct": false }
    ]
  },
  {
    "question": "What does each “1” bit in the subnet mask indicate?",
    "answers": [
      { "text": "A bit belonging to the host portion", "correct": false },
      { "text": "A bit belonging to the network portion", "correct": true },
      { "text": "A bit that represents the default gateway", "correct": false },
      { "text": "A bit used for error checking", "correct": false }
    ]
  },
  {
    "question": "Which media type has the smallest MTU as noted in the lecture?",
    "answers": [
      { "text": "Copper Ethernet", "correct": false },
      { "text": "Copper Serial: Frame Relay", "correct": true },
      { "text": "Optical Fiber: ATM", "correct": false },
      { "text": "Wireless: 802.11", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of the network layer in data communication?",
    "answers": [
      { "text": "Encrypting data for secure transmission", "correct": false },
      { "text": "Managing physical media connections", "correct": false },
      { "text": "Addressing and routing packets from host to host", "correct": true },
      { "text": "Handling application-level protocols", "correct": false }
    ]
  },
  {
    "question": "Which of the following is used to map an IPv4 address to a MAC address?",
    "answers": [
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "DHCP", "correct": false }
    ]
  },
  {
    "question": "How are IPv6 addresses typically represented?",
    "answers": [
      { "text": "Dotted decimal format", "correct": false },
      { "text": "Colon-hexadecimal format", "correct": true },
      { "text": "Binary string", "correct": false },
      { "text": "Octal format", "correct": false }
    ]
  },
  {
    "question": "Which rule applies when condensing an IPv6 address?",
    "answers": [
      { "text": "Multiple sequences of zero tuples can be compressed", "correct": false },
      { "text": "Only one sequence of all-zero tuples can be compressed", "correct": true },
      { "text": "All leading zeros must be retained", "correct": false },
      { "text": "The address must always be written with eight complete tuples", "correct": false }
    ]
  },
  {
    "question": "What was one of the drivers for the development of IPv6?",
    "answers": [
      { "text": "To increase the size of packets", "correct": false },
      { "text": "To address IPv4 address exhaustion", "correct": true },
      { "text": "To eliminate the need for routing", "correct": false },
      { "text": "To simplify MAC addressing", "correct": false }
    ]
  },
  {
    "question": "Which protocol is used to map an IPv4 address to a corresponding MAC address?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false }
    ]
  },
  {
    "question": "What benefit does hierarchical addressing provide in IPv4?",
    "answers": [
      { "text": "It increases the size of the IP header", "correct": false },
      { "text": "It simplifies routing by using the network portion", "correct": true },
      { "text": "It expands the available address space", "correct": false },
      { "text": "It eliminates the need for fragmentation", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does the IP address operate?",
    "answers": [
      { "text": "Physical layer", "correct": false },
      { "text": "Data Link layer", "correct": false },
      { "text": "Network layer", "correct": true },
      { "text": "Transport layer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a method for assigning IPv6 addresses?",
    "answers": [
      { "text": "Manual addressing", "correct": false },
      { "text": "DHCPv6", "correct": false },
      { "text": "Stateless auto-configuration", "correct": false },
      { "text": "ARP-based configuration", "correct": true }
    ]
  },
  {
    "question": "In IPv4, what does “fragmentation” refer to?",
    "answers": [
      { "text": "Dividing a packet into smaller pieces due to MTU constraints", "correct": true },
      { "text": "Combining several packets into one larger packet", "correct": false },
      { "text": "Encrypting a packet for secure transmission", "correct": false },
      { "text": "Routing a packet through multiple gateways", "correct": false }
    ]
  },
  {
    "question": "What does each “1” bit in the subnet mask indicate?",
    "answers": [
      { "text": "A bit belonging to the host portion", "correct": false },
      { "text": "A bit belonging to the network portion", "correct": true },
      { "text": "A bit that represents the default gateway", "correct": false },
      { "text": "A bit used for error checking", "correct": false }
    ]
  },
  {
    "question": "Which media type has the smallest MTU as noted in the lecture?",
    "answers": [
      { "text": "Copper Ethernet", "correct": false },
      { "text": "Copper Serial: Frame Relay", "correct": true },
      { "text": "Optical Fiber: ATM", "correct": false },
      { "text": "Wireless: 802.11", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of the network layer in data communication?",
    "answers": [
      { "text": "Encrypting data for secure transmission", "correct": false },
      { "text": "Managing physical media connections", "correct": false },
      { "text": "Addressing and routing packets from host to host", "correct": true },
      { "text": "Handling application-level protocols", "correct": false }
    ]
  },
  {
    "question": "Which of the following is used to map an IPv4 address to a MAC address?",
    "answers": [
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "DHCP", "correct": false }
    ]
  },
  {
    "question": "How are IPv6 addresses typically represented?",
    "answers": [
      { "text": "Dotted decimal format", "correct": false },
      { "text": "Colon-hexadecimal format", "correct": true },
      { "text": "Binary string", "correct": false },
      { "text": "Octal format", "correct": false }
    ]
  },
  {
    "question": "Which rule applies when condensing an IPv6 address?",
    "answers": [
      { "text": "Multiple sequences of zero tuples can be compressed", "correct": false },
      { "text": "Only one sequence of all-zero tuples can be compressed", "correct": true },
      { "text": "All leading zeros must be retained", "correct": false },
      { "text": "The address must always be written with eight complete tuples", "correct": false }
    ]
  },
  {
    "question": "What was one of the drivers for the development of IPv6?",
    "answers": [
      { "text": "To increase the size of packets", "correct": false },
      { "text": "To address IPv4 address exhaustion", "correct": true },
      { "text": "To eliminate the need for routing", "correct": false },
      { "text": "To simplify MAC addressing", "correct": false }
    ]
  },
  {
    "question": "Which protocol is used to map an IPv4 address to a corresponding MAC address?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false }
    ]
  },
  {
    "question": "What benefit does hierarchical addressing provide in IPv4?",
    "answers": [
      { "text": "It increases the size of the IP header", "correct": false },
      { "text": "It simplifies routing by using the network portion", "correct": true },
      { "text": "It expands the available address space", "correct": false },
      { "text": "It eliminates the need for fragmentation", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does the IP address operate?",
    "answers": [
      { "text": "Physical layer", "correct": false },
      { "text": "Data Link layer", "correct": false },
      { "text": "Network layer", "correct": true },
      { "text": "Transport layer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a method for assigning IPv6 addresses?",
    "answers": [
      { "text": "Manual addressing", "correct": false },
      { "text": "DHCPv6", "correct": false },
      { "text": "Stateless auto-configuration", "correct": false },
      { "text": "ARP-based configuration", "correct": true }
    ]
  },
  {
    "question": "In IPv4, what does “fragmentation” refer to?",
    "answers": [
      { "text": "Dividing a packet into smaller pieces due to MTU constraints", "correct": true },
      { "text": "Combining several packets into one larger packet", "correct": false },
      { "text": "Encrypting a packet for secure transmission", "correct": false },
      { "text": "Routing a packet through multiple gateways", "correct": false }
    ]
  },
  {
    "question": "What does each “1” bit in the subnet mask indicate?",
    "answers": [
      { "text": "A bit belonging to the host portion", "correct": false },
      { "text": "A bit belonging to the network portion", "correct": true },
      { "text": "A bit that represents the default gateway", "correct": false },
      { "text": "A bit used for error checking", "correct": false }
    ]
  },
  {
    "question": "Which media type has the smallest MTU as noted in the lecture?",
    "answers": [
      { "text": "Copper Ethernet", "correct": false },
      { "text": "Copper Serial: Frame Relay", "correct": true },
      { "text": "Optical Fiber: ATM", "correct": false },
      { "text": "Wireless: 802.11", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of the network layer in data communication?",
    "answers": [
      { "text": "Encrypting data for secure transmission", "correct": false },
      { "text": "Managing physical media connections", "correct": false },
      { "text": "Addressing and routing packets from host to host", "correct": true },
      { "text": "Handling application-level protocols", "correct": false }
    ]
  },
  {
    "question": "Which of the following is used to map an IPv4 address to a MAC address?",
    "answers": [
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "DHCP", "correct": false }
    ]
  },
  {
    "question": "How are IPv6 addresses typically represented?",
    "answers": [
      { "text": "Dotted decimal format", "correct": false },
      { "text": "Colon-hexadecimal format", "correct": true },
      { "text": "Binary string", "correct": false },
      { "text": "Octal format", "correct": false }
    ]
  },
  {
    "question": "Which rule applies when condensing an IPv6 address?",
    "answers": [
      { "text": "Multiple sequences of zero tuples can be compressed", "correct": false },
      { "text": "Only one sequence of all-zero tuples can be compressed", "correct": true },
      { "text": "All leading zeros must be retained", "correct": false },
      { "text": "The address must always be written with eight complete tuples", "correct": false }
    ]
  },
  {
    "question": "What was one of the drivers for the development of IPv6?",
    "answers": [
      { "text": "To increase the size of packets", "correct": false },
      { "text": "To address IPv4 address exhaustion", "correct": true },
      { "text": "To eliminate the need for routing", "correct": false },
      { "text": "To simplify MAC addressing", "correct": false }
    ]
  },
  {
    "question": "Which protocol is used to map an IPv4 address to a corresponding MAC address?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false }
    ]
  },
  {
    "question": "What benefit does hierarchical addressing provide in IPv4?",
    "answers": [
      { "text": "It increases the size of the IP header", "correct": false },
      { "text": "It simplifies routing by using the network portion", "correct": true },
      { "text": "It expands the available address space", "correct": false },
      { "text": "It eliminates the need for fragmentation", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does the IP address operate?",
    "answers": [
      { "text": "Physical layer", "correct": false },
      { "text": "Data Link layer", "correct": false },
      { "text": "Network layer", "correct": true },
      { "text": "Transport layer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a method for assigning IPv6 addresses?",
    "answers": [
      { "text": "Manual addressing", "correct": false },
      { "text": "DHCPv6", "correct": false },
      { "text": "Stateless auto-configuration", "correct": false },
      { "text": "ARP-based configuration", "correct": true }
    ]
  },
  {
    "question": "In IPv4, what does “fragmentation” refer to?",
    "answers": [
      { "text": "Dividing a packet into smaller pieces due to MTU constraints", "correct": true },
      { "text": "Combining several packets into one larger packet", "correct": false },
      { "text": "Encrypting a packet for secure transmission", "correct": false },
      { "text": "Routing a packet through multiple gateways", "correct": false }
    ]
  },
  {
    "question": "What does each “1” bit in the subnet mask indicate?",
    "answers": [
      { "text": "A bit belonging to the host portion", "correct": false },
      { "text": "A bit belonging to the network portion", "correct": true },
      { "text": "A bit that represents the default gateway", "correct": false },
      { "text": "A bit used for error checking", "correct": false }
    ]
  },
  {
    "question": "Which media type has the smallest MTU as noted in the lecture?",
    "answers": [
      { "text": "Copper Ethernet", "correct": false },
      { "text": "Copper Serial: Frame Relay", "correct": true },
      { "text": "Optical Fiber: ATM", "correct": false },
      { "text": "Wireless: 802.11", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of the network layer in data communication?",
    "answers": [
      { "text": "Encrypting data for secure transmission", "correct": false },
      { "text": "Managing physical media connections", "correct": false },
      { "text": "Addressing and routing packets from host to host", "correct": true },
      { "text": "Handling application-level protocols", "correct": false }
    ]
  },
  {
    "question": "Which of the following is used to map an IPv4 address to a MAC address?",
    "answers": [
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "DHCP", "correct": false }
    ]
  },
  {
    "question": "How are IPv6 addresses typically represented?",
    "answers": [
      { "text": "Dotted decimal format", "correct": false },
      { "text": "Colon-hexadecimal format", "correct": true },
      { "text": "Binary string", "correct": false },
      { "text": "Octal format", "correct": false }
    ]
  },
  {
    "question": "Which rule applies when condensing an IPv6 address?",
    "answers": [
      { "text": "Multiple sequences of zero tuples can be compressed", "correct": false },
      { "text": "Only one sequence of all-zero tuples can be compressed", "correct": true },
      { "text": "All leading zeros must be retained", "correct": false },
      { "text": "The address must always be written with eight complete tuples", "correct": false }
    ]
  },
  {
    "question": "What was one of the drivers for the development of IPv6?",
    "answers": [
      { "text": "To increase the size of packets", "correct": false },
      { "text": "To address IPv4 address exhaustion", "correct": true },
      { "text": "To eliminate the need for routing", "correct": false },
      { "text": "To simplify MAC addressing", "correct": false }
    ]
  },
  {
    "question": "Which protocol is used to map an IPv4 address to a corresponding MAC address?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false }
    ]
  },
  {
    "question": "What benefit does hierarchical addressing provide in IPv4?",
    "answers": [
      { "text": "It increases the size of the IP header", "correct": false },
      { "text": "It simplifies routing by using the network portion", "correct": true },
      { "text": "It expands the available address space", "correct": false },
      { "text": "It eliminates the need for fragmentation", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does the IP address operate?",
    "answers": [
      { "text": "Physical layer", "correct": false },
      { "text": "Data Link layer", "correct": false },
      { "text": "Network layer", "correct": true },
      { "text": "Transport layer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a method for assigning IPv6 addresses?",
    "answers": [
      { "text": "Manual addressing", "correct": false },
      { "text": "DHCPv6", "correct": false },
      { "text": "Stateless auto-configuration", "correct": false },
      { "text": "ARP-based configuration", "correct": true }
    ]
  },
  {
    "question": "In IPv4, what does “fragmentation” refer to?",
    "answers": [
      { "text": "Dividing a packet into smaller pieces due to MTU constraints", "correct": true },
      { "text": "Combining several packets into one larger packet", "correct": false },
      { "text": "Encrypting a packet for secure transmission", "correct": false },
      { "text": "Routing a packet through multiple gateways", "correct": false }
    ]
  },
  {
    "question": "What does each “1” bit in the subnet mask indicate?",
    "answers": [
      { "text": "A bit belonging to the host portion", "correct": false },
      { "text": "A bit belonging to the network portion", "correct": true },
      { "text": "A bit that represents the default gateway", "correct": false },
      { "text": "A bit used for error checking", "correct": false }
    ]
  },
  {
    "question": "Which media type has the smallest MTU as noted in the lecture?",
    "answers": [
      { "text": "Copper Ethernet", "correct": false },
      { "text": "Copper Serial: Frame Relay", "correct": true },
      { "text": "Optical Fiber: ATM", "correct": false },
      { "text": "Wireless: 802.11", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of the network layer in data communication?",
    "answers": [
      { "text": "Encrypting data for secure transmission", "correct": false },
      { "text": "Managing physical media connections", "correct": false },
      { "text": "Addressing and routing packets from host to host", "correct": true },
      { "text": "Handling application-level protocols", "correct": false }
    ]
  },
  {
    "question": "Which of the following is used to map an IPv4 address to a MAC address?",
    "answers": [
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "DHCP", "correct": false }
    ]
  },
  {
    "question": "How are IPv6 addresses typically represented?",
    "answers": [
      { "text": "Dotted decimal format", "correct": false },
      { "text": "Colon-hexadecimal format", "correct": true },
      { "text": "Binary string", "correct": false },
      { "text": "Octal format", "correct": false }
    ]
  },
  {
    "question": "Which rule applies when condensing an IPv6 address?",
    "answers": [
      { "text": "Multiple sequences of zero tuples can be compressed", "correct": false },
      { "text": "Only one sequence of all-zero tuples can be compressed", "correct": true },
      { "text": "All leading zeros must be retained", "correct": false },
      { "text": "The address must always be written with eight complete tuples", "correct": false }
    ]
  },
  {
    "question": "What was one of the drivers for the development of IPv6?",
    "answers": [
      { "text": "To increase the size of packets", "correct": false },
      { "text": "To address IPv4 address exhaustion", "correct": true },
      { "text": "To eliminate the need for routing", "correct": false },
      { "text": "To simplify MAC addressing", "correct": false }
    ]
  },
  {
    "question": "Which protocol is used to map an IPv4 address to a corresponding MAC address?",
    "answers": [
      { "text": "DHCP", "correct": false },
      { "text": "DNS", "correct": false },
      { "text": "ARP", "correct": true },
      { "text": "RARP", "correct": false }
    ]
  },
  {
    "question": "What benefit does hierarchical addressing provide in IPv4?",
    "answers": [
      { "text": "It increases the size of the IP header", "correct": false },
      { "text": "It simplifies routing by using the network portion", "correct": true },
      { "text": "It expands the available address space", "correct": false },
      { "text": "It eliminates the need for fragmentation", "correct": false }
    ]
  },
  {
    "question": "At which OSI layer does the IP address operate?",
    "answers": [
      { "text": "Physical layer", "correct": false },
      { "text": "Data Link layer", "correct": false },
      { "text": "Network layer", "correct": true },
      { "text": "Transport layer", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a method for assigning IPv6 addresses?",
    "answers": [
      { "text": "Manual addressing", "correct": false },
      { "text": "DHCPv6", "correct": false },
      { "text": "Stateless auto-configuration", "correct": false },
      { "text": "ARP-based configuration", "correct": true }
    ]
  },
  {
    "question": "In IPv4, what does “fragmentation” refer to?",
    "answers": [
      { "text": "Dividing a packet into smaller pieces due to MTU constraints", "correct": true },
      { "text": "Combining several packets into one larger packet", "correct": false },
      { "text": "Encrypting a packet for secure transmission", "correct": false },
      { "text": "Routing a packet through multiple gateways", "correct": false }
    ]
  },
  {
    "question": "What does each “1” bit in the subnet mask indicate?",
    "answers": [
      { "text": "A bit belonging to the host portion", "correct": false },
      { "text": "A bit belonging to the network portion", "correct": true },
      { "text": "A bit that represents the default gateway", "correct": false },
      { "text": "A bit used for error checking", "correct": false }
    ]
  },
  {
    "question": "IPv4 provides reliable packet delivery through built-in error correction.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "IPv4 is designed as a connectionless protocol using “best effort” delivery.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The subnet mask in IPv4 differentiates between the network and host portions of an address.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Routers perform packet fragmentation when a packet exceeds the MTU of a network segment.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Address Resolution Protocol (ARP) is used to map an IPv4 address to a MAC address.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A default gateway’s address must be on the same network as the host it serves.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "In CIDR notation, the number following the slash represents the number of bits used for the host portion.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "IPv6 addresses are written in a colon-hexadecimal format rather than dotted decimal.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Leading zeros in any tuple of an IPv6 address can be omitted.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Packet fragmentation in IPv4 is triggered when a packet exceeds the Maximum Transmission Unit (MTU) of the network.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Hierarchical addressing in IPv4 simplifies routing by allowing routers to focus only on the network portion of the address.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The network layer encapsulates and later decapsulates packets as they travel from source to destination.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "IPv4 operates in a connectionless mode, meaning it does not establish a session before sending data.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "ARP maps a MAC address to its corresponding IPv4 address.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "CIDR notation is the modern method for representing subnet masks.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "One of the drivers for IPv6 development was the limitations of IPv4 address space.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The default gateway is used by hosts to send packets to networks beyond their local segment.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The MTU for Optical Fiber: ATM (17,966 bytes) is larger than that for Copper Ethernet (1,518 bytes).",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "“Best effort” delivery means that IPv4 guarantees delivery of all packets.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Stateless auto-configuration is one of the methods available for assigning IPv6 addresses to hosts.",
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