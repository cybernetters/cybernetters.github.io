const questionBank = [
  {
    "question": "Which of the following best describes a Full Backup?",
    "answers": [
      { "text": "Backups only files modified since the last backup", "correct": false },
      { "text": "Uses the least media but requires multiple restores", "correct": false },
      { "text": "Backups all files, disregarding the archive bit", "correct": true },
      { "text": "Requires restoring the last full backup and incrementals", "correct": false },
      { "text": "Limited to only selective files", "correct": false }
    ]
  },
  {
    "question": "What is a primary advantage of Differential Backups over Incremental Backups?",
    "answers": [
      { "text": "Requires more media", "correct": false },
      { "text": "More difficult to restore", "correct": false },
      { "text": "Only the latest media set is required for restoration", "correct": true },
      { "text": "Involves restoring all incremental backups since the full backup", "correct": false },
      { "text": "Uses the least amount of media", "correct": false }
    ]
  },
  {
    "question": "Which media type is most commonly used for backups due to its speed and reliability?",
    "answers": [
      { "text": "Magnetic Tape", "correct": false },
      { "text": "Optical Storage", "correct": false },
      { "text": "Magnetic Disk", "correct": true },
      { "text": "Network Attached Storage", "correct": false },
      { "text": "Blu-Ray", "correct": false }
    ]
  },
  {
    "question": "The archive bit is primarily used to:",
    "answers": [
      { "text": "Indicate which files have been compressed", "correct": false },
      { "text": "Track files modified since the last backup", "correct": true },
      { "text": "Perform recovery processes faster", "correct": false },
      { "text": "Automatically encrypt backup data", "correct": false },
      { "text": "Create bootable recovery media", "correct": false }
    ]
  },
  {
    "question": "In a Grandfather-Father-Son (GFS) rotation method, the 'grandfather' is:",
    "answers": [
      { "text": "The first incremental backup in a cycle", "correct": false },
      { "text": "The oldest media set stored permanently", "correct": true },
      { "text": "The most recent differential backup", "correct": false },
      { "text": "The daily backup made by an administrator", "correct": false },
      { "text": "The full backup at the end of each week", "correct": false }
    ]
  },
  {
    "question": "What is the Mean Time Between Failure (MTBF)?",
    "answers": [
      { "text": "The average time for a backup to fail during operations", "correct": false },
      { "text": "The duration before a backup server fails", "correct": false },
      { "text": "The estimated time before hardware components fail", "correct": true },
      { "text": "The average restore time during recovery", "correct": false },
      { "text": "The time required to troubleshoot backup failures", "correct": false }
    ]
  },
  {
    "question": "A major downside of using Individual Drives for backups is:",
    "answers": [
      { "text": "Media is difficult to maintain", "correct": false },
      { "text": "Requires network bandwidth", "correct": false },
      { "text": "Risk of taking the server down if the subsystem fails", "correct": true },
      { "text": "Involves setting up multiple backup servers", "correct": false },
      { "text": "High cost and maintenance overhead", "correct": false }
    ]
  },
  {
    "question": "Which of the following backup types is also referred to as Level 0 Backup?",
    "answers": [
      { "text": "Incremental Backup", "correct": false },
      { "text": "Full Backup", "correct": true },
      { "text": "Differential Backup", "correct": false },
      { "text": "Custom Backup", "correct": false },
      { "text": "Network Backup", "correct": false }
    ]
  },
  {
    "question": "Which media type offers the best compression ratio with hardware compression?",
    "answers": [
      { "text": "Magnetic Disk", "correct": false },
      { "text": "Optical Storage", "correct": false },
      { "text": "Magnetic Tape", "correct": true },
      { "text": "Blu-Ray", "correct": false },
      { "text": "SSD", "correct": false }
    ]
  },
  {
    "question": "Why should backup media be rotated offsite?",
    "answers": [
      { "text": "Prevent physical wear of the media", "correct": false },
      { "text": "Minimize network congestion during backups", "correct": false },
      { "text": "Protect against theft, fire, or natural disaster", "correct": true },
      { "text": "Allow continuous backup operations", "correct": false },
      { "text": "Increase restore speeds in case of failure", "correct": false }
    ]
  },
  {
    "question": "Which backup media type supports random access rather than sequential access?",
    "answers": [
      { "text": "Magnetic Tape", "correct": false },
      { "text": "Optical Storage", "correct": true },
      { "text": "Cloud Storage", "correct": false },
      { "text": "Individual Drives", "correct": false },
      { "text": "WORM Media", "correct": false }
    ]
  },
  {
    "question": "The Windows Server Backup Tool can recover which of the following?",
    "answers": [
      { "text": "Files and Folders only", "correct": false },
      { "text": "Applications and Backup Catalogs only", "correct": false },
      { "text": "Volumes, Applications, and Files", "correct": true },
      { "text": "Operating Systems only", "correct": false },
      { "text": "Only configurations and logs", "correct": false }
    ]
  },
  {
    "question": "Which feature is unique to backups in Windows Server 2016/2019?",
    "answers": [
      { "text": "WORM-capable formats", "correct": false },
      { "text": "Full support for optical media backups", "correct": true },
      { "text": "Advanced backup configurations for Linux servers", "correct": false },
      { "text": "Automation using PowerShell only", "correct": false },
      { "text": "Limited restore capabilities", "correct": false }
    ]
  },
  {
    "question": "A Media Library used in backups includes:",
    "answers": [
      { "text": "Multiple servers dedicated to backup operations", "correct": false },
      { "text": "Robotic arms to automatically swap media", "correct": true },
      { "text": "Individual tape drives for sequential backups", "correct": false },
      { "text": "Encryption software to secure backups", "correct": false },
      { "text": "Network optimization tools", "correct": false }
    ]
  },
  {
    "question": "Compression ratios for hardware compression backups are typically:",
    "answers": [
      { "text": "1:1 to 1.1", "correct": false },
      { "text": "1.2 to 1.3", "correct": true },
      { "text": "2.0 to 2.5", "correct": false },
      { "text": "Variable depending on media type", "correct": false },
      { "text": "Not applicable to most backup systems", "correct": false }
    ]
  },
  {
    "question": "An advantage of Centralized Backups is:",
    "answers": [
      { "text": "Requires individual backups per server", "correct": false },
      { "text": "Adds load to resource servers", "correct": false },
      { "text": "Simplifies administration across multiple servers", "correct": true },
      { "text": "Eliminates the need for incremental backups", "correct": false },
      { "text": "Removes the need for encryption", "correct": false }
    ]
  },
  {
    "question": "Offsite media storage should prioritize:",
    "answers": [
      { "text": "Reducing costs for backup operations", "correct": false },
      { "text": "Storage in media-rated fireproof safes", "correct": true },
      { "text": "Only digital backups in cloud storage", "correct": false },
      { "text": "Using tape media exclusively", "correct": false },
      { "text": "Local encryption keys for faster recovery", "correct": false }
    ]
  },
  {
    "question": "What is a key characteristic of Incremental Backups?",
    "answers": [
      { "text": "Easy to restore with only the latest media", "correct": false },
      { "text": "Takes up the most media", "correct": false },
      { "text": "Backups all data files regardless of modification", "correct": false },
      { "text": "Requires all incrementals since the last full backup", "correct": true },
      { "text": "Does not depend on the archive bit", "correct": false }
    ]
  },
  {
    "question": "A backup plan should include periodic testing to:",
    "answers": [
      { "text": "Reduce hardware failures during backups", "correct": false },
      { "text": "Identify potential legal liabilities", "correct": false },
      { "text": "Ensure the integrity and usability of backups", "correct": true },
      { "text": "Minimize storage media costs", "correct": false },
      { "text": "Automate backup processes effectively", "correct": false }
    ]
  },
  {
    "question": "WORM media are primarily used for:",
    "answers": [
      { "text": "High-speed, random-access backups", "correct": false },
      { "text": "Temporary storage of sensitive data", "correct": false },
      { "text": "Write-once, permanent archival purposes", "correct": true },
      { "text": "Automatic incremental backups", "correct": false },
      { "text": "Dynamic data manipulation", "correct": false }
    ]
  },
  {
    "question": "A Differential Backup requires restoring all incremental backups since the last full backup.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Backups performed between 1:00 am and 5:00 am often minimize user disruptions.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Magnetic disks are slower than tapes for backups due to sequential access.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Offsite storage does not require encryption since it is physically protected.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Media libraries use robotic arms for efficient media swapping during backups.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Magnetic tape has a lower success rate for full data restores than magnetic disks.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "GFS rotation simplifies backups by eliminating differential backups.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "WORM media can be rewritten multiple times.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Incremental backups use the archive bit to identify changes.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Compression improves storage efficiency for tape backups.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Media-rated fireproof safes protect backup media from both fire and impact damage.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The Windows Server Backup tool allows full restoration of the operating system to different hardware.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Magnetic disks are becoming the most commonly used backup media due to their random access capabilities.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Grandfather backups in the GFS method are stored offsite for long-term archiving.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Compression ratios depend on the type of data being backed up.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Incremental backups require less media but are harder to restore compared to differential backups.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Optical storage is often used for off-site, long-term archival rather than routine backups.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The wbadmin command-line tool is part of the Windows Server Backup suite.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Network-attached disk storage for backups requires significant bandwidth but simplifies maintenance.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Backups of registry files ensure OS settings can be restored after system failure.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "You are tasked with creating a backup plan for a company with limited storage capacity. Which backup strategy would best balance efficiency and restorability?",
    "answers": [
      { "text": "Daily full backups", "correct": false },
      { "text": "Full backup followed by daily incremental backups", "correct": false },
      { "text": "Full backup followed by daily differential backups", "correct": true },
      { "text": "Custom backup with selective file inclusion", "correct": false },
      { "text": "Using only centralized backup solutions", "correct": false }
    ]
  },
  {
    "question": "A server crashes, and you need to restore data. The backup strategy uses full backups and incremental backups. Which steps should you follow?",
    "answers": [
      { "text": "Restore the most recent differential backup only", "correct": false },
      { "text": "Restore the last full backup and each incremental backup in sequence", "correct": true },
      { "text": "Use only the latest incremental backup", "correct": false },
      { "text": "Restore all backups, regardless of type, simultaneously", "correct": false },
      { "text": "Begin with the oldest incremental and restore forward", "correct": false }
    ]
  },
  {
    "question": "An organization uses magnetic tapes for backups but experiences slow recovery times. Which alternative would most improve performance while minimizing costs?",
    "answers": [
      { "text": "Optical storage", "correct": false },
      { "text": "Individual hard drives", "correct": false },
      { "text": "Network-attached magnetic disks", "correct": false },
      { "text": "Blu-Ray discs", "correct": false },
      { "text": "Magnetic disks with random access", "correct": true }
    ]
  },
  {
    "question": "A data center experiences a total server failure. Which feature of the Windows Server Backup tool ensures a complete system recovery?",
    "answers": [
      { "text": "Compression capability", "correct": false },
      { "text": "Volume Shadow Copy Service (VSS)", "correct": false },
      { "text": "wbadmin command-line tool", "correct": false },
      { "text": "Backup catalog recovery", "correct": true },
      { "text": "Automated incremental backups", "correct": false }
    ]
  },
  {
    "question": "Your organization requires secure offsite backups to prevent theft during transit. What feature is critical for the backup media?",
    "answers": [
      { "text": "Fast read/write speeds", "correct": false },
      { "text": "Encryption of the data", "correct": true },
      { "text": "High compression ratios", "correct": false },
      { "text": "Random access capability", "correct": false },
      { "text": "Robust WORM support", "correct": false }
    ]
  },
  {
    "question": "A business with nationwide operations cannot back up all systems during off-hours. Which solution minimizes disruption while maintaining backup integrity?",
    "answers": [
      { "text": "Use centralized backups exclusively", "correct": false },
      { "text": "Schedule backups during peak hours", "correct": false },
      { "text": "Employ differential backups across systems", "correct": false },
      { "text": "Implement incremental backups with custom schedules", "correct": true },
      { "text": "Use only individual drives for localized backups", "correct": false }
    ]
  },
  {
    "question": "A backup plan requires minimal media usage and fast restoration times. What method should be prioritized?",
    "answers": [
      { "text": "Full backups daily", "correct": false },
      { "text": "Incremental backups only", "correct": false },
      { "text": "Differential backups following a weekly full backup", "correct": true },
      { "text": "Custom backups for key folders only", "correct": false },
      { "text": "GFS rotation with optical storage", "correct": false }
    ]
  },
  {
    "question": "A backup administrator discovers media has been repeatedly overwritten, reducing reliability. Which best practice addresses this issue?",
    "answers": [
      { "text": "Use optical storage for long-term backups", "correct": false },
      { "text": "Implement a media rotation schedule", "correct": true },
      { "text": "Switch to cloud storage exclusively", "correct": false },
      { "text": "Avoid centralized backups", "correct": false },
      { "text": "Enable hardware compression for all backups", "correct": false }
    ]
  },
  {
    "question": "An audit reveals that your backup system lacks disaster recovery protocols for natural events like floods. What is the most effective improvement?",
    "answers": [
      { "text": "Store backups in media-rated fireproof safes", "correct": false },
      { "text": "Encrypt all on-site backups", "correct": false },
      { "text": "Transition to offsite backup rotation", "correct": true },
      { "text": "Increase the frequency of incremental backups", "correct": false },
      { "text": "Use magnetic tape exclusively for offsite backups", "correct": false }
    ]
  },
  {
    "question": "You need to back up large amounts of frequently accessed data with minimal maintenance. Which media type should you select?",
    "answers": [
      { "text": "Magnetic Tape", "correct": false },
      { "text": "Optical Storage", "correct": false },
      { "text": "Magnetic Disk with network access", "correct": true },
      { "text": "WORM Media", "correct": false },
      { "text": "Blu-Ray discs", "correct": false }
    ]
  },
  {
    "question": "Optical storage is most commonly used for:",
    "answers": [
      { "text": "High-speed, high-frequency backups", "correct": false },
      { "text": "Long-term archival purposes", "correct": true },
      { "text": "Incremental backups exclusively", "correct": false },
      { "text": "Replacing centralized backup systems", "correct": false },
      { "text": "On-premises server backups", "correct": false }
    ]
  },
  {
    "question": "WORM media is best suited for:",
    "answers": [
      { "text": "Regular server backups", "correct": false },
      { "text": "Offsite storage for differential backups", "correct": false },
      { "text": "Write-once, permanent archiving", "correct": true },
      { "text": "High-speed, dynamic data storage", "correct": false },
      { "text": "Automated incremental backups", "correct": false }
    ]
  },
  {
    "question": "A company experiencing natural disasters would benefit most from:",
    "answers": [
      { "text": "Network-attached storage without encryption", "correct": false },
      { "text": "Offsite backup rotation with encryption", "correct": true },
      { "text": "Using only optical storage", "correct": false },
      { "text": "Daily incremental backups on local media", "correct": false },
      { "text": "Eliminating tape-based storage solutions", "correct": false }
    ]
  },
  {
    "question": "What is a common feature of media libraries for backups?",
    "answers": [
      { "text": "Automated media swapping", "correct": true },
      { "text": "Built-in data compression", "correct": false },
      { "text": "Exclusive support for optical media", "correct": false },
      { "text": "Low maintenance and cost", "correct": false },
      { "text": "Only compatible with magnetic tape", "correct": false }
    ]
  },
  {
    "question": "Differential backups are faster to restore compared to incremental backups.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Full backups disregard the archive bit to include all files in the backup process.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Grandfather backups in GFS are overwritten weekly to maintain efficiency.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Magnetic disk backups are typically slower than magnetic tape backups.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Incremental backups require more media compared to differential backups.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Optical storage is commonly used for routine backups in enterprise environments.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Centralized backup systems reduce administrative overhead for large networks.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Compression is less effective on hardware-based backup systems than software-based ones.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Media-rated fireproof safes may not fully protect backups during extreme heat.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A restore operation with incremental backups requires all incrementals since the last full backup.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Which type of backup requires restoring only the most recent differential backup along with the last full backup?",
    "answers": [
      { "text": "Full Backup", "correct": false },
      { "text": "Incremental Backup", "correct": false },
      { "text": "Differential Backup", "correct": true },
      { "text": "Custom Backup", "correct": false },
      { "text": "Mirror Backup", "correct": false }
    ]
  },
  {
    "question": "What is a key advantage of centralized backup systems?",
    "answers": [
      { "text": "No need for network connectivity", "correct": false },
      { "text": "Simplifies administration for multiple servers", "correct": true },
      { "text": "Eliminates media rotation requirements", "correct": false },
      { "text": "Increases individual server stability", "correct": false },
      { "text": "Reduces storage media costs", "correct": false }
    ]
  },
  {
    "question": "What is the primary function of the archive bit in a backup system?",
    "answers": [
      { "text": "Marks compressed files", "correct": false },
      { "text": "Tracks which files have changed", "correct": true },
      { "text": "Identifies files already backed up", "correct": false },
      { "text": "Secures files for encryption", "correct": false },
      { "text": "Labels files for deletion", "correct": false }
    ]
  },
  {
    "question": "Which of the following is a characteristic of a Grandfather-Father-Son (GFS) rotation?",
    "answers": [
      { "text": "Includes only incremental backups", "correct": false },
      { "text": "Promotes a monthly full backup to 'grandfather' status", "correct": true },
      { "text": "Disregards the need for offsite storage", "correct": false },
      { "text": "Relies on full backups exclusively", "correct": false },
      { "text": "Requires daily full backups", "correct": false }
    ]
  },
  {
    "question": "Which media type is most cost-effective for high-capacity backups but slower to read/write?",
    "answers": [
      { "text": "Magnetic Disk", "correct": false },
      { "text": "Optical Storage", "correct": false },
      { "text": "Magnetic Tape", "correct": true },
      { "text": "SSD", "correct": false },
      { "text": "Blu-Ray", "correct": false }
    ]
  },
  {
    "question": "What is the primary benefit of using incremental backups?",
    "answers": [
      { "text": "Simplifies restoration process", "correct": false },
      { "text": "Uses minimal storage media", "correct": true },
      { "text": "Backups all files regardless of changes", "correct": false },
      { "text": "Faster restoration than differential backups", "correct": false },
      { "text": "Does not use the archive bit", "correct": false }
    ]
  },
  {
    "question": "What is a significant downside of magnetic tape as a backup medium?",
    "answers": [
      { "text": "High cost compared to disks", "correct": false },
      { "text": "Lack of compression support", "correct": false },
      { "text": "Sequential access limits speed", "correct": true },
      { "text": "Unsuitable for offsite storage", "correct": false },
      { "text": "Unreliable for long-term storage", "correct": false }
    ]
  },
  {
    "question": "The Windows Server Backup tool provides full restoration capabilities for:",
    "answers": [
      { "text": "Applications only", "correct": false },
      { "text": "Files and folders only", "correct": false },
      { "text": "Operating systems, volumes, and application data", "correct": true },
      { "text": "Backup catalogs exclusively", "correct": false },
      { "text": "Registry settings only", "correct": false }
    ]
  },
  {
    "question": "Which of the following methods minimizes the risk of backup media failure?",
    "answers": [
      { "text": "Avoiding offsite storage rotation", "correct": false },
      { "text": "Using optical storage exclusively", "correct": false },
      { "text": "Implementing media rotation schedules", "correct": true },
      { "text": "Backing up files during peak hours", "correct": false },
      { "text": "Only performing differential backups", "correct": false }
    ]
  },
  {
    "question": "Which compression ratio is typical for hardware-based backup systems?",
    "answers": [
      { "text": "1.0 to 1.1", "correct": false },
      { "text": "1.2 to 1.3", "correct": true },
      { "text": "2.0 to 3.0", "correct": false },
      { "text": "0.8 to 0.9", "correct": false },
      { "text": "Variable, based on file type", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of performing regular backup testing?",
    "answers": [
      { "text": "Reduces the need for offsite storage", "correct": false },
      { "text": "Ensures that backups are functioning correctly", "correct": true },
      { "text": "Improves network bandwidth during backups", "correct": false },
      { "text": "Eliminates the need for incremental backups", "correct": false },
      { "text": "Simplifies recovery operations", "correct": false }
    ]
  }
];
