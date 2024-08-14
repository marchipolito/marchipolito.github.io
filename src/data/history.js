import portfolio from "../images/portfolio.png";
import hackerman from "../images/Hackers-Hackerman.webp";
import hackermanGif from "../images/hackerman-kung-fury.gif";
import bruce from "../images/bruce_almighty.webp";
import bruceGif from "../images/bruce-almighty-jim-carrey.gif";
import rick from "../images/rick_morty.jpeg";
import rickGif from "../images/rick-and-morty-rtj.gif";
import alwaysBe from "../images/always_be_my_maybe.jpeg";
import keanuGif from "../images/keanu.gif";
import fnf from "../images/fastnfurious.png";
import fnfGif from "../images/fast-and-furious-tokyo-drift.gif";
import mha from "../images/mha.webp";
import mhagif from "../images/mhagif.gif";
import wreckit from "../images/wreckit.avif";
import mashle from "../images/Mashle_Main.webp";
import mitchellsGif from "../images/mitchells.gif";
import ipman from "../images/ip_man_img.jpeg";
import ipmanGif from "../images/ip_man.gif";
import rushHour from "../images/rushHour.avif";
import rushHourGif from "../images/rushHourGif.gif";
import theBat from "../images/thebat.avif";
import batmobileGif from "../images/batmobile.gif";
import himym from "../images/himym.jpeg";
import himymGif from "../images/himymGif.webp";

