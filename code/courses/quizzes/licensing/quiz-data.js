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
  {
    question: "An organization suspects non-compliance with proprietary software. What is their first step?",
    answers: [
      { text: "A. Notify the vendor", correct: false },
      { text: "B. Conduct an internal software audit", correct: true },
      { text: "C. Purchase additional licenses", correct: false },
      { text: "D. Hire a third-party auditor", correct: false },
      { text: "E. Report to the BSA", correct: false },
    ],
  },
  {
    question: "Your organization uses software with a per-use license model. Which scenario benefits most?",
    answers: [
      { text: "A. Daily operational tools", correct: false },
      { text: "B. Rarely used applications", correct: true },
      { text: "C. Server-based environments", correct: false },
      { text: "D. Open-source integrations", correct: false },
      { text: "E. Stand-alone installations", correct: false },
    ],
  },
  {
    question: "A company is considering volume licensing. Which is a primary benefit?",
    answers: [
      { text: "A. Reduced licensing costs", correct: true },
      { text: "B. Increased software functionality", correct: false },
      { text: "C. Unlimited installations", correct: false },
      { text: "D. Simplified redistribution rights", correct: false },
      { text: "E. Concurrent server access", correct: false },
    ],
  },
  {
    question: "A system administrator needs to ensure compliance with volume licensing. What is the best approach?",
    answers: [
      { text: "A. Implement strict CAL rules", correct: false },
      { text: "B. Enforce software activation via KMS", correct: true },
      { text: "C. Use individual licenses per machine", correct: false },
      { text: "D. Conduct daily external audits", correct: false },
      { text: "E. Transition to open-source software", correct: false },
    ],
  },
  {
    question: "An organization needs a licensing model for multiple installations with concurrent use. Which is the best option?",
    answers: [
      { text: "A. Individual licenses", correct: false },
      { text: "B. Floating licenses", correct: true },
      { text: "C. Stand-alone licensing", correct: false },
      { text: "D. Per-use licenses", correct: false },
      { text: "E. OEM licenses", correct: false },
    ],
  },
  {
    question: "A developer modifies open-source software and redistributes it. What must they include in their distribution?",
    answers: [
      { text: "A. Proprietary license agreement", correct: false },
      { text: "B. EULA compliance verification", correct: false },
      { text: "C. Modified source code", correct: true },
      { text: "D. Volume activation key", correct: false },
      { text: "E. User warranty details", correct: false },
    ],
  },
  {
    question: "A small business purchases software for a client/server environment. What is the primary consideration for licensing?",
    answers: [
      { text: "A. Volume discounts", correct: false },
      { text: "B. CAL requirements", correct: true },
      { text: "C. Activation thresholds", correct: false },
      { text: "D. Reverse engineering permissions", correct: false },
      { text: "E. Maintenance programs", correct: false },
    ],
  },
  {
    question: "A company discovers non-compliance during an internal audit. Which document is essential for rectifying the issue?",
    answers: [
      { text: "A. Proprietary source code", correct: false },
      { text: "B. License agreement and invoice", correct: true },
      { text: "C. Software warranty", correct: false },
      { text: "D. Activation key certificate", correct: false },
      { text: "E. GNU License documentation", correct: false },
    ],
  },
  {
    question: "Which licensing strategy is most appropriate for a university installing software on hundreds of computers?",
    answers: [
      { text: "A. Floating licenses", correct: false },
      { text: "B. OEM licenses", correct: false },
      { text: "C. Volume licensing", correct: true },
      { text: "D. Per-connection licenses", correct: false },
      { text: "E. Proprietary licenses", correct: false },
    ],
  },
  {
    question: "An organization uses open-source software for internal projects. What can they legally do with the software?",
    answers: [
      { text: "A. Restrict its usage within the company", correct: false },
      { text: "B. Redistribute it without including source code", correct: false },
      { text: "C. Modify it for internal use", correct: true },
      { text: "D. Resell it with proprietary restrictions", correct: false },
      { text: "E. Remove all copyright attributions", correct: false },
    ],
  },
  {
    question: "Open-source licenses always transfer the ownership of copyright to the end-user.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "Software audits can be conducted by the software vendor or a third-party organization.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "Volume licensing does not require software activation in modern systems.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "A floating license allows concurrent software usage regardless of the number of installations.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false }
    ]
  },
  {
    question: "Reverse engineering is explicitly permitted under most proprietary software licenses.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true }
    ]
  },
  {
    question: "What is a key advantage of stand-alone licensing?",
    answers: [
      { text: "A. Reduced installation complexity", correct: true },
      { text: "B. Concurrent usage without limitations", correct: false },
      { text: "C. Licensing tied to multiple machines", correct: false },
      { text: "D. Increased server-client compatibility", correct: false },
      { text: "E. Unlimited user access", correct: false }
    ]
  },
  {
    question: "Which organization focuses on anti-piracy and includes companies like Microsoft and Adobe?",
    answers: [
      { text: "A. GNU Project", correct: false },
      { text: "B. Business Software Alliance (BSA)", correct: true },
      { text: "C. Software & Information Industry Association (SIIA)", correct: false },
      { text: "D. Free Software Foundation", correct: false },
      { text: "E. Apache Software Foundation", correct: false }
    ]
  },
  {
    question: "What does a software maintenance program typically provide?",
    answers: [
      { text: "A. Access to proprietary source code", correct: false },
      { text: "B. Security fixes and functionality upgrades", correct: true },
      { text: "C. Additional CALs for free", correct: false },
      { text: "D. Unlimited concurrent usage", correct: false },
      { text: "E. Perpetual software licenses", correct: false }
    ]
  },
  {
    question: "Which licensing model is governed by the number of concurrent server connections?",
    answers: [
      { text: "A. Client Access License (CAL)", correct: false },
      { text: "B. Per-connection license", correct: true },
      { text: "C. Volume licensing", correct: false },
      { text: "D. Stand-alone licensing", correct: false },
      { text: "E. Floating license", correct: false }
    ]
  },
  {
    question: "What action can result in monetary and legal liability for a company?",
    answers: [
      { text: "A. Delaying software updates", correct: false },
      { text: "B. Non-compliance in software audits", correct: true },
      { text: "C. Using open-source licenses", correct: false },
      { text: "D. Switching from proprietary to open-source models", correct: false },
      { text: "E. Restricting software access to employees", correct: false }
    ]
  },
  {
    question: "Which licensing strategy is most appropriate for a university installing software on hundreds of computers?",
    answers: [
      { text: "A. Floating licenses", correct: false },
      { text: "B. OEM licenses", correct: false },
      { text: "C. Volume licensing", correct: true },
      { text: "D. Per-connection licenses", correct: false },
      { text: "E. Proprietary licenses", correct: false }
    ]
  },
  {
    question: "What is the purpose of activation in volume licensing?",
    answers: [
      { text: "A. To reduce installation time", correct: false },
      { text: "B. To enforce compliance and prevent piracy", correct: true },
      { text: "C. To allow unlimited installations", correct: false },
      { text: "D. To simplify license management", correct: false },
      { text: "E. To avoid the need for EULAs", correct: false },
    ],
  },
  {
    question: "Which of the following is an example of a software deployment-based licensing type?",
    answers: [
      { text: "A. Perpetual licensing", correct: false },
      { text: "B. Volume licensing", correct: false },
      { text: "C. Stand-alone licensing", correct: true },
      { text: "D. Open-source licensing", correct: false },
      { text: "E. Annual licensing", correct: false },
    ],
  },
  {
    question: "What is required to activate software in a KMS environment?",
    answers: [
      { text: "A. CAL agreement", correct: false },
      { text: "B. License agreement with invoice", correct: false },
      { text: "C. Minimum number of clients registering with KMS host", correct: true },
      { text: "D. Open-source modification approval", correct: false },
      { text: "E. Floating license", correct: false },
    ],
  },
  {
    question: "What does the GNU General Public License (GPL) require for redistribution?",
    answers: [
      { text: "A. No restrictions on modification", correct: false },
      { text: "B. Modified source code must remain open", correct: true },
      { text: "C. No liability for users", correct: false },
      { text: "D. Limitation to non-commercial use", correct: false },
      { text: "E. Enforced volume activation", correct: false },
    ],
  },
  {
    question: "Which type of software audit can result in criminal liability?",
    answers: [
      { text: "A. Internal audit", correct: false },
      { text: "B. Vendor-conducted audit", correct: false },
      { text: "C. Third-party audit", correct: false },
      { text: "D. Forcibly conducted audit by law enforcement", correct: true },
      { text: "E. Voluntary external audit", correct: false },
    ],
  },
  {
    question: "Stand-alone licensing enforces compliance on a per-machine basis.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "A perpetual license must be renewed annually to remain valid.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Key Management Services (KMS) ensure activation thresholds are met for volume licenses.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Open-source licensing prohibits modification of the source code.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Non-compliance with licensing terms can lead to termination of the software agreement.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "A company uses floating licenses for a design tool. What would happen if all licenses are in use when a new user tries to access the software?",
    answers: [
      { text: "A. The user is granted temporary access.", correct: false },
      { text: "B. The user must wait until a license becomes available.", correct: true },
      { text: "C. The system automatically purchases an additional license.", correct: false },
      { text: "D. The user receives unrestricted access to the tool.", correct: false },
      { text: "E. The software disables for all users.", correct: false },
    ],
  },
  {
    question: "Your organization is evaluating switching to open-source software. What is a key advantage of this move?",
    answers: [
      { text: "A. No need for EULA acceptance", correct: false },
      { text: "B. Lower total cost of ownership (TCO)", correct: true },
      { text: "C. Unlimited liability protection", correct: false },
      { text: "D. Enforced CAL compliance", correct: false },
      { text: "E. Increased hardware integration", correct: false },
    ],
  },
  {
    question: "A small business discovers outdated licenses during an audit. What immediate action should they take?",
    answers: [
      { text: "A. Request a third-party audit", correct: false },
      { text: "B. Purchase updated licenses to ensure compliance", correct: true },
      { text: "C. Reinstall software under volume licensing", correct: false },
      { text: "D. Ignore the findings as they are minor", correct: false },
      { text: "E. Transition to stand-alone licenses", correct: false },
    ],
  },
  {
    question: "An IT team is configuring a KMS host. What must they ensure before activation can occur?",
    answers: [
      { text: "A. All client machines are online simultaneously.", correct: false },
      { text: "B. The activation threshold is met.", correct: true },
      { text: "C. The server is upgraded to the latest operating system.", correct: false },
      { text: "D. A proprietary license is accepted on all machines.", correct: false },
      { text: "E. The EULA is digitally signed by every user.", correct: false },
    ],
  },
  {
    question: "A university IT department is implementing software on 1,000 machines. Which licensing strategy is most efficient?",
    answers: [
      { text: "A. Per-connection licensing", correct: false },
      { text: "B. Volume licensing", correct: true },
      { text: "C. Stand-alone licensing", correct: false },
      { text: "D. Open-source licensing", correct: false },
      { text: "E. Floating licenses", correct: false },
    ],
  },
  {
    question: "Proprietary software licenses often limit the rights granted under standard copyright law.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "The BSD license requires that modifications and redistributions include the original source code.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "A perpetual license allows indefinite use of software without expiration.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Client Access Licenses (CALs) are enforced on the server rather than the client.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Volume licenses can reduce costs for organizations with large-scale software deployments.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Software rental licensing is ideal for frequently used enterprise applications.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "KMS activation requires periodic communication between the client and the host.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "An EULA may legally prohibit reverse engineering of software.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Open-source licenses typically require redistribution to remain free of cost.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "Non-compliance with licensing agreements can result in legal penalties, including fines.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "What is one primary disadvantage of OEM licenses?",
    answers: [
      { text: "A. Higher upfront costs", correct: false },
      { text: "B. Limited use to specific hardware", correct: true },
      { text: "C. Lack of volume licensing discounts", correct: false },
      { text: "D. Mandatory client-server integration", correct: false },
      { text: "E. Open-source restrictions", correct: false },
    ],
  },
  {
    question: "Which license type is best suited for shared environments where users access software intermittently?",
    answers: [
      { text: "A. Per-connection licensing", correct: false },
      { text: "B. Annual licenses", correct: false },
      { text: "C. Floating licenses", correct: true },
      { text: "D. Stand-alone licenses", correct: false },
      { text: "E. OEM licenses", correct: false },
    ],
  },
  {
    question: "In deployment-based licensing, what determines licensing requirements?",
    answers: [
      { text: "A. The frequency of software usage", correct: false },
      { text: "B. The number of servers", correct: false },
      { text: "C. The method of software installation", correct: true },
      { text: "D. The total number of end-users", correct: false },
      { text: "E. The duration of the license agreement", correct: false },
    ],
  },
  {
    question: "Which organization is associated with the slogan “Don’t Copy That Floppy”?",
    answers: [
      { text: "A. Business Software Alliance (BSA)", correct: false },
      { text: "B. GNU Project", correct: false },
      { text: "C. Software & Information Industry Association (SIIA)", correct: true },
      { text: "D. Open Source Initiative", correct: false },
      { text: "E. Free Software Foundation", correct: false },
    ],
  },
  {
    question: "Which is a characteristic of time-based licensing models?",
    answers: [
      { text: "A. Unlimited redistribution rights", correct: false },
      { text: "B. Tied to the duration of use", correct: true },
      { text: "C. Requires CAL enforcement", correct: false },
      { text: "D. Focused on server-based environments", correct: false },
      { text: "E. Includes no expiration date", correct: false },
    ],
  },
  {
    question: "Software maintenance programs are optional add-ons to software licenses.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Proprietary licenses often prohibit sharing software with third parties.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Open-source licenses always grant ownership of the copyright to the user.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "CALs are required for each client accessing a server-based application.",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
    ],
  },
  {
    question: "Per-use licenses are cost-effective for frequently used enterprise applications.",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
  },
  {
    question: "What is one key feature of volume licensing?",
    answers: [
      { text: "A. Allows installation on a single machine only", correct: false },
      { text: "B. Requires unique activation for each installation", correct: false },
      { text: "C. Utilizes a single key for multiple installations", correct: true },
      { text: "D. Mandates compliance with open-source guidelines", correct: false },
      { text: "E. Reduces client-server integration costs", correct: false },
    ],
  },
  {
    question: "Which type of licensing ensures the software is only accessible during a specific time frame?",
    answers: [
      { text: "A. Open-source licensing", correct: false },
      { text: "B. Perpetual licensing", correct: false },
      { text: "C. Annual licensing", correct: true },
      { text: "D. Deployment-based licensing", correct: false },
      { text: "E. OEM licensing", correct: false },
    ],
  },
  {
    question: "Which of the following must occur for KMS activation to be successful?",
    answers: [
      { text: "A. EULA acceptance by all users", correct: false },
      { text: "B. Minimum number of client registrations with the host", correct: true },
      { text: "C. Redistribution of the activation key", correct: false },
      { text: "D. Deployment on a stand-alone machine", correct: false },
      { text: "E. Reverse engineering of the activation process", correct: false },
    ],
  },
  {
    question: "What is the purpose of an external software audit?",
    answers: [
      { text: "A. To enforce reverse engineering restrictions", correct: false },
      { text: "B. To identify and resolve licensing non-compliance", correct: true },
      { text: "C. To validate the source code of open-source software", correct: false },
      { text: "D. To distribute CALs to end-users", correct: false },
      { text: "E. To increase the activation threshold of volume licenses", correct: false },
    ],
  },
  {
    question: "Which license model provides unrestricted access to modify and redistribute the software?",
    answers: [
      { text: "A. Proprietary licensing", correct: false },
      { text: "B. Stand-alone licensing", correct: false },
      { text: "C. Open-source licensing", correct: true },
      { text: "D. Volume licensing", correct: false },
      { text: "E. Deployment-based licensing", correct: false },
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
