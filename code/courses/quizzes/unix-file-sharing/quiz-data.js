const questionBank = [
  {
    "question": "Which level of file sharing includes protocols such as FTP, Secure FTP, and cloud-based sharing?",
    "answers": [
      { "text": "Storage level", "correct": false },
      { "text": "Filesystem level", "correct": false },
      { "text": "Application level", "correct": true },
      { "text": "Kernel level", "correct": false }
    ]
  },
  {
    "question": "Which protocol uses TCP and provides user authentication but transmits data in clear text?",
    "answers": [
      { "text": "TFTP", "correct": false },
      { "text": "FTP", "correct": true },
      { "text": "SCP", "correct": false },
      { "text": "SFTP", "correct": false }
    ]
  },
  {
    "question": "Which protocol uses UDP and does not provide user authentication?",
    "answers": [
      { "text": "FTP", "correct": false },
      { "text": "SCP", "correct": false },
      { "text": "TFTP", "correct": true },
      { "text": "SFTP", "correct": false }
    ]
  },
  {
    "question": "Which secure file transfer protocol is part of SSH and supports encrypted traffic?",
    "answers": [
      { "text": "TFTP", "correct": false },
      { "text": "SCP", "correct": true },
      { "text": "FTP", "correct": false },
      { "text": "NFS", "correct": false }
    ]
  },
  {
    "question": "NFS is best described as a method to share which of the following over a network?",
    "answers": [
      { "text": "Pre-compiled binaries", "correct": false },
      { "text": "Entire filesystems", "correct": true },
      { "text": "Printer queues", "correct": false },
      { "text": "Virtual machines", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT one of the three versions of NFS discussed?",
    "answers": [
      { "text": "NFSv2", "correct": false },
      { "text": "NFSv3", "correct": false },
      { "text": "NFSv4", "correct": false },
      { "text": "NFSv5", "correct": true }
    ]
  },
  {
    "question": "What is one key improvement introduced with NFSv4 compared to previous versions?",
    "answers": [
      { "text": "Stateless operation", "correct": false },
      { "text": "2 GB file size limit", "correct": false },
      { "text": "Integrated locking and mount protocols", "correct": true },
      { "text": "UDP-based transport", "correct": false }
    ]
  },
  {
    "question": "In NFS authentication and authorization, what remains unchanged when an export is mounted on a client?",
    "answers": [
      { "text": "File permissions are reset", "correct": false },
      { "text": "The owning UID/GID numbers", "correct": true },
      { "text": "User passwords are transmitted", "correct": false },
      { "text": "Network authentication is performed per access", "correct": false }
    ]
  },
  {
    "question": "For non-UNIX hosts mounting an NFS share, what must be mapped correctly?",
    "answers": [
      { "text": "IP addresses only", "correct": false },
      { "text": "File type tags", "correct": false },
      { "text": "UIDs and GIDs", "correct": true },
      { "text": "Network masks", "correct": false }
    ]
  },
  {
    "question": "Which tool converts file formats between UNIX and DOS styles?",
    "answers": [
      { "text": "dos2unix", "correct": false },
      { "text": "unix2dos", "correct": false },
      { "text": "Both A and B", "correct": true },
      { "text": "nfsstat", "correct": false }
    ]
  },
  {
    "question": "What is the recommended filename format for best compatibility in NFS environments?",
    "answers": [
      { "text": "8.3 format with all upper-case", "correct": false },
      { "text": "8.3 format with all lower-case", "correct": true },
      { "text": "Long filenames with spaces", "correct": false },
      { "text": "Filenames with special characters", "correct": false }
    ]
  },
  {
    "question": "Which advanced NFS configuration option prevents applications from continuously retrying on an error?",
    "answers": [
      { "text": "Hard mounts", "correct": false },
      { "text": "Soft mounts", "correct": true },
      { "text": "Timeout settings", "correct": false },
      { "text": "Retransmission limits", "correct": false }
    ]
  },
  {
    "question": "What is the typical default maximum transfer size in an NFS configuration?",
    "answers": [
      { "text": "4096 bytes", "correct": false },
      { "text": "8192 bytes", "correct": true },
      { "text": "16384 bytes", "correct": false },
      { "text": "32768 bytes", "correct": false }
    ]
  },
  {
    "question": "Which configuration file is used to define which file systems are available for sharing via NFS?",
    "answers": [
      { "text": "/etc/fstab", "correct": false },
      { "text": "/etc/exports", "correct": true },
      { "text": "/etc/nfs.conf", "correct": false },
      { "text": "/etc/mount.conf", "correct": false }
    ]
  },
  {
    "question": "What command is used on the client side to manually mount an NFS export?",
    "answers": [
      { "text": "mount –t nfs Host:Export /LocalMountPoint", "correct": true },
      { "text": "nfsmount –a Host /Export", "correct": false },
      { "text": "showmount –e Host", "correct": false },
      { "text": "rpcinfo –m Host", "correct": false }
    ]
  },
  {
    "question": "Which tool provides statistics for NFS RPC calls?",
    "answers": [
      { "text": "nfsping", "correct": false },
      { "text": "nfsstat", "correct": true },
      { "text": "rpcinfo", "correct": false },
      { "text": "showmount", "correct": false }
    ]
  },
  {
    "question": "Which NFS testing tool sends an RPC echo reply packet to test connectivity?",
    "answers": [
      { "text": "rpcinfo", "correct": false },
      { "text": "nfsping", "correct": true },
      { "text": "spray", "correct": false },
      { "text": "showmount", "correct": false }
    ]
  },
  {
    "question": "Samba implements file sharing for which type of network environment?",
    "answers": [
      { "text": "UNIX-only networks", "correct": false },
      { "text": "Windows networks", "correct": true },
      { "text": "iSCSI storage networks", "correct": false },
      { "text": "Cloud storage systems", "correct": false }
    ]
  },
  {
    "question": "Which daemon in Samba is responsible for NetBIOS name resolution and service announcement?",
    "answers": [
      { "text": "smbd", "correct": false },
      { "text": "nmbd", "correct": true },
      { "text": "cifsd", "correct": false },
      { "text": "smbutil", "correct": false }
    ]
  },
  {
    "question": "In the Samba configuration file (smb.conf), which parameter sets the workgroup?",
    "answers": [
      { "text": "security", "correct": false },
      { "text": "encrypt passwords", "correct": false },
      { "text": "workgroup", "correct": true },
      { "text": "smb passwd file", "correct": false }
    ]
  },
  {
    "question": "NFS is designed to share an entire UNIX filesystem over the network.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "FTP transmits data securely by encrypting user authentication and file contents.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "SCP is part of the SSH suite and encrypts all traffic between hosts.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "NFSv2 uses TCP by default to provide reliable data transport.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "NFSv3 supports larger file sizes and can operate over TCP.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "NFSv4 introduces stateful protocol features for better concurrency control.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "When an NFS export is mounted, the remote file ownership is remapped to the local system’s UID/GID values automatically if they match.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "File format conversions (like unix2dos) are not necessary when sharing files over NFS.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Soft mounts in NFS allow applications to be notified of an error rather than continuously retrying a failed request.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The default maximum transfer size for NFS is typically set to 8192 bytes.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Exports for NFS are configured in the /etc/exports file on the server.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "NFS client mounts are always performed manually by the user with the mount command.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The nfsping utility tests RPC connectivity by sending echo reply packets.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The rpcinfo command shows the program numbers and versions of the services running on a remote NFS server.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Samba allows UNIX machines to emulate Windows networking protocols such as SMB/CIFS.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "In Samba, the smbd daemon handles file sharing and user authentication.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Samba configuration is kept in a file named smb.conf, typically located in /etc/samba.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Mounting a Samba share using smbmount is the currently preferred method on modern systems.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Samba supports both file sharing and printer sharing functionalities.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "NFS and Samba use identical mechanisms for authentication and authorization.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "An administrator wants to allow only specific hosts to mount an NFS export. Which of the following methods should they use in the /etc/exports file?",
    "answers": [
      { "text": "Specify export options using read-only flags", "correct": false },
      { "text": "List allowed hostnames or IP addresses", "correct": true },
      { "text": "Use soft mount options", "correct": false },
      { "text": "Define maximum transfer size", "correct": false }
    ]
  },
  {
    "question": "A user is experiencing frequent timeouts when accessing an NFS share over a high-latency connection. Which NFS configuration parameter should be adjusted to reduce these timeouts?",
    "answers": [
      { "text": "Soft mount option", "correct": false },
      { "text": "Retransmission count", "correct": false },
      { "text": "Read/write maximum transfer size", "correct": false },
      { "text": "Timeout value", "correct": true }
    ]
  },
  {
    "question": "To test the availability of remote NFS services, which tool can be used to display the remote file systems available for mounting?",
    "answers": [
      { "text": "nfsping", "correct": false },
      { "text": "showmount", "correct": true },
      { "text": "rpcinfo", "correct": false },
      { "text": "nfsstat", "correct": false }
    ]
  },
  {
    "question": "A technician wants to determine the capacity of an NFS server by sending a large number of RPC packets. Which tool is used for this purpose?",
    "answers": [
      { "text": "rpcinfo", "correct": false },
      { "text": "spray", "correct": true },
      { "text": "nfsping", "correct": false },
      { "text": "nfsstat", "correct": false }
    ]
  },
  {
    "question": "An administrator must convert a UNIX-formatted text file to a DOS-compatible format before sharing it over the network. Which command should they use?",
    "answers": [
      { "text": "dos2unix", "correct": false },
      { "text": "unix2dos", "correct": true },
      { "text": "nfsstat", "correct": false },
      { "text": "rpcinfo", "correct": false }
    ]
  },
  {
    "question": "To mount an NFS export manually on the client side, which command is appropriate?",
    "answers": [
      { "text": "mount -t cifs //server/share /local/mount", "correct": false },
      { "text": "mount -t nfs server:/export /local/mount", "correct": true },
      { "text": "smbmount //server/share /local/mount", "correct": false },
      { "text": "showmount -e server", "correct": false }
    ]
  },
  {
    "question": "A UNIX administrator is configuring Samba for Windows file sharing. Which parameter in smb.conf specifies the workgroup name?",
    "answers": [
      { "text": "security", "correct": false },
      { "text": "workgroup", "correct": true },
      { "text": "encrypt passwords", "correct": false },
      { "text": "hosts allow", "correct": false }
    ]
  },
  {
    "question": "To securely access files on a Samba share from a Linux client, which command is preferred to mount the share?",
    "answers": [
      { "text": "smbmount", "correct": false },
      { "text": "mount -t smbfs", "correct": false },
      { "text": "mount -t cifs with appropriate options", "correct": true },
      { "text": "mount -t nfs", "correct": false }
    ]
  },
  {
    "question": "If a user on a non-UNIX system is having trouble mapping UIDs and GIDs when accessing an NFS share, what is the most likely underlying issue?",
    "answers": [
      { "text": "Incorrect DNS resolution", "correct": false },
      { "text": "Mismatch between remote and local UID/GID information", "correct": true },
      { "text": "Improper soft mount configuration", "correct": false },
      { "text": "Outdated NFS version", "correct": false }
    ]
  },
  {
    "question": "An administrator needs to verify that the NFS server is correctly exporting its file systems. Which command should they run on a client machine?",
    "answers": [
      { "text": "nfsping", "correct": false },
      { "text": "showmount -e <server>", "correct": true },
      { "text": "rpcinfo -p <server>", "correct": false },
      { "text": "nfsstat", "correct": false }
    ]
  }
  
];

