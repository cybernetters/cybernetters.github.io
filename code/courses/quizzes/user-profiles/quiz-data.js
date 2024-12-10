const questionBank = [
  {
    "question": "A local profile is specific to one computer and cannot be used across multiple machines.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Mandatory profiles are writable and can be customized by users.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Roaming profiles are stored on a network share and copied to the local profile location during logon.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Folder redirection is used to copy the entire profile to the network share at logoff.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Profiles for new users are created by copying and modifying a default profile.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A mandatory profile allows the same environment for all users associated with it.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The UNC path for a roaming profile is stored in the user’s profile properties.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Local profiles can cause issues when users log into different computers in a domain.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Redirected folders are copied back to the profile during logon/logoff processes.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Roaming profiles ensure that all users have the same environment across multiple clients.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Cached credentials allow users to log in even when the domain controller is unavailable.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Folder redirection cannot reduce logon/logoff times.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Folder redirection increases security by eliminating data left on clients.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Offline files can mitigate network connection issues for folder redirection.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A user’s home folder is a part of their profile.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Folder redirection requires users to be connected to the network to access redirected components.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Vertical applications are a common use case for mandatory profiles.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The default profile cannot be modified by an administrator.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Roaming profiles do not address the problem of shared user environments across different clients.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Locally cached profiles pose a security concern because data can be accessed offline.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "What is a local profile typically used for?",
    "answers": [
      { "text": "Sharing user data across multiple computers", "correct": false },
      { "text": "Providing a profile scoped to one computer", "correct": true },
      { "text": "Ensuring a consistent user environment", "correct": false },
      { "text": "Managing user profiles on the network", "correct": false }
    ]
  },
  {
    "question": "Which type of profile is read-only and ensures the same environment for all users?",
    "answers": [
      { "text": "Local Profile", "correct": false },
      { "text": "Roaming Profile", "correct": false },
      { "text": "Mandatory Profile", "correct": true },
      { "text": "Network Profile", "correct": false }
    ]
  },
  {
    "question": "What is an advantage of folder redirection?",
    "answers": [
      { "text": "Increased logon/logoff times", "correct": false },
      { "text": "Reduced security risks", "correct": true },
      { "text": "Automatic profile copying", "correct": false },
      { "text": "No network dependency", "correct": false }
    ]
  },
  {
    "question": "What problem arises with locally cached profiles?",
    "answers": [
      { "text": "Data duplication", "correct": false },
      { "text": "Increased logon times", "correct": false },
      { "text": "Security concerns", "correct": true },
      { "text": "Network connectivity issues", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT a redirected folder?",
    "answers": [
      { "text": "AppData/Roaming", "correct": false },
      { "text": "Documents", "correct": false },
      { "text": "Saved Games", "correct": false },
      { "text": "My Documents", "correct": true }
    ]
  },
  {
    "question": "The UNC path for a roaming profile is stored in:",
    "answers": [
      { "text": "System Settings", "correct": false },
      { "text": "User’s Profile Properties", "correct": true },
      { "text": "Network Settings", "correct": false },
      { "text": "Domain Controller", "correct": false }
    ]
  },
  {
    "question": "What type of profile allows users to log in even if the domain controller is unavailable?",
    "answers": [
      { "text": "Roaming Profile", "correct": false },
      { "text": "Mandatory Profile", "correct": false },
      { "text": "Cached Profile", "correct": true },
      { "text": "Network Profile", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of a home folder?",
    "answers": [
      { "text": "To store the user’s profile", "correct": false },
      { "text": "To provide central storage for user files", "correct": true },
      { "text": "To store redirected folders", "correct": false },
      { "text": "To manage roaming profiles", "correct": false }
    ]
  },
  {
    "question": "Which issue is unique to roaming profiles?",
    "answers": [
      { "text": "Increased logon/logoff time", "correct": true },
      { "text": "Local data caching", "correct": false },
      { "text": "Lack of user environment consistency", "correct": false },
      { "text": "Profile modification restrictions", "correct": false }
    ]
  },
  {
    "question": "Folder redirection in portable computers can be alleviated by:",
    "answers": [
      { "text": "Using vertical applications", "correct": false },
      { "text": "Implementing mandatory profiles", "correct": false },
      { "text": "Enabling offline files", "correct": true },
      { "text": "Increasing network bandwidth", "correct": false }
    ]
  },
  {
    "question": "You need to ensure a consistent user environment for bank tellers. Which profile should you use?",
    "answers": [
      { "text": "Local Profile", "correct": false },
      { "text": "Roaming Profile", "correct": false },
      { "text": "Mandatory Profile", "correct": true },
      { "text": "Cached Profile", "correct": false }
    ]
  },
  {
    "question": "A user reports slow logon times. What is the likely issue if they use a roaming profile?",
    "answers": [
      { "text": "Network congestion", "correct": false },
      { "text": "Large profile size", "correct": true },
      { "text": "Folder redirection", "correct": false },
      { "text": "Incorrect domain settings", "correct": false }
    ]
  },
  {
    "question": "A user needs access to their data on multiple computers but has limited network connectivity. What solution would you recommend?",
    "answers": [
      { "text": "Local Profile", "correct": false },
      { "text": "Roaming Profile with Offline Files", "correct": true },
      { "text": "Mandatory Profile", "correct": false },
      { "text": "Folder Redirection", "correct": false }
    ]
  },
  {
    "question": "If a user’s desktop settings must remain unchanged, which profile type is suitable?",
    "answers": [
      { "text": "Local Profile", "correct": false },
      { "text": "Roaming Profile", "correct": false },
      { "text": "Mandatory Profile", "correct": true },
      { "text": "Cached Profile", "correct": false }
    ]
  },
  {
    "question": "To reduce logon times without losing user data, you decide to redirect folders. Which folder is a suitable candidate?",
    "answers": [
      { "text": "My Documents", "correct": true },
      { "text": "Favorites", "correct": false },
      { "text": "Desktop", "correct": false },
      { "text": "Saved Games", "correct": false }
    ]
  },
  {
    "question": "You want to mitigate the risks of locally cached profiles on shared computers. What should you implement?",
    "answers": [
      { "text": "Folder Redirection", "correct": true },
      { "text": "Roaming Profiles", "correct": false },
      { "text": "Mandatory Profiles", "correct": false },
      { "text": "Vertical Applications", "correct": false }
    ]
  },
  {
    "question": "A mandatory profile is best suited for which scenario?",
    "answers": [
      { "text": "Individual user preferences", "correct": false },
      { "text": "Dynamic task environments", "correct": false },
      { "text": "Point of Sale Systems", "correct": true },
      { "text": "Large file storage", "correct": false }
    ]
  },
  {
    "question": "To centralize the storage of user profiles, where should they be located?",
    "answers": [
      { "text": "Local disk", "correct": false },
      { "text": "External drive", "correct": false },
      { "text": "Network share", "correct": true },
      { "text": "Domain controller", "correct": false }
    ]
  },
  {
    "question": "To address profile corruption issues in a domain, what should be implemented?",
    "answers": [
      { "text": "Roaming Profiles", "correct": true },
      { "text": "Mandatory Profiles", "correct": false },
      { "text": "Folder Redirection", "correct": false },
      { "text": "Local Profiles", "correct": false }
    ]
  },
  {
    "question": "A user logs into multiple clients simultaneously and experiences versioning issues. What is the likely cause?",
    "answers": [
      { "text": "Local Profile Usage", "correct": false },
      { "text": "Roaming Profile Synchronization", "correct": true },
      { "text": "Folder Redirection Configuration", "correct": false },
      { "text": "Network Disruption", "correct": false }
    ]
  },
  {
    "question": "What is the primary disadvantage of using local profiles in a domain environment?",
    "answers": [
      { "text": "Lack of security", "correct": false },
      { "text": "Increased network dependency", "correct": false },
      { "text": "Inconsistent user environments across clients", "correct": true },
      { "text": "Difficulty in modifying the default profile", "correct": false }
    ]
  },
  {
    "question": "Which of the following is true about folder redirection?",
    "answers": [
      { "text": "It copies all user data at logoff", "correct": false },
      { "text": "It requires mandatory profiles to function", "correct": false },
      { "text": "It separates user data from profile data", "correct": true },
      { "text": "It increases the size of the profile", "correct": false }
    ]
  },
  {
    "question": "What is a common use case for mandatory profiles?",
    "answers": [
      { "text": "Portable computer users", "correct": false },
      { "text": "Administrative tasks", "correct": false },
      { "text": "Shared workstations like library computers", "correct": true },
      { "text": "Offline file access", "correct": false }
    ]
  },
  {
    "question": "Which type of profile is most likely to result in slower logon times due to large file sizes?",
    "answers": [
      { "text": "Local Profile", "correct": false },
      { "text": "Roaming Profile", "correct": true },
      { "text": "Mandatory Profile", "correct": false },
      { "text": "Cached Profile", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of cached credentials in roaming profiles?",
    "answers": [
      { "text": "To improve logon speed during normal operation", "correct": false },
      { "text": "To allow logon when the domain controller is unavailable", "correct": true },
      { "text": "To store profile data offline", "correct": false },
      { "text": "To enforce stricter security protocols", "correct": false }
    ]
  },
  {
    "question": "What happens to a roaming profile after a user logs off?",
    "answers": [
      { "text": "It is deleted from the local machine", "correct": false },
      { "text": "It is copied back to the network share", "correct": true },
      { "text": "It is synchronized across all domain clients", "correct": false },
      { "text": "It is encrypted for security", "correct": false }
    ]
  },
  {
    "question": "Which profile is best suited for a user who needs the same settings on multiple domain computers?",
    "answers": [
      { "text": "Local Profile", "correct": false },
      { "text": "Roaming Profile", "correct": true },
      { "text": "Mandatory Profile", "correct": false },
      { "text": "Home Folder", "correct": false }
    ]
  },
  {
    "question": "Why might folder redirection be less suitable for portable computer users?",
    "answers": [
      { "text": "It requires additional server resources", "correct": false },
      { "text": "It prevents access to data when offline", "correct": true },
      { "text": "It cannot redirect system folders", "correct": false },
      { "text": "It is incompatible with offline files", "correct": false }
    ]
  },
  {
    "question": "What is the key benefit of modifying the default profile?",
    "answers": [
      { "text": "Allows administrators to control user permissions", "correct": false },
      { "text": "Provides a consistent starting point for new user profiles", "correct": true },
      { "text": "Reduces network traffic during logon/logoff", "correct": false },
      { "text": "Enables roaming profile synchronization", "correct": false }
    ]
  },
  {
    "question": "Which of the following is redirected during folder redirection to improve security?",
    "answers": [
      { "text": "Start Menu", "correct": false },
      { "text": "My Documents", "correct": true },
      { "text": "Desktop", "correct": false },
      { "text": "Application Data", "correct": false }
    ]
  },
  {
    "question": "What is one major security concern with locally cached profiles?",
    "answers": [
      { "text": "They increase network traffic", "correct": false },
      { "text": "They can be accessed offline by unauthorized users", "correct": true },
      { "text": "They require folder redirection", "correct": false },
      { "text": "They limit user flexibility", "correct": false }
    ]
  },
  {
    "question": "Which folder is NOT commonly redirected in folder redirection?",
    "answers": [
      { "text": "Documents", "correct": false },
      { "text": "Desktop", "correct": false },
      { "text": "Downloads", "correct": true },
      { "text": "Start Menu", "correct": false }
    ]
  },
  {
    "question": "What is a limitation of mandatory profiles?",
    "answers": [
      { "text": "Profiles cannot be shared", "correct": false },
      { "text": "Profiles are not writable by users", "correct": true },
      { "text": "Profiles cannot be customized by administrators", "correct": false },
      { "text": "Profiles require additional network storage", "correct": false }
    ]
  },
  {
    "question": "What is the main function of a home folder?",
    "answers": [
      { "text": "To store the user’s profile", "correct": false },
      { "text": "To provide a central location for user files", "correct": true },
      { "text": "To ensure consistent settings across devices", "correct": false },
      { "text": "To redirect system folders", "correct": false }
    ]
  },
  {
    "question": "Which profile is best suited for a user who requires the same profile environment on multiple devices with minimal network dependency?",
    "answers": [
      { "text": "Local Profile", "correct": false },
      { "text": "Roaming Profile", "correct": false },
      { "text": "Mandatory Profile", "correct": true },
      { "text": "Cached Profile", "correct": false }
    ]
  },
  {
    "question": "What is a common reason for implementing folder redirection?",
    "answers": [
      { "text": "To simplify profile management", "correct": false },
      { "text": "To reduce logon/logoff times", "correct": true },
      { "text": "To enforce stricter profile permissions", "correct": false },
      { "text": "To eliminate roaming profiles", "correct": false }
    ]
  },
  {
    "question": "Which type of profile is created by default for all new users?",
    "answers": [
      { "text": "Local Profile", "correct": true },
      { "text": "Roaming Profile", "correct": false },
      { "text": "Mandatory Profile", "correct": false },
      { "text": "Network Profile", "correct": false }
    ]
  },
  {
    "question": "Which folder is part of a Windows profile?",
    "answers": [
      { "text": "Program Files", "correct": false },
      { "text": "Desktop", "correct": true },
      { "text": "System32", "correct": false },
      { "text": "Temp", "correct": false }
    ]
  },
  {
    "question": "What is a disadvantage of roaming profiles?",
    "answers": [
      { "text": "They cannot be cached", "correct": false },
      { "text": "They create versioning issues when used simultaneously on multiple devices", "correct": true },
      { "text": "They are not compatible with folder redirection", "correct": false },
      { "text": "They require administrative privileges to use", "correct": false }
    ]
  },
  {
    "question": "Which profile allows for changes to be synchronized to a network share at logoff?",
    "answers": [
      { "text": "Local Profile", "correct": false },
      { "text": "Roaming Profile", "correct": true },
      { "text": "Mandatory Profile", "correct": false },
      { "text": "Default Profile", "correct": false }
    ]
  },
  {
    "question": "Folder redirection reduces the amount of data copied during logon/logoff.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Mandatory profiles can be modified by end users to suit their preferences.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Roaming profiles are designed to provide a consistent user environment across multiple devices.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Folder redirection eliminates the need for network connectivity.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Local profiles are always stored in a network share location.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Cached profiles allow users to log in without network access.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Roaming profiles automatically delete the local copy after the user logs off.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The default profile can be customized by administrators to set baseline settings for new users.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Folder redirection can mitigate security risks associated with cached profiles.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Mandatory profiles are typically used for tasks requiring strict control over user environments.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  }
];
