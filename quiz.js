const allQuestions = [
    {
        question: "(x+2)(x-4)<0",
        options: ["x<-2、x>4", "-2<x<4", "すべての実数", "解なし"],
        answer: "-2<x<4"
    },
    {
        question: "(x-3)(x+5)>0",
        options: ["x<-5、x>3", "-5<x<3", "すべての実数", "解なし"],
        answer: "x<-5、x>3"
    },
    {
        question: "(x-1)(x+6)≤0",
        options: ["x≤-6、x≥1", "-6≤x≤1", "すべての実数", "解なし"],
        answer: "-6≤x≤1"
    },
    {
        question: "(x+4)(x-7)≥0",
        options: ["x≤-4、x≥7", "-4≤x≤7", "すべての実数", "解なし"],
        answer: "x≤-4、x≥7"
    },
    {
        question: "(x+1)(x-3)<0",
        options: ["x<1、x>3", "1<x<3", "すべての実数", "解なし"],
        answer: "1<x<3"
    },
    {
        question: "(x-2)(x+8)>0",
        options: ["x<-8、x>2", "-8<x<2", "すべての実数", "解なし"],
        answer: "x<-8、x>2"
    },
    {
        question: "(x-5)(x+2)≤0",
        options: ["x≤-2、x≥5", "-2≤x≤5", "すべての実数", "解なし"],
        answer: "-2≤x≤5"
    },
    {
        question: "(x+3)(x-9)≥0",
        options: ["x≤-3、x≥9", "-3≤x≤9", "すべての実数", "解なし"],
        answer: "x≤-3、x≥9"
    },
    {
        question: "(x-4)(x+1)<0",
        options: ["x<-4、x>1", "-1<x<4", "すべての実数", "解なし"],
        answer: "-1<x<4"
    },
    {
        question: "(x+7)(x-6)>0",
        options: ["x<-7、x>6", "-7<x<6", "すべての実数", "解なし"],
        answer: "x<-7、x>6"
    },
    {
        question: "(x+5)(x-2)≤0",
        options: ["x≤-5、x≥2", "-5≤x≤2", "すべての実数", "解なし"],
        answer: "-5≤x≤2"
    },
    {
        question: "(x-8)(x+4)≥0",
        options: ["x≤-4、x≥8", "-4≤x≤8", "すべての実数", "解なし"],
        answer: "x≤-4、x≥8"
    },
    {
        question: "(x+6)(x-3)<0",
        options: ["x<-6、x>3", "-6<x<3", "すべての実数", "解なし"],
        answer: "-6<x<3"
    },
    {
        question: "(x-7)(x+2)>0",
        options: ["x<-2、x>7", "-2<x<7", "すべての実数", "解なし"],
        answer: "x<-2、x>7"
    },
    {
        question: "(x+4)(x-1)≤0",
        options: ["x≤-4、x≥1", "-4≤x≤1", "すべての実数", "解なし"],
        answer: "-4≤x≤1"
    },
    {
        question: "(x-2)(x+5)≥0",
        options: ["x≤-5、x≥2", "-5≤x≤2", "すべての実数", "解なし"],
        answer: "x≤-5、x≥2"
    },
    {
        question: "(x+3)(x-9)<0",
        options: ["x<-3、x>9", "-3<x<9", "すべての実数", "解なし"],
        answer: "-3<x<9"
    },
    {
        question: "(x-6)(x+7)>0",
        options: ["x<-7、x>6", "-7<x<6", "すべての実数", "解なし"],
        answer: "x<-7、x>6"
    },
    {
        question: "(x+2)(x-8)≤0",
        options: ["x≤-2、x≥8", "-2≤x≤8", "すべての実数", "解なし"],
        answer: "-2≤x≤8"
    },
    {
        question: "(x-5)(x+1)≥0",
        options: ["x≤-1、x≥5", "-1≤x≤5", "すべての実数", "解なし"],
        answer: "x≤-1、x≥5"
    },
    {
        question: "(x+6)(x-4)<0",
        options: ["x<-6、x>4", "-6<x<4", "すべての実数", "解なし"],
        answer: "-6<x<4"
    },
    {
        question: "(x-3)(x+7)>0",
        options: ["x<-7、x>3", "-7<x<3", "すべての実数", "解なし"],
        answer: "x<-7、x>3"
    },
    {
        question: "(x+5)(x-2)≤0",
        options: ["x≤-5、x≥2", "-5≤x≤2", "すべての実数", "解なし"],
        answer: "-5≤x≤2"
    },
    {
        question: "(x-9)(x+3)≥0",
        options: ["x≤-3、x≥9", "-3≤x≤9", "すべての実数", "解なし"],
        answer: "x≤-3、x≥9"
    },
    {
        question: "(x+4)(x-7)<0",
        options: ["x<-4、x>7", "-4<x<7", "すべての実数", "解なし"],
        answer: "-4<x<7"
    },
    {
        question: "(x-2)^2>0",
        options: ["2以外のすべての実数", "x=2", "すべての実数", "解なし"],
        answer: "2以外のすべての実数"
    },
    {
        question: "(x+5)^2<0",
        options: ["x≠-5", "x=-5", "すべての実数", "解なし"],
        answer: "解なし"
    },
    {
        question: "(x-3)^2≥0",
        options: ["3以外のすべての実数", "すべての実数", "x=3", "解なし"],
        answer: "すべての実数"
    },
    {
        question: "(x+4)^2≤0",
        options: ["x=-4", "x≠-4", "すべての実数", "解なし"],
        answer: "x=-4"
    },
    {
        question: "(x-6)^2>0",
        options: ["6以外のすべての実数", "x=6", "すべての実数", "解なし"],
        answer: "6以外のすべての実数"
    },
    {
        question: "(x+7)^2<0",
        options: ["x≠-7", "x=-7", "すべての実数", "解なし"],
        answer: "解なし"
    },
    {
        question: "(x-1)^2≥0",
        options: ["1以外のすべての実数", "x=1", "すべての実数", "解なし"],
        answer: "すべての実数"
    },
    {
        question: "(x+3)^2≤0",
        options: ["x=3", "x≠3", "x=-3", "解なし"],
        answer: "x=-3"
    },
    {
        question: "(x-8)^2>0",
        options: ["8以外のすべての実数", "x=8", "すべての実数", "解なし"],
        answer: "8以外のすべての実数"
    },
    {
        question: "(x+9)^2<0",
        options: ["x=-9", "x≠-9", "すべての実数", "解なし"],
        answer: "解なし"
    },
    {
        question: "(x-4)^2≥0",
        options: ["4以外のすべての実数", "x=4", "すべての実数", "解なし"],
        answer: "すべての実数"
    },
    {
        question: "(x+2)^2≤0",
        options: ["x=2", "x=-2", "すべての実数", "解なし"],
        answer: "x=-2"
    },
    {
        question: "(x-7)^2>0",
        options: ["7以外のすべての実数", "x=7", "すべての実数", "解なし"],
        answer: "7以外のすべての実数"
    },
    {
        question: "(x+6)^2<0",
        options: ["x≠-6", "x=-6", "すべての実数", "解なし"],
        answer: "解なし"
    },
    {
        question: "(x-5)^2≥0",
        options: ["5以外のすべての実数", "x=5", "すべての実数", "解なし"],
        answer: "すべての実数"
    },
    {
        question: "(x+8)^2≤0",
        options: ["x=8", "x=-8", "すべての実数", "解なし"],
        answer: "x=-8"
    },
    {
        question: "(x-9)^2>0",
        options: ["9以外のすべての実数", "x=9", "すべての実数", "解なし"],
        answer: "9以外のすべての実数"
    },
    {
        question: "(x+1)^2<0",
        options: ["x≠-1", "x=-1", "すべての実数", "解なし"],
        answer: "解なし"
    },
    {
        question: "(x-2)^2≥0",
        options: ["2以外のすべての実数", "x=2", "すべての実数", "解なし"],
        answer: "すべての実数"
    },
    {
        question: "(x+4)^2≤0",
        options: ["x=4", "x=-4", "すべての実数", "解なし"],
        answer: "x=-4"
    },
    {
        question: "(x-6)^2>0",
        options: ["6以外のすべての実数", "x=6", "すべての実数", "解なし"],
        answer: "6以外のすべての実数"
    },
    {
        question: "(x+3)^2<0",
        options: ["x≠-3", "x=-3", "すべての実数", "解なし"],
        answer: "解なし"
    },
    {
        question: "(x-1)^2≥0",
        options: ["1以外のすべての実数", "x=1", "すべての実数", "解なし"],
        answer: "すべての実数"
    },
    {
        question: "(x+7)^2≤0",
        options: ["x=7", "x=-7", "すべての実数", "解なし"],
        answer: "x=-7"
    },
    {
        question: "(x-5)^2>0",
        options: ["5以外のすべての実数", "x=5", "すべての実数", "解なし"],
        answer: "5以外のすべての実数"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedQuestions = [];
let userAnswers = []; // ユーザーの回答を記録するための配列

function startQuiz() {
    document.getElementById("startButton").style.display = "none";
    document.getElementById("header").style.display = "block";
    document.getElementById("quizContainer").style.display = "block";
    selectedQuestions = getRandomQuestions(5); // ランダムで5問選ぶ
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = []; // クイズをリセットするときにクリア
    displayQuestion();
}

function getRandomQuestions(num) {
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
}

function displayQuestion() {
    const questionObj = selectedQuestions[currentQuestionIndex];
    document.getElementById("questionText").textContent = questionObj.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = '';

    questionObj.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("optionButton");
        button.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const questionObj = selectedQuestions[currentQuestionIndex];

    // ユーザーの回答を記録する
    userAnswers.push({
        question: questionObj.question,
        selectedAnswer: selectedOption,
        correctAnswer: questionObj.answer
    });

    if (selectedOption === questionObj.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const totalQuestions = selectedQuestions.length;

    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'block';
    document.getElementById('header').style.display = 'none';
    
    // 各問題の結果を表示
    const resultHtml = userAnswers.map((answer) => 
        `<div>
            <p><strong>問題:</strong> ${answer.question}</p>
            <p><strong>結果:</strong> ${answer.selectedAnswer === answer.correctAnswer ? '⭕️' : '❌'}</p>
            <p><strong>あなたの解答:</strong> ${answer.selectedAnswer}</p>
            <p><strong>正答:</strong> ${answer.correctAnswer}</p>
        </div>`
    ).join('');

    document.getElementById('resultList').innerHTML = resultHtml;
    document.getElementById('score').innerText = `得点: ${score} / ${totalQuestions}`;
}

function restartQuiz() {
    document.getElementById("resultContainer").style.display = "none";
    startQuiz();
}