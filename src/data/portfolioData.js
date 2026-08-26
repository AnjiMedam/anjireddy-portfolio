// Basic professional information
export const profile = {
  name: "Anjireddy Medam",
  role: "Software Development Engineer",

  summary:
    "Software Development Engineer experienced in building enterprise web applications, REST APIs, data-processing solutions, and business-critical applications.",
};

// Core technologies shown on the Home page
// Keep this list short because Home should give a quick overview.
export const homeSkills = [
  "Python",
  "FastAPI",
  "Django",
  "React.js",
  "Oracle APEX & ApexLang",
  "SQL",
  "JavaScript",
];

// Complete technical skills used on the Skills page
export const skills = {
  languages: [
    "Python",
    "JavaScript",
    "SQL",
    "CSS",
  ],

  frameworks: [
    "FastAPI",
    "Django",
    "React.js",
  ],

  toolsAndPlatforms: [
    "Oracle APEX",
    "APEXLang",
    "Git",
    "MongoDB",
    "PL/SQL",
    "VS Code",
    "REST APIs",
  ],
};

// Professional experience
export const experience = [
  {
    company: "Decimal Point Analytics Pvt. Ltd.",
    role: "Software Development Engineer",
    period: "Mar 2024 — Dec 2025",

    responsibilities: [
      "Developed and maintained enterprise web applications using Oracle APEX, Django, FastAPI, and Python.",

      "Designed responsive user interfaces and implemented scalable backend solutions for business-critical applications.",

      "Built and customized Interactive Grids, Forms, Reports, Dashboards, and role-based access control systems in Oracle APEX.",

      "Developed REST API integrations and automated data-processing workflows across multiple applications.",

      "Worked extensively with SQL, PL/SQL, JavaScript, and Oracle Database for application development and optimization.",

      "Developed interactive graph analytics and visualization modules for complex business relationship analysis and large-scale datasets.",

      "Participated in requirement gathering, development, testing, deployment, and production support activities.",
    ],
  },
];


// Portfolio projects
export const projects = [
  {
    title: "Automated Real-Time Data Scraping & Processing Pipeline",

    category: "Python",

    description:
      "Developed an automated pipeline to extract, clean, validate, and process real-time market data from multiple sources.",

    responsibilities: [
      "Extracted, cleaned, validated, and processed real-time market data from multiple sources.",
      "Implemented data transformation and quality-check mechanisms for analytics readiness.",
      "Designed automated object-storage uploads with organized archival structures.",
      "Delivered a reliable data-processing system supporting downstream business applications.",
    ],

    technologies: [
      "Python",
      "Data Processing",
      "Object Storage",
    ],
  },

  {
    title: "Multi-Role Operational Contract Management Platform",

    category: "Oracle APEX",

    description:
      "Developed a comprehensive role-based contract management platform with dynamic dashboards.",

    responsibilities: [
      "Implemented user, role, tenant, and permission management modules.",
      "Built notification systems, custom validations, and advanced JavaScript-based interactions.",
      "Designed intelligent navigation and access-control mechanisms for different user roles.",
    ],

    technologies: [
      "Oracle APEX",
      "JavaScript",
      "PL/SQL",
      "Role-Based Access Control",
    ],
  },

  {
    title: "Rent Management Portal",

    category: "Django",

    description:
      "Developed a full-scale rent management system with role-based access control.",

    responsibilities: [
      "Integrated OCI Object Storage for secure document management.",
      "Automated Excel and PDF processing workflows.",
      "Implemented rental calculations and operational automation features to improve business efficiency.",
    ],

    technologies: [
      "Django",
      "Python",
      "OCI Object Storage",
      "Excel",
      "PDF Processing",
    ],
  },

  {
    title: "Dynamic Contract Intelligence Dashboard",

    category: "Oracle APEX",

    description:
      "Developed an end-to-end contract intelligence dashboard using Oracle APEX.",

    responsibilities: [
      "Implemented editable Interactive Grids with multi-row operations and advanced data management features.",
      "Built secure document upload and download functionality with role-based access controls.",
      "Designed responsive dashboards providing real-time contract visibility and operational insights.",
    ],

    technologies: [
      "Oracle APEX",
      "Interactive Grid",
      "JavaScript",
      "PL/SQL",
      "Role-Based Access Control",
    ],
  },
];

// Education
export const education = [
  {
    institution: "Parul University",
    degree: "Bachelor of Technology — Computer Science Engineering",
    period: "June 2019 — April 2023",
    score: "CGPA 8.19",
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate — MPC",
    period: "March 2019",
    score: "9.82",
  },
];

// Certifications
export const certifications = [
  {
    name: "Oracle APEX Cloud Developer Professional",
    year: "2025",
  },
  {
    name: "Oracle Cloud Infrastructure Foundation Associate",
    year: "",
  },
];


