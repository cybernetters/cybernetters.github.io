const questionBank = [
  {
    "question": "What is the primary function of the Physical Layer in the OSI model?",
    "answers": [
      { "text": "Routing packets", "correct": false },
      { "text": "Managing encryption", "correct": false },
      { "text": "Handling raw bitstream transmission", "correct": true },
      { "text": "Error correction", "correct": false }
    ]
  },
  {
    "question": "Which of the following is a type of transmission mode?",
    "answers": [
      { "text": "Serial", "correct": true },
      { "text": "Broadcast", "correct": false },
      { "text": "Simplex", "correct": false },
      { "text": "Analog", "correct": false }
    ]
  },
  {
    "question": "What is a key feature of serial communication?",
    "answers": [
      { "text": "Data transmitted in parallel over multiple channels", "correct": false },
      { "text": "Data transmitted over long distances", "correct": true },
      { "text": "Limited to short-range transmission", "correct": false },
      { "text": "Requires guard bands for interference control", "correct": false }
    ]
  },
  {
    "question": "What does modulation achieve?",
    "answers": [
      { "text": "Transforms analog signals into digital signals", "correct": false },
      { "text": "Transforms digital data into an analog signal", "correct": true },
      { "text": "Eliminates the need for synchronization", "correct": false },
      { "text": "Simplifies error correction", "correct": false }
    ]
  },
  {
    "question": "What is an example of asynchronous communication?",
    "answers": [
      { "text": "Ethernet", "correct": false },
      { "text": "USB", "correct": false },
      { "text": "Keyboards", "correct": true },
      { "text": "Fiber optics", "correct": false }
    ]
  },
  {
    "question": "What type of modulation is also referred to as FSK?",
    "answers": [
      { "text": "Phase modulation", "correct": false },
      { "text": "Frequency modulation", "correct": true },
      { "text": "Amplitude modulation", "correct": false },
      { "text": "Time modulation", "correct": false }
    ]
  },
  {
    "question": "Which of these transmission modes uses a clock for synchronization?",
    "answers": [
      { "text": "Asynchronous", "correct": false },
      { "text": "Isochronous", "correct": true },
      { "text": "Simplex", "correct": false },
      { "text": "Duplex", "correct": false }
    ]
  },
  {
    "question": "What is a disadvantage of parallel communication?",
    "answers": [
      { "text": "Data is limited to low bandwidth", "correct": false },
      { "text": "Signal degradation over long distances", "correct": true },
      { "text": "Requires clock synchronization", "correct": false },
      { "text": "Does not support multiple devices", "correct": false }
    ]
  },
  {
    "question": "Which multiplexing technique uses unique orthogonal codes?",
    "answers": [
      { "text": "Time Division Multiplexing (TDM)", "correct": false },
      { "text": "Frequency Division Multiplexing (FDM)", "correct": false },
      { "text": "Code Division Multiplexing (CDM)", "correct": true },
      { "text": "Amplitude Division Multiplexing (ADM)", "correct": false }
    ]
  },
  {
    "question": "Which device performs both modulation and demodulation?",
    "answers": [
      { "text": "Switch", "correct": false },
      { "text": "Hub", "correct": false },
      { "text": "Modem", "correct": true },
      { "text": "Router", "correct": false }
    ]
  },
  {
    "question": "Frequency modulation keeps amplitude and phase constant.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Auto-negotiation is used to select link speed and duplex mode.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Serial communication cannot transmit over long distances.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Guard bands are necessary for Time Division Multiplexing.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Phase modulation is often referred to as PSK.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Parallel communication is ideal for long-range transmissions.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Synchronous communication relies on a timing source.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
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
    "question": "Asynchronous communication uses start and stop bits for synchronization.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "In TDM, data is sent only in assigned timeslots.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A technician needs to choose a multiplexing method for fiber optics. Which method is ideal?",
    "answers": [
      { "text": "Code Division Multiplexing", "correct": false },
      { "text": "Time Division Multiplexing", "correct": false },
      { "text": "Frequency Division Multiplexing (WDM)", "correct": true },
      { "text": "Amplitude Modulation", "correct": false }
    ]
  },
  {
    "question": "A system requires long-range data transmission. Which method is appropriate?",
    "answers": [
      { "text": "Parallel communication", "correct": false },
      { "text": "Serial communication", "correct": true },
      { "text": "Phase modulation", "correct": false },
      { "text": "Synchronous multiplexing", "correct": false }
    ]
  },
  {
    "question": "An engineer wants to prevent channel interference. What should they implement?",
    "answers": [
      { "text": "Guard bands", "correct": true },
      { "text": "Error correction", "correct": false },
      { "text": "Synchronous timing", "correct": false },
      { "text": "Start and stop bits", "correct": false }
    ]
  },
  {
    "question": "A network adapter uses auto-negotiation. What does it determine?",
    "answers": [
      { "text": "Signal strength", "correct": false },
      { "text": "Link speed and duplex mode", "correct": true },
      { "text": "Multiplexing method", "correct": false },
      { "text": "Error rates", "correct": false }
    ]
  },
  {
    "question": "A device must convert analog signals to digital. Which operation is needed?",
    "answers": [
      { "text": "Demodulation", "correct": true },
      { "text": "Modulation", "correct": false },
      { "text": "Frequency shifting", "correct": false },
      { "text": "Time division", "correct": false }
    ]
  },
  {
    "question": "Which component should a network administrator configure to handle digital-to-analog conversions?",
    "answers": [
      { "text": "Switch", "correct": false },
      { "text": "Modem", "correct": true },
      { "text": "Router", "correct": false },
      { "text": "Firewall", "correct": false }
    ]
  },
  {
    "question": "A technician is configuring a system using FDM. What should they include?",
    "answers": [
      { "text": "Guard bands", "correct": true },
      { "text": "Start bits", "correct": false },
      { "text": "Phase modulation", "correct": false },
      { "text": "Orthogonal codes", "correct": false }
    ]
  }
  ];