use education;
db.dropDatabase();

db.instruments.insertMany([
  
// TRUMPET
    {instrument: "Trumpet",
    image: "",
    sound: "",
    //slides
    slides: [
    ["I am the first paragraph of the first trumpet slide", "I am the second paragraph of the first trumpet slide", "I am the third paragraph of the first trumpet slide"],
    ["I am the first paragraph of the second trumpet slide", "I am the second paragraph of the second trumpet slide", "I am the third paragraph of the second trumpet slide"],
    ["I am the first paragraph of the third trumpet slide", "I am the second paragraph of the third trumpet slide", "I am the third paragraph of the third trumpet slide"]
    ],
    //quiz
    quiz: [
    {question: "Who invented the trumpet?", 
    answers: [{answer: "Adolphe Trumpet", status: true}, {answer: "Adolf Hitler", status: false}, {answer: "Goldman Sax", status: false}, {answer: "Bob Holness", status: false}]},
    {question: "What is the trumpet made out of?", 
    answers: [{answer: "brass", status: true}, {answer: "wood", status: false}, {answer: "gold", status: false}, {answer: "plastic", status: false}]},
    {question: "Which is the sound of the trumpet?", 
    answers: [{answer: "1", status: true}, {answer: "2", status: false}, {answer: "3", status: false}, {answer: "4", status: false}]}
    ]
    },

// DOUBLE BASS
    {instrument: "Double Bass",
    image: "",
    sound: "",
    //slides
    slides: [
    ["I am the first paragraph of the first double bass slide", "I am the second paragraph of the first double bass slide", "I am the third paragraph of the first double bass slide"],
    ["I am the first paragraph of the second double bass slide", "I am the second paragraph of the second double bass slide", "I am the third paragraph of the second double bass slide"],
    ["I am the first paragraph of the third double bass slide", "I am the second paragraph of the third double bass slide", "I am the third paragraph of the third double bass slide"]
    ],
    //quiz
    quiz: [
    {question: "Who invented the double bass?", 
    answers: [{answer: "Adolphe Double", status: false}, {answer: "Adolf Bass", status: true}, {answer: "Goldman Sax", status: false}, {answer: "Bob Holness", status: false}]},
    {question: "What is the double bass made out of?", 
    answers: [{answer: "brass", status: false}, {answer: "wood", status: true}, {answer: "gold", status: false}, {answer: "plastic", status: false}]},
    {question: "Which is the sound of the double bass?", 
    answers: [{answer: "1", status: false}, {answer: "2", status: true}, {answer: "3", status: false}, {answer: "4", status: false}]}
    ]
    },
    
// ELECTRIC GUITAR
    {instrument: "Electric Guitar",
    image: "",
    sound: "",
    //slides
    slides: [
    ["I am the first paragraph of the first electric guitar slide", "I am the second paragraph of the first electric guitar slide", "I am the third paragraph of the first electric guitar slide"],
    ["I am the first paragraph of the second electric guitar slide", "I am the second paragraph of the second electric guitar slide", "I am the third paragraph of the second electric guitar slide"],
    ["I am the first paragraph of the third electric guitar slide", "I am the second paragraph of the third electric guitar slide", "I am the third paragraph of the third electric guitar slide"]
    ],
    //quiz
    quiz: [
    {question: "Who invented the electric guitar?", 
    answers: [{answer: "Adolphe Electric", status: false}, {answer: "Adolf Guitar", status: false}, {answer: "Goldman Sax", status: true}, {answer: "Bob Holness", status: false}]},
    {question: "What is the electric guitar made out of?", 
    answers: [{answer: "brass", status: false}, {answer: "wood", status: false}, {answer: "gold", status: true}, {answer: "plastic", status: false}]},
    {question: "Which is the sound of the electric guitar?", 
    answers: [{answer: "1", status: false}, {answer: "2", status: false}, {answer: "3", status: true}, {answer: "4", status: false}]}
    ]
    },

// SAXOPHONE
    {instrument: "Saxophone",
    image: "",
    sound: "",
    //slides
    slides: [
    ["I am the first paragraph of the first saxophone slide", "I am the second paragraph of the first saxophone slide", "I am the third paragraph of the first saxophone slide"],
    ["I am the first paragraph of the second saxophone slide", "I am the second paragraph of the second saxophone slide", "I am the third paragraph of the second saxophone slide"],
    ["I am the first paragraph of the third saxophone slide", "I am the second paragraph of the third saxophone slide", "I am the third paragraph of the third saxophone slide"]
    ],
    //quiz
    quiz: [
    {question: "Who invented the saxophone?", 
    answers: [{answer: "Adolphe Jobbie", status: false}, {answer: "Adolf Hitler", status: false}, {answer: "Goldman Sax", status: false}, {answer: "Adolphe Sax", status: true}]},
    {question: "What is the trumpet made out of?", 
    answers: [{answer: "plastic", status: false}, {answer: "wood", status: false}, {answer: "gold", status: false}, {answer: "brass", status: true}]},
    {question: "Which is the sound of the saxophone?", 
    answers: [{answer: "1", status: false}, {answer: "2", status: false}, {answer: "3", status: false}, {answer: "4", status: true}]}
    ]
    }

  ]);