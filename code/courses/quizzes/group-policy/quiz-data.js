const questionBank = [
  {
    "question": "Which component of a GPO is applied when a user logs into the system?",
    "answers": [
      { "text": "Computer policies", "correct": false },
      { "text": "Site policies", "correct": false },
      { "text": "User policies", "correct": true },
      { "text": "Domain policies", "correct": false },
      { "text": "Local policies", "correct": false }
    ]
  },
  {
    "question": "Which order does GPO inheritance follow by default?",
    "answers": [
      { "text": "OU → Domain → Site → Local", "correct": false },
      { "text": "Local → Domain → OU → Site", "correct": false },
      { "text": "Domain → Local → Site → OU", "correct": false },
      { "text": "Local → Site → Domain → OU", "correct": true },
      { "text": "Domain → Site → Local → OU", "correct": false }
    ]
  },
  {
    "question": "What tool is primarily used to assign GPOs in Active Directory?",
    "answers": [
      { "text": "Registry Editor", "correct": false },
      { "text": "Group Policy Object Editor", "correct": false },
      { "text": "Server Manager", "correct": false },
      { "text": "Group Policy Management", "correct": true },
      { "text": "Task Manager", "correct": false }
    ]
  },
  {
    "question": "Which of the following conflicts result in the child GPO settings overwriting inherited parent GPO settings?",
    "answers": [
      { "text": "Parent setting is 'Not Configured'", "correct": false },
      { "text": "Parent and child have the same non-conflicting settings", "correct": false },
      { "text": "Parent GPO conflicts with child GPO settings", "correct": true },
      { "text": "Child GPO does not inherit any settings", "correct": false },
      { "text": "All of the above", "correct": false }
    ]
  },
  {
    "question": "Which of the following GPO layers can a block inheritance setting override?",
    "answers": [
      { "text": "Local Policy", "correct": false },
      { "text": "Site Policy", "correct": false },
      { "text": "Domain Policy", "correct": false },
      { "text": "OU Policy", "correct": false },
      { "text": "All of the above", "correct": true }
    ]
  },
  {
    "question": "What happens when a child GPO setting is 'Not Configured'?",
    "answers": [
      { "text": "Child GPO ignores the setting", "correct": false },
      { "text": "Parent GPO value is inherited", "correct": true },
      { "text": "Setting is disabled by default", "correct": false },
      { "text": "The setting is reset to default values", "correct": false },
      { "text": "Conflicts occur between GPOs", "correct": false }
    ]
  },
  {
    "question": "Which tool is used to troubleshoot GPO-related issues?",
    "answers": [
      { "text": "Event Viewer", "correct": false },
      { "text": "Gpresults", "correct": true },
      { "text": "Task Scheduler", "correct": false },
      { "text": "PowerShell", "correct": false },
      { "text": "File Explorer", "correct": false }
    ]
  },
  {
    "question": "Which setting ensures a parent GPO always overrides child GPO settings?",
    "answers": [
      { "text": "Blocking inheritance", "correct": false },
      { "text": "Forcing inheritance", "correct": true },
      { "text": "Disabling GPO", "correct": false },
      { "text": "Prioritizing Site Policies", "correct": false },
      { "text": "Applying Domain Policies", "correct": false }
    ]
  },
  {
    "question": "Which GPO component is applied during the system boot-up process?",
    "answers": [
      { "text": "User Policies", "correct": false },
      { "text": "Domain Policies", "correct": false },
      { "text": "Computer Policies", "correct": true },
      { "text": "Site Policies", "correct": false },
      { "text": "Local Policies", "correct": false }
    ]
  },
  {
    "question": "Which tool can be used to manually refresh Group Policy settings?",
    "answers": [
      { "text": "Gpupdate /force", "correct": true },
      { "text": "System Restore", "correct": false },
      { "text": "Task Scheduler", "correct": false },
      { "text": "PowerShell Reset Policy", "correct": false },
      { "text": "Event Viewer", "correct": false }
    ]
  },
  {
    "question": "Which of the following conflicts will not occur in GPO inheritance?",
    "answers": [
      { "text": "Parent GPO is 'Not Configured'", "correct": true },
      { "text": "Parent and child have conflicting settings", "correct": false },
      { "text": "Child GPO inherits parent settings entirely", "correct": false },
      { "text": "A child GPO overwrites inherited parent settings", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What feature ensures GPO settings apply to all users and computers in an Organizational Unit (OU)?",
    "answers": [
      { "text": "Security filtering", "correct": false },
      { "text": "GPO inheritance", "correct": true },
      { "text": "Enforced inheritance", "correct": false },
      { "text": "Cross-domain GPO linking", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What happens when a GPO linked to a domain has 'Not Configured' settings?",
    "answers": [
      { "text": "It will not apply any settings", "correct": false },
      { "text": "It defaults to site policy", "correct": false },
      { "text": "It inherits OU settings", "correct": false },
      { "text": "It applies all parent policy settings", "correct": true },
      { "text": "Conflicts occur within the domain", "correct": false }
    ]
  },
  {
    "question": "Which policy layer has the highest priority in case of GPO conflicts?",
    "answers": [
      { "text": "Domain Policy", "correct": false },
      { "text": "Site Policy", "correct": false },
      { "text": "OU Policy", "correct": true },
      { "text": "Local Policy", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What is the default state of entries in a newly created GPO?",
    "answers": [
      { "text": "Enabled", "correct": false },
      { "text": "Disabled", "correct": false },
      { "text": "Not Configured", "correct": true },
      { "text": "Inherited", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "When are user-specific policies applied in a GPO?",
    "answers": [
      { "text": "During system boot", "correct": false },
      { "text": "When a user logs in", "correct": true },
      { "text": "During domain-level synchronization", "correct": false },
      { "text": "After site-level policy application", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which GPO settings are automatically applied under Security Filtering?",
    "answers": [
      { "text": "Only the linked site GPOs", "correct": false },
      { "text": "GPOs for the specified users, groups, or computers", "correct": true },
      { "text": "All policies in the domain", "correct": false },
      { "text": "Only Local Policies", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What is the main function of Group Policy?",
    "answers": [
      { "text": "Backup system configuration", "correct": false },
      { "text": "Define an environment with policies", "correct": true },
      { "text": "Manage network traffic", "correct": false },
      { "text": "Perform audits", "correct": false },
      { "text": "Install software packages", "correct": false }
    ]
  },
  {
    "question": "Which layer of GPO is applied first during inheritance?",
    "answers": [
      { "text": "Local Policy", "correct": true },
      { "text": "Site Policy", "correct": false },
      { "text": "Domain Policy", "correct": false },
      { "text": "OU Policy", "correct": false },
      { "text": "Inheritance starts with OU", "correct": false }
    ]
  },
  {
    "question": "What type of settings can a GPO include?",
    "answers": [
      { "text": "User-specific only", "correct": false },
      { "text": "Computer-specific only", "correct": false },
      { "text": "Both User and Computer specific", "correct": true },
      { "text": "Registry only", "correct": false },
      { "text": "Roaming profile settings", "correct": false }
    ]
  },
  {
    "question": "Group Policy can only target users but not computers.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "GPOs can be applied to domains, sites, and organizational units.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "By default, all GPO settings are 'Not Configured.'",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Gpupdate /force is a command used to refresh Group Policy settings manually.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A child GPO always overrides a parent GPO when there are conflicting settings.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Blocking inheritance forces child GPOs to apply regardless of parent GPO conflicts.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Computer policies are applied when the system boots up.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Security filtering is used to apply GPOs to specific users or groups.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Group Policy Management tool is available in all editions of Windows Server.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A GPO linked to an OU will apply only to users and computers within that OU.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "If a parent GPO has a setting configured and the child GPO does not, the setting is not inherited.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Domain policies are applied after site policies in the GPO inheritance hierarchy.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Inheritance ensures that all settings in higher-level GPOs are automatically overridden.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Group Policy is used to define a controlled environment by setting rules for users and computers.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Gpresults is a command-line tool for creating new Group Policies.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "GPO conflicts can only occur between domain policies.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Not Configured settings in a GPO do not affect the application of parent GPOs.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The Local Policy layer is applied last in the inheritance order.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Forcing inheritance ensures that parent GPO settings always apply over child GPO settings.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "User-specific GPO settings are applied during system boot-up.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "An organization wants to ensure that all computers in a specific OU have the same desktop wallpaper. Which setting should they configure?",
    "answers": [
      { "text": "Domain Policy", "correct": false },
      { "text": "User Policies in the OU GPO", "correct": false },
      { "text": "Computer Policies in the OU GPO", "correct": true },
      { "text": "Site Policy", "correct": false },
      { "text": "Local Policy", "correct": false }
    ]
  },
  {
    "question": "You want to prevent a child OU from inheriting a parent OU’s GPO settings. What should you use?",
    "answers": [
      { "text": "Gpupdate /force", "correct": false },
      { "text": "Blocking inheritance", "correct": true },
      { "text": "Forcing inheritance", "correct": false },
      { "text": "Security filtering", "correct": false },
      { "text": "Not Configured", "correct": false }
    ]
  },
  {
    "question": "During troubleshooting, a user finds their settings differ from what the GPO defines. What tool can best diagnose the issue?",
    "answers": [
      { "text": "Group Policy Editor", "correct": false },
      { "text": "Gpresults", "correct": true },
      { "text": "Task Scheduler", "correct": false },
      { "text": "Event Viewer", "correct": false },
      { "text": "System Configuration", "correct": false }
    ]
  },
  {
    "question": "You need to enforce a security policy for all computers in a domain but exclude a specific group of users. What tool will help achieve this?",
    "answers": [
      { "text": "Security Filtering", "correct": true },
      { "text": "Blocking Inheritance", "correct": false },
      { "text": "Registry Editor", "correct": false },
      { "text": "Forcing Inheritance", "correct": false },
      { "text": "Local Group Policy", "correct": false }
    ]
  },
  {
    "question": "A company has conflicting settings in GPOs applied to the same domain. How are these conflicts resolved?",
    "answers": [
      { "text": "Child GPO settings overwrite parent GPO settings", "correct": true },
      { "text": "Parent GPO settings take precedence", "correct": false },
      { "text": "The conflicting settings are disabled", "correct": false },
      { "text": "GPO settings are merged", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "To apply Group Policy settings immediately across a network, which command should you use?",
    "answers": [
      { "text": "Gpresults", "correct": false },
      { "text": "Gpupdate /force", "correct": true },
      { "text": "Restart Group Policy Service", "correct": false },
      { "text": "Run Group Policy Troubleshooter", "correct": false },
      { "text": "Enable inheritance", "correct": false }
    ]
  },
  {
    "question": "An administrator wants a GPO to apply only to a subset of computers in a domain. How can they achieve this?",
    "answers": [
      { "text": "Disable inheritance", "correct": false },
      { "text": "Use filtering based on security groups", "correct": true },
      { "text": "Create a new site policy", "correct": false },
      { "text": "Apply the GPO at the OU level", "correct": false },
      { "text": "Force inheritance", "correct": false }
    ]
  },
  {
    "question": "Which policy would you configure to ensure a user’s folder redirection is applied only within specific organizational units?",
    "answers": [
      { "text": "Local Policy", "correct": false },
      { "text": "Site Policy", "correct": false },
      { "text": "Domain Policy", "correct": false },
      { "text": "OU-linked GPO", "correct": true },
      { "text": "Default Policy", "correct": false }
    ]
  },
  {
    "question": "A user logs into their computer, but their expected Group Policy settings are not applied. Which tool can confirm if the settings were processed correctly?",
    "answers": [
      { "text": "PowerShell", "correct": false },
      { "text": "Gpresults", "correct": true },
      { "text": "Task Manager", "correct": false },
      { "text": "File Explorer", "correct": false },
      { "text": "Group Policy Object Editor", "correct": false }
    ]
  },
  {
    "question": "How can an administrator ensure that no conflicting GPO settings are applied to a child OU?",
    "answers": [
      { "text": "Enforce parent GPO inheritance", "correct": false },
      { "text": "Block parent GPO inheritance", "correct": true },
      { "text": "Disable all parent GPOs", "correct": false },
      { "text": "Apply conflicting GPOs only at the local level", "correct": false },
      { "text": "Use the 'Not Configured' setting", "correct": false }
    ]
  },
  {
    "question": "What happens if a GPO setting is configured at the site level but conflicts with a setting at the domain level?",
    "answers": [
      { "text": "The domain-level setting overrides the site-level setting", "correct": true },
      { "text": "The site-level setting takes precedence", "correct": false },
      { "text": "Both settings are merged", "correct": false },
      { "text": "The conflict disables the setting", "correct": false },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "Which feature allows you to apply a GPO setting specifically to a certain group of computers?",
    "answers": [
      { "text": "Loopback processing", "correct": false },
      { "text": "Group filtering", "correct": false },
      { "text": "Security filtering", "correct": true },
      { "text": "Registry enforcement", "correct": false },
      { "text": "Group Policy inheritance", "correct": false }
    ]
  },
  {
    "question": "When should the 'Enforced' option be used in a GPO?",
    "answers": [
      { "text": "To allow child OUs to override parent settings", "correct": false },
      { "text": "To prevent inheritance of parent settings", "correct": false },
      { "text": "To ensure parent settings apply regardless of conflicts", "correct": true },
      { "text": "To prioritize local settings", "correct": false },
      { "text": "To disable GPO inheritance", "correct": false }
    ]
  },
  {
    "question": "What is the primary benefit of using the Group Policy Object Editor?",
    "answers": [
      { "text": "To troubleshoot GPO application issues", "correct": false },
      { "text": "To manage linked GPOs", "correct": false },
      { "text": "To configure individual GPO settings", "correct": true },
      { "text": "To force inheritance settings", "correct": false },
      { "text": "To monitor policy deployment logs", "correct": false }
    ]
  },
  {
    "question": "Which of the following settings can be included in a GPO?",
    "answers": [
      { "text": "Registry modifications", "correct": false },
      { "text": "Software installation", "correct": false },
      { "text": "Security policies", "correct": false },
      { "text": "Folder redirection", "correct": false },
      { "text": "All of the above", "correct": true }
    ]
  },
  {
    "question": "If a GPO is configured but not linked to any site, domain, or OU, what happens?",
    "answers": [
      { "text": "It applies by default to all users and computers", "correct": false },
      { "text": "It applies only to the local computer", "correct": false },
      { "text": "It does not apply to any object", "correct": true },
      { "text": "It is applied during boot-up only", "correct": false },
      { "text": "It causes inheritance conflicts", "correct": false }
    ]
  },
  {
    "question": "Which of the following commands provides a detailed report of all applied GPOs?",
    "answers": [
      { "text": "Gpupdate", "correct": false },
      { "text": "Gpedit", "correct": false },
      { "text": "Gpresult", "correct": true },
      { "text": "Rsop.msc", "correct": false },
      { "text": "Event Viewer", "correct": false }
    ]
  },
  {
    "question": "What is the purpose of a 'loopback processing' setting in Group Policy?",
    "answers": [
      { "text": "To override site-level settings", "correct": false },
      { "text": "To apply user settings based on the computer's location", "correct": true },
      { "text": "To enforce local policies", "correct": false },
      { "text": "To block inheritance", "correct": false },
      { "text": "To apply only OU-level policies", "correct": false }
    ]
  },
  {
    "question": "Which GPO layer typically affects all users and computers in an organization unless overridden?",
    "answers": [
      { "text": "Local Policy", "correct": false },
      { "text": "Site Policy", "correct": false },
      { "text": "Domain Policy", "correct": true },
      { "text": "OU Policy", "correct": false },
      { "text": "Child Policy", "correct": false }
    ]
  },
  {
    "question": "What tool would you use to view GPO settings in a readable hierarchy?",
    "answers": [
      { "text": "Event Viewer", "correct": false },
      { "text": "Gpedit.msc", "correct": false },
      { "text": "Resultant Set of Policy (RSOP)", "correct": true },
      { "text": "Security Filtering Viewer", "correct": false },
      { "text": "System Configuration", "correct": false }
    ]
  },
  {
    "question": "The Group Policy Management tool can only be used to edit existing GPOs.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Site-level GPOs are applied after domain-level GPOs.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Blocking inheritance disables all parent GPO settings for the affected child objects.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Security filtering restricts GPO application to specific users or groups.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Loopback processing allows computer settings to override user settings.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "The 'Enforced' option can be applied to any GPO to ensure it takes precedence over others.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "If a GPO is not linked to an OU, domain, or site, it will not apply to any objects.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Gpupdate /force can be used to immediately apply any changes made to GPOs.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Local policies are overridden by site policies in the default inheritance order.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "GPO settings cannot be applied to security groups.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  }
];
