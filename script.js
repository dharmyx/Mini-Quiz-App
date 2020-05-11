const max_Number = 10;
const options = document.querySelector(".options").children;
const answerTrackerBox = document.querySelector(".answer-tracker");
const questionNumberSpan = document.querySelector(".question-num-value");
const totalQuestionSpan = document.querySelector(".total-question");
const correctAnswerSpan = document.querySelector(".correct-answers");
const totalQuestionSpan2 = document.querySelector(".total-question2");
const percentage = document.querySelector(".percentage");
const showScore = document.querySelector(".score");
const question = document.querySelector(".question");
const op1 = document.querySelector(".option1");
const op2 = document.querySelector(".option2");
const op3 = document.querySelector(".option3");
const op4 = document.querySelector(".option4");
let questionIndex;
let index = 0;
let questionRepeat = [];
let questionArr = [];
let score = 0;



// Question Options and Answer

let questions = [{
        q: 'In California you can not legally buy a mousetrap without having a what?',
        options: ['Mouse Permit', 'Hunting License', 'Exterminator approved license', 'Gun'],
        answer: 1
    },

    {
        q: 'Coprastastaphobia is the fear of what?',
        options: ['Masturbation', 'Ovulation', 'Constipation', 'Ejaculation'],
        answer: 2
    },

    {
        q: 'Who invented the word "VOMIT"?',
        options: ['William Shakespeare', 'Abraham Lincoln', 'Jack Scofield', 'Wole Soyinka'],
        answer: 0
    },

    {
        q: 'What is the collective noun for a group of unicorns?',
        options: ['Zeedonk', 'Uniconium', 'A blessing', 'Scoobert Doo'],
        answer: 2
    },

    {
        q: 'Whose face was said to have launched 1000 ships?',
        options: ['Reza of Persopolis', 'Yu of Bagan', 'Bebby of AngkorWat', 'Helen of Troy'],
        answer: 3
    },

    {
        q: 'How many legs does the legs of the MAN have?',
        options: ['Seven', 'Two', 'Six', 'Three'],
        answer: 3
    },

    {
        q: 'it is illegal in Georgia to do what with a fork?',
        options: ['Eat Pottage', 'Eat Rice', 'Eat fried chicken', 'all of the above'],
        answer: 2
    },

    {
        q: 'The average person does what 13 times a day?',
        options: ['Masturbate', 'Chop fish (aka Igbo)', 'Sleeps', 'Laughs'],
        answer: 3
    },

    {
        q: 'Name the worlds biggest island?',
        options: ['Greenland', 'Kuvuki land', 'Snake island', 'Orematopae island'],
        answer: 0
    },

    {
        q: 'Name the only heavyweight boxing champion to finish his career of 49 fights without ever having been defeated.',
        options: ['Tommy Burns', 'Bob Fitzsimmons', 'Rocky Marciano', 'Mohammed Ali'],
        answer: 2
    },

    {
        q: 'In football, who was nicknamed "The Divine Ponytail"?',
        options: ['Eric Dunne', 'Ronaldinho', 'Herman Crespo', 'Roberto Baggio'],
        answer: 3
    },

    {
        q: 'Name the only footballer to have player for Liverpool, Everton, Manchester city and Manchester United?',
        options: ['Josh Matt', 'Peter Beardsley', 'Tim Howard', 'Allen Shearer'],
        answer: 1
    },

    {
        q: 'What did blind bank robber David Worrell use as a weapon when trying to rob a bank in London?',
        options: ['Blunderbuss', 'Cane', 'Axe', 'Submachine gun'],
        answer: 1
    },

    {
        q: 'What F-word is defined in physics as a "nuclear reaction in which nuclei combine to form more massive nuclei"?',
        options: ['Fusion', 'Ficks law of diffusion', 'Faraday law', 'Fouriers law'],
        answer: 0
    },

    {
        q: 'What is so special about the 1896 war between Zanzibar and England?',
        options: ['The war started because of a lady', 'Almost 100 million lives claimed', 'It lasted for a decade with economic wars', 'It was the shortest war ever (zanzibar surrendered after 38 minutes).'],
        answer: 3
    },

    {
        q: 'One-third of Taiwanese funeral processions include what?',
        options: ['An executioner', 'A stripper', 'A priest', 'A judge'],
        answer: 1
    },

    {
        q: 'How do members of the Walibri tribe in central Australia greet each other?',
        options: ['Hand wrestle', 'Slapping faces', 'Shaking Penises', 'Shaking Hands'],
        answer: 2
    },

    {
        q: 'What is a camels dude?',
        options: ['Penis', 'Brain', 'Toe', 'Tongue'],
        answer: 0
    },

    {
        q: 'In what year was the first ever wimbledon championship held?',
        options: ['1788', '1877', '1930', '1629'],
        answer: 1
    },

    {
        q: 'What or Who is the Ford Mustang named after?',
        options: ['A country located in the North Pole', 'An animal', 'A fighter plane from WWII', 'none of the above.'],
        answer: 2
    },

    {
        q: 'How many parts (screws and bolts included) does the average car have?',
        options: ['100,000', '600', '5,000', '30,000'],
        answer: 3
    },

    {
        q: 'About how many taste buds does the average human tongue have?',
        options: ['500', '10,000', '200', '10'],
        answer: 1
    },

    {
        q: 'What is the smallest country in the world?',
        options: ['Naura', 'Monaco', 'Vatican city', 'Marshall island'],
        answer: 2
    },

    {
        q: 'What is the full name of the African-american musician "AKON"?',
        options: ['Assana Ndeye Fatou', 'Adama Dieynaba Mousa', 'Abdoulaye Khady', 'Aliaume Damala Badara Thuain'],
        answer: 3
    },

    {
        q: 'True or False, You can lick your elbow.',
        options: ['Oya try am na, make we see.', 'False', 'Shey you dey whine me ni?', 'True'],
        answer: 1
    },

    {
        q: 'True or False, You can lick your elbow.',
        options: ['Oya try am na, make we see.', 'False', 'Shey you dey whine me ni?', 'True'],
        answer: 1
    },

    {
        q: 'Which actress played Katriss Everdeen in "The Hunger Games"?',
        options: ['Jenifer Lawrence', 'Alexa Scott', 'Cameron Diaz', 'Julia Roberts'],
        answer: 0
    },

    {
        q: 'Which state is known as the Empire State?',
        options: ['Washington DC', 'Chicago', 'New york', 'California'],
        answer: 2
    },

    {
        q: 'Where is the Bermuda Triangle situated?',
        options: ['In the Northern part of the South Atlantic ocean', 'In the Eastern part of the South Atlantic ocean', 'In the Southern part of the North Atlantic ocean', 'In the Western part of the North Atlantic ocean'],
        answer: 3
    },

    {
        q: 'Who is Googled more than Jesus?',
        options: ['Jamie Fox', 'Justin Beiber', 'Tim Westwood', 'Donald Trump'],
        answer: 1
    },

    {
        q: 'Who was the First Black President of the United States?',
        options: ['Thomas Contee', 'Barrack Obama', 'Douglass George', 'John Hanson'],
        answer: 3
    },

    {
        q: 'Which country has not fought a war since 1814?',
        options: ['Belgium', 'Romania', 'Sweden', 'Lithuania'],
        answer: 2
    },

    {
        q: 'Who scored the first goal at Wembley Stadium?',
        options: ['David Jack', 'Billy Bassett', 'Wilf Mannion', 'Steve Bloomer'],
        answer: 0
    },

    {
        q: 'Brazilian legend Pele played for which US Major league outfit in the 1970?',
        options: ['Red bulls', 'Newyork Cosmos', 'Detroit Eagles', 'LA fighters'],
        answer: 1
    },

    {
        q: 'What defender won England Player of the year in 2010?',
        options: ['John Terry', 'Gregor Robertson', 'Norman Hunter', 'Ashley Cole'],
        answer: 3
    },

    {
        q: 'Where did chelsea win their first European Cup winners Cup?',
        options: ['Athens', 'Tokyo', 'Madrid', 'Paris'],
        answer: 0
    },

    {
        q: 'Oliver Kahn started playing professional soccer in 1987, How old was he at the time?',
        options: ['21', '22', '19', '18'],
        answer: 3
    },

    {
        q: 'Who won the first ever FA premier league?',
        options: ['Liverpool', 'Manchester United', 'Bolton Wonderers', 'Ipswich Town'],
        answer: 1
    },

    {
        q: 'Who was the first goalkepper to score a premiership goal?',
        options: ['Brad friedel', 'Peter Schmeichel', 'Paul Robinson', 'Tim Howard'],
        answer: 1
    },

    {
        q: 'Who was the first player to score 4 goals in a premiership?',
        options: ['Peter Ndlovu', 'David White', 'Eric Cantona', 'Efan Ekoku'],
        answer: 3
    },

    {
        q: 'If PERSONALITY is to 1651819151411292025, then 493209151411825 is to ___ ?',
        options: ['COLLEGIATE', 'DICTIONARY', 'COMPROMISE', 'MUNDANE'],
        answer: 1
    },

]

