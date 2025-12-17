const questionBank = [
  {
    "question": "A switch segments a MAC broadcast domain when one VLAN is present.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "All inter-VLAN traffic must be routed.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "There are 4096 unique VLANs possible using IEEE 802.1Q.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The Spanning Tree Protocol is used to break switching or bridging loops.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The STP root switch election process is based solely on MAC address of the participating ports.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "An aggregate link has multiple interfaces from one physical switch logically bound together to act as one.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "You can configure multiple VLANs on a single Spanning Tree Instance using PVST.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "With the introduction of gigabit Ethernet networks, there is no longer a need for aggregate links.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "You can configure multiple VLANs on a single Spanning Tree Instance using MSTP.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Layer 3 redundancy allows for more than one router to host the gateway.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Networks should be designed based only on the amount of traffic they currently handle, not any future expectations.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "For a trunk port on a switch, the egress traffic is tagged and the ingress traffic is expected to have a tag.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "CIDR stands for Class-based Inter Domain-based Routing and relies on the notation with the “/”.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "VTP should always be used on layer 2 devices to provide the best security and network understanding.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The penultimate subnet is the second to last subnet.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A subnet mask and IP address use a logical OR operator to determine the network ID.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "RIPv2 requires IPv6 to be used.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "When supernetworking a set of network segments, you should ensure that all segments are available for use before assigning the resulting network ID.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Parallel Backbone is the simplest backbone configuration.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "An Aggregate Backbone adds redundancy, fault tolerance, and potential address security.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "In STP, the best path to the Root Switch/Bridge is determined by:",
    "answers": [
      { "text": "Highest bandwidth interface", "correct": false },
      { "text": "Lowest Path Cost selection", "correct": true },
      { "text": "Lowest MAC address", "correct": false },
      { "text": "Lowest port number", "correct": false },
      { "text": "Highest bridge priority", "correct": false }
    ]
  },
  {
    "question": "What is the maximum number of active physical links that can be included in an aggregate link trunk?",
    "answers": [
      { "text": "4", "correct": false },
      { "text": "8", "correct": true },
      { "text": "12", "correct": false },
      { "text": "16", "correct": false },
      { "text": "Unlimited", "correct": false }
    ]
  },
  {
    "question": "A 4 Gbps aggregate link connects two switches. What is the maximum data rate between a single client and a single server?",
    "answers": [
      { "text": "1 Gbps", "correct": true },
      { "text": "2 Gbps", "correct": false },
      { "text": "4 Gbps", "correct": false },
      { "text": "500 Mbps", "correct": false },
      { "text": "It depends on the protocol", "correct": false }
    ]
  },
  {
    "question": "HSRP1 reboots in an HSRP group. Once HSRP1 comes back online, which statement is true?",
    "answers": [
      { "text": "HSRP1 will always become the active router", "correct": false },
      { "text": "HSRP1 will remain in standby mode permanently", "correct": false },
      { "text": "HSRP1 will become the active router if preemption is enabled", "correct": true },
      { "text": "HSRP1 cannot rejoin the group without manual intervention", "correct": false },
      { "text": "HSRP1 will only forward traffic but not participate in elections", "correct": false }
    ]
  },
  {
    "question": "The network 128.210.0.0/16 contains which of the following hosts?",
    "answers": [
      { "text": "128.211.10.5", "correct": false },
      { "text": "128.209.255.254", "correct": false },
      { "text": "128.210.139.24", "correct": true },
      { "text": "128.212.1.1", "correct": false },
      { "text": "128.210.256.10", "correct": false }
    ]
  },
  {
    "question": "The host 191.92.74.68 is contained in which of the following networks?",
    "answers": [
      { "text": "191.92.74.60/30", "correct": false },
      { "text": "191.92.0.0/16", "correct": false },
      { "text": "191.92.72.0/23", "correct": false },
      { "text": "191.92.74.64/30", "correct": false },
      { "text": "None of the above", "correct": true }
    ]
  },
  {
    "question": "The network 17.21.123.0/24 would fit into which supernet?",
    "answers": [
      { "text": "17.21.0.0/16", "correct": false },
      { "text": "17.21.0.0/18", "correct": true },
      { "text": "17.21.64.0/18", "correct": false },
      { "text": "17.21.120.0/22", "correct": false },
      { "text": "17.21.128.0/17", "correct": false }
    ]
  },
  {
    "question": "The host 17.99.96.68 is in which network(s)?",
    "answers": [
      { "text": "17.99.96.0/26 only", "correct": false },
      { "text": "17.99.96.0/22 only", "correct": false },
      { "text": "Neither network", "correct": false },
      { "text": "Both the /26 and /22 networks", "correct": true },
      { "text": "17.99.96.64/30 only", "correct": false }
    ]
  },
  {
    "question": "Which field(s) of the Ethernet frame is modified using 802.1Q VLAN tagging?",
    "answers": [
      { "text": "Source MAC address", "correct": false },
      { "text": "QoS (Priority Code Point)", "correct": true },
      { "text": "Destination MAC address", "correct": false },
      { "text": "EtherType only", "correct": false },
      { "text": "Frame Check Sequence", "correct": false }
    ]
  },
  {
    "question": "Which switch role sends VTP Update Frames in VTP version 3?",
    "answers": [
      { "text": "Client", "correct": false },
      { "text": "Transparent", "correct": false },
      { "text": "Secondary Server", "correct": false },
      { "text": "Primary Server", "correct": true },
      { "text": "Any switch in the domain", "correct": false }
    ]
  },
  {
    "question": "In GLBP, which of the following is NOT a logical component?",
    "answers": [
      { "text": "VRRP", "correct": true },
      { "text": "Active Virtual Gateway (AVG)", "correct": false },
      { "text": "Active Virtual Forwarder (AVF)", "correct": false },
      { "text": "Virtual IP", "correct": false },
      { "text": "Load balancing mechanism", "correct": false }
    ]
  },
  {
    "question": "What is the biggest improvement from STP to RSTP?",
    "answers": [
      { "text": "Convergence time", "correct": true },
      { "text": "Number of VLANs supported", "correct": false },
      { "text": "Frame tagging support", "correct": false },
      { "text": "MAC address learning speed", "correct": false },
      { "text": "Root bridge election method", "correct": false }
    ]
  },
  {
    "question": "A Link Aggregation Group becomes a __________.",
    "answers": [
      { "text": "Trunk", "correct": false },
      { "text": "Bridge Group", "correct": false },
      { "text": "Port Channel", "correct": true },
      { "text": "Virtual Interface", "correct": false },
      { "text": "Spanning Tree Instance", "correct": false }
    ]
  },
  {
    "question": "Aggregation requirements include:",
    "answers": [
      { "text": "Same speed", "correct": false },
      { "text": "Same duplex", "correct": false },
      { "text": "Same IP address", "correct": false },
      { "text": "Both same speed and same duplex", "correct": true },
      { "text": "Same VLAN only", "correct": false }
    ]
  },
  {
    "question": "MTBF stands for:",
    "answers": [
      { "text": "Mean Time Before Failure", "correct": false },
      { "text": "Maximum Time Between Failure", "correct": false },
      { "text": "Mean Time Between Failure", "correct": true },
      { "text": "Minimum Time Before Failure", "correct": false },
      { "text": "Managed Time Between Failure", "correct": false }
    ]
  },
  {
    "question": "RIP adds what cost to received routes?",
    "answers": [
      { "text": "0", "correct": false },
      { "text": "0.5", "correct": false },
      { "text": "2", "correct": false },
      { "text": "1", "correct": true },
      { "text": "Variable based on bandwidth", "correct": false }
    ]
  },
  {
    "question": "LACP and PAgP provide a method of:",
    "answers": [
      { "text": "Routing", "correct": false },
      { "text": "Spanning Tree optimization", "correct": false },
      { "text": "Load balancing traffic flows", "correct": false },
      { "text": "Link Aggregation", "correct": true },
      { "text": "Gateway redundancy", "correct": false }
    ]
  },
  {
    "question": "Which of the following changes at every hop while the other does not?",
    "answers": [
      { "text": "MAC address changes, IP address does not", "correct": true },
      { "text": "IP address changes, MAC address does not", "correct": false },
      { "text": "Both MAC and IP change", "correct": false },
      { "text": "Neither MAC nor IP change", "correct": false },
      { "text": "Only VLAN tag changes", "correct": false }
    ]
  },
  {
    "question": "Which Cisco proprietary protocol provides Layer 3 redundancy?",
    "answers": [
      { "text": "VRRP", "correct": false },
      { "text": "GLBP", "correct": false },
      { "text": "CARP", "correct": false },
      { "text": "HSRP", "correct": true },
      { "text": "RIP", "correct": false }
    ]
  },
  {
    "question": "Which statement about RSTP is true?",
    "answers": [
      { "text": "RSTP is Cisco proprietary", "correct": false },
      { "text": "RSTP is an IEEE standard redefining port roles, states, and BPDUs", "correct": true },
      { "text": "RSTP eliminates the need for STP timers", "correct": false },
      { "text": "RSTP supports only one VLAN", "correct": false },
      { "text": "RSTP disables redundant links permanently", "correct": false }
    ]
  },
  {
    "question": "The combination of multiple routes into a single routing table entry is called:",
    "answers": [
      { "text": "Aggregation", "correct": false },
      { "text": "Supernetting", "correct": false },
      { "text": "Summarization", "correct": true },
      { "text": "Load balancing", "correct": false },
      { "text": "Subnetting", "correct": false }
    ]
  },
  {
    "question": "STP root bridge election uses which of the following?",
    "answers": [
      { "text": "Bridge Priority only", "correct": false },
      { "text": "Port ID only", "correct": false },
      { "text": "Bridge Priority and MAC Address", "correct": true },
      { "text": "MAC Address only", "correct": false },
      { "text": "Path Cost only", "correct": false }
    ]
  },
  {
    "question": "Routes are selected using which rule?",
    "answers": [
      { "text": "Lowest metric", "correct": false },
      { "text": "Shortest path", "correct": false },
      { "text": "Highest administrative distance", "correct": false },
      { "text": "Longest Prefix Match", "correct": true },
      { "text": "Lowest hop count only", "correct": false }
    ]
  },
  {
    "question": "Which summarized route should be configured on Router E?",
    "answers": [
      { "text": "172.16.8.0/21", "correct": false },
      { "text": "172.16.16.0/21", "correct": false },
      { "text": "172.16.12.0/22", "correct": true },
      { "text": "172.16.0.0/20", "correct": false },
      { "text": "172.16.14.0/23", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a benefit of supernetting?",
    "answers": [
      { "text": "Reduces routing table size", "correct": false },
      { "text": "Improves routing efficiency", "correct": false },
      { "text": "Aggregates the ports needed on the router", "correct": true },
      { "text": "Simplifies route advertisements", "correct": false },
      { "text": "Reduces routing overhead", "correct": false }
    ]
  },
  {
    "question": "MSTP uses up to 2 __________.",
    "answers": [
      { "text": "VLANs", "correct": false },
      { "text": "Root Bridges", "correct": true },
      { "text": "Backbone links", "correct": false },
      { "text": "Distribution layers", "correct": false },
      { "text": "Spanning Tree protocols", "correct": false }
    ]
  },
  {
    "question": "GLBP adds use of the __________.",
    "answers": [
      { "text": "Virtual MAC only", "correct": false },
      { "text": "Virtual IP only", "correct": false },
      { "text": "Virtual IP and load balancing", "correct": true },
      { "text": "Standby router only", "correct": false },
      { "text": "Spanning Tree integration", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT considered part of the fundamentals of network design?",
    "answers": [
      { "text": "Scalability", "correct": false },
      { "text": "Reliability", "correct": false },
      { "text": "Security", "correct": false },
      { "text": "Performance", "correct": false },
      { "text": "All of the above would be appropriate", "correct": true }
    ]
  },
  {
    "question": "A 3-tier network architecture includes which layers?",
    "answers": [
      { "text": "Core, Distribution, Access", "correct": true },
      { "text": "Core, Edge, Access", "correct": false },
      { "text": "Distribution, Access, WAN", "correct": false },
      { "text": "Edge, Core, Internet", "correct": false },
      { "text": "Access only", "correct": false }
    ]
  }


  ];