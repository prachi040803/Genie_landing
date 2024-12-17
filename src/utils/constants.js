

const features = [
  {
    gridArea: "tl",
    image: new URL("../assets/features/thumbs-up.svg", import.meta.url).href,
    heading: "Personalized Assistance",
    description: `Whether it's academic queries, campus navigation, or event updates, Thapar Genie tailors its responses to your unique needs, ensuring a personalized experience every time.`,
  },
  {
    gridArea: "tr",
    image: new URL("../assets/features/globe.svg", import.meta.url).href,
    heading: "Seamless Integration",
    description: `Access Thapar Genie effortlessly on multiple platforms, including desktops, tablets, and smartphones, providing you with consistent support across all your devices.`,
  },
  {
    gridArea: "bl",
    image: new URL("../assets/features/flag.svg", import.meta.url).href,
    heading: "Real-Time Updates",
    description: `Stay informed with live notifications on timetable changes, campus events, and exam schedules, ensuring you're always up to date.`,
  },
  {
    gridArea: "blm",
    image: new URL("../assets/features/graphic-circle.svg", import.meta.url)
      .href,
    heading: "Smart Academic Support",
    description: `Simplify learning with features like quick access to syllabi, previous question papers, lecture notes, and guidance on academic resources tailored to your program.`,
  },
  {
    gridArea: "brm",
    image: new URL("../assets/features/hash.svg", import.meta.url).href,
    heading: "Secure and Reliable",
    description: `Thapar Genie ensures your data privacy and delivers reliable performance, making it a trusted companion for your academic journey.`,
  },
  {
    gridArea: "br",
    image: new URL("../assets/features/branch.svg", import.meta.url).href,
    heading: "24/7 Availability:",
    description: `Your virtual assistant is ready to help around the clock, ensuring that no query or task is left unresolved, no matter the time of day.`,
  },
];


const faqItems = [
  {
    id: 1,
    question: "What is ThaparGenie?",
    answerHeading: "How do I get started with ThaparGenie?",
    answer: `ThaparGPT is an AI-powered chatbot designed to help Thapar students with instant, accurate answers to all campus-related queries, powered by a Large Language Model (LLM).`,
  },
  {
    id: 2,
    question: "How can ThaparGenie help me?",
    answerHeading: "How do I get started with ThaparGenie?",
    answer: 'ThaparGPT provides assistance with academic schedules, course details, campus facilities, events, administrative processes, and more, helping you navigate college life more effectively.',
  },
  {
    id: 3,
    question: "Is ThaparGenie available 24/7?",
    answerHeading: "How do I get started with ThaparGenie?",
    answer: `Yes, ThaparGPT is available around the clock, offering instant support for your queries anytime, anywhere.`,
  },
  {
    id: 4,
    question: "How do I access ThaparGenie?",
    answerHeading: "How do I get started with ThaparGenie?",
    answer: `You can access ThaparGPT through the official Thapar website or any designated platform where it is integrated for easy use.`,
  },
  {
    id: 5,
    question: "Is ThaparGenie only for students, or can faculty and staff use it too?",
    answerHeading: "How do I get started with ThaparGenie?",
    answer: `While ThaparGPT is primarily designed for students, faculty and staff can also use it to quickly find information related to their academic and administrative needs.`,
  },
];

export { features, faqItems };
