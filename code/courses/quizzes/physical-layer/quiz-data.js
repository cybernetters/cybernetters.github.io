const questionBank = [
  {
    "question": "Which of the following is an example of a synchronous data transmission method?",
    "answers": [
      { "text": "RS-232", "correct": false },
      { "text": "USB", "correct": false },
      { "text": "T-Carrier System", "correct": true },
      { "text": "Firewire", "correct": false },
      { "text": "PCI", "correct": false }
    ]
  },
  {
    "question": "What is a primary limitation of parallel data transmission?",
    "answers": [
      { "text": "High cost", "correct": false },
      { "text": "Signal degradation over long distances", "correct": true },
      { "text": "Requires external timing", "correct": false },
      { "text": "Cannot handle isochronous data", "correct": false },
      { "text": "Limited compatibility with modern devices", "correct": false }
    ]
  },
  {
    "question": "What happens if one side of a network connection is set to auto-negotiation and the other is set to full-duplex?",
    "answers": [
      { "text": "Connection fails", "correct": false },
      { "text": "Both sides default to half-duplex", "correct": false },
      { "text": "Full-duplex is enforced", "correct": false },
      { "text": "Duplex mismatch occurs", "correct": true },
      { "text": "Bandwidth increases", "correct": false }
    ]
  },
  {
    "question": "Which of the following best defines modulation?",
    "answers": [
      { "text": "Splitting data into time slots", "correct": false },
      { "text": "Changing the phase of a signal", "correct": false },
      { "text": "Converting digital bits into an analog signal", "correct": true },
      { "text": "Transmitting multiple signals over one channel", "correct": false },
      { "text": "Synchronizing signal timing", "correct": false }
    ]
  },
  {
    "question": "In Frequency Division Multiplexing, what minimizes adjacent channel interference?",
    "answers": [
      { "text": "Orthogonal codes", "correct": false },
      { "text": "Guard bands", "correct": true },
      { "text": "Time slots", "correct": false },
      { "text": "Carrier signals", "correct": false },
      { "text": "Bandwidth optimization", "correct": false }
    ]
  },
  {
    "question": "What type of transmission assigns unique orthogonal codes to data streams?",
    "answers": [
      { "text": "Frequency Division Multiplexing", "correct": false },
      { "text": "Time Division Multiplexing", "correct": false },
      { "text": "Code Division Multiplexing", "correct": true },
      { "text": "Phase Modulation", "correct": false },
      { "text": "Amplitude Modulation", "correct": false }
    ]
  },
  {
    "question": "What is the main advantage of isochronous transmission?",
    "answers": [
      { "text": "High data density", "correct": false },
      { "text": "Consistent timing gaps between data items", "correct": true },
      { "text": "Reduced interference", "correct": false },
      { "text": "Low implementation cost", "correct": false },
      { "text": "Better error handling", "correct": false }
    ]
  },
  {
    "question": "Which of these is a characteristic of asynchronous data transmission?",
    "answers": [
      { "text": "Requires a clock for synchronization", "correct": false },
      { "text": "Uses start and stop bits", "correct": true },
      { "text": "Continuous transmission of data", "correct": false },
      { "text": "Allows time slots for data streams", "correct": false },
      { "text": "Synchronization maintained regardless of data", "correct": false }
    ]
  },
  {
    "question": "Which transmission mode is typically used in LAN/WAN technologies?",
    "answers": [
      { "text": "Isochronous", "correct": false },
      { "text": "Serial", "correct": true },
      { "text": "Parallel", "correct": false },
      { "text": "Asynchronous", "correct": false },
      { "text": "Full-duplex", "correct": false }
    ]
  },
  {
    "question": "What is the primary function of a modem?",
    "answers": [
      { "text": "Multiplexing and de-multiplexing", "correct": false },
      { "text": "Converting digital signals into analog and vice versa", "correct": true },
      { "text": "Handling multiple data streams simultaneously", "correct": false },
      { "text": "Establishing secure connections", "correct": false },
      { "text": "Enhancing data transmission speed", "correct": false }
    ]
  },
  {
    "question": "Which type of modulation manipulates the amplitude of a carrier wave?",
    "answers": [
      { "text": "Phase Modulation", "correct": false },
      { "text": "Frequency Modulation", "correct": false },
      { "text": "Amplitude Modulation", "correct": true },
      { "text": "Quadrature Modulation", "correct": false },
      { "text": "Pulse Modulation", "correct": false }
    ]
  },
  {
    "question": "What does the term 'shift keying' refer to?",
    "answers": [
      { "text": "A type of parallel transmission", "correct": false },
      { "text": "Synchronization using external clocks", "correct": false },
      { "text": "Modulation for digital signals", "correct": true },
      { "text": "Multiplexing in optical fibers", "correct": false },
      { "text": "Analog signal processing", "correct": false }
    ]
  },
  {
    "question": "Which transmission method is most suitable for long-distance communication?",
    "answers": [
      { "text": "Serial", "correct": true },
      { "text": "Parallel", "correct": false },
      { "text": "Synchronous", "correct": false },
      { "text": "Isochronous", "correct": false },
      { "text": "Half-duplex", "correct": false }
    ]
  },
  {
    "question": "What type of device commonly uses half-duplex communication?",
    "answers": [
      { "text": "SCADA systems", "correct": false },
      { "text": "Ethernet networks", "correct": false },
      { "text": "USB", "correct": true },
      { "text": "Printers", "correct": false },
      { "text": "Firewire", "correct": false }
    ]
  },
  {
    "question": "Which multiplexing technique uses time slots for data streams?",
    "answers": [
      { "text": "Frequency Division Multiplexing", "correct": false },
      { "text": "Time Division Multiplexing", "correct": true },
      { "text": "Code Division Multiplexing", "correct": false },
      { "text": "Amplitude Modulation", "correct": false },
      { "text": "Phase Modulation", "correct": false }
    ]
  },
  {
    "question": "In parallel communication, what is a common implementation?",
    "answers": [
      { "text": "Ethernet", "correct": false },
      { "text": "PCI", "correct": true },
      { "text": "T-Carrier systems", "correct": false },
      { "text": "DSL", "correct": false },
      { "text": "SONET", "correct": false }
    ]
  },
  {
    "question": "What determines the synchronization in synchronous transmission?",
    "answers": [
      { "text": "Start and stop bits", "correct": false },
      { "text": "Internal or external clocks", "correct": true },
      { "text": "Guard bands", "correct": false },
      { "text": "Orthogonal codes", "correct": false },
      { "text": "Multiplexing schemes", "correct": false }
    ]
  },
  {
    "question": "Which signal property is manipulated in Phase Modulation?",
    "answers": [
      { "text": "Amplitude", "correct": false },
      { "text": "Frequency", "correct": false },
      { "text": "Phase", "correct": true },
      { "text": "Timing", "correct": false },
      { "text": "Bandwidth", "correct": false }
    ]
  },
  {
    "question": "What is a disadvantage of duplex mismatch?",
    "answers": [
      { "text": "Decreased bandwidth", "correct": true },
      { "text": "Increased error rate", "correct": false },
      { "text": "Reduced compatibility", "correct": false },
      { "text": "Latency issues", "correct": false },
      { "text": "Connection failure", "correct": false }
    ]
  },
  {
    "question": "Which modulation method is commonly referred to as FSK in industry?",
    "answers": [
      { "text": "Frequency Modulation", "correct": true },
      { "text": "Amplitude Modulation", "correct": false },
      { "text": "Phase Modulation", "correct": false },
      { "text": "Quadrature Modulation", "correct": false },
      { "text": "Code Modulation", "correct": false }
    ]
  },
  {
    "question": "Parallel communication is better suited for long-distance communication.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Auto-negotiation ensures optimal duplex mode in all cases.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "TDM assigns unique orthogonal codes to each data stream.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Amplitude modulation changes the frequency of a signal.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Asynchronous transmission relies on a timing source.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Modulation is required for converting digital signals for analog media.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Guard bands reduce interference in FDM.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Ethernet supports half-duplex communication.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Frequency Division Multiplexing is applicable in optical fibers as WDM.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Start and stop bits are used in synchronous communication.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Quadrature Amplitude Modulation is a type of shift keying.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Serial communication is a core feature of Ethernet.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Duplex mismatch increases overall connection efficiency.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Parallel transmission suffers from EMI-related degradation.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A modem only performs analog-to-digital conversions.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Phase modulation changes the phase while keeping amplitude and frequency constant.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Isochronous transmission ensures consistent gaps between data items.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "USB communication is typically half-duplex.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "SCADA systems were originally simplex systems.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Code Division Multiplexing does not require guard bands.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "You are designing a data transmission system for an environment with high EMI. Which transmission mode is most appropriate?",
    "answers": [
      { "text": "Parallel", "correct": false },
      { "text": "Serial", "correct": true },
      { "text": "Asynchronous", "correct": false },
      { "text": "Half-Duplex", "correct": false },
      { "text": "Simplex", "correct": false }
    ]
  },
  {
    "question": "A device requires low-latency data exchange with consistent timing gaps. Which method will you choose?",
    "answers": [
      { "text": "Synchronous", "correct": false },
      { "text": "Isochronous", "correct": true },
      { "text": "Asynchronous", "correct": false },
      { "text": "FDM", "correct": false },
      { "text": "CDM", "correct": false }
    ]
  },
  {
    "question": "During a network audit, you notice one side is set to full-duplex and the other to auto-negotiation. What issue will likely occur?",
    "answers": [
      { "text": "No connection", "correct": false },
      { "text": "Increased speed", "correct": false },
      { "text": "Duplex mismatch", "correct": true },
      { "text": "Higher latency", "correct": false },
      { "text": "Reduced error correction", "correct": false }
    ]
  },
  {
    "question": "What would you recommend for reducing adjacent channel interference in an FDM system?",
    "answers": [
      { "text": "Increasing bandwidth", "correct": false },
      { "text": "Guard bands", "correct": true },
      { "text": "Synchronous communication", "correct": false },
      { "text": "Using orthogonal codes", "correct": false },
      { "text": "Signal compression", "correct": false }
    ]
  },
  {
    "question": "A team needs to transmit data with a high density of information. Which method is ideal?",
    "answers": [
      { "text": "AM", "correct": false },
      { "text": "FM", "correct": false },
      { "text": "PM", "correct": false },
      { "text": "QAM", "correct": true },
      { "text": "Simplex", "correct": false }
    ]
  },
  {
    "question": "Which of the following scenarios would benefit from synchronous transmission?",
    "answers": [
      { "text": "Sending data intermittently", "correct": false },
      { "text": "High-volume data transfer", "correct": true },
      { "text": "SCADA system communication", "correct": false },
      { "text": "Assembling packets with varied delays", "correct": false },
      { "text": "Lightweight device communication", "correct": false }
    ]
  },
  {
    "question": "A large-scale optical fiber network uses WDM. What is this an example of?",
    "answers": [
      { "text": "FDM", "correct": true },
      { "text": "TDM", "correct": false },
      { "text": "CDM", "correct": false },
      { "text": "AM", "correct": false },
      { "text": "PM", "correct": false }
    ]
  },
  {
    "question": "A printer connected via an old interface operates poorly over long distances. Which interface type is it likely using?",
    "answers": [
      { "text": "Ethernet", "correct": false },
      { "text": "Serial", "correct": false },
      { "text": "Parallel", "correct": true },
      { "text": "USB", "correct": false },
      { "text": "Firewire", "correct": false }
    ]
  },
  {
    "question": "You need to multiplex multiple real-time voice calls. Which multiplexing method is most suitable?",
    "answers": [
      { "text": "FDM", "correct": false },
      { "text": "TDM", "correct": true },
      { "text": "CDM", "correct": false },
      { "text": "AM", "correct": false },
      { "text": "FM", "correct": false }
    ]
  },
  {
    "question": "A company uses orthogonal codes for secure channel communication. Which multiplexing technique are they employing?",
    "answers": [
      { "text": "FDM", "correct": false },
      { "text": "TDM", "correct": false },
      { "text": "CDM", "correct": true },
      { "text": "PM", "correct": false },
      { "text": "AM", "correct": false }
    ]
  }
];