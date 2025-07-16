import { client01, client02, client03, client04, client05, client06, client07, client08, capaybilities1, capaybilities2, capaybilities3, capaybilities4, project1, project2, project3, project4, project5, project6, project7, project8, project9, publication1, publication2, publication3, insights1, insights2, insights3, latest1, latest2, planetly, officevibe, nestle } from "@/public";
import phase1 from "@/public/phase1.png";
import phase2 from "@/public/phase2.png";
import phase3 from "@/public/phase3.png";
import phase4 from "@/public/phase4.png";
import phase5 from "@/public/phase5.png";
// Navbar
export const navbarItems = [
   {
      id: 1,
      title: "How It Works",
      href: "/how-it-works",
   },
   {
      id: 2,
      title: "About Us",
      href: "/about",
   },
   {
      id: 3,
      title: "Roadmap",
      href: "/roadmap",
   },
   {
      id: 4,
      title: "Whitepaper",
      href: "/whitepaper",
   },
   {
      id: 5,
      title: "Contact Us",
      href: "/contact",
   },
];

// Footer

export const footerItems = [
   {
      id: 1,
      title: "Twitter",
      href: "https://twitter.com/immutag",
   },
   {
      id: 2,
      title: "LinkedIn",
      href: "https://linkedin.com/company/immutag",
   },
   {
      id: 3,
      title: "Telegram",
      href: "https://t.me/immutag",
   },
   {
      id: 4,
      title: "Discord",
      href: "https://discord.gg/immutag",
   },
];

export const footernavbarItems = [
   {
      id: 1,
      title: "Home",
      href: "/",
   },
   {
      id: 2,
      title: "How It Works",
      href: "/how-it-works",
   },
   {
      id: 3,
      title: "About Us",
      href: "/about",
   },
   {
      id: 4,
      title: "Roadmap",
      href: "/roadmap",
   },
   {
      id: 5,
      title: "Whitepaper",
      href: "/whitepaper",
   },
   {
      id: 6,
      title: "Contact Us",
      href: "/contact",
   },
];

export const featuresItem = [
   {
      id: 1,
      title: "Proven Ownership",
      description: "Your tag is linked to a blockchain-verified NFT.",
   },
   {
      id: 2,
      title: "Theft Deterrent",
      description: "Harder for thieves to profit from stolen goods.",
   },
   {
      id: 3,
      title: "Faster Insurance Claims",
      description: "Verifiable history speeds up payouts.",
   },
   {
      id: 4,
      title: "Simplified Transfers",
      description: "Sell or gift your item with digital proof.",
   },
   {
      id: 5,
      title: "Law Enforcement Integration",
      description: "Streamlined checks for stolen assets.",
   },
];

export const supportedDevicesItem = [
   {
      id: 1,
      title: "Smartphones",
      description: "Secure your mobile devices with blockchain verification",
   },
   {
      id: 2,
      title: "Laptops",
      description: "Protect your computers and portable devices",
   },
   {
      id: 3,
      title: "E-bikes",
      description: "Secure electric bikes and scooters",
   },
   {
      id: 4,
      title: "Smartwatches",
      description: "Protect wearable technology and accessories",
   },
   {
      id: 5,
      title: "More categories launching soon",
      description: "Immutag is expanding to support additional device types.",
   },
];

export const roadmapItems = [
   {
      id: 1,
      phase: "Completed",
      title: "Foundation",
      items: [
         "LOX Network foundation established",
         "Initial blockchain integration", 
         "Partnerships with key manufacturers and insurers",
         "Successful proof-of-concept deployment"
      ]
   },
   {
      id: 2,
      phase: "Q3/Q4 2025",
      title: "Beta Launch",
      items: [
         "Completion of Immutag rebranding",
         "Token swap launch",
         "Beta testing of mobile and web applications",
         "Expansion of supported device categories"
      ]
   },
   {
      id: 3,
      phase: "Q1/Q2 2026", 
      title: "Official Launch",
      items: [
         "Official app launch",
         "Global partnership announcements",
         "Launch of developer APIs (immutag.link)",
         "Enhanced law enforcement and insurance integrations"
      ]
   },
   {
      id: 4,
      phase: "Future",
      title: "Expansion",
      items: [
         "Introduction of AI-driven theft detection",
         "Expansion into luxury goods and collectibles", 
         "Continuous platform improvements based on user feedback",
         "Establishment of a global DAO for governance"
      ]
   }
];

