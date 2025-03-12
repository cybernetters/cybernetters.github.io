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
  },
  {
    "question": "What is the primary purpose of hexadecimal representation in digital forensics?",
    "answers": [
      { "text": "To encrypt data for forensic analysis", "correct": false },
      { "text": "To represent binary data in a human-readable format", "correct": true },
      { "text": "To compress forensic images", "correct": false },
      { "text": "To remove metadata from files", "correct": false }
    ]
  },
  {
    "question": "Which tool is commonly used for analyzing hex values in a forensic investigation?",
    "answers": [
      { "text": "FTK Imager", "correct": false },
      { "text": "Hex Workshop", "correct": true },
      { "text": "Wireshark", "correct": false },
      { "text": "EnCase", "correct": false }
    ]
  },
  {
    "question": "A forensic examiner analyzing a file in hex format notices the header '50 4B 03 04'. What type of file is this likely to be?",
    "answers": [
      { "text": "JPEG", "correct": false },
      { "text": "ZIP", "correct": true },
      { "text": "PDF", "correct": false },
      { "text": "DOCX", "correct": false }
    ]
  },
  {
    "question": "Which hashing algorithm is considered stronger for forensic validation due to lower collision rates?",
    "answers": [
      { "text": "MD5", "correct": false },
      { "text": "CRC-32", "correct": false },
      { "text": "SHA-256", "correct": true },
      { "text": "Base64", "correct": false }
    ]
  },
  {
    "question": "Why is hashing used in forensic investigations?",
    "answers": [
      { "text": "To compress large forensic images", "correct": false },
      { "text": "To compare evidence integrity before and after analysis", "correct": true },
      { "text": "To encrypt suspect drives", "correct": false },
      { "text": "To extract hidden files", "correct": false }
    ]
  },
  {
    "question": "Which forensic tool can be used to verify file integrity using hash values?",
    "answers": [
      { "text": "md5sum", "correct": false },
      { "text": "SHA256sum", "correct": false },
      { "text": "FTK Imager", "correct": false },
      { "text": "All of the above", "correct": true }
    ]
  },
  {
    "question": "What is a significant limitation of using MD5 hashing in digital forensics?",
    "answers": [
      { "text": "It cannot be used on Windows systems", "correct": false },
      { "text": "It is slow and inefficient", "correct": false },
      { "text": "It has known vulnerabilities to hash collisions", "correct": true },
      { "text": "It does not generate unique hash values", "correct": false }
    ]
  },
  {
    "question": "Which of the following forensic tools is most useful for analyzing network traffic for digital evidence?",
    "answers": [
      { "text": "Autopsy", "correct": false },
      { "text": "Wireshark", "correct": true },
      { "text": "FTK Imager", "correct": false },
      { "text": "X-Ways Forensics", "correct": false }
    ]
  },
  {
    "question": "When performing forensic analysis on a RAID system, which factor is most important?",
    "answers": [
      { "text": "The software used to create the RAID", "correct": false },
      { "text": "The number of hard drives in the RAID array", "correct": false },
      { "text": "The RAID configuration (RAID 0, RAID 1, etc.)", "correct": true },
      { "text": "The operating system of the forensic workstation", "correct": false }
    ]
  },
  {
    "question": "What is the primary purpose of the 'Bit-stream Image' technique in forensic acquisition?",
    "answers": [
      { "text": "To extract only user-created files", "correct": false },
      { "text": "To create a forensic copy that includes all data, including deleted files", "correct": true },
      { "text": "To convert all forensic data to a readable PDF format", "correct": false },
      { "text": "To compress forensic images to save space", "correct": false }
    ]
  },
  {
    "question": "Each file type has a unique hexadecimal signature that can be used to identify it.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The MD5 algorithm is immune to all forms of collision attacks.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A forensic hash of a file should remain the same unless the file has been altered.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "RAID 5 provides redundancy by distributing parity data across multiple disks.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Wireshark can be used to capture and analyze encrypted network traffic without decryption.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Which of the following is required before conducting a forensic search on a suspect's device in most criminal cases?",
    "answers": [
      { "text": "Verbal permission from the suspect", "correct": false },
      { "text": "A search warrant", "correct": true },
      { "text": "The suspect’s employer’s approval", "correct": false },
      { "text": "An open-source forensic tool", "correct": false }
    ]
  },
  {
    "question": "The Plain View Doctrine allows an investigator to seize evidence without a warrant under which condition?",
    "answers": [
      { "text": "The evidence is encrypted", "correct": false },
      { "text": "The investigator is lawfully present and the evidence is clearly visible", "correct": true },
      { "text": "The evidence is located in a locked cabinet", "correct": false },
      { "text": "The investigator suspects the evidence exists but has not yet found it", "correct": false }
    ]
  },
  {
    "question": "Which legal principle requires law enforcement to describe specifically what they are searching for and where they will search?",
    "answers": [
      { "text": "Exclusionary Rule", "correct": false },
      { "text": "Best Evidence Rule", "correct": false },
      { "text": "Particularity Requirement", "correct": true },
      { "text": "Fifth Amendment Protection", "correct": false }
    ]
  },
  {
    "question": "Which court case ruled that searching a suspect's digital files beyond the scope of a warrant violates the Fourth Amendment?",
    "answers": [
      { "text": "United States v. Comprehensive Drug Testing", "correct": true },
      { "text": "Arizona v. Hicks", "correct": false },
      { "text": "Miranda v. Arizona", "correct": false },
      { "text": "Katz v. United States", "correct": false }
    ]
  },
  {
    "question": "In digital forensics, how should an investigator handle data that is outside the scope of a search warrant?",
    "answers": [
      { "text": "Include it in the forensic report regardless", "correct": false },
      { "text": "Ignore it entirely", "correct": false },
      { "text": "Request an additional warrant before analyzing it", "correct": true },
      { "text": "Encrypt it to prevent unauthorized access", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a requirement for the Plain View Doctrine to apply?",
    "answers": [
      { "text": "The officer must have a legal right to be in the viewing area", "correct": false },
      { "text": "The evidence must be immediately apparent as illegal", "correct": false },
      { "text": "The officer must use advanced digital forensic tools to locate the evidence", "correct": true },
      { "text": "The officer must discover the evidence inadvertently", "correct": false }
    ]
  },
  {
    "question": "What should an investigator do if they encounter encrypted files while executing a search warrant?",
    "answers": [
      { "text": "Attempt to break the encryption immediately", "correct": false },
      { "text": "Ignore the files and move to unencrypted data", "correct": false },
      { "text": "Seize the files and request additional legal authorization to access them", "correct": true },
      { "text": "Copy the files but leave them on the original system", "correct": false }
    ]
  },
  {
    "question": "Which of the following is an example of exceeding the authority of a search warrant in a digital forensic investigation?",
    "answers": [
      { "text": "Searching for documents related to fraud when the warrant is for child exploitation evidence", "correct": true },
      { "text": "Finding evidence of an unrelated crime while searching within the permitted files", "correct": false },
      { "text": "Using forensic tools to create a bit-stream image of the suspect’s hard drive", "correct": false },
      { "text": "Maintaining the chain of custody for all collected evidence", "correct": false }
    ]
  },
  {
    "question": "Which of the following describes the proper handling of evidence in accordance with the chain of custody?",
    "answers": [
      { "text": "Keeping forensic evidence on a personal USB drive for convenience", "correct": false },
      { "text": "Logging every transfer of evidence from collection to analysis", "correct": true },
      { "text": "Allowing multiple unauthorized individuals to access the evidence", "correct": false },
      { "text": "Using cloud storage to share forensic evidence without encryption", "correct": false }
    ]
  },
  {
    "question": "What is the primary risk of violating the search scope in a forensic investigation?",
    "answers": [
      { "text": "The evidence becomes inadmissible in court", "correct": true },
      { "text": "The investigator can complete the search faster", "correct": false },
      { "text": "The suspect automatically becomes guilty", "correct": false },
      { "text": "The evidence is permanently deleted", "correct": false }
    ]
  },
  {
    "question": "The Plain View Doctrine allows an investigator to actively search for evidence that was not included in the warrant.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Digital evidence discovered outside the scope of a warrant can still be used in court under certain conditions.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Exclusionary Rule states that evidence obtained illegally cannot be used in court.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Fourth Amendment protects individuals from unreasonable searches and seizures, including digital searches.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "An investigator can seize a suspect’s laptop without a warrant if they believe it contains evidence of a crime.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Which of the following is a key feature of the NTFS file system?",
    "answers": [
      { "text": "It lacks file permissions", "correct": false },
      { "text": "It does not support file compression", "correct": false },
      { "text": "It includes a Master File Table (MFT)", "correct": true },
      { "text": "It does not support long filenames", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of the Master File Table (MFT) in NTFS?",
    "answers": [
      { "text": "To store the contents of all files", "correct": false },
      { "text": "To track file metadata and allocation details", "correct": true },
      { "text": "To limit user access to specific files", "correct": false },
      { "text": "To encrypt files automatically", "correct": false }
    ]
  },
  {
    "question": "Which NTFS attribute contains metadata about a file, such as its creation and modification times?",
    "answers": [
      { "text": "$DATA", "correct": false },
      { "text": "$STANDARD_INFORMATION", "correct": true },
      { "text": "$INDEX_ROOT", "correct": false },
      { "text": "$BITMAP", "correct": false }
    ]
  },
  {
    "question": "In NTFS, what does the $DATA attribute store?",
    "answers": [
      { "text": "File permissions", "correct": false },
      { "text": "File metadata", "correct": false },
      { "text": "The actual content of the file", "correct": true },
      { "text": "A list of all files in a directory", "correct": false }
    ]
  },
  {
    "question": "Which of the following NTFS file attributes tracks changes to a file, including creation and last modification timestamps?",
    "answers": [
      { "text": "$ATTRIBUTE_LIST", "correct": false },
      { "text": "$LOGGED_UTILITY_STREAM", "correct": false },
      { "text": "$STANDARD_INFORMATION", "correct": true },
      { "text": "$SECURITY_DESCRIPTOR", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT an advantage of NTFS over FAT32?",
    "answers": [
      { "text": "Support for larger file sizes", "correct": false },
      { "text": "Built-in file encryption", "correct": false },
      { "text": "Enhanced security permissions", "correct": false },
      { "text": "Compatibility with all operating systems", "correct": true }
    ]
  },
  {
    "question": "What happens when a file is deleted in NTFS?",
    "answers": [
      { "text": "The file's data is immediately erased from the disk", "correct": false },
      { "text": "The file is moved to a hidden system folder", "correct": false },
      { "text": "The MFT entry is marked as available, but data remains on the disk", "correct": true },
      { "text": "The file becomes encrypted and inaccessible", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of the $BITMAP attribute in NTFS?",
    "answers": [
      { "text": "Stores file timestamps", "correct": false },
      { "text": "Tracks clusters that are in use or available", "correct": true },
      { "text": "Holds security descriptors", "correct": false },
      { "text": "Stores alternate data streams", "correct": false }
    ]
  },
  {
    "question": "Which forensic tool is commonly used to analyze NTFS file system structures?",
    "answers": [
      { "text": "Wireshark", "correct": false },
      { "text": "EnCase", "correct": true },
      { "text": "FTK Imager", "correct": false },
      { "text": "Autopsy", "correct": false }
    ]
  },
  {
    "question": "What are Alternate Data Streams (ADS) in NTFS?",
    "answers": [
      { "text": "Additional hidden data attached to a file without appearing in its main content", "correct": true },
      { "text": "Encrypted backups of files", "correct": false },
      { "text": "Temporary files stored in system memory", "correct": false },
      { "text": "Special permissions for NTFS file access", "correct": false }
    ]
  },
  {
    "question": "NTFS stores metadata separately from the actual file content.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "When a file is deleted in NTFS, its data is immediately overwritten.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Alternate Data Streams (ADS) can be used to hide malicious code within files.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Master File Table (MFT) in NTFS contains entries for all files and directories on a volume.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "File timestamps in NTFS cannot be altered by users or programs.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "What does every MFT record in NTFS begin with?",
    "answers": [
      { "text": "FILE0", "correct": true },
      { "text": "NTFS_BOOT", "correct": false },
      { "text": "$DATA", "correct": false },
      { "text": "MFT_RECORD", "correct": false }
    ]
  },
  {
    "question": "In the MFT, what does the attribute 0x10 represent?",
    "answers": [
      { "text": "File data", "correct": false },
      { "text": "File metadata (Standard Information)", "correct": true },
      { "text": "File permissions", "correct": false },
      { "text": "Master boot record", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of attribute 0x30 in an MFT record?",
    "answers": [
      { "text": "Stores security descriptors", "correct": false },
      { "text": "Defines the NTFS volume name", "correct": false },
      { "text": "Contains the filename and related metadata", "correct": true },
      { "text": "Tracks disk errors", "correct": false }
    ]
  },
  {
    "question": "What does the attribute 0x40 indicate in an MFT record?",
    "answers": [
      { "text": "File ownership information", "correct": false },
      { "text": "Object ID for tracking purposes", "correct": true },
      { "text": "Storage location for the file's encryption keys", "correct": false },
      { "text": "Recovery log of deleted files", "correct": false }
    ]
  },
  {
    "question": "What is the significance of the 0x80 attribute in an MFT record?",
    "answers": [
      { "text": "It stores the actual file data", "correct": true },
      { "text": "It holds security descriptors for access control", "correct": false },
      { "text": "It marks a file as encrypted", "correct": false },
      { "text": "It indicates a deleted file", "correct": false }
    ]
  },
  {
    "question": "In NTFS, what does a 'resident' file mean?",
    "answers": [
      { "text": "A file whose data is stored directly within the MFT record", "correct": true },
      { "text": "A file that is stored in a different sector from its MFT entry", "correct": false },
      { "text": "A file stored in the NTFS $LOGFILE", "correct": false },
      { "text": "A file that has been compressed using NTFS compression", "correct": false }
    ]
  },
  {
    "question": "What does the length of attribute 0x10 indicate in an MFT record?",
    "answers": [
      { "text": "The size of the actual file data", "correct": false },
      { "text": "The number of attributes present in the record", "correct": false },
      { "text": "The total size of the Standard Information attribute", "correct": true },
      { "text": "The number of sectors occupied by the file", "correct": false }
    ]
  },
  {
    "question": "Which NTFS attribute is responsible for tracking security and access control settings?",
    "answers": [
      { "text": "$BITMAP", "correct": false },
      { "text": "$SECURITY_DESCRIPTOR", "correct": true },
      { "text": "$STANDARD_INFORMATION", "correct": false },
      { "text": "$DATA", "correct": false }
    ]
  },
  {
    "question": "In hex analysis of an MFT record, what does the 'resident flag' in attribute 0x80 indicate?",
    "answers": [
      { "text": "Whether the file is stored inside the MFT or externally", "correct": true },
      { "text": "If the file is encrypted", "correct": false },
      { "text": "Whether the file is a system file", "correct": false },
      { "text": "If the file has been accessed recently", "correct": false }
    ]
  },
  {
    "question": "Which of the following would NOT be found in an MFT record?",
    "answers": [
      { "text": "File timestamps", "correct": false },
      { "text": "File size", "correct": false },
      { "text": "The physical location of file clusters on disk", "correct": false },
      { "text": "The BIOS version of the system", "correct": true }
    ]
  },
  {
    "question": "A resident file in NTFS has its data stored directly within the MFT record.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The attribute 0x80 in an MFT record stores the filename of a file.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The Master File Table (MFT) keeps track of every file and directory in an NTFS volume.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The length of an attribute field in an MFT record always corresponds to the file size.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A deleted file's MFT entry is removed immediately upon deletion.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  }
];