const data = {
  history: {
    experience: {
      tealium3: {
        company: "Tealium",
        role: "Software Engineer",
        years: 4,
        months: 8,
        skills: ["React", "React Hooks", "Jest"],
        tools: ["Postman", "Storybook", "Figma", "Jenkins", "JIRA"],
        sequalNum: 3,
        isCurrent: true,
        image: hackerman,
        preview: hackermanGif,
        synopsis: {
          summary:
            "Got a feature in mind? I got you covered! Delivering performant and delightful user experiences to a codebase near you.",
          duties: [
            "Lead developer of new Tealium iQ profile diff comparison slideout view",
            "Lead developer of new Tealium iQ profile publishing slideout view",
            "Lead developer of Tealium iQ profile switcher",
            "Implemented user configurable session timeout setting",
            "Implementing new features and designs using React and React hooks",
            "Updating and replacing legacy components with react components",
            "Maintaining 80% or more jest test coverage for all new React based code",
            "Conduct code reviews",
            "Collaborate with Product and Design in weekly design syncs to ensure we are building efficient and user friendly features",
          ],
        },
        match: "98%",
        releaseDate: "2023",
      },
      tealium2: {
        company: "Tealium",
        role: "S.D.E.T.",
        years: 1,
        months: 4,
        skills: ["CypressJS", "JavaScript", "Automation"],
        tools: ["JIRA", "Jenkins", "Postman", "CucumberStudio"],
        sequalNum: 2,
        isCurrent: false,
        image: bruce,
        preview: bruceGif,
        synopsis: {
          summary:
            "Works on my machine...said every developer ever...If you got bugs, I'll help you track them down.",
          duties: [
            "Develop and maintain test automation suite using Cypress JavaScript Automation Framework",
            "Maintain a growing test suite of 1700+ integration tests",
            "Test network requests are handled properly by manipulating the requests and responses",
            "Assist DevOps team in determining the cause of test automation failures during code merges and provide hot fixes if possible",
            "Continually identify areas of test coverage that need improvement",
            "Review visual snapshot test results through Percy",
            "Design and develop testing strategies for the start of a development sprint",
            "Communicate with stakeholders, the amount of test coverage available in order to focus manual testing efforts",
            "Assist Front-end developers in troubleshooting test automation failures in their individual development branches",
            "Assist developers who are new to Cypress automation framework in testing best practices",
            "Create and update test framework utilities to ease test automation creation among all of the Front-end developers",
            "Commit changes to Front-end code base to add test only data attributes to web elements",
            "Create and update testing fixtures to keep test data current",
            "Document and log valid bugs to JIRA bug tracker",
            "Implement JSON schema based data validation for Cypress integration tests",
          ],
        },
        match: "95%",
        releaseDate: "2020",
      },
      tealium1: {
        company: "Tealium",
        role: "QA Engineer",
        years: 2,
        months: 3,
        skills: ["RestAPI", "Troubleshooting", "Testing"],
        tools: ["CucumberStudio", "JIRA", "Jenkins", "Postman"],
        sequalNum: 1,
        isCurrent: false,
        image: rick,
        preview: rickGif,
        synopsis: {
          summary:
            "The classic, manual way of doing things. Ensuring key areas are thoroughly tested one at a time. ",
          duties: [
            "Create and maintain test cases for Tealium’s suite of products",
            "Perform cross-browser testing as well as multi-resolution testing",
            "Perform manual API testing",
            "Created and documented testing procedures for REST APIs",
            "Created web based tool to assist with the testing of REST API calls",
            "Ensure data accuracy when storing data into MongoDB or MySQL databases",
            "Collaborate with automation specialists to update or create new tests for regression suites",
            "Perform verification of newly released code and features",
            "Assist the DevOps department with product troubleshooting and verifying production bugs",
            "Assist developers with obtaining necessary server/client logs needed for software interaction troubleshooting",
            "Create new training documents for QA cross training",
            "Provide developers with test accounts when needed",
          ],
        },
        match: "90%",
        releaseDate: "2018",
      },
      // voxox3: {
      //   company: "Voxox",
      //   role: "S.D.E.T.",
      //   years: 3,
      //   months: 11,
      //   skills: ["Automation", "Mobile Testing", "Regression Testing"],
      //   sequalNum: 3,
      //   isCurrent: false,
      // },
      voxox2: {
        company: "Voxox",
        role: "S.D.E.T.",
        years: 2,
        months: 7,
        skills: ["Automation", "Mobile", "Testing"],
        tools: ["TestRail", "JIRA", "Appium"],
        sequalNum: 2,
        isCurrent: false,
        image: alwaysBe,
        preview: keanuGif,
        synopsis: {
          summary: "",
          duties: [
            "Responsible for maintaining and updating test cases for various Business calling platforms",
            "Perform cross­browser testing as well as multi­resolution testing",
            "Reported over 900 issues into JIRA defect tracking system",
            "Completed over 90 after hours code releases",
            "Completed over 230 hours on after hours code releases",
            "Assist the Support department with product troubleshooting and verifying production bugs",
            "Provide Sales department with product clarifications and functional limitations",
            "Assist developers with obtaining necessary server/client logs needed for software interaction troubleshooting",
            "Participate in after hours code deployments and ensuring calling platforms remain functional",
            "Assist the Voice Operations department with qualifying existing calling features on new hardware",
            "Configure PBX system for SIP Trunk testing",
            "Developed interactive automated call testing suite for calling platforms",
            "Create training documents for QA cross training",
            "Provide developers with test accounts when needed",
            "Participate in multi­department planning meetings for major environmental changes",
            "Implemented Jenkins Continuous Integration server to handle daily acceptance testing of production products",
            "Designed automated tools to assist with basic acceptance testing following code deployment",
            "Implemented Nightwatchjs for web automation testing",
            "Established and implemented testing of Business calling platforms",
          ],
        },
        match: "90%",
        releaseDate: "2016",
      },
      voxox1: {
        company: "Voxox",
        role: "Tier 2 Support",
        years: 1,
        months: 9,
        skills: ["Troubleshooting", "vPBX", "Networking"],
        tools: ["WireShark", "Ubuntu", "Remote Desktop"],
        sequalNum: 1,
        isCurrent: false,
        image: fnf,
        preview: fnfGif,
        synopsis: {
          summary:
            "Having trouble installing your phone system? Are you experiencing choppy audio? I can help with that!",
          duties: [
            "Guide end users with over the phone installations of their customizable PBX system",
            "Diagnose network configuration issues",
            "Collaborate with ISPs to ensure accurate network information is used",
            "Remotely configure Polycom devices and Adtran routers",
          ],
        },
        match: "90%",
        releaseDate: "2014",
      },
    },
    education: {
      colemanUni3: {
        company: "Coleman University",
        school: "Coleman University",
        role: "Bachelor's degree in Network Securtiy",
        degree: "Bachelor's",
        type: "Network Security",
        image: wreckit,
        preview:
          "https://media.tenor.com/48_84rqqg_cAAAAC/ralph-breaks-the-internet.gif",
        releaseDate: "2012",
      },
      colemanUni2: {
        company: "Coleman University",
        school: "Coleman University",
        role: "Bachelor's degree in Computer Networking",
        degree: "Bachelor's",
        type: "Computer Networking",
        image: ipman,
        preview: ipmanGif,
        releaseDate: "2012",
      },
      colemanUni1: {
        company: "Coleman University",
        school: "Coleman University",
        role: "Associate's degree in Computer Systems Networking and Telecommunications",
        degree: "Associate's",
        type: "Computer Systems Networking and Telecommunications",
        image:
          "https://static01.nyt.com/images/2021/04/28/arts/mitchells1/mitchells1-videoSixteenByNineJumbo1600.jpg",
        preview: mitchellsGif,
        releaseDate: "2011",
      },
      NTHS: {
        company: "NTHS",
        school: "Coleman University",
        role: "National Technical Honor Society",
        degree: "Associate's",
        type: "Computer Systems Networking and Telecommunications",
        image: rushHour,
        preview: rushHourGif,
      },
      Linux: {
        company: "CompTIA",
        school: "Linux+",
        role: "CompTIA Linux+",
        degree: "Associate's",
        type: "Computer Systems Networking and Telecommunications",
        image: theBat,
        preview: batmobileGif,
        releaseDate: "2010",
      },
      Network: {
        company: "CompTIA",
        school: "Network+",
        role: "CompTIA Network+",
        degree: "",
        type: "",
        image: himym,
        preview: himymGif,
        releaseDate: "2010",
      },
      Security: {
        company: "CompTIA",
        school: "Security+",
        role: "CompTIA Security+",
        degree: "",
        type: "",
        image: mha,
        preview: mhagif,
        releaseDate: "2010",
      },
      Aplus: {
        company: "CompTIA",
        school: "A+",
        role: "CompTIA A+",
        degree: "Associate's",
        type: "Computer Systems Networking and Telecommunications",
        image: mashle,
        preview:
          "https://64.media.tumblr.com/84b29ff6297a45d23d59528258f20a40/23654ab315719c47-42/s540x810/dafb22430ee1d9a09dfee9bf7ea0113cd03487a6.gifv",
        releaseDate: "2010",
      },
      // Win7: {
      //   company: "Microsoft",
      //   school: "",
      //   role: "Windows 7",
      //   degree: "Associate's",
      //   type: "Computer Systems Networking and Telecommunications",
      //   image:
      //     "https://static01.nyt.com/images/2021/04/28/arts/mitchells1/mitchells1-videoSixteenByNineJumbo1600.jpg",
      //   preview: mitchellsGif,
      // },
    },
    projects: {
      portfolio: {
        company: "Marc Hipolito",
        role: "Portfolio Site",
        image: portfolio,
        synopsis: {
          summary:
            "A demonstration of React and React Hooks. All reuseable components are powered by a history object which makes updating data a breeze.",
        },
        skills: ["React", "Arrays", "Objects"],
        tools: ["Styled Components", "React Hooks", "React Context"],
      },
      // memoryGame: {},
      // dsa: {},
    },
    skills: {},
  },
  aboutMe: {
    name: "Marc Hipolito",
    synopsis: {
      summary:
        "Marc Hipolito is many things, idle is not one of them. Always wanting to learn and do more, he sets out on a journey to be part of the very best. All while delivering delightful user experiences and scalable products.",
      duties: [],
    },

    match: "98%",
    releaseDate: "2023",
    skills: ["React", "Jest", "Agile", "Research", "CypressJS", "HTML", "CSS"],
    tools: ["Postman", "Storybook", "Figma", "JIRA", "IDE", "OSX", "Linux"],
    role: "Frontend Developer",
  },
  categories: [
    { experience: "Experience" },
    { education: "Education, Awards, and Certifications" },
    { projects: "Projects" },
    // { skills: "Skills" },
  ],
};
export default data;
