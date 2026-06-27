const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "0812", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: your birth date!", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Why Necaa's so cute?", // Example trending search query
    "Why does Popall love her more?", // Another example query
    "how to calm down Necaa's anger", // A personalized trending search
  ],
  proTip: 'Pro tip: try searching "How long have we been together?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2026-02-01", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Anything You Want", // Title of the song
      artist: "Reality Club", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
    },
    {
      title: "Alexandra",
      artist: "Reality Club",
      left: "40%",
      top: "15%",
    },
    {
      title: "A Sorrowful Reunion",
      artist: "Reality Club",
      left: "15%",
      top: "40%",
    },
    {
      title: "I Wish I Was Your Joke",
      artist: "Reality Club",
      left: "30%",
      top: "75%",
    },
    {
      title: "Risk It All",
      artist: "Bruno Mars",
      left: "5%",
      top: "65%",
    },
    {
      title: "Secret Door",
      artist: "Arctic Monkeys",
      left: "25%",
      top: "90%",
    },
    {
      title: "Love",
      artist: "Wave to Earth",
      left: "35%",
      top: "50%",
    },
    {
      title: "Kota Ini Tak Sama Tanpamu",
      artist: "Nadhif Basalamah",
      left: "10%",
      top: "25%",
    },
  ],

    // � Date Invitation Page
    dateInvitationTitle: "Will you go on a date with me?", // Title for the date invitation
    dateInvitationMessage: "I want to spend my special time with you. 🥰", // Main invitation message
    dateProposal: "Weekend after your exam (?)", // Date/time proposal
    timeProposal: "10 AM/12 PM?", // Time proposal
    locationProposal: "Iron Sushi SMB / Sentul and play go kart", // Location proposal
    dateAdditionalMessage: "Accept it Pleaseeeeeeee 😅💕", // Additional cute message
    dateAcceptedMessage: "Mwehehehe tidak sabar bertemu si Cantik 💖✨", // Message after accepting
  
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures, Geser ya", // Title for the pictures recap page
    pictureGallery: [
      { title: "February 2, 2026", description: "First date (?)" }, // Picture entry
      { title: "2 April, 2026", description: "Unboxing Hiyono✨" },
      { title: "27 April, 2026", description: "Reality Club Photobox💕" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "Hi, I love you so much💖. Hope you love me back🥺 ", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank you for everything, my love! 💖 Wishing us many more wonderful years together.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;
