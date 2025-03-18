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
    "question": "STP is defined under IEEE 802.1D.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The primary purpose of STP is to increase the number of redundant paths in a network.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Rapid STP (RSTP) is backwards compatible with traditional STP.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
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
    "question": "Which benefit is associated with Rapid STP (RSTP) compared to traditional STP?",
    "answers": [
      { "text": "It has a slower convergence process", "correct": false },
      { "text": "It uses a handshake process for rapid transition", "correct": true },
      { "text": "It increases the number of redundant paths", "correct": false },
      { "text": "It eliminates the need for timers", "correct": false }
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
    "question": "Comparing traditional STP and RSTP, a network engineer observes that RSTP incorporates a 'handshake' process for faster transitions. What specific benefit does this provide?",
    "answers": [
      { "text": "Improved link aggregation performance", "correct": false },
      { "text": "Enhanced VLAN tagging efficiency", "correct": false },
      { "text": "More reliable handling of host device connections during topology changes", "correct": true },
      { "text": "Reduced power consumption on switches", "correct": false }
    ]
  },
  {
    "question": "Which spanning tree protocol variant is most suitable for load balancing across multiple VLANs?",
    "answers": [
      { "text": "MSTP", "correct": false },
      { "text": "RSTP", "correct": false },
      { "text": "PVST+", "correct": true },
      { "text": "Traditional STP", "correct": false }
    ]
  },
  {
    "question": "In RSTP, an edge port (often configured with PortFast) allows for immediate transition to the forwarding state.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The command 'show mac-address-table' is used to identify real-time traffic load on a specific port.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
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
    "question": "To reduce the delay during a topology change, a network administrator decides to adjust a timer that affects how long a port stays in the Listening and Learning states. Which timer should be modified?",
    "answers": [
      { "text": "Hello Timer", "correct": false },
      { "text": "Max Age Timer", "correct": false },
      { "text": "Forward Delay Timer", "correct": true },
      { "text": "MAC Address Table lifetime", "correct": false }
    ]
  }
]