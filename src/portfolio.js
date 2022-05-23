/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Susheel Gounder",
  title: "Hi all, I'm Susheel",
  subTitle: emoji(
    "An enthusiastic learner with more than 3+ years of experience in Software development. In my learning career, I have gained technical expertise in Golang, Vuejs, Nodejs, Python, MySQL, MongoDB, GIT, REST, GRPC, KAFKA, Docker, (Amazon Web Services) AWS, Datadog, Rollbar, JIRA, Redis, CI/CD, Design Pattern, Data modeling, Test Driven Development(TDD), Shell Scripting, PHP, CSS, NGINX, APACHE, Elastic Search. Current interests include Machine Learning, Data Analytics, Artificial Intelligence, and Natural language Processing."
  ),
  resumeLink:
    "https://drive.google.com/file/d/11_vGt6z_5LkYRC7gdva2n18SRmf7v3ZA/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/susheelg1197",
  linkedin: "https://www.linkedin.com/in/susheel-gounder-31b7b2115/",
  gmail: "susheelg1107@gmail.com",
  facebook: "https://www.facebook.com/people/Susheel-Gounder/100010416847628/",
  medium: "https://medium.com/@susheelg1107",
  stackoverflow: "https://stackoverflow.com/users/16258981/susheel-gounder",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CURIOUS DEVELOPER AND RESEARCHER WHO WANTS TO EXPLORE EVERY TECHNOLOGICAL INVENTIONS AND DISCOVERIES",
  skills: [
    emoji(
      "⚡ Develop highly optimized server APIs with minimum response time "
    ),
    emoji(
      "⚡ Data modelling and system design"
    ),
    emoji("⚡ Design and build Single Page Web Applications ( SPA ) using VUEJS"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Golang",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Nginx",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },   
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "International Institute Of Information Technology, Pune",
      logo: require("./assets/images/IsquareItLogo.png"),
      subHeader: "Bachelor of Engineering (B.E.) in Information Technology",
      duration: "July 2016 - June 2019",
      desc: "Participated in various extra curricular events, organized events as a member of ACM Student Chapter. Developed various projects and founded a startup.",
      descBullets: [
        "Winner in the 2019 Enterpreneurship Challenge",
        "Ranked Top 50 in NES National Level Innovative Awards",
        "Worked as a Video Editor in ACM Student Chapter"
      ]
    },
    {
      schoolName: "Government Polytechnic Jalna",
      logo: require("./assets/images/msbte.png"),
      subHeader: "Diploma in Computer Engineering",
      duration: "August 2013 - June 2016",
      desc: "Ranked in top 4 in the program. Took courses about Database Management Systems, Data Structures and Algorithms, Operating Systems....",
      descBullets: ["Winner in the University Level Paper Presentation Competition","Worked on a Web based Project named 'Helping Hand' "]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Database Management",
      progressPercentage: "85%"
    },
    {
      Stack: "Data Analysis and Data Mining",
      progressPercentage: "80%"
    },
    {
      Stack: "Front End Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Server Monitoring and Optimizations",
      progressPercentage: "70%"
    },
    {
      Stack: "Machine Learning and AI",
      progressPercentage: "40%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer - Backend",
      company: "People Interactive",
      companylogo: require("./assets/images/shaadi.png"),
      date: "May 2021 – Present",
      desc: "",
      descBullets: [
        "Designed and Developed a microservice in Golang to manage SMS services distribution among 12 SMS vendors for 1.2 million        requests/day with automatic vendor toggling and retries.",
        "Integrated enhanced signals from microservice into Google’s firebase that reduced the CPA(cost-per-action) of UAC campaigns        to ~10-30% which in turn saved around ₹70k/day",
      "Performed optimizations and upgrades in 6 GO services eventually saving ~700$/month."
      ]
    },
    {
      role: "Full Stack Developer",
      company: "MKCL",
      companylogo: require("./assets/images/mkcl.jpeg"),
      date: "Jul 2019 – April 2021",
      desc: "",
      descBullets:[
        "Developed a seat allocation matrix engine for project FYJC20 (junior college admissions) in Golang and VueJs that allocated ~3        Lakh students.",
     "Eliminated the server downtime issue and decreased the overall node build time to ~2min from ~11min by implementing a     thread-based utility in Go that managed 8-10 concurrent node      processes.",
     "“Innovated the innovation day” by advising, designing, and      building a web application called Idea repository to drive     innovation in the organization"
      ]
    },
    {
      role: "Co-Founder",
      company: "Techno-Agri (Agrobot)",
      companylogo: require("./assets/images/Agrobot.png"),
      date: "June 2018 – April 2019",
      desc: "",
      descBullets:[
        "Led a group of 8 members and developed a Chatbot using NLP in python and android (Kotlin) for UI.",
        "Text analysis, extraction, and transformation from ~1TB of         sporadic data-5 lakh calls/day received from call centers"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME COMPANY PROJECTS THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/shaadi.png"),
      projectName: "Shaadi.com",
      projectDesc: "India's No.1 Matrimony & Matchmaking Service with over 35 million verified users",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.shaadi.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/AppStudio.png"),
      projectName: "ApplicationStudio",
      projectDesc: "A single place to build and deploy your web based application",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://cs.mkcl.org/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Data Analytics Professional Certiﬁcate",
      subtitle:
        "Completed eight courses, developed by Google, that include         hands-on, practice-based assessments and are designed to prepare        them for introductory-level roles in Data Analytics",
      image: require("./assets/images/googlecerts.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://coursera.org/verify/professional-cert/PMVG4MSLN8SP"
        },
      ]
    },
    {
      title: "MTA: Database Fundamentals - Certified 2017",
      subtitle:
        "Demonstrated introductory knowledge of and skills with databases, including relational databases, such as Microsoft SQL Server",
      image: require("./assets/images/mtacert.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.credly.com/badges/b397cd05-7972-4b68-91c8-3e8259b71dac"
        }
      ]
    },

    {
      title: "Tools for Data Science",
      subtitle: "Demonstrated skill and understanding of how popular data science tools such as the Jupyter Notebook, RStudio, Zeppelin and Watson Studio",
      image: require("./assets/images/ibmcert.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.credly.com/badges/10beff80-e4d9-40ee-a933-e507f0aaf3cc"
        }
      ]
    },
    {
      title: "Data Science Orientation",
      subtitle: "Demonstrated good understanding of why data science, artificial intelligence (AI) and machine learning are revolutionizing the way people do business and research around the world.",
      image: require("./assets/images/ibmcert2.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.credly.com/badges/1b37a085-49e2-4632-af4c-3e6a5a7c08aa"
        }
      ]
    },
    {
      title: "GitLab Certified Associate      ",
      subtitle: "Able to explain what GitLab is and why teams use it, perform basic Git commands for branching, merging, and remote work, and apply fundamental concepts and skills using GitLab within the DevOps lifecycle.",
      image: require("./assets/images/gitlabcert.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://badgr.com/public/assertions/BypUgr3bSYqmmLlQpJ7IFA"
        }
      ]
    },
    {
      title: "The Data Scientist’s Toolbox",
      subtitle: "Understand the data, problems, and tools that data analysts use.      ",
      image: require("./assets/images/johnhopkins.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/2EYDWQJ7D9Y8"
        }
      ]
    },
    {
      title: "Machine Learning",
      subtitle: "Skills gained Logistic Regression,      Artificial Neural Network,      Machine Learning (ML) Algorithms,      Machine Learning      ",
      image: require("./assets/images/stanford.jpeg"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.coursera.org/account/accomplishments/verify/B5HKNHE6X886"
        }
      ]
    },
    {
      title: "Social Science Research Network      ",
      subtitle: "Agrobot: An Agricultural Advancement to Enable Smart Farm Services Using NLP",
      image: require("./assets/images/ssrn.svg"),
      footerLink: [
        {
          name: "View Downloads and Views",
          url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3890591"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: true, // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@susheelg1107/search-as-you-type-aws-opensearch-elasticsearch-8c17dd945b2a",
      title: "Search as you type….. (AWS OpenSearch/ElasticSearch)",
      description:
        "Enhanced way of real-time suggestions for search queries using AWS OpenSearch/ElasticSearch",
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Agrobot Video for NES Innovation Awards",
      subtitle: "AGROBOT | AN EXPERT FARMER",
      slides_url: "https://www.youtube.com/watch?v=CN75Gw8Mch0"    },
      {
        title:"Presentation on Golang Scheduler",
        subtitle:"MKCL Presentation Session",
        slides_url:"https://drive.google.com/file/d/1IKtZLdrJMon84-xDzFlr1dPhIi8RJUWb/view?usp=sharing"
      }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:"Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8552920929",
  email_address: "susheelg1107@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "susheeldbest", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