// Set question Options and question number
totalQuestionSpan.innerHTML = max_Number;
function load() {
    questionNumberSpan.innerHTML = index + 1;
    question.innerHTML = questions[questionIndex].q;
    op1.innerHTML = questions[questionIndex].options[0];
    op2.innerHTML = questions[questionIndex].options[1];
    op3.innerHTML = questions[questionIndex].options[2];
    op4.innerHTML = questions[questionIndex].options[3];
    index++;
}

// Check questions if it mets condition statements
function check(element) {
    if (element.id == questions[questionIndex].answer) {
        element.classList.add("correct");
        updateAnswerTracker("correct")
        score++;
        showScore.innerHTML = score;
        console.log("score:" + score)
    } else {
        element.classList.add('wrong');
        updateAnswerTracker("wrong");
    }
    disabledOptions();
}

// Disable options after selecting one option
function disabledOptions() {
    for (let i = 0; i < options.length; i++) {
        options[i].classList.add("disabled");
        if (options[i].id == questions[questionIndex].answer) {
            options[i].classList.add("correct");
        }
    }
}

// Enable options after clicking next 
function enableOptions() {
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove("wrong", "disabled", "correct");
    }
}

// Verification to see if an option is selected
function validate() {
    if (!options[0].classList.contains("disabled")) {
        alert("Oga! Pick one option na, No go mess up!")
    } else {
        randomQuestions();
    }
}

