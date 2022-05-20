const projectData = [
  {
    name: "Where should I Eat?",
    summary: "A game to decide where you should eat out",
    codeLink: "https://github.com/jameskehs/where-should-i-eat",
    demoLink: "https://what-will-i-eat.herokuapp.com/",
    details: {
      name: "Where should I Eat?",
      desc: "A game that uses the Yelp API to help determine where to eat out. Users will enter a zip code and neaby restaurants will be pulled. Users will then play a Tinder like game to choose 10 restaurants they like and will then choose between the ones they liked.",
      techStack: ["HTML5", "CSS3", "Javascript", "SASS", "React", "APIs", "Node.js", "Express"],
      images: ["./Images/YelpApp.png", "./Images/YelpApp2.png"],
      placeholder: "./Images/YelpAppPlaceholder.png",
    },
  },
  {
    name: "Spotify Guessing Game",
    summary: "Link your spotify account and guess your favorite songs",
    codeLink: "https://github.com/jameskehs/spotify-guessing-game",
    demoLink: "https://guess-your-library.herokuapp.com/",
    details: {
      name: "Spotify Guessing Game",
      desc: "A game where you try to guess your favorite songs. Using the Spotify API, the users account is linked and their liked songs are grabbed. Small snippets of these songs are played and the user has 5 attempts to guess the correct song. NOTE: Email must be authorized by me for Spotify API to work",
      techStack: ["HTML5", "CSS3", "Javascript", "SASS", "React", "APIs", "Node.js", "Express"],
      images: ["./Images/SpotifyGame1.png", "./Images/SpotifyGame2.png"],
    },
  },
  {
    name: "UsedEgg",
    summary: "An e-commerce site for used computer parts",
    codeLink: "https://github.com/jimmykehs/Grace-Shopper",
    demoLink: "https://used-egg.herokuapp.com/",
    details: {
      name: "UsedEgg",
      desc: "An e-commerce site with checkout and admin functionalities. Stripe checkout API is used to process transactions and users with an admin role can add, edit, and delete products.",
      techStack: ["HTML5", "CSS3", "Javascript", "SASS", "React", "APIs", "Node.js", "Express", "PSQL"],
      images: ["./Images/UsedEgg1.png", "./Images/UsedEgg2.png"],
    },
  },
  {
    name: "Bill Tracker",
    summary: "Get notified for upcoming bills",
    codeLink: "https://github.com/jimmykehs/BillTracker2.0",
    demoLink: "https://jims-bill-tracker.herokuapp.com/",
    details: {
      name: "Bill Tracker",
      desc: "Users put in their monthly expenses with due dates and amounts. They can opt in to recieve email and text notifications a set amount of days before a bill is due.",
      techStack: ["HTML5", "CSS3", "Javascript", "SASS", "React", "APIs", "Node.js", "Express", "PSQL"],
      images: ["./Images/BillTracker.png"],
    },
  },
];

export default projectData;
