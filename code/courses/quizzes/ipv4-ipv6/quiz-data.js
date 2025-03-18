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
  }
]