// Blog articles
// All article content is stored here so the Blog UI remains reusable.
export const blogPosts = [
  {
    // Unique URL identifier for this article.
    slug: "connect-oracle-apex-vscode-apexlang",

    // Article title displayed on the Blog card and article page.
    title: "Connect Oracle APEX to VS Code with APEXLang",

    // Article category used for filtering and display.
    category: "Oracle APEX",

    // Short description displayed on the Blog card.
    description:
      "A practical step-by-step guide to setting up Oracle APEX development with APEXLang and VS Code, starting with the Oracle Cloud environment.",

    // Publication information.
    date: "2026",

    // Estimated reading time.
    readTime: "8 min read",

    // Thumbnail used by the Blog card.
    thumbnail: "/apexlang-vscode.png",

    // Article sections.
    sections: [
      {
        // Step number displayed in the article.
        number: "01",

        // Step title.
        title: "Create an Autonomous AI Database",

        // Main explanation for this step.
        paragraphs: [
          "The first step is to create an Autonomous AI Database in Oracle Cloud Infrastructure. This database will be used as the database environment for the Oracle APEX and APEXLang development workflow.",

          "After signing in to Oracle Cloud Infrastructure, open the navigation menu and go to Oracle AI Database → Autonomous AI Database → Create Autonomous AI Database.",
        ],

        // Configuration sections used in this step.
        subsections: [
          {
            title: "Database Information",

            paragraphs: [
              "Enter the required database information such as the Display Name, Database Name, and Compartment.",
            ],

            points: [
              {
                title: "Display Name",
                description:
                  "Use a unique name that makes the database easy to identify in your OCI account.",
              },

              {
                title: "Database Name",
                description:
                  "Provide the database name required for your development environment.",
              },

              {
                title: "Compartment",
                description:
                  "Select the OCI compartment where the Autonomous AI Database will be created.",
              },
            ],
          },

          {
            title: "Workload Type",

            paragraphs: [
              "For this setup, Transaction Processing was selected as the workload type.",
            ],
          },

          {
            title: "Always Free",

            paragraphs: [
              "The Always Free option was enabled for this development environment.",
            ],
          },

          {
            title: "Database Version",

            paragraphs: [
              "The database version selected for this setup was Oracle Database 26ai.",
            ],
          },
        ],

        // Screenshots related to database creation.
        images: [
          {
            src: "/blog/oci-database-information.png",
            alt: "Oracle Cloud Autonomous AI Database configuration",
            caption:
              "Database information and workload configuration used during the setup.",
          },

          {
            src: "/blog/oci-database-options.png",
            alt: "Oracle Cloud database version and administrator configuration",
            caption:
              "Always Free, database version, and administrator configuration.",
          },
        ],
      },
      {
        // Step number displayed in the article.
        number: "02",

        // Step title.
        title: "Configure Network Access",

        // Main explanation.
        paragraphs: [
          "After configuring the database settings, configure network access so that the development machine can connect to the Autonomous AI Database.",

          "For this setup, access was restricted to allowed IP addresses and VCNs rather than allowing unrestricted access from the internet.",
        ],

        // Network configuration details.
        subsections: [
          {
            title: "Access Type",

            paragraphs: [
              "Select Secure access from allowed IPs and VCNs only. This restricts database access to the IP addresses and VCNs specified in the access control rules.",
            ],
          },

          {
            title: "Add the Development Machine IP",

            paragraphs: [
              "Add the public IP address of the development machine to the access control rule so that the machine can connect to the database.",
            ],

            points: [
              {
                title: "IP Notation Type",
                description:
                  "Select IP address as the notation type.",
              },

              {
                title: "IP Address",
                description:
                  "Enter the public IP address of the machine that will be used for development.",
              },

              {
                title: "Access Control Rule",
                description:
                  "Add the IP address to the database access control rules.",
              },
            ],
          },

          {
            title: "Important Note",

            paragraphs: [
              "The IP address used for development may change depending on the network connection. If the public IP changes, the corresponding network access rule may need to be updated.",
            ],
          },
        ],

        // Network configuration screenshot.
        images: [
          {
            src: "/blog/oci-network-access.png",
            alt: "Oracle Cloud Autonomous AI Database network access configuration",
            caption:
              "Network access configured to allow connections from the development machine.",
          },
        ],
      },

      {
        // Step 03
        number: "03",

        // Step title
        title: "Connect to the Autonomous Database",

        paragraphs: [
          "After the Autonomous AI Database instance has been created, open the database instance from the OCI console. In this setup, the database instance is named ANJIAPEXDEV.",

          "From the database details page, open Database Connection to access the connection information and download the Cloud Wallet. The wallet is required to establish a secure connection to the Autonomous Database from development tools such as Oracle SQL Developer for VS Code.",
        ],

        subsections: [
          {
            title: "Download the Cloud Wallet",

            paragraphs: [
              "Open Database Connection from the database instance and download the wallet file. Keep the downloaded wallet in a secure location because it contains the configuration required for connecting to the Autonomous Database.",
            ],
          },

          {
            title: "Open the APEX Environment",

            paragraphs: [
              "From the database instance, open the database action menu and select SQL. This opens the SQL Worksheet environment.",

              "From the SQL Worksheet interface, open the left-side menu and use the APEX link to access the Oracle APEX environment and continue with the APEX setup.",
            ],
          },
        ],

        images: [
          {
            src: "/blog/oci-download-wallet.png",

            alt: "Oracle Cloud database connection and wallet download",

            caption:
              "Open Database Connection from the Autonomous Database instance and download the Cloud Wallet.",
          },
        ],
      },

      {
        // Step 04
        number: "04",

        // Step title
        title: "Prepare Java 21 and SQLcl",

        paragraphs: [
          "Before configuring the development environment in VS Code, install Java 21 and SQLcl on the development machine.",

          "Java 21 provides the Java runtime required by Oracle development tools and related command-line utilities. SQLcl is Oracle's modern command-line interface for working with Oracle Database and is useful for database development and automation workflows.",
        ],

        subsections: [
          {
            title: "Install Java 21",

            paragraphs: [
              "Install Java 21 and make sure it is available from the system environment. This provides the Java runtime required by the Oracle development tooling used in the setup.",
            ],
          },

          {
            title: "Install SQLcl",

            paragraphs: [
              "Download and install SQLcl, Oracle's command-line interface for Oracle Database. SQLcl provides a convenient command-line environment for connecting to and working with Oracle Database.",
            ],
          },
        ],
      },

      {
        // Step 05
        number: "05",

        // Step title
        title: "Set Up the VS Code Development Environment",

        paragraphs: [
          "Create a dedicated project folder for the Oracle APEX and APEXLang development environment. For example, create a folder named Oracle_APEXLang and open the folder in VS Code.",

          "Next, open the VS Code Extensions view and install the Oracle SQL Developer extension for VS Code. Additional AI-assisted development extensions such as Codex or a cloud AI extension can also be installed if they are available through your development setup.",
        ],

        subsections: [
          {
            title: "Create the Project Folder",

            paragraphs: [
              "Create a folder such as Oracle_APEXLang and open it as the workspace in VS Code. Keeping the database development files in a dedicated workspace makes the project easier to organize and maintain.",
            ],
          },

          {
            title: "Install Oracle SQL Developer for VS Code",

            paragraphs: [
              "Open the Extensions view in VS Code and install Oracle SQL Developer for VS Code. After installation, the SQL Developer interface becomes available inside VS Code for managing Oracle Database connections and database objects.",
            ],
          },

          {
            title: "Create the Database Connection",

            paragraphs: [
              "Open the SQL Developer connection interface and create a new Oracle database connection. Select Cloud Wallet as the connection type.",

              "Choose the Cloud Wallet configuration file downloaded from OCI, select the appropriate database service, and provide the required schema username and password.",
            ],
          },
        ],

        images: [
          {
            src: "/blog/vs-database-connection.png",

            alt: "Oracle SQL Developer database connection in VS Code",

            caption:
              "Create an Oracle database connection in VS Code using the Cloud Wallet and database credentials.",
          },
        ],
      },

      {
        // Step 06
        number: "06",

        // Step title
        title: "Connect VS Code to Oracle APEX",

        paragraphs: [
          "After successfully creating the database connection, the Oracle database objects become available from the SQL Developer extension inside VS Code.",

          "Expand the connected database and locate the APEX section. This provides access to the Oracle APEX-related functionality available through the database connection.",
        ],

        subsections: [
          {
            title: "Locate APEX",

            paragraphs: [
              "From the database connection tree, find the APEX section and open its available actions. This is the starting point for connecting the VS Code development environment with the APEX application.",
            ],
          },
        ],
      },

      {
        // Step 07
        number: "07",

        // Step title
        title: "Generate the APEX Application",

        paragraphs: [
          "For the final setup, right-click the APEX section under the database connection and select Generate. VS Code will open the application generation form.",
        ],

        subsections: [
          {
            title: "Enter the Application Details",

            paragraphs: [
              "Provide the required APEX application information in the generation form. The form includes details such as the workspace, application alias, application name, and project folder.",
            ],
          },

          {
            title: "Generate the Application",

            paragraphs: [
              "After entering the required information, apply the configuration to generate the APEX application. Once the generation completes successfully, the application structure becomes available in the selected project folder.",
            ],
          },

          {
            title: "Verify the Generated Application",

            paragraphs: [
              "A successful setup will generate the expected APEX application pages and related project files. In this setup, pages such as Global, Home, and Login become available after the generation process.",
            ],
          },
        ],

        images: [
          {
            src: "/blog/vs-apex-application.png",

            alt: "Generate Oracle APEX application from VS Code",

            caption:
              "Generate the Oracle APEX application from the APEX section of the connected database.",
          },
        ],
      },

    ],
  },
];

// Live application information.
export const oracleApex = {
  title: "Enterprise Web Application",

  description:
    "A business application developed around Oracle Database, low-code development, and secure enterprise workflows.",

  url:
    "https://gbe045a40f3ced9-anjiapexdev.adb.ap-mumbai-1.oraclecloudapps.com/ords/r/anjiapex_ai/oracle-apexlang-ai/login",
};