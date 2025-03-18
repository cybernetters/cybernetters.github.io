const questionBank = [
  {
    "question": "Which IEEE standard defines the original Spanning Tree Protocol?",
    "answers": [
      { "text": "IEEE 802.1D", "correct": true },
      { "text": "IEEE 802.1W", "correct": false },
      { "text": "IEEE 802.1S", "correct": false },
      { "text": "IEEE 802.3", "correct": false }
    ]
  },
  {
    "question": "What is the primary purpose of the Spanning Tree Protocol (STP)?",
    "answers": [
      { "text": "To load balance traffic", "correct": false },
      { "text": "To enforce security policies", "correct": false },
      { "text": "To prevent switching loops in redundant networks", "correct": true },
      { "text": "To manage VLAN assignments", "correct": false }
    ]
  },
  {
    "question": "Which Cisco proprietary protocol adds VLAN features to the traditional STP?",
    "answers": [
      { "text": "RSTP", "correct": false },
      { "text": "MSTP", "correct": false },
      { "text": "PVST+", "correct": true },
      { "text": "Rapid PVST+", "correct": false }
    ]
  },
  {
    "question": "What is the default bridge priority value used in STP?",
    "answers": [
      { "text": "4096", "correct": false },
      { "text": "32768", "correct": true },
      { "text": "65536", "correct": false },
      { "text": "1024", "correct": false }
    ]
  },
  {
    "question": "When two switches have the same priority during the STP election process, which parameter is used as a tie-breaker?",
    "answers": [
      { "text": "Port number", "correct": false },
      { "text": "Link speed", "correct": false },
      { "text": "MAC address", "correct": true },
      { "text": "CPU usage", "correct": false }
    ]
  },
  {
    "question": "Which timer in STP defines how often the root port sends hello messages?",
    "answers": [
      { "text": "Forward Delay Timer", "correct": false },
      { "text": "Hello Timer", "correct": true },
      { "text": "Max Age Timer", "correct": false },
      { "text": "MAC Address Table timer", "correct": false }
    ]
  },
  {
    "question": "What is the typical Hello Timer interval in STP?",
    "answers": [
      { "text": "1 second", "correct": false },
      { "text": "2 seconds", "correct": true },
      { "text": "5 seconds", "correct": false },
      { "text": "10 seconds", "correct": false }
    ]
  },
  {
    "question": "Which timer specifies the duration that ports remain in the blocking state before transitioning?",
    "answers": [
      { "text": "Hello Timer", "correct": false },
      { "text": "Max Age Timer", "correct": true },
      { "text": "Forward Delay Timer", "correct": false },
      { "text": "MAC Address Table lifetime", "correct": false }
    ]
  },
  {
    "question": "In STP, which port roles are responsible for forwarding packets?",
    "answers": [
      { "text": "Only the Designated Port", "correct": false },
      { "text": "Only the Root Port", "correct": false },
      { "text": "Both the Designated Port and the Root Port", "correct": true },
      { "text": "The Blocked Port and the Root Port", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT included in the STP frame format?",
    "answers": [
      { "text": "Protocol ID", "correct": false },
      { "text": "MAC address table", "correct": true },
      { "text": "Port Priority", "correct": false },
      { "text": "Message Age", "correct": false }
    ]
  },
  {
    "question": "What does MSTP stand for?",
    "answers": [
      { "text": "Multiple Spanning Tree Protocol", "correct": true },
      { "text": "Managed Spanning Tree Protocol", "correct": false },
      { "text": "Multicast Spanning Tree Protocol", "correct": false },
      { "text": "Modular Spanning Tree Protocol", "correct": false }
    ]
  },
  {
    "question": "Which STP variant typically improves convergence times to around 10 seconds?",
    "answers": [
      { "text": "PVST+", "correct": false },
      { "text": "Rapid STP (RSTP)", "correct": true },
      { "text": "MSTP", "correct": false },
      { "text": "Traditional STP", "correct": false }
    ]
  },
  {
    "question": "Which benefit is associated with Rapid STP (RSTP) compared to traditional STP?",
    "answers": [
      { "text": "It has a slower convergence process", "correct": false },
      { "text": "It uses a handshake process for rapid transition", "correct": true },
      { "text": "It increases the number of redundant paths", "correct": false },
      { "text": "It eliminates the need for timers", "correct": false }
    ]
  },
  {
    "question": "What is the maximum numerical value for the priority field in STP (given it ranges from 0 to 65536 in multiples of 4096)?",
    "answers": [
      { "text": "4096", "correct": false },
      { "text": "32768", "correct": false },
      { "text": "65536", "correct": true },
      { "text": "8192", "correct": false }
    ]
  },
  {
    "question": "Which protocol provides one spanning tree instance for each VLAN?",
    "answers": [
      { "text": "MSTP", "correct": false },
      { "text": "RSTP", "correct": false },
      { "text": "PVST", "correct": true },
      { "text": "Traditional STP", "correct": false }
    ]
  },
  {
    "question": "What is a key difference between PVST and PVST+?",
    "answers": [
      { "text": "PVST supports only ISL links, while PVST+ also supports 802.1Q links", "correct": true },
      { "text": "PVST+ is slower than PVST", "correct": false },
      { "text": "PVST+ does not allow multiple root bridges per VLAN", "correct": false },
      { "text": "There is no difference", "correct": false }
    ]
  },
  {
    "question": "Which command is used to evaluate the traffic on an interface to help identify a port generating high load?",
    "answers": [
      { "text": "show spanning-tree", "correct": false },
      { "text": "show processes cpu history", "correct": false },
      { "text": "show int <interface>", "correct": true },
      { "text": "show mac-address-table", "correct": false }
    ]
  },
  {
    "question": "In determining which port to block during STP convergence, which factor is used as a tie-breaker?",
    "answers": [
      { "text": "Highest path cost", "correct": false },
      { "text": "Lowest sender BID", "correct": true },
      { "text": "Highest MAC address", "correct": false },
      { "text": "Lowest CPU usage", "correct": false }
    ]
  },
  {
    "question": "In a PVST configuration, what is the relationship between the number of VLANs and the number of spanning tree instances?",
    "answers": [
      { "text": "One-to-one", "correct": true },
      { "text": "One-to-many", "correct": false },
      { "text": "Many-to-one", "correct": false },
      { "text": "No fixed relationship", "correct": false }
    ]
  },
  {
    "question": "Which best practice is recommended for STP implementation in an enterprise network?",
    "answers": [
      { "text": "Use default configurations without any adjustments", "correct": false },
      { "text": "Manually configure the root bridge to optimize topology", "correct": true },
      { "text": "Disable redundant links to simplify the network", "correct": false },
      { "text": "Increase the MAC address table lifetime", "correct": false }
    ]
  },
  {
    "question": "STP provides one spanning tree instance per VLAN in PVST. True or False?",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The primary purpose of STP is to increase the number of redundant paths in a network. True or False?",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Rapid STP (RSTP) is backwards compatible with traditional STP. True or False?",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The default bridge priority value in STP is 32768. True or False?",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A switch’s Bridge ID (BID) in STP is composed of its priority and its MAC address. True or False?",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The default Hello Timer in STP is set to 5 seconds. True or False?",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The Max Age Timer in STP is usually set to 20 seconds. True or False?",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Forward Delay Timer in STP determines how long a port remains in the Listening and Learning states. True or False?",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "RSTP reduces convergence times to approximately 10 seconds compared to traditional STP. True or False?",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "PVST provides one spanning tree instance for all VLANs in a network. True or False?",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "PVST+ extends PVST by adding support for 802.1Q links in addition to Cisco’s proprietary ISL. True or False?",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "MSTP uses the RSTP convergence algorithm to maintain a minimum number of spanning tree instances for the VLANs present on the network. True or False?",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The STP election process, which determines the root bridge, can take around 45 seconds to complete. True or False?",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A designated port in STP is responsible for forwarding all traffic on its segment. True or False?",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The root port is the port with the shortest path cost to the root bridge. True or False?",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The STP frame format includes a field for Port Priority. True or False?",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "STP employs an election process among switches to select the authoritative root bridge. True or False?",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The process of evaluating link speed, summing path costs, and comparing sender BIDs is used to determine which port should be blocked. True or False?",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "In RSTP, an edge port (often configured with PortFast) allows for immediate transition to the forwarding state. True or False?",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The command 'show mac-address-table' is used to identify real-time traffic load on a specific port. True or False?",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "In an enterprise network experiencing slow convergence after a topology change, an engineer notices that the network is taking more than 30 seconds for ports to become active. Which protocol is most likely being used?",
    "answers": [
      { "text": "Rapid STP (RSTP)", "correct": false },
      { "text": "Rapid PVST+", "correct": false },
      { "text": "Traditional STP", "correct": true },
      { "text": "MSTP", "correct": false }
    ]
  },
  {
    "question": "A network administrator manually sets a lower priority value on a switch to ensure it becomes the root bridge. Which best practice is being applied?",
    "answers": [
      { "text": "Disabling redundant links", "correct": false },
      { "text": "Manually configuring the root bridge", "correct": true },
      { "text": "Enabling PortFast on all ports", "correct": false },
      { "text": "Adjusting the Hello Timer", "correct": false }
    ]
  },
  {
    "question": "While troubleshooting a VLAN-specific issue, an administrator discovers that different VLANs have different root bridge configurations. Which protocol feature is most likely in use?",
    "answers": [
      { "text": "RSTP", "correct": false },
      { "text": "MSTP", "correct": false },
      { "text": "PVST", "correct": true },
      { "text": "Traditional STP", "correct": false }
    ]
  },
  {
    "question": "In a network where a trunk port is forwarding traffic in one VLAN but blocking in another, what does this indicate about the spanning tree configuration?",
    "answers": [
      { "text": "The switch is running MSTP", "correct": false },
      { "text": "The network is using PVST", "correct": true },
      { "text": "RSTP is misconfigured", "correct": false },
      { "text": "There is a hardware failure", "correct": false }
    ]
  },
  {
    "question": "During a network outage investigation, high CPU utilization is observed on core switches. Which STP-related issue might be contributing to this condition?",
    "answers": [
      { "text": "Excessively long Hello Timer intervals", "correct": false },
      { "text": "Broadcast storms caused by switching loops", "correct": true },
      { "text": "Manual root bridge configuration errors", "correct": false },
      { "text": "Incorrect MAC address table aging", "correct": false }
    ]
  },
  {
    "question": "An engineer finds that a port on the network edge is not transitioning immediately to the forwarding state after link-up. Which configuration is likely missing?",
    "answers": [
      { "text": "Proper VLAN assignment", "correct": false },
      { "text": "PortFast (edge port) configuration", "correct": true },
      { "text": "Correct MAC address setup", "correct": false },
      { "text": "An increased Forward Delay Timer", "correct": false }
    ]
  },
  {
    "question": "To reduce the delay during a topology change, a network administrator decides to adjust a timer that affects how long a port stays in the Listening and Learning states. Which timer should be modified?",
    "answers": [
      { "text": "Hello Timer", "correct": false },
      { "text": "Max Age Timer", "correct": false },
      { "text": "Forward Delay Timer", "correct": true },
      { "text": "MAC Address Table lifetime", "correct": false }
    ]
  },
  {
    "question": "In a scenario requiring load balancing across multiple VLANs, which spanning tree protocol variant is most suitable?",
    "answers": [
      { "text": "MSTP", "correct": false },
      { "text": "RSTP", "correct": false },
      { "text": "PVST+", "correct": true },
      { "text": "Traditional STP", "correct": false }
    ]
  },
  {
    "question": "An administrator notices that one switch has a non-default priority setting that helps it become the root bridge. What is the most likely reason for this configuration?",
    "answers": [
      { "text": "To shorten the MAC address table lifetime", "correct": false },
      { "text": "To force the switch to be the root bridge", "correct": true },
      { "text": "To disable PortFast on edge ports", "correct": false },
      { "text": "To match the priority of neighboring switches", "correct": false }
    ]
  },
  {
    "question": "Comparing traditional STP and RSTP, a network engineer observes that RSTP incorporates a “handshake” process for faster transitions. What specific benefit does this provide?",
    "answers": [
      { "text": "Improved link aggregation performance", "correct": false },
      { "text": "Enhanced VLAN tagging efficiency", "correct": false },
      { "text": "More reliable handling of host device connections during topology changes", "correct": true },
      { "text": "Reduced power consumption on switches", "correct": false }
    ]
  }
]