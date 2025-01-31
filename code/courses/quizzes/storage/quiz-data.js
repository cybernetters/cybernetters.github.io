const questionBank = [
  {
    "question": "What is the primary difference between NAS and SAN?",
    "answers": [
      { "text": "SAN requires dedicated hardware, while NAS does not.", "correct": true },
      { "text": "NAS is block-level storage, while SAN is file-level storage.", "correct": false },
      { "text": "SAN uses Ethernet, while NAS uses Fibre Channel.", "correct": false },
      { "text": "NAS devices appear as blank drives, while SAN devices appear as shares.", "correct": false },
      { "text": "SAN cannot be used in data centers.", "correct": false }
    ]
  },
  {
    "question": "Which RAID level provides fault tolerance by mirroring data across drives?",
    "answers": [
      { "text": "RAID 0", "correct": false },
      { "text": "RAID 1", "correct": true },
      { "text": "RAID 5", "correct": false },
      { "text": "RAID 10", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What is a logical drive or partition presented over a network in an iSCSI configuration called?",
    "answers": [
      { "text": "LBA", "correct": false },
      { "text": "IQN", "correct": false },
      { "text": "LUN", "correct": true },
      { "text": "CHS", "correct": false },
      { "text": "EUI", "correct": false }
    ]
  },
  {
    "question": "Which of the following is a feature of NTFS?",
    "answers": [
      { "text": "No journaling", "correct": false },
      { "text": "File size limit of 4GB", "correct": false },
      { "text": "Supports both share and file system permissions", "correct": true },
      { "text": "Cannot be used in Windows environments", "correct": false },
      { "text": "Limited to FAT32 volumes", "correct": false }
    ]
  },
  {
    "question": "What is the primary advantage of SSDs over traditional magnetic hard drives?",
    "answers": [
      { "text": "Larger storage capacity", "correct": false },
      { "text": "Lower power requirements", "correct": false },
      { "text": "Fast seek times", "correct": true },
      { "text": "Improved wear leveling", "correct": false },
      { "text": "Reduced costs", "correct": false }
    ]
  },
  {
    "question": "Which protocol is typically used for SANs?",
    "answers": [
      { "text": "TCP/IP", "correct": false },
      { "text": "SMB/CIFS", "correct": false },
      { "text": "iSCSI", "correct": true },
      { "text": "NFS", "correct": false },
      { "text": "HTTP", "correct": false }
    ]
  },
  {
    "question": "What is the function of the Master Boot Record (MBR)?",
    "answers": [
      { "text": "Stores the file system information", "correct": false },
      { "text": "Logs changes to a journal for file stability", "correct": false },
      { "text": "Identifies the active, bootable partition", "correct": true },
      { "text": "Encrypts the drive for security", "correct": false },
      { "text": "Stores application data", "correct": false }
    ]
  },
  {
    "question": "Which RAID level combines striping and mirroring for fault tolerance and increased performance?",
    "answers": [
      { "text": "RAID 0", "correct": false },
      { "text": "RAID 1", "correct": false },
      { "text": "RAID 5", "correct": false },
      { "text": "RAID 10", "correct": true },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What type of partitioning allows dynamic resizing and spanning across multiple disks?",
    "answers": [
      { "text": "Basic partitioning", "correct": false },
      { "text": "Logical partitioning", "correct": false },
      { "text": "Dynamic partitioning", "correct": true },
      { "text": "Primary partitioning", "correct": false },
      { "text": "Static partitioning", "correct": false }
    ]
  },
  {
    "question": "What is the smallest physical storage unit on a disk?",
    "answers": [
      { "text": "Track", "correct": false },
      { "text": "Sector", "correct": true },
      { "text": "Cluster", "correct": false },
      { "text": "Cylinder", "correct": false },
      { "text": "Partition", "correct": false }
    ]
  },
  {
    "question": "Which Windows-supported file system provides journaling and supports large file sizes?",
    "answers": [
      { "text": "FAT32", "correct": false },
      { "text": "NTFS", "correct": true },
      { "text": "FAT16", "correct": false },
      { "text": "exFAT", "correct": false },
      { "text": "CDFS", "correct": false }
    ]
  },
  {
    "question": "What does a cluster in a file system contain?",
    "answers": [
      { "text": "A single sector", "correct": false },
      { "text": "Multiple sectors", "correct": true },
      { "text": "Only metadata", "correct": false },
      { "text": "Multiple tracks", "correct": false },
      { "text": "Only one file type", "correct": false }
    ]
  },
  {
    "question": "What is a disadvantage of hybrid drives?",
    "answers": [
      { "text": "High power consumption", "correct": false },
      { "text": "Only SSD is used for data storage", "correct": false },
      { "text": "No improvement for non-cached files", "correct": true },
      { "text": "Expensive compared to pure SSDs", "correct": false },
      { "text": "No support for RAID configurations", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of journaling in a file system?",
    "answers": [
      { "text": "To reduce fragmentation", "correct": false },
      { "text": "To log changes for recovery after crashes", "correct": true },
      { "text": "To encrypt data", "correct": false },
      { "text": "To allocate unused space", "correct": false },
      { "text": "To compress files", "correct": false }
    ]
  },
  {
    "question": "Which technology is commonly used for Network Attached Storage (NAS)?",
    "answers": [
      { "text": "iSCSI", "correct": false },
      { "text": "Fibre Channel", "correct": false },
      { "text": "SMB/CIFS", "correct": true },
      { "text": "LUN", "correct": false },
      { "text": "RAID 10", "correct": false }
    ]
  },
  {
    "question": "Which of the following describes logical block addressing (LBA)?",
    "answers": [
      { "text": "A method to partition a disk", "correct": false },
      { "text": "Addressing sectors in a linear stream", "correct": true },
      { "text": "A RAID 5 parity calculation", "correct": false },
      { "text": "Formatting clusters for file systems", "correct": false },
      { "text": "Managing boot records", "correct": false }
    ]
  },
  {
    "question": "What is the maximum number of primary partitions that can exist on a basic disk?",
    "answers": [
      { "text": "2", "correct": false },
      { "text": "3", "correct": false },
      { "text": "4", "correct": true },
      { "text": "5", "correct": false },
      { "text": "Unlimited", "correct": false }
    ]
  },
  {
    "question": "What is a benefit of RAID 5?",
    "answers": [
      { "text": "No redundancy", "correct": false },
      { "text": "Fault tolerance using parity data", "correct": true },
      { "text": "Mirroring for data duplication", "correct": false },
      { "text": "Requires only two drives", "correct": false },
      { "text": "No performance increase", "correct": false }
    ]
  },
  {
    "question": "Which partition is used to reduce fragmentation of the swap file in Windows?",
    "answers": [
      { "text": "Data partition", "correct": false },
      { "text": "System partition", "correct": false },
      { "text": "Swap partition", "correct": true },
      { "text": "Extended partition", "correct": false },
      { "text": "Boot partition", "correct": false }
    ]
  },
  {
    "question": "What is a key limitation of the FAT32 file system?",
    "answers": [
      { "text": "Lack of compatibility with Windows", "correct": false },
      { "text": "No support for large files beyond 4GB", "correct": true },
      { "text": "Inability to format partitions", "correct": false },
      { "text": "Lack of security features", "correct": false },
      { "text": "Incompatibility with USB drives", "correct": false }
    ]
  },
  {
    "question": "File systems organize and store files in a hierarchy.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Dynamic disks do not support spanned volumes.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "NTFS does not provide journaling capabilities.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Logical block addressing begins numbering at 1.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A cluster can only store one file.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Solid-state drives use moving parts to improve speed.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Network-attached storage requires dedicated hardware.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Parity in RAID 5 allows for fault tolerance.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "MBR partitioning supports unlimited primary partitions.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A sector typically contains 512 bytes of data.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The system partition in Windows contains boot files.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "RAID 0 provides redundancy for fault tolerance.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "A volume can span multiple disks in dynamic partitioning.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "iSCSI uses TCP/IP as its transport protocol.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Journaling in file systems reduces the risk of corruption.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Fibre Channel is typically used for NAS.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "RAID 1 increases performance by striping data.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The Master Boot Record is a logical section of the disk.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The NTFS file system is compatible with Linux without additional drivers.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Extended partitions can contain logical drives.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A client experiences data loss after a disk failure. Which RAID configuration should they use to prevent this in the future?",
    "answers": [
      { "text": "RAID 0", "correct": false },
      { "text": "RAID 1", "correct": false },
      { "text": "RAID 10", "correct": false },
      { "text": "RAID 5", "correct": true },
      { "text": "A or D", "correct": false }
    ]
  },
  {
    "question": "If a company wants to increase storage performance and fault tolerance, which RAID configuration should they select?",
    "answers": [
      { "text": "RAID 0", "correct": false },
      { "text": "RAID 1", "correct": false },
      { "text": "RAID 5", "correct": false },
      { "text": "RAID 10", "correct": true },
      { "text": "RAID 1+5", "correct": false }
    ]
  },
  {
    "question": "A user needs to store a 10GB file. Which file system would be suitable?",
    "answers": [
      { "text": "FAT16", "correct": false },
      { "text": "FAT32", "correct": false },
      { "text": "NTFS", "correct": true },
      { "text": "CDFS", "correct": false },
      { "text": "UDF", "correct": false }
    ]
  },
  {
    "question": "A business wants network storage that integrates easily with existing Ethernet networks. Which solution should they choose?",
    "answers": [
      { "text": "SAN", "correct": false },
      { "text": "NAS", "correct": true },
      { "text": "iSCSI", "correct": false },
      { "text": "Fibre Channel", "correct": false },
      { "text": "Hybrid RAID", "correct": false }
    ]
  },
  {
    "question": "A power outage occurs during file write operations. Which feature can prevent data corruption?",
    "answers": [
      { "text": "Dynamic partitioning", "correct": false },
      { "text": "Journaling file systems", "correct": true },
      { "text": "RAID 0", "correct": false },
      { "text": "Logical volumes", "correct": false },
      { "text": "FAT32", "correct": false }
    ]
  },
  {
    "question": "A Windows system administrator needs to set up a partition for OS boot files. Which partition type should they configure?",
    "answers": [
      { "text": "Swap partition", "correct": false },
      { "text": "Extended partition", "correct": false },
      { "text": "Primary partition", "correct": true },
      { "text": "Logical drive", "correct": false },
      { "text": "Data partition", "correct": false }
    ]
  },
  {
    "question": "A developer needs fast random access to frequently used data. Which storage option is optimal?",
    "answers": [
      { "text": "Hybrid drive", "correct": false },
      { "text": "SSD", "correct": true },
      { "text": "HDD", "correct": false },
      { "text": "RAID 5", "correct": false },
      { "text": "NAS", "correct": false }
    ]
  },
  {
    "question": "A server requires scalable and high-speed storage. Which technology should be used?",
    "answers": [
      { "text": "SMB", "correct": false },
      { "text": "NAS", "correct": false },
      { "text": "SAN", "correct": true },
      { "text": "iSCSI", "correct": false },
      { "text": "NTFS", "correct": false }
    ]
  },
  {
    "question": "A user finds their file transfers are slow over the network. Which feature of iSCSI could improve this?",
    "answers": [
      { "text": "Dynamic resizing", "correct": false },
      { "text": "Dedicated SAN switch", "correct": true },
      { "text": "RAID 1 mirroring", "correct": false },
      { "text": "LUN enumeration", "correct": false },
      { "text": "UDF file systems", "correct": false }
    ]
  },
  {
    "question": "If an application requires fixed-length data storage, which format should be used?",
    "answers": [
      { "text": "FAT32", "correct": false },
      { "text": "File system", "correct": false },
      { "text": "Record/Page/Block systems", "correct": true },
      { "text": "NTFS", "correct": false },
      { "text": "CDFS", "correct": false }
    ]
  },
  {
    "question": "Which of the following is a benefit of dynamic disks in Windows?",
    "answers": [
      { "text": "Only allows up to four primary partitions", "correct": false },
      { "text": "Supports spanned and striped volumes", "correct": true },
      { "text": "Limited to basic volumes only", "correct": false },
      { "text": "Requires manual file system creation", "correct": false },
      { "text": "Cannot be used with RAID configurations", "correct": false }
    ]
  },
  {
    "question": "What is the function of the Master Boot Record (MBR)?",
    "answers": [
      { "text": "Provides encryption for the disk", "correct": false },
      { "text": "Logs intended file system changes", "correct": false },
      { "text": "Identifies the bootable partition and loads the OS", "correct": true },
      { "text": "Allocates unused disk space", "correct": false },
      { "text": "Acts as a file system for organizing directories", "correct": false }
    ]
  },
  {
    "question": "Which RAID level offers fault tolerance by duplicating data across drives?",
    "answers": [
      { "text": "RAID 0", "correct": false },
      { "text": "RAID 1", "correct": true },
      { "text": "RAID 5", "correct": false },
      { "text": "RAID 10", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What is the smallest physical unit of storage on a disk?",
    "answers": [
      { "text": "Track", "correct": false },
      { "text": "Sector", "correct": true },
      { "text": "Cluster", "correct": false },
      { "text": "Partition", "correct": false },
      { "text": "Cylinder", "correct": false }
    ]
  },
  {
    "question": "Which file system supports large file sizes and journaling in Windows?",
    "answers": [
      { "text": "FAT16", "correct": false },
      { "text": "FAT32", "correct": false },
      { "text": "NTFS", "correct": true },
      { "text": "CDFS", "correct": false },
      { "text": "exFAT", "correct": false }
    ]
  },
  {
    "question": "What is the primary advantage of using SSDs over HDDs?",
    "answers": [
      { "text": "Lower cost per GB", "correct": false },
      { "text": "Increased storage capacity", "correct": false },
      { "text": "Faster access times and no moving parts", "correct": true },
      { "text": "Improved wear leveling", "correct": false },
      { "text": "Reduced lifespan compared to HDDs", "correct": false }
    ]
  },
  {
    "question": "Which technology is most commonly used for SAN implementations?",
    "answers": [
      { "text": "Fibre Channel", "correct": true },
      { "text": "SMB/CIFS", "correct": false },
      { "text": "NTFS", "correct": false },
      { "text": "UDF", "correct": false },
      { "text": "CDFS", "correct": false }
    ]
  },
  {
    "question": "Which RAID configuration combines striping with parity for fault tolerance and performance?",
    "answers": [
      { "text": "RAID 0", "correct": false },
      { "text": "RAID 1", "correct": false },
      { "text": "RAID 5", "correct": true },
      { "text": "RAID 10", "correct": false },
      { "text": "RAID 1+5", "correct": false }
    ]
  },
  {
    "question": "Which partition type in Windows is used to house the swap file to reduce fragmentation?",
    "answers": [
      { "text": "Primary partition", "correct": false },
      { "text": "Extended partition", "correct": false },
      { "text": "Swap partition", "correct": true },
      { "text": "System partition", "correct": false },
      { "text": "Data partition", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of journaling in file systems?",
    "answers": [
      { "text": "To prevent disk failures", "correct": false },
      { "text": "To log file system changes for recovery", "correct": true },
      { "text": "To reduce power consumption in storage devices", "correct": false },
      { "text": "To enable multiple file formats on one partition", "correct": false },
      { "text": "To optimize disk usage for small files", "correct": false }
    ]
  },
  {
    "question": "Dynamic volumes can span across multiple physical disks.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "RAID 0 provides data redundancy to protect against disk failures.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "NTFS supports both share and file system-level permissions.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Logical Block Addressing (LBA) addresses sectors as a continuous linear stream.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A cluster in a file system can only contain one file.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Hybrid drives provide the performance of SSDs for all files stored on the device.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "iSCSI uses TCP/IP for communication and operates at the OSI Session layer.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "NAS traffic is typically shared with other network traffic, making it less suited for real-time applications.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "In Windows, FAT32 supports files larger than 4GB.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Journaling in file systems ensures that changes are completed even after a crash or power loss.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Which RAID configuration provides the highest fault tolerance with minimal performance impact?",
    "answers": [
      { "text": "RAID 0", "correct": false },
      { "text": "RAID 1", "correct": true },
      { "text": "RAID 5", "correct": false },
      { "text": "RAID 10", "correct": false },
      { "text": "RAID 6", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of Logical Block Addressing (LBA)?",
    "answers": [
      { "text": "To allocate sectors for dynamic partitions", "correct": false },
      { "text": "To enable continuous linear addressing of disk sectors", "correct": true },
      { "text": "To improve file system journaling", "correct": false },
      { "text": "To manage RAID configurations", "correct": false },
      { "text": "To reduce data loss during power failures", "correct": false }
    ]
  },
  {
    "question": "What is a key limitation of FAT32 compared to NTFS?",
    "answers": [
      { "text": "Lack of support for journaling", "correct": true },
      { "text": "Inability to format partitions", "correct": false },
      { "text": "Incompatibility with USB drives", "correct": false },
      { "text": "No support for removable media", "correct": false },
      { "text": "No support for small files", "correct": false }
    ]
  },
  {
    "question": "Which interconnect is commonly used in high-performance systems and RAID arrays?",
    "answers": [
      { "text": "SATA", "correct": false },
      { "text": "SCSI", "correct": true },
      { "text": "IDE", "correct": false },
      { "text": "ATA", "correct": false },
      { "text": "USB", "correct": false }
    ]
  },
  {
    "question": "What type of RAID uses striping with parity to achieve redundancy and performance?",
    "answers": [
      { "text": "RAID 0", "correct": false },
      { "text": "RAID 1", "correct": false },
      { "text": "RAID 5", "correct": true },
      { "text": "RAID 10", "correct": false },
      { "text": "RAID 6", "correct": false }
    ]
  },
  {
    "question": "What does a partition in a storage device represent?",
    "answers": [
      { "text": "A single physical disk", "correct": false },
      { "text": "A contiguous collection of sectors", "correct": true },
      { "text": "A group of mirrored volumes", "correct": false },
      { "text": "An interconnect mechanism", "correct": false },
      { "text": "A journaling file system", "correct": false }
    ]
  },
  {
    "question": "Which file system is ideal for removable media with large file sizes?",
    "answers": [
      { "text": "FAT16", "correct": false },
      { "text": "NTFS", "correct": false },
      { "text": "exFAT", "correct": true },
      { "text": "CDFS", "correct": false },
      { "text": "UDF", "correct": false }
    ]
  },
  {
    "question": "What is the primary function of the system partition in Windows?",
    "answers": [
      { "text": "To store application data", "correct": false },
      { "text": "To manage file system permissions", "correct": false },
      { "text": "To house OS boot files", "correct": true },
      { "text": "To enable journaling", "correct": false },
      { "text": "To act as an extended partition", "correct": false }
    ]
  },
  {
    "question": "Which NAS protocol is commonly used for file sharing on Windows networks?",
    "answers": [
      { "text": "iSCSI", "correct": false },
      { "text": "NFS", "correct": false },
      { "text": "SMB/CIFS", "correct": true },
      { "text": "Fibre Channel", "correct": false },
      { "text": "NTFS", "correct": false }
    ]
  },
  {
    "question": "What is a disadvantage of software-based RAID?",
    "answers": [
      { "text": "Higher cost compared to hardware RAID", "correct": false },
      { "text": "Uses processor clock cycles and system memory", "correct": true },
      { "text": "Incompatibility with modern operating systems", "correct": false },
      { "text": "Limited fault tolerance capabilities", "correct": false },
      { "text": "Cannot create mirrored volumes", "correct": false }
    ]
  },
  {
    "question": "A journaling file system logs intended changes to the disk before they are applied.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "RAID 10 offers fault tolerance but does not improve performance.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "In Windows, a primary partition must be active to boot the operating system.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "File system security features include permissions and encryption.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Logical drives within an extended partition are a feature of basic disks.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  }
];
