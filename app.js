var app = new Vue({
  el: "#app",

  mounted() {},

  data: {
    headerCenterMenu: ["home", "pages", "courses", "features", "blog", "shop"],
    languages: [
      { flag: "en", name: "english" },
      { flag: "de", name: "german" },
      { flag: "fr", name: "french" },
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
  },

  methods: {},
});
Vue.config.devtools = true;



