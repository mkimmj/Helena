
failCards = [
  {resource:"suitor1", 
  level: "high", 
  card: {
    prompt: "",
    rightChoiceText: "",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "", 
    leftChoice: function(){location.reload();
    },
    name: "Warring Times",
    resultText: "You heavily favored one suitor, causing the others to wage war out of jealousy.",
    image: "./myImages/portrait5.jpg"
  }},

  {resource:"suitor1", 
  level: "low", 
  card: {
    prompt: "",
    rightChoiceText: "",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "", 
    leftChoice: function(){location.reload();
    },
    name: "Assassins in the Night",
    resultText: "If I can't have you, no one can! You spurned this suitor to the point of no return.",
    image: "./myImages/portrait5.jpg"
  }},

  {resource:"suitor2", 
  level: "high", 
  card: {
    prompt: "",
    rightChoiceText: "",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "", 
    leftChoice: function(){location.reload();
    },
    name: "Warring Times",
    resultText: "You heavily favored one suitor, causing the others to wage war out of jealousy.",
    image: "./myImages/portrait4.jpg"
  }},

  {resource:"suitor2", 
  level: "low", 
  card: {
    prompt: "",
    rightChoiceText: "",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "", 
    leftChoice: function(){location.reload();
    },
    name: "Assassins in the Night",
    resultText: "If I can't have you, no one can! You spurned this suitor to the point of no return.",
    image: "./myImages/portrait4.jpg"
  }},

  {resource:"suitor3", 
  level: "high", 
  card: {
    prompt: "",
    rightChoiceText: "",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "", 
    leftChoice: function(){location.reload();
    },
    name: "Warring Times",
    resultText: "You heavily favored one suitor, causing the others to wage war out of jealousy.",
    image: "./myImages/portrait3.jpg"
  }},

  {resource:"suitor3", 
  level: "low", 
  card: {
    prompt: "",
    rightChoiceText: "",
    rightChoice: function(){location.reload();
      },
    
    leftChoiceText: "", 
    leftChoice: function(){location.reload();
    },
    name: "Assassins in the Night",
    resultText: "If I can't have you, no one can! You spurned this suitor to the point of no return.",
    image: "./myImages/portrait3.jpg"
  }}
]

winCard = {
  prompt: "You've won Our little game. And We bestow upon you a gift befitting a champion. You shall henceforth be crowned queen of the isles and all your suitors be your vassals.",
  rightChoiceText: "nice",
  rightChoice: function(){location.reload();
    },
  
  leftChoiceText: "nice", 
  leftChoice: function(){location.reload();
  },
  name: "Goddess of Beauty Aphrodite",
  resultText: "",
  image: "./myImages/portrait6.jpg"
}


defaultFailCard = {
  prompt: "We guess you could not handle the pressure of prophecy. How dull.",
  rightChoiceText: "oop",
  rightChoice: function(){location.reload();
    },
  
  leftChoiceText: "NO WAIT!", 
  leftChoice: function(){location.reload();
  },
  name: "Goddess of Beauty Aphrodite",
  resultText: "The suitors have waged war. People scream your name as the horrors of war befall them.",
  image: "./images/portrait6.jpg"
}
