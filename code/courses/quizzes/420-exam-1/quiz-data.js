const questionBank = [
  {
    "question": "What is the primary role of a Digital Evidence First Responder (DEFR)?",
    "answers": [
      { "text": "To analyze digital evidence", "correct": false },
      { "text": "To investigate cyber crimes", "correct": false },
      { "text": "To acquire and preserve digital evidence at an incident scene", "correct": true },
      { "text": "To testify in court as an expert witness", "correct": false }
    ]
  },
  {
    "question": "Which U.S. constitutional amendment protects individuals from unlawful search and seizure?",
    "answers": [
      { "text": "First Amendment", "correct": false },
      { "text": "Fourth Amendment", "correct": true },
      { "text": "Fifth Amendment", "correct": false },
      { "text": "Fourteenth Amendment", "correct": false }
    ]
  },
  {
    "question": "What type of acquisition is most commonly used for forensic investigations?",
    "answers": [
      { "text": "Sparse acquisition", "correct": false },
      { "text": "Logical acquisition", "correct": false },
      { "text": "Bit-stream imaging", "correct": true },
      { "text": "RAID acquisition", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of a write-blocker in digital forensics?",
    "answers": [
      { "text": "To prevent unauthorized access to digital evidence", "correct": false },
      { "text": "To ensure no data is written to the suspect drive during examination", "correct": true },
      { "text": "To block malware from modifying files", "correct": false },
      { "text": "To prevent file encryption during an investigation", "correct": false }
    ]
  },
  {
    "question": "The best evidence rule requires:",
    "answers": [
      { "text": "The original evidence to be presented in court", "correct": true },
      { "text": "A forensic copy of the evidence to be used instead of the original", "correct": false },
      { "text": "A suspect’s testimony for digital evidence to be valid", "correct": false },
      { "text": "Only court-approved software be used for analysis", "correct": false }
    ]
  },
  {
    "question": "What hashing algorithm is commonly used for verifying digital evidence integrity?",
    "answers": [
      { "text": "SHA-1", "correct": false },
      { "text": "MD5", "correct": false },
      { "text": "CRC-32", "correct": false },
      { "text": "Both A and B", "correct": true }
    ]
  },
  {
    "question": "The Federal Rules of Evidence (FRE) were enacted to:",
    "answers": [
      { "text": "Establish guidelines for handling digital evidence", "correct": false },
      { "text": "Standardize forensic software tools", "correct": false },
      { "text": "Ensure consistency in federal proceedings", "correct": true },
      { "text": "Prevent digital crimes", "correct": false }
    ]
  },
  {
    "question": "The plain view doctrine applies when:",
    "answers": [
      { "text": "Investigators are authorized to seize any evidence they find", "correct": false },
      { "text": "An officer lawfully present sees evidence in plain sight", "correct": true },
      { "text": "Search warrants are unnecessary for digital evidence", "correct": false },
      { "text": "Evidence is encrypted and cannot be accessed", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a category of digital evidence?",
    "answers": [
      { "text": "Computer-generated records", "correct": false },
      { "text": "Handwritten notes", "correct": true },
      { "text": "Computer-stored records", "correct": false },
      { "text": "Digital transaction logs", "correct": false }
    ]
  },
  {
    "question": "What type of evidence directly proves a suspect’s involvement in a crime?",
    "answers": [
      { "text": "Inculpatory evidence", "correct": true },
      { "text": "Exculpatory evidence", "correct": false },
      { "text": "Indirect evidence", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "The Fourth Amendment provides absolute protection against all types of searches and seizures.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A Digital Evidence Specialist (DES) is responsible for initial evidence collection.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The Chain of Custody ensures that evidence remains untampered from collection to court.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Forensic imaging involves making an exact copy of a suspect drive for analysis.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Digital evidence is always considered hearsay in court.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A suspect's unencrypted emails can be used as evidence in a forensic investigation.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "RAID 0 provides data redundancy and is used in forensic investigations for its reliability.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Write-blockers prevent a forensic examiner from accessing evidence files.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The business-record exception allows admissibility of digital records in court.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Computer forensics is only used in criminal investigations.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Which of the following is a fundamental requirement for evidence to be admissible in court?",
    "answers": [
      { "text": "Evidence must be encrypted", "correct": false },
      { "text": "Evidence must be modified before presentation", "correct": false },
      { "text": "Evidence must follow the chain of custody", "correct": true },
      { "text": "Evidence must be obtained without a warrant", "correct": false }
    ]
  },
  {
    "question": "What is the primary purpose of a forensic hash value?",
    "answers": [
      { "text": "To encrypt digital evidence", "correct": false },
      { "text": "To verify the integrity of digital evidence", "correct": true },
      { "text": "To make forensic copies smaller", "correct": false },
      { "text": "To modify the original evidence for analysis", "correct": false }
    ]
  },
  {
    "question": "Which forensic tool is specifically designed to analyze Windows file systems?",
    "answers": [
      { "text": "FTK Imager", "correct": true },
      { "text": "Linux dd command", "correct": false },
      { "text": "Wireshark", "correct": false },
      { "text": "Netcat", "correct": false }
    ]
  },
  {
    "question": "What is the main difference between public-sector and private-sector investigations?",
    "answers": [
      { "text": "Public-sector investigations deal with corporate policy violations", "correct": false },
      { "text": "Private-sector investigations are subject to constitutional laws", "correct": false },
      { "text": "Public-sector investigations involve law enforcement and criminal cases", "correct": true },
      { "text": "Private-sector investigations always lead to criminal prosecution", "correct": false }
    ]
  },
  {
    "question": "Which rule allows business records to be admitted into court as evidence?",
    "answers": [
      { "text": "Fourth Amendment", "correct": false },
      { "text": "Best Evidence Rule", "correct": false },
      { "text": "Business Record Exception", "correct": true },
      { "text": "Plain View Doctrine", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT considered a forensic imaging method?",
    "answers": [
      { "text": "Disk-to-image copy", "correct": false },
      { "text": "Logical disk-to-disk copy", "correct": false },
      { "text": "File copy and paste", "correct": true },
      { "text": "Sparse acquisition", "correct": false }
    ]
  },
  {
    "question": "Which of the following is a common risk when conducting a forensic analysis on live systems?",
    "answers": [
      { "text": "Overwriting evidence", "correct": false },
      { "text": "Legal issues due to improper search warrants", "correct": false },
      { "text": "Changes in volatile memory (RAM)", "correct": false },
      { "text": "All of the above", "correct": true }
    ]
  },
  {
    "question": "Which legal case established that police need an additional warrant when searching computers for different types of crimes?",
    "answers": [
      { "text": "Arizona v. Hicks", "correct": false },
      { "text": "United States v. Comprehensive Drug Testing", "correct": true },
      { "text": "State of Texas v. Anthony Granville", "correct": false },
      { "text": "Katz v. United States", "correct": false }
    ]
  },
  {
    "question": "Which type of forensic acquisition is best suited for recovering deleted files?",
    "answers": [
      { "text": "Logical acquisition", "correct": false },
      { "text": "Sparse acquisition", "correct": false },
      { "text": "Live acquisition", "correct": false },
      { "text": "Disk-to-image acquisition", "correct": true }
    ]
  },
  {
    "question": "In forensic investigations, which of the following is a primary concern when handling RAID storage systems?",
    "answers": [
      { "text": "The number of files stored", "correct": false },
      { "text": "The size and configuration of the RAID system", "correct": true },
      { "text": "The brand of the hard drives", "correct": false },
      { "text": "The color of the storage devices", "correct": false }
    ]
  },
  {
    "question": "A forensic examiner can always use the plain view doctrine to seize evidence on a suspect’s computer.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Deleted files can sometimes be recovered even after they have been removed from the recycle bin.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A write-blocker prevents an investigator from accessing files on a suspect’s device.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Forensic imaging creates an exact bit-for-bit copy of a digital device for investigation.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Cloud storage complicates forensic investigations due to jurisdiction and accessibility issues.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  }
];