// services page

export const serviceProcessItems = [
   {
      id: 1,
      phase: "01. Phase",
      name: "Discovery",
      src: phase1,
      review: "We define your goals, get to know your audience, and understand the context. Through a process of exploration, investigation, and research, we seek the insights that inform our future decisions.",
      button: "read"
   },
   {
      id: 2,
      phase: "02. Phase",
      name: "Storytelling",
      src: phase2,
      review: "Based on the answers, previous drafts, and additional research, we will develop a foundation of the deck — the structure of the presentation. We build a tone of voice, flow, and narrative to engage our audience. Here we will win people's minds.",
      button: "read"
   },
   {
      id: 3,
      phase: "03. Phase",
      name: "Design",
      src: phase3,
      review: "We use design to guide our audience's attention and keep them engaged. It's not only what you want them to do, but also how you make them feel. We make sure the presentation wins people's hearts and leaves a perfect long-lasting impression.",
      button: "read"
   },
   {
      id: 4,
      phase: "04. Phase",
      name: "Feedback",
      src: phase4,
      review: "We want to stay on the same page. Hence, each phase wraps up presenting the work to you to collect and implement your feedback if such appears.",
      button: "read"
   },
   {
      id: 5,
      phase: "05. Phase",
      name: "Delivery",
      src: phase5,
      review: "We will carefully collect and prepare all the project files to ensure smooth future use.",
      button: "read"
   },
];


export const serviceCapaybilitiesItem = [
   {
      id: 1,
      src1: capaybilities1,
      title1: "RAISE FUNDS:",
      review: "We help manage investor expectations and secure financing for your business with an excellent investor deck.Having a good product or illuminating ideas is not enough anymore.Poor investor presentation may close the door to potential financing right away.In contrast, a properly made investor deck provides investors with clarity, evokes confidence, and leaves them craving for more.",
      subTitle: "Projects",
      links1: [
         {
            id: 1,
            title: "investor deck",
            href: "/"
         },
         {
            id: 2,
            title: "startup pitch",
            href: "/"
         },
      ],
      src2: capaybilities2,
      title2: "SELL PRODUCTS:",
      links2: [
         {
            id: 1,
            title: "business proposal",
            href: "/"
         },
         {
            id: 2,
            title: "company presentation",
            href: "/"
         },
         {
            id: 3,
            title: "product presentation",
            href: "/"
         },
         {
            id: 4,
            title: "sales deck",
            href: "/"
         },
         {
            id: 5,
            title: "service deck",
            href: "/"
         },
      ]
   },
   {
      id: 2,
      src1: capaybilities3,
      title1: "HIRE & MANAGE PEOPLE:",
      review: "We help manage investor expectations and secure financing for your business with an excellent investor deck.Having a good product or illuminating ideas is not enough anymore.Poor investor presentation may close the door to potential financing right away.In contrast, a properly made investor deck provides investors with clarity, evokes confidence, and leaves them craving for more.",
      subTitle: "Projects",
      links1: [
         {
            id: 1,
            title: "big news deck",
            href: "/"
         },
         {
            id: 2,
            title: "branded template",
            href: "/"
         },
         {
            id: 3,
            title: "onboarding presentation",
            href: "/"
         },
         {
            id: 4,
            title: "policy deck & playbook",
            href: "/"
         },
         {
            id: 5,
            title: "progress report",
            href: "/"
         },
      ],
      src2: capaybilities4,
      title2: "ADDITIONAL:",
      links2: [
         {
            id: 1,
            title: "agency",
            href: "/"
         },
         {
            id: 2,
            title: "branding",
            href: "/"
         },
         {
            id: 3,
            title: "corporate training",
            href: "/"
         },
         {
            id: 4,
            title: "redesign",
            href: "/"
         },
         {
            id: 5,
            title: "review",
            href: "/"
         },
      ]
   },
];

