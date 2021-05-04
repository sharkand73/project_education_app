use education;
db.dropDatabase();

db.instruments.insertMany([

// TRUMPET
    {name: "Trumpet",
    images: ['tpt_0.jpg', 'tpt_1.png', 'tpt_2.jpg'],
    sounds: ['tpt_0.mp3','tpt_1.mp3','tpt_2.mp3','tpt_3.mp3','tpt_4.mp3','tpt_5.mp3','tpt_6.mp3'],
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
    images: ['dBass_0.jpg', 'dBass_1.jpg', 'dBass_2.jpg'],
    sounds: ['dBass_0.mp3','dBass_1.mp3','dBass_2.mp3','dBass_3.mp3','dBass_4.mp3','dBass_5.mp3'],
    //slides
    slides: [
    [
    "The double bass is a wooden instrument with four strings. It looks like a giant violin!", 
    "It is used in a wide variety of musical styles, such as jazz, classical, rockabilly and folk music.", 
    "It is tuned low and so makes a very deep sound when played."
    ],
    [
    "No one knows when exactly the double bass was invented, but it appeared some time in the 16th century.", 
    "Double basses are very large but vary in size depending on the player, usually going up to head height.", 
    "They can range from 154cm (61 inches) to 190cm (75 inches) in height!"
    ],
    [
    "Before the invention of the electric bass guitar, double basses were the main bass instrument in rock'n'roll bands.", 
    "Some of the most famous double bass players have been jazz musicians, who normally play without a bow.", 
    "Some famous double bass players include Charles Mingus, Ron Carter and Oscar Pettiford."]
    ],
    //quiz
    quiz: [
    {question: "Who invented the double bass?", 
    answers: [{answer: "Adolphe Double", status: false}, {answer: "Count Basie", status: false}, {answer: "No one knows", status: true}, {answer: "Charles Mingus", status: false}]},
    {question: "What is the double bass made out of?", 
    answers: [{answer: "brass", status: false}, {answer: "wood", status: true}, {answer: "gold", status: false}, {answer: "plastic", status: false}]},
    {question: "How tall can a double bass be?", 
    answers: [{answer: "100cm", status: false}, {answer: "190cm", status: true}, {answer: "20cm", status: false}, {answer: "5 meters", status: false}]}
    ]
    },
    
// ELECTRIC GUITAR
    {name: "Electric Guitar",
    images: ['eGtr_0.jpg', 'eGtr_1.jpg', 'eGtr_2.jpg'],
    sounds: ['eGtr_0.mp3','eGtr_1.mp3','eGtr_2.mp3','eGtr_3.mp3','eGtr_4.mp3','eGtr_5.mp3','eGtr_6.mp3'],
    //slides
    slides: [
    [
    "The electric guitar is a six stringed instrument which gets uses electricity to make sounds. It is usually made of wood and metal.", 
    "It uses magnets called pick-ups on the body, when you strum the guitar strings the pick-up turns them into electrical signals.", 
    "These electrical signals then go to an amplifier which makes the signal louder, and means you can play a guitar very loud!"
    ],
    [
    "The electric guitar was invented in 1932 by George Beauchamp and Adolph Rickenbacker.", 
    "However it wasn't until the 1950s that cheaper, better sounding electric guitars became available. Most famously the Fender Telecaster, invented by Leo Fender.", 
    "Electric guitars are played in nearly every kind of music you can think of, but they're most famous for their use in rock and blues music."
    ],
    [
    "You can make many different sounds with an electric guitar, and many famous guitar players have developed their own signature sound.", 
    "One of the earliest musicians to use an electric guitar was Sister Rosetta Tharpe, who was a big influence on early rock music.", 
    "Some other famous electric guitar players include Jimi Hendrix, Eddie Van Halen and Muddy Waters."
    ]
    ],
    //quiz
    quiz: [
    {question: "Who invented the electric guitar?", 
    answers: [{answer: "Morecambe and Wise", status: false}, {answer: "Kanye and Kim", status: false}, {answer: "Beauchamp and Rickenbacker", status: true}, {answer: "Leo Fender", status: false}]},
    {question: "What makes the electric guitar louder?", 
    answers: [{answer: "The strings", status: false}, {answer: "Blowing into it", status: false}, {answer: "The amplifier", status: true}, {answer: "Nothing", status: false}]},
    {question: "What are pick-ups on a guitar?", 
    answers: [{answer: "Nobody knows", status: false}, {answer: "Magnets", status: true}, {answer: "A chocolate bar", status: false}, {answer: "Strings", status: false}]}
    ]
    },

// SAXOPHONE
    {name: "Saxophone",
    images: ['sax_0.png', 'sax_1.jpg', 'sax_2.jpg'],
    sounds: ['sax_0.mp3','sax_1.mp3','sax_2.mp3','sax_3.mp3','sax_4.mp3','sax_5.mp3','sax_6.mp3'],
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