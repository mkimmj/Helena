
firstCard = {
  prompt: "Awaken young Helena, most beautiful in all of Greece.",
  rightChoiceText: "askdjflsklkskjfsfl",
  rightChoice: function(){
      addPackToDeck("bachelors")
    addToTopDeck("GoddessRight")
    min += 15;
    },
  
  leftChoiceText: "wut?", 
  leftChoice: function(){
      addPackToDeck("bachelors")
    addToTopDeck("GoddessLeft")
    min+=15;
    //enemiesMade += 1;
  },
  name: "Goddess of Beauty Aphrodite",
  resultText: "",
  image: "./myImages/portrait6.jpg",
  priority: 1,
  pack : "none"
}


cardPool = {
  "uniqueIDList" : ["GoddessRight", "GoddessLeft", "GoddessCont", "WakeUp", "King", "KingContR", "KingContL", "Maid2" ,"Odis"],
  
  "GoddessRight" : {
    prompt: "A fine reaction befitting one as magnificent as myself.",
    rightChoiceText: ". . .",
      rightChoice: function(){
        addToTopDeck("GoddessCont")
        min+=15;
      },
    leftChoiceText: ". . .", 
    leftChoice: function(){
      addToTopDeck("GoddessCont")
      min+=15;
    //enemiesMade += 1;
    },
    name: "Goddess of Beauty Aphrodite",
    resultText: "",
    image: "./myImages/portrait6.jpg",
    priority: 2,
    pack : "none"
  },


  "GoddessLeft": {
    prompt: "A bit rude, but We shall pardon this impertinence.",
    rightChoiceText: ". . .",
      rightChoice: function(){
        addToTopDeck("GoddessCont")
        min+=15;
      },
    leftChoiceText: ". . .", 
    leftChoice: function(){
      addToTopDeck("GoddessCont")
      min+=15;
    },
    name: "Goddess of Beauty Aphrodite",
    resultText: "",
    image: "./myImages/portrait6.jpg",
    priority: 2,
    pack : "none"
  },

  "GoddessCont": {
    prompt: "We in all our splendor have come to grace you mortal with an opportunity. Survive the next 12 hours and We shall gift you Our divine blessing, else... well it doesn't matter. Do try to keep it interesting.",
    rightChoiceText: "",
      rightChoice: function(){
        addToTopDeck("WakeUp")
        min+=15;
      },
    leftChoiceText: "", 
    leftChoice: function(){
      addToTopDeck("WakeUp")
      min+=15;
    },
    name: "Goddess of Beauty Aphrodite",
    resultText: "",
    image: "./myImages/portrait6.jpg",
    priority: 2,
    pack : "none"
  },

  "WakeUp": {
    prompt: "Hurry Miss! We must get you ready, your father, King Dareus has an annoucement.",
    rightChoiceText: "mmmm 5 more minutes",
      rightChoice: function(){
        addToTopDeck("King")
        min += 15;
      },
    leftChoiceText: "*drool*", 
    leftChoice: function(){
      addToTopDeck("King")
      min += 15;
    },
    name: "Maid Aestra",
    resultText: "",
    image: "./myImages/portrait2.jpg",
    priority: 2,
    pack : "none"
  },

  "King": {
    prompt: "Ah good! Daughter, today you shall be picking your husband from among these suitors. Odis the Mighty, Parhyseus the Graceful, and Meneros the Devoted.",
    rightChoiceText: "say what?",
      rightChoice: function(){
        addResource("suitor2", -10)
        addResource("suitor3", 10)
        addToTopDeck("KingContR")
        min+=15;
      },
    leftChoiceText: "*bow in agreement*", 
    leftChoice: function(){
      addResource("suitor1", 10)
      addResource("suitor2", 10)
      addToTopDeck("KingContL")
      min+=15;
    },
    name: "King Dareus",
    resultText: "",
    image: "./myImages/portrait1.jpg",
    priority: 2,
    pack : "none"
  },

  "KingContR": {
    prompt: "*AHEM* Anyways, you shall spend the day with these three worthy suitors and give us your conclusion tomorrow morning at court.",
    rightChoiceText: "ew",
      rightChoice: function(){
        addResource("suitor3", 10)
        addResource("suitor1", -10)
        addToTopDeck("Maid2")
        min += 15;
      },
    leftChoiceText: "gladly sire", 
    leftChoice: function(){
      addResource("suitor1", 10)
      addResource("suitor2", 10)
      addToTopDeck("Maid2")
      min += 15;
    },
    name: "King Dareus",
    resultText: "",
    image: "./myImages/portrait1.jpg",
    priority: 2,
    pack : "none"
  },

  "KingContL": {
    prompt: "Wonderful! The city of Spantam is counting on you.",
    rightChoiceText: "mmm that's a lot of pressure",
      rightChoice: function(){
        addToTopDeck("Maid2")
        min += 15;
      },
    leftChoiceText: "it is my pleasure to serve Spantam", 
    leftChoice: function(){
      addResource("suitor1", 10)
      addResource("suitor2", 10)
      addResource("suitor3", 10)
      addToTopDeck("Maid2")
      min += 15;
    },
    name: "King Dareus",
    resultText: "",
    image: "./myImages/portrait1.jpg",
    priority: 2,
    pack : "none"
  },

  "Maid2": {
    prompt: "*Whispers* Miss you must be careful. I've received reports of Odis' navy off our coasts. Handling this wrong could result in an international affair. War could be waged against the chosen suitor and even your father.",
    rightChoiceText: "This is way too much in the morning",
      rightChoice: function(){
        addToTopDeck("Odis")
        min+=15;
      },
    leftChoiceText: "thank you for your input Aestra", 
    leftChoice: function(){
      addToTopDeck("Odis")
      min+=15;
    },
    name: "Maid Aestra",
    resultText: "",
    image: "./myImages/portrait2.jpg",
    priority: 2,
    pack : "none"
  },

  "Odis": {
    prompt: "I look forward in getting to know my future queen. Let us all get up and explore the grounds of Spantam.",
    rightChoiceText: "Who are you?",
      rightChoice: function(){
        addResource("suitor1", -10)
        addResource("suitor3", 10)
        min += 15;
      },
    leftChoiceText: "*smile*", 
    leftChoice: function(){
      addResource("suitor1", 10)
      addResource("suitor2", 10)
      addResource("suitor3", -10)
      min += 15;
    },
    name: "Odis the Mighty",
    resultText: "",
    image: "./myImages/portrait5.jpg",
    priority: 2,
    pack : "none"
  }
}