export const expectationsItems = [
   {
      id: 1,
      title1: "01",
      subTitle1: "Comunication",
      btn: "read",
      para1: "The relationship with the clients is our top priority. We put extra effort into keeping mutual respect, honesty, and clarity in the conversation. For each client, we develop a project view site in Notion to track milestones and see the thinking behind steps. You always know what and when we do, as you feel confident in the results we bring.",
   },
   {
      id: 2,
      title1: "04",
      subTitle1: "One point of contact",
      btn: "read",
      para1: "Every project is led by Ihor, the agency's founder and creative director. He ensures the whole project flows from start to finish. He puts together the right creative team for your specific project. You will always have this direct contact person available to speak your business language. He takes care of translating your business goals into the language of design for the team."
   },
   {
      id: 3,
      title1: "02",
      subTitle1: "Ukrainian Business",
      btn: "read",
      para1: "We are a Ukrainian-born business working mainly with international clients. And as Ukrainians, we offer an unshakable workforce that's proven it can handle anything. The international arena was our focus from the start. And each working day, we showed up as genuine innovators and Ukraine ambassadors. Part of our mission is to promote our homeland by doing the most incredible work we can, each project at a time.",
   },
   {
      id: 4,
      title1: "05",
      subTitle1: "Constantly Improving",
      btn: "read",
      para1: "We are passionate about creating industry-shifting presentations. And as the world around us, we constantly evolve and improve. Our growth is fueled by an innovative ecosystem designed for each team member to grow. We provide them with frequent pieces for training both on design craft and personal development. We are constantly looking for new ways to support our creatives and our community as for our clients."
   },
   {
      id: 5,
      title1: "03",
      subTitle1: "Holistic Approach",
      btn: "read",
      para1: "We simply ask lots of questions to understand your goals, business, and niche you operate. Our discovery process is essential as it informs our decisions throughout the project. Once we firmly define the goal, it is incredible to move towards that goal. That's why so much of our work is discovery, research, and asking good questions. The answers we get and the data we find go into the foundation of project success.",
   },
   {
      id: 6,
      title1: "06",
      subTitle1: "Limited Amount of Client",
      btn: "read",
      para1: "We believe it is vital to dedicate sole focus and undivided attention to each project. To add as much value as possible, we serve a limited amount of clients per month. We have a rule that we follow to choosing projects: our client understands the value of the presentation as a communication tool. We believe in their products or ideas. Together, we work to create positive change."
   },
];

export const achiveItems = [
   {
      id: 1,
      title1: ["100+"],
      title2: ["$280+"],
      subTitle1: "Clients from 17 Countries",
      subTitle2: "Millions raised for our clients",
   },
   {
      id: 2,
      title1: ["90%"],
      title2: ["98%"],
      subTitle1: "Of our clients come back",
      subTitle2: "Net Promoting Score",
   },
];


// presentation page

