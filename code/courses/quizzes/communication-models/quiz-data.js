const questionBank = [
  {
    "question": "Which of the following is a primary purpose of the OSI Model?",
    "answers": [
      { "text": "To limit communication to proprietary hardware", "correct": false },
      { "text": "To define end-to-end encryption standards", "correct": false },
      { "text": "To standardize network components across vendors", "correct": true },
      { "text": "To enhance mechanical and electrical data control", "correct": false },
      { "text": "To prioritize point-to-point communication", "correct": false }
    ]
  },
  {
    "question": "What is the responsibility of the Physical Layer in the OSI Model?",
    "answers": [
      { "text": "Logical addressing", "correct": false },
      { "text": "Encapsulation of data into packets", "correct": false },
      { "text": "Transmission and receipt of the bitstream", "correct": true },
      { "text": "Managing application sessions", "correct": false },
      { "text": "Data encryption", "correct": false }
    ]
  },
  {
    "question": "At which layer of the OSI Model does CRC error checking primarily occur?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": true },
      { "text": "Network", "correct": false },
      { "text": "Transport", "correct": false },
      { "text": "Application", "correct": false }
    ]
  },
  {
    "question": "Which layer of the OSI Model is responsible for re-sequencing packets?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": false },
      { "text": "Transport", "correct": true },
      { "text": "Session", "correct": false },
      { "text": "Presentation", "correct": false }
    ]
  },
  {
    "question": "Logical adjacency in the OSI Model is made possible by:",
    "answers": [
      { "text": "Encryption", "correct": false },
      { "text": "Encapsulation and decapsulation", "correct": true },
      { "text": "Routing", "correct": false },
      { "text": "Frame validation", "correct": false },
      { "text": "Unique addressing", "correct": false }
    ]
  },
  // Additional MCQs, True/False, and Application MCQs follow this pattern
  {
    "question": "A network admin needs to establish secure data transfer. Which OSI layer should they consider for encryption?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": false },
      { "text": "Presentation", "correct": true },
      { "text": "Transport", "correct": false },
      { "text": "Application", "correct": false }
    ]
  },
  // True/False Questions
  {
    "question": "The Physical Layer is responsible for direct application communication.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Encapsulation allows logical communication between OSI layers.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  // Application MCQs
  {
    "question": "During troubleshooting, you notice corrupted frames being transmitted. Which OSI layer would you investigate first?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": true },
      { "text": "Network", "correct": false },
      { "text": "Transport", "correct": false },
      { "text": "Application", "correct": false }
    ]
  },
  {
    "question": "Which of the following is an example of a protocol at the Application Layer?",
    "answers": [
      { "text": "TCP", "correct": false },
      { "text": "RIP", "correct": false },
      { "text": "HTTP", "correct": true },
      { "text": "IPX", "correct": false },
      { "text": "OSPF", "correct": false }
    ]
  },
  {
    "question": "What is the primary function of the Data Link Layer?",
    "answers": [
      { "text": "Global addressing", "correct": false },
      { "text": "Session management", "correct": false },
      { "text": "Frame-level error detection and correction", "correct": true },
      { "text": "Bitstream encoding", "correct": false },
      { "text": "Packet sequencing", "correct": false }
    ]
  },
  {
    "question": "Which two sub-layers make up the Data Link Layer?",
    "answers": [
      { "text": "MAC and IP", "correct": false },
      { "text": "LLC and RIP", "correct": false },
      { "text": "MAC and LLC", "correct": true },
      { "text": "TCP and UDP", "correct": false },
      { "text": "CRC and LLC", "correct": false }
    ]
  },
  {
    "question": "Which OSI layer provides globally unique addressing?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": false },
      { "text": "Network", "correct": true },
      { "text": "Transport", "correct": false },
      { "text": "Application", "correct": false }
    ]
  },
  {
    "question": "What layer is primarily responsible for end-to-end communication between hosts?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Transport", "correct": true },
      { "text": "Session", "correct": false },
      { "text": "Presentation", "correct": false },
      { "text": "Data Link", "correct": false }
    ]
  },
  // Continuing True/False Questions
  {
    "question": "The OSI Model only applies to proprietary hardware.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Error checking in the Data Link Layer commonly uses CRC.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Presentation Layer is responsible for host-to-host transmission.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The Network Layer manages both logical addressing and routing.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Frames are the data units at the Network Layer.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Logical adjacency is unique to the Physical Layer.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The Session Layer helps maintain interactive communication sessions.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "OSI Model standardizes communication for multi-vendor environments.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Presentation Layer manages encryption and data syntax.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Physical Layer includes physical media.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  // Continuing Application MCQs
  {
    "question": "A device fails to route packets between two networks. Which layer is responsible?",
    "answers": [
      { "text": "Data Link", "correct": false },
      { "text": "Network", "correct": true },
      { "text": "Transport", "correct": false },
      { "text": "Session", "correct": false },
      { "text": "Application", "correct": false }
    ]
  },
  {
    "question": "Which layer will handle re-sequencing if packet delivery order is disrupted?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Network", "correct": false },
      { "text": "Transport", "correct": true },
      { "text": "Session", "correct": false },
      { "text": "Application", "correct": false }
    ]
  },
  {
    "question": "A network relies on unique global addresses for devices. Which layer handles this?",
    "answers": [
      { "text": "Data Link", "correct": false },
      { "text": "Network", "correct": true },
      { "text": "Transport", "correct": false },
      { "text": "Application", "correct": false },
      { "text": "Session", "correct": false }
    ]
  },
  {
    "question": "What layer’s sub-layer manages frame access to the physical medium?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link – MAC", "correct": true },
      { "text": "Data Link – LLC", "correct": false },
      { "text": "Network", "correct": false },
      { "text": "Transport", "correct": false }
    ]
  },
  {
    "question": "While setting up a VoIP call, which layer is responsible for establishing the session?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": false },
      { "text": "Network", "correct": false },
      { "text": "Session", "correct": true },
      { "text": "Application", "correct": false }
    ]
  },
  {
    "question": "Data compression is handled by which OSI layer?",
    "answers": [
      { "text": "Transport", "correct": false },
      { "text": "Session", "correct": false },
      { "text": "Presentation", "correct": true },
      { "text": "Data Link", "correct": false },
      { "text": "Network", "correct": false }
    ]
  },
  {
    "question": "If a network application cannot interact with the hardware, which OSI layer might be failing?",
    "answers": [
      { "text": "Application", "correct": true },
      { "text": "Session", "correct": false },
      { "text": "Presentation", "correct": false },
      { "text": "Transport", "correct": false },
      { "text": "Physical", "correct": false }
    ]
  },
  {
    "question": "A switch is used to ensure frames are delivered correctly. At which OSI layer does this occur?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": true },
      { "text": "Network", "correct": false },
      { "text": "Transport", "correct": false },
      { "text": "Session", "correct": false }
    ]
  },
  {
    "question": "Which layer of the OSI Model manages data encryption and compression?",
    "answers": [
      { "text": "Application", "correct": false },
      { "text": "Presentation", "correct": true },
      { "text": "Session", "correct": false },
      { "text": "Transport", "correct": false },
      { "text": "Data Link", "correct": false }
    ]
  },
  {
    "question": "The transport layer primarily works with which unit of data?",
    "answers": [
      { "text": "Bits", "correct": false },
      { "text": "Frames", "correct": false },
      { "text": "Packets", "correct": false },
      { "text": "Segments", "correct": true },
      { "text": "Datagrams", "correct": false }
    ]
  },
  {
    "question": "What is the primary advantage of the OSI Model’s layered structure?",
    "answers": [
      { "text": "Enhances hardware compatibility", "correct": false },
      { "text": "Prevents vendor development", "correct": false },
      { "text": "Enables separate management of each layer", "correct": true },
      { "text": "Forces communication over proprietary software", "correct": false },
      { "text": "Reduces physical network requirements", "correct": false }
    ]
  },
  {
    "question": "Encapsulation involves which process in the OSI Model?",
    "answers": [
      { "text": "Routing packets between nodes", "correct": false },
      { "text": "Wrapping data with headers from each layer", "correct": true },
      { "text": "Logical adjacency between non-adjacent layers", "correct": false },
      { "text": "Translation of binary data to human-readable text", "correct": false },
      { "text": "Assigning global addresses", "correct": false }
    ]
  },
  {
    "question": "Which layer of the OSI Model deals directly with user applications?",
    "answers": [
      { "text": "Session", "correct": false },
      { "text": "Transport", "correct": false },
      { "text": "Application", "correct": true },
      { "text": "Network", "correct": false },
      { "text": "Physical", "correct": false }
    ]
  },
  {
    "question": "The OSI Model layer responsible for translating data into a common format is:",
    "answers": [
      { "text": "Network", "correct": false },
      { "text": "Transport", "correct": false },
      { "text": "Session", "correct": false },
      { "text": "Presentation", "correct": true },
      { "text": "Application", "correct": false }
    ]
  },
  {
    "question": "What is the primary function of the e2fsck command?",
    "answers": [
      { "text": "Format ext2, ext3, or ext4 filesystems", "correct": false },
      { "text": "Check and repair ext2, ext3, or ext4 filesystems", "correct": true },
      { "text": "Mount ext2, ext3, or ext4 filesystems", "correct": false },
      { "text": "Display ext2, ext3, or ext4 filesystem types", "correct": false },
      { "text": "Monitor disk quotas on ext2, ext3, or ext4 filesystems", "correct": false }
    ]
  },
  // Additional True/False Questions
  {
    "question": "The OSI Model includes protocols such as TCP and IP.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Routing protocols such as OSPF operate at the Transport Layer.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The Data Link Layer supports acknowledgment of received frames.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Logical adjacency allows direct peer-layer communication.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Encapsulation always starts at the Network Layer.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The OSI Model’s layered structure simplifies troubleshooting.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Which layer of the OSI Model is responsible for determining the optimal path for data?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": false },
      { "text": "Network", "correct": true },
      { "text": "Transport", "correct": false },
      { "text": "Session", "correct": false }
    ]
  },
  {
    "question": "At which layer does flow control primarily occur in the OSI Model?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": false },
      { "text": "Network", "correct": false },
      { "text": "Transport", "correct": true },
      { "text": "Application", "correct": false }
    ]
  },
  {
    "question": "Which OSI layer uses logical ports to manage multiple services?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Transport", "correct": false },
      { "text": "Session", "correct": true },
      { "text": "Presentation", "correct": false },
      { "text": "Data Link", "correct": false }
    ]
  },
  {
    "question": "What type of addressing is utilized by the Data Link Layer?",
    "answers": [
      { "text": "IP addressing", "correct": false },
      { "text": "Physical addressing", "correct": true },
      { "text": "Logical addressing", "correct": false },
      { "text": "Port addressing", "correct": false },
      { "text": "Domain addressing", "correct": false }
    ]
  },
  {
    "question": "What is the primary data unit used at the Network Layer?",
    "answers": [
      { "text": "Bit", "correct": false },
      { "text": "Frame", "correct": false },
      { "text": "Packet", "correct": true },
      { "text": "Segment", "correct": false },
      { "text": "Message", "correct": false }
    ]
  },
  {
    "question": "Which of the following occurs at the Presentation Layer?",
    "answers": [
      { "text": "Session establishment", "correct": false },
      { "text": "Compression of data", "correct": true },
      { "text": "Logical addressing", "correct": false },
      { "text": "Routing decisions", "correct": false },
      { "text": "Frame validation", "correct": false }
    ]
  },
  {
    "question": "What is the primary goal of encapsulation in the OSI Model?",
    "answers": [
      { "text": "To improve encryption", "correct": false },
      { "text": "To segment data for easier routing", "correct": false },
      { "text": "To wrap data with necessary headers and trailers", "correct": true },
      { "text": "To manage session termination", "correct": false },
      { "text": "To ensure reliability of packet delivery", "correct": false }
    ]
  },
  {
    "question": "Which layer is involved in providing error detection for transmitted frames?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": true },
      { "text": "Network", "correct": false },
      { "text": "Transport", "correct": false },
      { "text": "Session", "correct": false }
    ]
  },
  {
    "question": "Which OSI layer would a router primarily operate at?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": false },
      { "text": "Network", "correct": true },
      { "text": "Transport", "correct": false },
      { "text": "Application", "correct": false }
    ]
  },
  {
    "question": "Which of the following best describes the primary role of the Session Layer?",
    "answers": [
      { "text": "Ensuring reliable transmission", "correct": false },
      { "text": "Establishing, maintaining, and terminating sessions", "correct": true },
      { "text": "Translating data formats", "correct": false },
      { "text": "Handling end-to-end communication", "correct": false },
      { "text": "Managing bitstream transmission", "correct": false }
    ]
  },
  {
    "question": "A network technician observes high packet loss between two devices. Which layer should they troubleshoot first?",
    "answers": [
      { "text": "Physical", "correct": true },
      { "text": "Data Link", "correct": false },
      { "text": "Network", "correct": false },
      { "text": "Transport", "correct": false },
      { "text": "Application", "correct": false }
    ]
  },
  {
    "question": "An employee reports that their internet browser cannot load pages but can still ping other devices. Which OSI layer is likely causing the issue?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": false },
      { "text": "Network", "correct": false },
      { "text": "Application", "correct": true },
      { "text": "Presentation", "correct": false }
    ]
  },
  {
    "question": "A network switch is configured to forward frames based on MAC addresses. At which layer does this function occur?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": true },
      { "text": "Network", "correct": false },
      { "text": "Transport", "correct": false },
      { "text": "Application", "correct": false }
    ]
  },
  {
    "question": "A developer needs to implement data encryption in an application. Which OSI layer would their efforts align with?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": false },
      { "text": "Network", "correct": false },
      { "text": "Presentation", "correct": true },
      { "text": "Transport", "correct": false }
    ]
  },
  {
    "question": "An application cannot communicate because the session keeps timing out. Which layer of the OSI Model is most likely at fault?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": false },
      { "text": "Session", "correct": true },
      { "text": "Transport", "correct": false },
      { "text": "Network", "correct": false }
    ]
  },
  {
    "question": "A packet is dropped during routing due to an unreachable destination. Which layer handles this situation?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": false },
      { "text": "Network", "correct": true },
      { "text": "Transport", "correct": false },
      { "text": "Session", "correct": false }
    ]
  },
  {
    "question": "A technician is troubleshooting a Wi-Fi connection issue. At which OSI layer should they start?",
    "answers": [
      { "text": "Physical", "correct": true },
      { "text": "Data Link", "correct": false },
      { "text": "Network", "correct": false },
      { "text": "Transport", "correct": false },
      { "text": "Session", "correct": false }
    ]
  },
  {
    "question": "A client device is unable to access a server due to incorrect IP configuration. Which layer of the OSI Model is responsible?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": false },
      { "text": "Network", "correct": true },
      { "text": "Transport", "correct": false },
      { "text": "Application", "correct": false }
    ]
  },
  {
    "question": "A video streaming application is buffering due to unreliable packet delivery. Which OSI layer should be analyzed?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": false },
      { "text": "Network", "correct": false },
      { "text": "Transport", "correct": true },
      { "text": "Application", "correct": false }
    ]
  },
  {
    "question": "When testing encryption mechanisms, which layer's functionality is being evaluated?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": false },
      { "text": "Network", "correct": false },
      { "text": "Presentation", "correct": true },
      { "text": "Session", "correct": false }
    ]
  },
  {
    "question": "The Transport Layer ensures that data is delivered in sequence and without errors.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Physical Layer is responsible for error detection and correction.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Encapsulation begins at the Application Layer in the OSI Model.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Session Layer manages encryption and compression of data.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The Data Link Layer is responsible for assigning logical IP addresses.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Network Layer protocols include IP and IPX.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Presentation Layer is responsible for data syntax and structure.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Application Layer interfaces directly with the user’s application software.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The OSI Model supports open communication between multi-vendor environments.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Transport Layer is involved in session establishment between hosts.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },

  {
    "question": "A packet is being transmitted across a router. At which OSI layer is this activity taking place?",
    "answers": [
      { "text": "Data Link", "correct": false },
      { "text": "Network", "correct": true },
      { "text": "Transport", "correct": false },
      { "text": "Session", "correct": false },
      { "text": "Application", "correct": false }
    ]
  },
  {
    "question": "During troubleshooting, a technician notices that packets are being transmitted but are not reaching the intended application. Which layer should they investigate?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": false },
      { "text": "Network", "correct": false },
      { "text": "Application", "correct": true },
      { "text": "Transport", "correct": false }
    ]
  },
  {
    "question": "A user experiences repeated disconnections during a video call. Which OSI layer is responsible for maintaining a stable connection?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": false },
      { "text": "Session", "correct": true },
      { "text": "Transport", "correct": false },
      { "text": "Presentation", "correct": false }
    ]
  },
  {
    "question": "A device is sending frames but cannot access the network medium due to a collision. Which layer would be responsible for resolving this?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": true },
      { "text": "Network", "correct": false },
      { "text": "Transport", "correct": false },
      { "text": "Session", "correct": false }
    ]
  },
  {
    "question": "An IT administrator is analyzing routing tables to ensure proper network traffic flow. Which OSI layer’s protocols are most relevant for this task?",
    "answers": [
      { "text": "Physical", "correct": false },
      { "text": "Data Link", "correct": false },
      { "text": "Network", "correct": true },
      { "text": "Transport", "correct": false },
      { "text": "Application", "correct": false }
    ]
  }
];