const questionBank = [
  {
    "question": "Which of the following is NOT an essential characteristic of cloud computing according to NIST?",
    "answers": [
      { "text": "On-demand self-service", "correct": false },
      { "text": "Measured service", "correct": false },
      { "text": "Static resource allocation", "correct": true },
      { "text": "Rapid elasticity", "correct": false },
      { "text": "Broad network access", "correct": false }
    ]
  },
  {
    "question": "What is a key advantage of Infrastructure as a Service (IaaS)?",
    "answers": [
      { "text": "It delivers a development environment to developers.", "correct": false },
      { "text": "Resources can be provisioned on an as-needed basis.", "correct": true },
      { "text": "Users control the physical infrastructure.", "correct": false },
      { "text": "It does not allow virtual datacenter creation.", "correct": false },
      { "text": "It is subscription-free.", "correct": false }
    ]
  },
  {
    "question": "Which of the following is an example of a Software as a Service (SaaS) application?",
    "answers": [
      { "text": "Google App Engine", "correct": false },
      { "text": "Microsoft Azure", "correct": false },
      { "text": "Amazon EC2", "correct": false },
      { "text": "Google Docs", "correct": true },
      { "text": "OpenStack", "correct": false }
    ]
  },
  {
    "question": "Cloud bursting refers to:",
    "answers": [
      { "text": "Moving all workloads permanently to a public cloud.", "correct": false },
      { "text": "A private cloud accessing public cloud resources during peak demand.", "correct": true },
      { "text": "A sudden failure in a private cloud setup.", "correct": false },
      { "text": "The expansion of a public cloud infrastructure.", "correct": false },
      { "text": "Implementing hybrid clouds.", "correct": false }
    ]
  },
  {
    "question": "Which of the following deployment models serves a specific community of users?",
    "answers": [
      { "text": "Public cloud", "correct": false },
      { "text": "Private cloud", "correct": false },
      { "text": "Hybrid cloud", "correct": false },
      { "text": "Community cloud", "correct": true },
      { "text": "None of the above", "correct": false }
    ]
  },
  {
    "question": "What is a primary concern with cloud computing from a customer perspective?",
    "answers": [
      { "text": "Reduced costs", "correct": false },
      { "text": "Location independence", "correct": false },
      { "text": "Reliability and security", "correct": true },
      { "text": "Flexibility", "correct": false },
      { "text": "Broad access", "correct": false }
    ]
  },
  {
    "question": "Which cloud service model delivers storage, networking, and processing power?",
    "answers": [
      { "text": "SaaS", "correct": false },
      { "text": "PaaS", "correct": false },
      { "text": "IaaS", "correct": true },
      { "text": "Cloud bursting", "correct": false },
      { "text": "Hybrid cloud", "correct": false }
    ]
  },
  {
    "question": "Rapid elasticity in cloud computing refers to:",
    "answers": [
      { "text": "Static resource allocation.", "correct": false },
      { "text": "Automated provisioning of resources based on demand.", "correct": true },
      { "text": "Manual scaling of resources.", "correct": false },
      { "text": "Measured service billing.", "correct": false },
      { "text": "Using on-premises servers.", "correct": false }
    ]
  },
  {
    "question": "Which service model is tailored for application developers?",
    "answers": [
      { "text": "SaaS", "correct": false },
      { "text": "IaaS", "correct": false },
      { "text": "PaaS", "correct": true },
      { "text": "Public cloud", "correct": false },
      { "text": "Community cloud", "correct": false }
    ]
  },
  {
    "question": "In a hybrid cloud model, which feature is emphasized?",
    "answers": [
      { "text": "Exclusive use by one organization", "correct": false },
      { "text": "Integration of private and public clouds", "correct": true },
      { "text": "No shared resources", "correct": false },
      { "text": "Free use of all services", "correct": false },
      { "text": "Standardized billing", "correct": false }
    ]
  },
  {
    "question": "Virtualization is a key component of hosted cloud services.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Private clouds are exclusively used by a single organization.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "SaaS applications require custom software on the client side.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Measured service in cloud computing involves billing based on usage.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Public clouds are only used for governmental purposes.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Resource pooling supports multi-tenancy in cloud computing.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Hybrid clouds exclusively rely on public clouds for peak demands.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Broad network access ensures accessibility via standard internet protocols.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Platform as a Service allows organizations to manage physical infrastructure.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Reliability issues in cloud computing arise from potential hardware failures.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A medium-sized business wants to adopt a cloud solution that allows them to host and manage virtual servers while maintaining control over software and configurations. Which cloud service model is most appropriate?",
    "answers": [
      { "text": "SaaS", "correct": false },
      { "text": "PaaS", "correct": false },
      { "text": "IaaS", "correct": true },
      { "text": "Public cloud", "correct": false },
      { "text": "Community cloud", "correct": false }
    ]
  },
  {
    "question": "An organization uses a private cloud for normal operations but moves additional workloads to a public cloud during seasonal peaks. This is an example of:",
    "answers": [
      { "text": "Hybrid cloud", "correct": false },
      { "text": "Cloud bursting", "correct": true },
      { "text": "Public cloud", "correct": false },
      { "text": "Community cloud", "correct": false },
      { "text": "Multi-tenancy", "correct": false }
    ]
  },
  {
    "question": "Which of the following is an advantage of private clouds?",
    "answers": [
      { "text": "Public access to all users", "correct": false },
      { "text": "Lower setup costs than public clouds", "correct": false },
      { "text": "Complete control over the infrastructure", "correct": true },
      { "text": "Shared costs among organizations", "correct": false },
      { "text": "Guaranteed infinite scalability", "correct": false }
    ]
  },
  {
    "question": "What characteristic of cloud computing ensures customers only pay for the resources they use?",
    "answers": [
      { "text": "Rapid elasticity", "correct": false },
      { "text": "On-demand self-service", "correct": false },
      { "text": "Broad network access", "correct": false },
      { "text": "Measured service", "correct": true },
      { "text": "Resource pooling", "correct": false }
    ]
  },
  {
    "question": "Which of the following best describes a hybrid cloud?",
    "answers": [
      { "text": "A cloud environment solely managed by a third-party provider", "correct": false },
      { "text": "A mix of community and public clouds", "correct": false },
      { "text": "A combination of private, public, and community clouds with unique entities bound together", "correct": true },
      { "text": "A single cloud with mixed usage", "correct": false },
      { "text": "A cloud infrastructure dedicated to a government agency", "correct": false }
    ]
  },
  {
    "question": "In cloud computing, multi-tenancy primarily refers to:",
    "answers": [
      { "text": "Hosting multiple clouds by a single provider", "correct": false },
      { "text": "Sharing resources among multiple users or organizations", "correct": true },
      { "text": "Isolated usage by one tenant per server", "correct": false },
      { "text": "A blend of public and private clouds", "correct": false },
      { "text": "Exclusive ownership of the infrastructure by one organization", "correct": false }
    ]
  },
  {
    "question": "What is the primary benefit of the public cloud model?",
    "answers": [
      { "text": "High levels of customization", "correct": false },
      { "text": "Complete isolation for security-sensitive workloads", "correct": false },
      { "text": "Scalability and cost-effectiveness for a broad audience", "correct": true },
      { "text": "Guaranteed uptime without failures", "correct": false },
      { "text": "Full control over all infrastructure components", "correct": false }
    ]
  },
  {
    "question": "Which of the following is true about SaaS applications?",
    "answers": [
      { "text": "They require significant installation on client machines.", "correct": false },
      { "text": "They provide complete access to infrastructure management.", "correct": false },
      { "text": "They are typically accessed via web browsers.", "correct": true },
      { "text": "They are only available for internal business networks.", "correct": false },
      { "text": "They are limited to non-critical applications.", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of virtualization in cloud computing?",
    "answers": [
      { "text": "Reduces application development time", "correct": false },
      { "text": "Manages physical security of servers", "correct": false },
      { "text": "Enables resource pooling and abstraction", "correct": true },
      { "text": "Ensures measured billing for services", "correct": false },
      { "text": "Prevents data breaches", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT an example of Infrastructure as a Service (IaaS)?",
    "answers": [
      { "text": "Amazon EC2", "correct": false },
      { "text": "Google Docs", "correct": true },
      { "text": "Rackspace", "correct": false },
      { "text": "GoGrid", "correct": false },
      { "text": "Microsoft Azure (IaaS features)", "correct": false }
    ]
  },
  {
    "question": "Which deployment model is best suited for organizations with shared goals, such as educational institutions?",
    "answers": [
      { "text": "Public cloud", "correct": false },
      { "text": "Private cloud", "correct": false },
      { "text": "Hybrid cloud", "correct": false },
      { "text": "Community cloud", "correct": true },
      { "text": "Cloud bursting", "correct": false }
    ]
  },
  {
    "question": "What is the main drawback of relying solely on public cloud providers?",
    "answers": [
      { "text": "High customization capabilities", "correct": false },
      { "text": "Security and privacy concerns", "correct": true },
      { "text": "Guaranteed infrastructure control", "correct": false },
      { "text": "Lack of resource pooling", "correct": false },
      { "text": "Limited network access", "correct": false }
    ]
  },
  {
    "question": "A medium-sized business wants to adopt a cloud solution that allows them to host and manage virtual servers while maintaining control over software and configurations. Which cloud service model is most appropriate?",
    "answers": [
      { "text": "SaaS", "correct": false },
      { "text": "PaaS", "correct": false },
      { "text": "IaaS", "correct": true },
      { "text": "Public cloud", "correct": false },
      { "text": "Community cloud", "correct": false }
    ]
  },
  {
    "question": "An organization uses a private cloud for normal operations but moves additional workloads to a public cloud during seasonal peaks. This is an example of:",
    "answers": [
      { "text": "Hybrid cloud", "correct": false },
      { "text": "Cloud bursting", "correct": true },
      { "text": "Public cloud", "correct": false },
      { "text": "Community cloud", "correct": false },
      { "text": "Multi-tenancy", "correct": false }
    ]
  },
  {
    "question": "Which of the following is an advantage of private clouds?",
    "answers": [
      { "text": "Public access to all users", "correct": false },
      { "text": "Lower setup costs than public clouds", "correct": false },
      { "text": "Complete control over the infrastructure", "correct": true },
      { "text": "Shared costs among organizations", "correct": false },
      { "text": "Guaranteed infinite scalability", "correct": false }
    ]
  },
  {
    "question": "What characteristic of cloud computing ensures customers only pay for the resources they use?",
    "answers": [
      { "text": "Rapid elasticity", "correct": false },
      { "text": "On-demand self-service", "correct": false },
      { "text": "Broad network access", "correct": false },
      { "text": "Measured service", "correct": true },
      { "text": "Resource pooling", "correct": false }
    ]
  },
  {
    "question": "Which of the following best describes a hybrid cloud?",
    "answers": [
      { "text": "A cloud environment solely managed by a third-party provider", "correct": false },
      { "text": "A mix of community and public clouds", "correct": false },
      { "text": "A combination of private, public, and community clouds with unique entities bound together", "correct": true },
      { "text": "A single cloud with mixed usage", "correct": false },
      { "text": "A cloud infrastructure dedicated to a government agency", "correct": false }
    ]
  },
  {
    "question": "In cloud computing, multi-tenancy primarily refers to:",
    "answers": [
      { "text": "Hosting multiple clouds by a single provider", "correct": false },
      { "text": "Sharing resources among multiple users or organizations", "correct": true },
      { "text": "Isolated usage by one tenant per server", "correct": false },
      { "text": "A blend of public and private clouds", "correct": false },
      { "text": "Exclusive ownership of the infrastructure by one organization", "correct": false }
    ]
  },
  {
    "question": "What is the primary benefit of the public cloud model?",
    "answers": [
      { "text": "High levels of customization", "correct": false },
      { "text": "Complete isolation for security-sensitive workloads", "correct": false },
      { "text": "Scalability and cost-effectiveness for a broad audience", "correct": true },
      { "text": "Guaranteed uptime without failures", "correct": false },
      { "text": "Full control over all infrastructure components", "correct": false }
    ]
  },
  {
    "question": "Which of the following is true about SaaS applications?",
    "answers": [
      { "text": "They require significant installation on client machines.", "correct": false },
      { "text": "They provide complete access to infrastructure management.", "correct": false },
      { "text": "They are typically accessed via web browsers.", "correct": true },
      { "text": "They are only available for internal business networks.", "correct": false },
      { "text": "They are limited to non-critical applications.", "correct": false }
    ]
  },
  {
    "question": "What is the primary role of virtualization in cloud computing?",
    "answers": [
      { "text": "Reduces application development time", "correct": false },
      { "text": "Manages physical security of servers", "correct": false },
      { "text": "Enables resource pooling and abstraction", "correct": true },
      { "text": "Ensures measured billing for services", "correct": false },
      { "text": "Prevents data breaches", "correct": false }
    ]
  },
  {
    "question": "Which of the following is NOT an example of Infrastructure as a Service (IaaS)?",
    "answers": [
      { "text": "Amazon EC2", "correct": false },
      { "text": "Google Docs", "correct": true },
      { "text": "Rackspace", "correct": false },
      { "text": "GoGrid", "correct": false },
      { "text": "Microsoft Azure (IaaS features)", "correct": false }
    ]
  },
  {
    "question": "Which deployment model is best suited for organizations with shared goals, such as educational institutions?",
    "answers": [
      { "text": "Public cloud", "correct": false },
      { "text": "Private cloud", "correct": false },
      { "text": "Hybrid cloud", "correct": false },
      { "text": "Community cloud", "correct": true },
      { "text": "Cloud bursting", "correct": false }
    ]
  },
  {
    "question": "What is the main drawback of relying solely on public cloud providers?",
    "answers": [
      { "text": "High customization capabilities", "correct": false },
      { "text": "Security and privacy concerns", "correct": true },
      { "text": "Guaranteed infrastructure control", "correct": false },
      { "text": "Lack of resource pooling", "correct": false },
      { "text": "Limited network access", "correct": false }
    ]
  }
]




You said:
continue in same format

Infrastructure as a Service allows customers to control the resources provisioned but not the physical infrastructure. (T)
Hybrid clouds can only combine private and public clouds. (F)
Resource pooling in cloud computing means a fixed set of resources for all users. (F)
Measured service is a feature that promotes cost-efficiency in cloud computing. (T)
Community clouds are always managed by third-party vendors. (F)
Private clouds offer higher security compared to public clouds. (T)
Elasticity ensures that resources can scale up or down based on demand. (T)
Platform as a Service (PaaS) allows customers to manage the underlying hardware. (F)
The SaaS model requires significant management effort from the customer. (F)
Virtual servers in IaaS can be used to mimic traditional datacenters. (T)
ChatGPT said:

json
Copy code
[
  {
    "question": "Infrastructure as a Service allows customers to control the resources provisioned but not the physical infrastructure.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Hybrid clouds can only combine private and public clouds.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Resource pooling in cloud computing means a fixed set of resources for all users.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Measured service is a feature that promotes cost-efficiency in cloud computing.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Community clouds are always managed by third-party vendors.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Private clouds offer higher security compared to public clouds.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Elasticity ensures that resources can scale up or down based on demand.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "Platform as a Service (PaaS) allows customers to manage the underlying hardware.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "The SaaS model requires significant management effort from the customer.",
    "answers": [
      { "text": "True", "correct": false },
      { "text": "False", "correct": true }
    ]
  },
  {
    "question": "Virtual servers in IaaS can be used to mimic traditional datacenters.",
    "answers": [
      { "text": "True", "correct": true },
      { "text": "False", "correct": false }
    ]
  },
  {
    "question": "A startup wants to build a custom application and needs a ready-made development environment with built-in storage and networking. Which cloud model is most appropriate?",
    "answers": [
      { "text": "SaaS", "correct": false },
      { "text": "PaaS", "correct": true },
      { "text": "IaaS", "correct": false },
      { "text": "Public cloud", "correct": false },
      { "text": "Private cloud", "correct": false }
    ]
  },
  {
    "question": "An organization needs to create a secure environment for its internal data processing and wants full control over the infrastructure. Which deployment model should they choose?",
    "answers": [
      { "text": "Public cloud", "correct": false },
      { "text": "Private cloud", "correct": true },
      { "text": "Hybrid cloud", "correct": false },
      { "text": "Community cloud", "correct": false },
      { "text": "SaaS", "correct": false }
    ]
  },
  {
    "question": "Which feature of cloud computing would be beneficial for a retail company facing fluctuating demands during holiday seasons?",
    "answers": [
      { "text": "Measured service", "correct": false },
      { "text": "Resource pooling", "correct": false },
      { "text": "Rapid elasticity", "correct": true },
      { "text": "Broad network access", "correct": false },
      { "text": "Static resource allocation", "correct": false }
    ]
  },
  {
    "question": "A government agency wants to adopt cloud computing while ensuring compliance with specific regulations. Which deployment model is most suitable?",
    "answers": [
      { "text": "Public cloud", "correct": false },
      { "text": "Private cloud", "correct": false },
      { "text": "Community cloud", "correct": true },
      { "text": "Hybrid cloud", "correct": false },
      { "text": "Cloud bursting", "correct": false }
    ]
  },
  {
    "question": "An enterprise wants to leverage the cost benefits of public clouds while maintaining critical applications in-house. This is best achieved by:",
    "answers": [
      { "text": "Public cloud only", "correct": false },
      { "text": "Private cloud only", "correct": false },
      { "text": "Community cloud", "correct": false },
      { "text": "Hybrid cloud", "correct": true },
      { "text": "SaaS", "correct": false }
    ]
  },
  {
    "question": "A business relies on Google Docs and Gmail for their operations. This is an example of utilizing which cloud model?",
    "answers": [
      { "text": "SaaS", "correct": true },
      { "text": "PaaS", "correct": false },
      { "text": "IaaS", "correct": false },
      { "text": "Public cloud", "correct": false },
      { "text": "Private cloud", "correct": false }
    ]
  },
  {
    "question": "A healthcare organization sharing patient data with partner hospitals over a secure platform is utilizing which deployment model?",
    "answers": [
      { "text": "Public cloud", "correct": false },
      { "text": "Private cloud", "correct": false },
      { "text": "Community cloud", "correct": true },
      { "text": "Hybrid cloud", "correct": false },
      { "text": "Cloud bursting", "correct": false }
    ]
  },
  {
    "question": "Which cloud computing characteristic is essential for billing customers accurately for their resource usage?",
    "answers": [
      { "text": "Rapid elasticity", "correct": false },
      { "text": "Measured service", "correct": true },
      { "text": "On-demand self-service", "correct": false },
      { "text": "Broad network access", "correct": false },
      { "text": "Resource pooling", "correct": false }
    ]
  }
];