export const presentationProjectItem = [
   {
      id: 1,
      title: "fyde",
      src: project1,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "audit",
            href: "/services",
         },
         {
            id: 2,
            title: "copywriting",
            href: "services",
         },
         {
            id: 3,
            title: "sales deck",
            href: "services",
         },
         {
            id: 4,
            title: "slides design",
            href: "services",
         },
      ]
   },
   {
      id: 2,
      title: "trawa",
      src: project3,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "brand identity",
            href: "/services",
         },
         {
            id: 2,
            title: "design research",
            href: "services",
         },
         {
            id: 3,
            title: "investor deck",
            href: "services",
         },
      ]
   },
   {
      id: 3,
      title: "premium blend",
      src: project4,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "brand template",
            href: "/services",
         },
      ]
   },
   {
      id: 4,
      title: "planetly",
      src: project5,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "brand template",
            href: "/services",
         },
         {
            id: 2,
            title: "big news deck",
            href: "/services",
         },
         {
            id: 3,
            title: "branded template",
            href: "/services",
         },
         {
            id: 4,
            title: "investor deck",
            href: "/services",
         },
         {
            id: 5,
            title: "policy deck & playbook",
            href: "/services",
         },
         {
            id: 6,
            title: "sales deck",
            href: "/services",
         },
      ]
   },
   {
      id: 5,
      title: "black box",
      src: project8,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "investor deck",
            href: "/services",
         },
         {
            id: 2,
            title: "redesign",
            href: "/services",
         },
         {
            id: 3,
            title: "review",
            href: "/services",
         },
      ]
   },
   {
      id: 6,
      title: "vise",
      src: project2,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "agency",
            href: "/services",
         },
         {
            id: 2,
            title: "compony presentation",
            href: "services",
         },
      ]
   },
   {
      id: 7,
      title: "soft start",
      src: project9,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "brand template",
            href: "/services",
         },
         {
            id: 2,
            title: "sales desc",
            href: "/services",
         },
      ]
   },
   {
      id: 8,
      title: "officevibe",
      src: project7,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "brand template",
            href: "/services",
         },
      ]
   },
   {
      id: 9,
      title: "workiz easy",
      src: project6,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "onboarding presentation",
            href: "/services",
         },
         {
            id: 2,
            title: "policy deck & playbook",
            href: "/services",
         },
         {
            id: 3,
            title: "sales deck",
            href: "/services",
         },
      ]
   },
];


export const publicationItems = [
   {
      id: 1,
      title: "officevibe ppt template",
      src: publication1
   },
   {
      id: 2,
      title: "trawa energy pitch deck",
      src: publication2
   },
   {
      id: 3,
      title: "tech for ukraine",
      src: publication3
   },
];

// insights page constants

export const insightsPublicationItems = [
   {
      id: 1,
      title: "Sales calls?  Oh no!👀",
      src: insights1
   },
   {
      id: 2,
      title: "Are you trying to be the main character?",
      src: insights2
   },
   {
      id: 3,
      title: "New Top 7",
      src: insights3
   },
];

export const latestItemss = [
   {
      id: 1,
      href: "/",
      src: latest1,
      links: [
         {
            id: 1,
            title: "public speaking"
         },
         {
            id: 1,
            title: "storytelling"
         },
      ],
      title: "Presenting to an International Audience: <br/> Tips and Lessons Learned.",
      subTitle: "By Ihor Hulyahrodskyy",
      date: "26 May 2023"
   },
   {
      id: 2,
      href: "/",
      src: latest2,
      links: [
         {
            id: 1,
            title: "presentation template"
         },
      ],
      title: "Developing compony-wide presentation template for premium blend.",
      subTitle: "By Ihor Hulyahrodskyy",
      date: "07 Dec 2022"
   },
];

// workiz page constants
export const workizItem = [
   {
      id: 1,
      title: "office vibe",
      src: project7,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "brand template",
            href: "/services",
         },
      ]
   },
   {
      id: 2,
      title: "planetly",
      src: project5,
      href: "/case/",
      links: [
         {
            id: 1,
            title: "brand template",
            href: "/services",
         },
         {
            id: 2,
            title: "big news deck",
            href: "/services",
         },
         {
            id: 3,
            title: "branded template",
            href: "/services",
         },
         {
            id: 4,
            title: "investor deck",
            href: "/services",
         },
         {
            id: 5,
            title: "policy deck & playbook",
            href: "/services",
         },
         {
            id: 6,
            title: "sales deck",
            href: "/services",
         },
      ]
   },
];


// about page constants