function next() {
    validate();
    enableOptions();
}

// Check random number to be displayed
function randomQuestions() {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = 0;
    if (index === max_Number) {
        //console.log("quizOver:" +quizOver)
        quizOver();

    } else {
        if (questionRepeat.length > 0) {
            for (let i = 0; i < questionRepeat.length; i++) {
                if (questionRepeat[i] == randomNumber) {
                    hitDuplicate = 1;
                    break;
                }
            }
            if (hitDuplicate == 1) {
                randomQuestions();
            } else {
                questionIndex = randomNumber;
                load();
                questionArr.push(questionIndex);
            }
        }
        if (questionRepeat.length == 0) {
            questionIndex = randomNumber;
            load();
            questionArr.push(questionIndex);
        }
    }

    questionRepeat.push(questionIndex);
}

// Question tracker/ Update progress
function answerTracker() {
    for (let i = 0; i < max_Number; i++) {
        const div = document.createElement("div")
        answerTrackerBox.appendChild(div);
    }
}

function updateAnswerTracker(classNam) {
    answerTrackerBox.children[index - 1].classList.add(classNam);
}

// Quiz Over 
function quizOver() {
    document.querySelector(".quiz-over").classList.add("show");
    correctAnswerSpan.innerHTML = score;
    totalQuestionSpan2.innerHTML = max_Number;
    percentage.innerHTML = (score / max_Number) * 100 + "%";
}

function tryAgain() {
    window.location.reload();
}

function home() {
    window.location.href ="index.html";
}

window.onload = function () {
    randomQuestions();
    answerTracker();
}
