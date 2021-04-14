var app = new Vue({
  el: "#app",

  mounted() {},

  data: {
    headerCenterMenu: ["home", "pages", "courses", "features", "blog", "shop"],
    languages: [
      { flag: "img/en.png", name: "english" },
      { flag: "img/de.png", name: "german" },
      { flag: "img/fr.png", name: "french" },
    ],
    pioneersContents: [
      {
        image: "en",
        title: "one to one",
        text:
          "Getting the necessary clarity about the current state to help you improve your game.",
      },
      {
        flag: "de",
        title: "anywhere",
        text:
          "Access to valuable and portable program which allow you to setup and live anywhere you want.",
      },
      {
        flag: "fr",
        title: "on time",
        text:
          "Punctuality is our top priority because it's an essential criteria to assess a program quality.",
      },
      {
        image: "en",
        title: "online courses",
        text:
          "Online business coaching now offers you a very powerful way to empower your business into success.",
      },
      {
        flag: "de",
        title: "consulting",
        text:
          "You will get a clear sense of direction for your business, through assessment and faster result.",
      },
      {
        flag: "fr",
        title: "self development",
        text:
          "Business Coaching ofter keep your focus and develop you both in a professional and personal way.",
      },
    ],
    exploreContents: [
      {
        image: "img/home-business-service-slide-01-480x298.jpg",
        title: "consultative training",
        text:
          "With a coach addressing multiple issues that are off balance, affecting your business in various unconsidered ways.",
      },
      {
        image: "img/home-business-service-slide-02-480x298.jpg",
        title: "real deal coaching",
        text:
          "Brings an exceptionally powerful opportunity. Being able to accept, to work with that opportunity.",
      },
      {
        image: "img/home-business-service-slide-03-480x298.jpg",
        title: "advisor training program",
        text:
          "Getting high quality, entrepreneur mindset driver online business coaching, is what is needed.",
      },
    ],
    presentationContents: [
      {
        title: "How can we help?",
        text:
          "How many courses you've been on, using however many techniques and methods. unless you've come to realize the value of mindset, then you've yet to understand how success comes.",
      },
      {
        title: "Why would I need a business COACH?",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque veritatis doloribus exercitationem inventore quis assumenda accusamus placeat reprehenderit!",
      },
      {
        title: "What is one-on-one coaching?",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque veritatis doloribus exercitationem inventore quis assumenda accusamus placeat reprehenderit!",
      },
    ],
    eventsContents: [
      {
        place: "texas",
        state: "us",
        title: "storytelling workshop",
        day: "22",
        month: "nov",
        year: "2021",
      },
      {
        place: "new york",
        state: "us",
        title: "painting art contest 2020",
        day: "10",
        month: "oct",
        year: "2021",
      },
      {
        place: "hamburg",
        state: "germany",
        title: "international art fair 2020",
        day: "23",
        month: "nov",
        year: "2021",
      },
      {
        place: "illinois",
        state: "us",
        title: "street performance: call for artist",
        day: "12",
        month: "dec",
        year: "2021",
      },
      {
        place: "illinois",
        state: "us",
        title: "consumer food safety education conference",
        day: "22",
        month: "jul",
        year: "2021",
      },
      {
        place: "dubai",
        state: "UAE",
        title: "how meditation improve mental health?",
        day: "12",
        month: "aug",
        year: "2021",
      },
    ],
    reviewsContents: [
      {
        title: "It's a choice of quality for people with special needs",
        text:
          "I'm a very strict persone so I require everything to be organized and neat. Then, i'll be able to make things right and shine. MaxCoach guys just got me.",
        profilePic: "img/testimonial-avata-03.jpg",
        name: "florence themes",
        occupation: "multimedia admin",
      },
      {
        title: "High level of efficiency and scientific teaching methods",
        text:
          "I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus. great study portal for people like me.",
        profilePic: "img/testimonial-avata-02.jpg",
        name: "mina hollance",
        occupation: "freelancer",
      },
      {
        title:
          "Professional team of specialists and passionate  mentors at reach",
        text:
          "I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.",
        profilePic: "img/testimonial-avata-04.jpg",
        name: "madley pondor",
        occupation: "it specialist",
      },
    ],
  },

  methods: {},
});
Vue.config.devtools = true;