export const aboutPartberItems = [
   {
      id: 1,
      src: planetly,
      title: "Planetly",
      para: "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership."
   },
   {
      id: 2,
      src: officevibe,
      title: "Officevibe",
      para: "Ochi has an impressive understanding of what's needed to do an effective presentation. The stakeholders at work said it's the best most complete PP template they've ever seen. Ochi delivered more than I was expecting and we were really surprised with the quality of his work. Will work with Ochi design again for sure!"
   },
   {
      id: 3,
      src: nestle,
      title: "Nestle",
      para: "This is just a great experience for us! As an established company, you operate within different industries and expect immediate input with a certain level of service. Ihor and the team delivered exactly that. Fantastic result, quick delivery time, and highly responsive. This team is a hidden gem. We've already started to outline our next projects for them."
   },
   // {
   //    id: 4,
   //    src: toyota,
   //    title: "Toyota",
   //    para: "Great work, great communication, and work ethic. Their skills, and understanding of project scope and subject matter - are simply unmatched. Looking very forward to working again soon."
   // },
   // {
   //    id: 5,
   //    src: lexus,
   //    title: "Lexus",
   //    para: "Thanks for your great work! The communication was excellent, the team was able to grasp in detail what we wanted and plastered it on the company presentation and sales deck. Their work is absolutely amazing."
   // },
   // {
   //    id: 6,
   //    src: aflorihtmic,
   //    title: "Aflorithmic",
   //    para: "Super responsive and quick. A charm to work with. Unfortunately, often designers are not like that and you end up losing a lot of time with briefings that don't lead anywhere. This is definitely not the case here. I'd work again with lhor and his team anytime!"
   // },
   // {
   //    id: 7,
   //    src: orderlion,
   //    title: "Orderlion",
   //    para: "The result was just amazing! For me, a designer is exceptional when you are so satisfied with the result that you want to look at it the whole day like a kid with a new toy. Ihor and his team delivered exactly that! They are very talented designers who understand the real business problem we are trying to solve and iterate over many drafts to achieve the best possible outcome. We are looking for a long-lasting working relationship!"
   // },
   // {
   //    id: 8,
   //    src: blackBox,
   //    title: "BlackBox",
   //    para: "They nailed what our product was all about. We found their ability to workshop all the angles and take on feedback was great and it shows in the final product. Everything moved with a milestone dynamic brief via Notion which was handy to track progress. We're very happy with the process and the final product. All was handled well and professionally."
   // },
];

// contact page constants

export const FaqItems = [
  {
    id: 1,
    question: "What is Immutag and how does it work?",
    title: "Description",
    description: "Immutag combines tamper-proof physical tags with blockchain technology to create a secure, verifiable record of ownership for your valuable devices. Each tag is linked to a unique digital identity on the blockchain, making your item easy to prove, transfer, or recover.",
    links: [],
    button: "read"
  },
  {
    id: 2,
    question: "Which devices can I protect with Immutag?",
    title: "Description",
    description: "Immutag currently supports smartphones, laptops, e-bikes, and smartwatches, with more categories launching soon.",
    links: [],
    button: "read"
  },
  {
    id: 3,
    question: "How does Immutag help prevent theft?",
    title: "Description",
    description: "Once tagged and registered, your device is much harder to resell or claim fraudulently. Law enforcement and insurers can verify ownership instantly, deterring theft and speeding up recovery.",
    links: [],
    button: "read"
  },
  {
    id: 4,
    question: "Can I transfer ownership if I sell or gift my device?",
    title: "Description",
    description: "Yes! Immutag makes it easy to transfer ownership securely through the app. The new owner will have a verifiable, blockchain-backed record.",
    links: [],
    button: "read"
  },
  {
    id: 5,
    question: "How do I join the waitlist or get support?",
    title: "Description",
    description: "You can join the waitlist or contact our team for support by emailing hello@immutag.com or using the form on this page.",
    links: [],
    button: "read"
  },
];

// services page clients reviews (sample data)
export const serviceClientsItem = [
  {
    id: 1,
    website: "Client One",
    href: "https://clientone.com",
    title: "CEO, Client One",
    name: "Alice Smith",
    src: client01, // uses imported image
    review: "Ochi delivered an outstanding presentation that exceeded our expectations. Highly recommended!",
    links: [
      { id: 1, title: "Case Study", href: "/case/clientone" },
      { id: 2, title: "Website", href: "https://clientone.com" },
    ],
  },
  {
    id: 2,
    website: "Client Two",
    href: "https://clienttwo.com",
    title: "CMO, Client Two",
    name: "Bob Johnson",
    src: client02,
    review: "Professional, creative, and always on time. The best agency we've worked with!",
    links: [
      { id: 1, title: "Case Study", href: "/case/clienttwo" },
    ],
  },
  // Add more clients as needed
];
