const questionBank = [
  // 20 Multiple Choice Questions (MCQs)
  {
    question: "What is the primary purpose of software licensing?",
    answers: [
      { text: "A. To simplify the user interface", correct: false },
      { text: "B. To prevent unauthorized duplication and usage", correct: true },
      { text: "C. To reduce software costs", correct: false },
      { text: "D. To allow unlimited installations", correct: false },
      { text: "E. To enable hardware integration", correct: false },
    ],
  },
  {
    question: "Which of the following typically comes with off-the-shelf software?",
    answers: [
      { text: "A. OEM license", correct: false },
      { text: "B. Proprietary license", correct: false },
      { text: "C. License Agreement", correct: true },
      { text: "D. Source code access", correct: false },
      { text: "E. Client Access License (CAL)", correct: false },
    ],
  },
  {
    question: "What is the enforceability of an End-User License Agreement (EULA) dependent on?",
    answers: [
      { text: "A. The version of the software", correct: false },
      { text: "B. Jurisdiction and user acceptance", correct: true },
      { text: "C. Availability of source code", correct: false },
      { text: "D. Reverse engineering permissions", correct: false },
      { text: "E. Time of installation", correct: false },
    ],
  },
  {
    question: "What does a proprietary software license typically restrict?",
    answers: [
      { text: "A. Installation on multiple machines", correct: false },
      { text: "B. Use without updates", correct: false },
      { text: "C. Source code modifications", correct: true },
      { text: "D. End-user warranty claims", correct: false },
      { text: "E. Hardware compatibility", correct: false },
    ],
  },
  {
    question: "Which is a common example of deployment-based licensing?",
    answers: [
      { text: "A. Annual licensing", correct: false },
      { text: "B. Perpetual licensing", correct: false },
      { text: "C. Stand-alone licensing", correct: true },
      { text: "D. Software rental licensing", correct: false },
      { text: "E. Volume licensing", correct: false },
    ],
  },
  {
    question: "Which of the following licensing models governs concurrent software usage?",
    answers: [
      { text: "A. Individual licenses", correct: false },
      { text: "B. Floating licenses", correct: true },
      { text: "C. OEM licenses", correct: false },
      { text: "D. Annual licenses", correct: false },
      { text: "E. Per-connection licenses", correct: false },
    ],
  },
  {
    question: "In client/server licensing, what does a Client Access License (CAL) govern?",
    answers: [
      { text: "A. The number of servers available", correct: false },
      { text: "B. Client access to server-based resources", correct: true },
      { text: "C. Concurrent connections to a server", correct: false },
      { text: "D. Individual software installations", correct: false },
      { text: "E. Licensing for open-source distribution", correct: false },
    ],
  },
  {
    question: "Which licensing model is commonly used for rarely used applications?",
    answers: [
      { text: "A. Floating licenses", correct: false },
      { text: "B. Software rental", correct: true },
      { text: "C. Annual licenses", correct: false },
      { text: "D. Per-connection licenses", correct: false },
      { text: "E. Client/server licensing", correct: false },
    ],
  },
  {
    question: "What is required to validate software during volume licensing?",
    answers: [
      { text: "A. KMS host configuration", correct: true },
      { text: "B. Source code availability", correct: false },
      { text: "C. Proprietary license acceptance", correct: false },
      { text: "D. Reverse engineering approval", correct: false },
      { text: "E. CAL enforcement", correct: false },
    ],
  },
  {
    question: "What is the activation threshold for clients in a KMS setup?",
    answers: [
      { text: "A. 10", correct: false },
      { text: "B. 15", correct: false },
      { text: "C. 20", correct: false },
      { text: "D. 25", correct: true },
      { text: "E. 50", correct: false },
    ],
  },
  {
    question: "Which licensing type transfers software ownership to the end-user?",
    answers: [
      { text: "A. Proprietary", correct: false },
      { text: "B. Deployment-based", correct: false },
      { text: "C. Open-source", correct: true },
      { text: "D. Stand-alone", correct: false },
      { text: "E. Per-connection", correct: false },
    ],
  },
  {
    question: "What must redistributed open-source software include?",
    answers: [
      { text: "A. User manuals", correct: false },
      { text: "B. License invoice", correct: false },
      { text: "C. Source code", correct: true },
      { text: "D. EULA", correct: false },
      { text: "E. CAL", correct: false },
    ],
  },
  {
    question: "Which open-source license is slightly more restrictive than others?",
    answers: [
      { text: "A. MIT License", correct: false },
      { text: "B. BSD License", correct: false },
      { text: "C. GNU General Public License (GPL)", correct: true },
      { text: "D. Apache License", correct: false },
      { text: "E. KMS License", correct: false },
    ],
  },
  {
    question: "Which organization is known for its campaign 'Don’t Copy That Floppy'?",
    answers: [
      { text: "A. BSA", correct: false },
      { text: "B. SIIA", correct: true },
      { text: "C. GNU", correct: false },
      { text: "D. Microsoft", correct: false },
      { text: "E. Adobe", correct: false },
    ],
  },
  {
    question: "What governs the number of software copies validated under volume licensing?",
    answers: [
      { text: "A. CAL", correct: false },
      { text: "B. Key management services", correct: true },
      { text: "C. Floating licenses", correct: false },
      { text: "D. Per-use licenses", correct: false },
      { text: "E. Time-based licensing", correct: false },
    ],
  },
  {
    question: "What is a consequence of non-compliance in a software audit?",
    answers: [
      { text: "A. Increased software functionality", correct: false },
      { text: "B. Access to proprietary source code", correct: false },
      { text: "C. Legal and monetary liability", correct: true },
      { text: "D. Automatic license renewal", correct: false },
      { text: "E. Client/server integration", correct: false },
    ],
  },
  {
    question: "Which type of license is typically tied to individual machines?",
    answers: [
      { text: "A. Floating licenses", correct: false },
      { text: "B. Individual licenses", correct: true },
      { text: "C. CAL", correct: false },
      { text: "D. Deployment licenses", correct: false },
      { text: "E. Volume licenses", correct: false },
    ],
  },
  {
    question: "Which type of license allows a single key to validate multiple installations?",
    answers: [
      { text: "A. Client Access License", correct: false },
      { text: "B. Volume license", correct: true },
      { text: "C. Proprietary license", correct: false },
      { text: "D. Time-based license", correct: false },
      { text: "E. Deployment license", correct: false },
    ],
  },
  {
    question: "What tool is commonly used in Microsoft KMS management?",
    answers: [
      { text: "A. EULA Wizard", correct: false },
      { text: "B. slmgr", correct: true },
      { text: "C. License Manager", correct: false },
      { text: "D. Volume Activation Service", correct: false },
      { text: "E. Active Directory", correct: false },
    ],
  },

  // True/False Questions
  { question: "Proprietary licenses allow redistribution of modified software.", answers: [{ text: "True", correct: false }, { text: "False", correct: true }] },
  { question: "OEM licenses are typically bundled with hardware.", answers: [{ text: "True", correct: true }, { text: "False", correct: false }] },
  { question: "Volume licensing originally required activation mechanisms.", answers: [{ text: "True", correct: false }, { text: "False", correct: true }] },
  { question: "Perpetual licenses have an expiration date.", answers: [{ text: "True", correct: false }, { text: "False", correct: true }] },
  { question: "A single CAL can govern multiple servers.", answers: [{ text: "True", correct: false }, { text: "False", correct: true }] },
  { question: "KMS hosts are configured with a VLK.", answers: [{ text: "True", correct: true }, { text: "False", correct: false }] },
  { question: "Reverse engineering is allowed under open-source licenses.", answers: [{ text: "True", correct: true }, { text: "False", correct: false }] },
  { question: "The GNU General Public License (GPL) is less restrictive than the MIT License.", answers: [{ text: "True", correct: false }, { text: "False", correct: true }] },
  { question: "CALs enforce licensing on the server.", answers: [{ text: "True", correct: false }, { text: "False", correct: true }] },
  { question: "Deployment-based licensing is based on installation count.", answers: [{ text: "True", correct: false }, { text: "False", correct: true }] },
  { question: "Volume licenses were historically easier to exploit.", answers: [{ text: "True", correct: true }, { text: "False", correct: false }] },
  { question: "A software maintenance program often includes security fixes.", answers: [{ text: "True", correct: true }, { text: "False", correct: false }] },
  { question: "BSA provides rewards to informants of software piracy.", answers: [{ text: "True", correct: true }, { text: "False", correct: false }] },
  { question: "EULA enforceability depends on hardware type.", answers: [{ text: "True", correct: false }, { text: "False", correct: true }] },
  { question: "KMS activation requires a minimum number of registered clients.", answers: [{ text: "True", correct: true }, { text: "False", correct: false }] },
  { question: "Stand-alone licensing is common in client/server environments.", answers: [{ text: "True", correct: false }, { text: "False", correct: true }] },
  { question: "Redistribution of modified open-source software requires source code.", answers: [{ text: "True", correct: true }, { text: "False", correct: false }] },
  { question: "Reverse engineering is prohibited under proprietary licenses.", answers: [{ text: "True", correct: true }, { text: "False", correct: false }] },
  { question: "Per-connection licenses govern the number of concurrent connections.", answers: [{ text: "True", correct: true }, { text: "False", correct: false }] },
  { question: "Business Software Alliance was founded in 1992.", answers: [{ text: "True", correct: false }, { text: "False", correct: true }] },
];
