use education;
db.dropDatabase();

db.instruments.insertMany([
  
// TRUMPET
    {name: "Trumpet",
    image: "",
    sound: "",
    //slides
    slides: [
    [
    "The trumpet is a brass instrument with three valves and a mouthpiece.",
    "It is commonly played in classcial and jazz ensembles.",
    "There are many types, but the most common one is the B flat trumpet."
    ],
    [
    "The trumpet has been used in royal ceremonies and in battle throught history, and can be traced at least as back far as 1500BC.",
    "It even gets a mention or two in the bible.  It is said that an early version of the trumpet, the Shofar, was used to blow down the walls of Jericho."
    ],
    [
    "Trumpeter Dizzy Gillespie was famous for his 'bent trumpet' and for blowing out his cheeks like a bullfrog when he played.",
    "Famous jazz trumpeters include Louis Armstrong, Bix Beiderbecke, Miles Davis, and Freddie Hubbard."
    ]
    ],
    //quiz
    quiz: [
    {question: "When was the trumpet invented?", 
    answers: [{answer: "We don't know", status: true}, {answer: "1563", status: false}, {answer: "1653", status: false}, {answer: "1500BC", status: false}]},
    {question: "Which of these trumpeters would puff out their cheeks like a bullfrog?", 
    answers: [{answer: "Dizzy Gillespie", status: true}, {answer: "Miles Davis", status: false}, {answer: "Dizzy Rascal", status: false}, {answer: "Steve Davis", status: false}]},
    {question: "What is the most common type of trumpet?", 
    answers: [{answer: "The B flat Trumpet", status: true}, {answer: "The Donald Trumpet", status: false}, {answer: "The Eb Trumpet", status: false}, {answer: "The Trombone", status: false}]}
    ]
    },

// DOUBLE BASS
    {name: "Double Bass",
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
    {name: "Electric Guitar",
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
    {name: "Saxophone",
    image: "",
    sound: "",
 //slides
 slides: [
    [
    "The saxophone is a a type of woodwind instrument.",
    "It is normally made of brass and consists of a mouthpiece, 20-23 keys, and a bell.",
    "The mouthpiece has a reed which vibrates to produce the sound."
    ],
    [
    "It was invented in Belgium in 1846 by Adolphe Sax.  He based its design on that of the bass clarinet.",
    "There are four common types of saxophone: tenor, alto, baritone and soprano, plus some less common ones such as the subcontrabass sax, which can be up to 9 feet (2.75m) tall!"
    ],
    [
    "The saxophone is associated with many styles of music, including classical, marching bands, blues, pop and rock, but is probably most commonly associated with jazz.",
    "Famous saxophonists from the jazz era include Charlie Parker, John Coltrane, and Cannonball Adderly."
    ]
],
//quiz
quiz: [
{question: "How many keys does a sax have?", 
answers: [{answer: "20-23", status: true}, {answer: "12", status: false}, {answer: "25", status: false}, {answer: "10", status: false}]},
{question: "Which of these is not a type of sax?", 
answers: [{answer: "Goldman Sax", status: true}, {answer: "Alto Sax", status: false}, {answer: "Tenor Sax", status: false}, {answer: "Baritone Sax", status: false}]},
{question: "Who invented the saxophone?", 
answers: [{answer: "Adolphe Sax", status: true}, {answer: "Adolf Hitler", status: false}, {answer: "Hessian Sax", status: false}, {answer: "Saxo Salt", status: false}]}
]
}

]);