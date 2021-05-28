import { count } from "node:console";
import { cpuUsage } from "node:process";

const express = require('express');
const app = express();
const ejs = require('ejs');
const data = require('./data');


app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended:true}))
app.use(express.static('assets'));


app.get('/',(req:any,res:any)=>{
    res.render('index',
    {
        extraHeadLinks: '<script defer src="/js/home-page.js"></script>'
    });
});

let coins = 25;
let coinsHistory = [];
app.get('/coin-history',(req:any,res:any)=>{
    res.render('coin-history',
    {
        subHeader: '<p class="p_first_header" >Coins History</p>',
        extraHeadLinks: '<script defer src="/js/cons-history-and-info-page.js"></script>',
        coins:coins,
        coinsHistory:coinsHistory
    });
});

app.get('/info-and-privacy',(req:any,res:any)=>{
    res.render('info-and-privacy',
    {
        subHeader: '<p class="p_first_header" >Info & privacy</p>',
        extraHeadLinks: '<script defer src="/js/choice-of-level.js"></script>', 
        coins:coins
    });
});

app.get('/lord-of-the-rings/choice-of-level',(req:any,res:any)=>{
    res.render('choice-of-level',
    {
        subHeader: '<p class="p_first_header">LORD OF THE RINGS</p>',
        extraHeadLinks: '<script defer src="/js/choice-of-level.js"></script>',
        coins:coins
    });
});

let level = 1;
let questionNumber = 1;
let score = 0;
let correctAnswer = undefined;
let allQuestions =undefined;

    app.get(`/lord-of-the-rings`, async(req:any,res:any)=>{
    level = parseInt(req.query.level?req.query.level:level);
    let scoreboard = req.query.scoreboard?req.query.scoreboard:false
    questionNumber = parseInt(req.query.question?req.query.question:questionNumber);
    let correct = req.query.correct
    let hint = req.query.hint
    let answer = undefined;
    switch(level){
        case 1:{
            answer = allQuestions[questionNumber];
            break;
        }
        case 2:{
            answer = allQuestions[10+questionNumber];
            break;
        }
        case 3:{
            answer = allQuestions[20+questionNumber];
            break;
        }
        case 4:{
            answer = allQuestions[30+questionNumber];
            break;
        }
        case 5:{
            answer = allQuestions[40+questionNumber];
            break;
        }
    }
    
    if (hint === 'true'){
        coins -=3;
        coinsHistory.push({reason:`Hint op level ${level} vraag ${questionNumber}`, coins: -3})
    }
    correctAnswer = answer.correctAnswere
    let count = 1
        let myHeaders = '<div class="level_and_questions_number">' + 
                    `<p class="level">Level ${level}</p><p class="question_number">Vraag ${questionNumber} van 10</p>` + 
                    '</div> <p class="name_of_the_game">LORD OF THE RINGS</p></div>';
        let data = { quote:answer.quote,
            answerOne: answer.optionOne,
            answerTwo:answer.optionTwo,
            answerThree:answer.optionThree,
            answerFour:answer.optionFour,
            hint:answer.wiki,
            correctAnswere: correctAnswer, 
            questionNumber:questionNumber,
            level:level,
            volgende:`/lord-of-the-rings?level=${level}&question=${questionNumber+count}`,
            correct:correct,
            score:score,
            scoreboard:scoreboard, 
            coins:coins}

        let selectLevel =Math.floor(Math.random() * 3) + 1;
        if(questionNumber > 10){
            coins += score;
            coinsHistory.push({reason:`Level ${level}`, coins: `+ ${score}`})
            res.redirect(`/lord-of-the-rings?level=${level}&question=10&scoreboard=true`);  
        }
        else if (selectLevel === 1){
            res.render('drag-and-drop-question',
                {   
                    extraHeadLinks: '<script defer src="/js/pop-up.js" ></script> <script defer src="/js/drag-and-drop.js"></script> ',
                    subHeader: myHeaders,
                    ...data
                });       
        }
      
        else if (selectLevel === 2) {
            res.render('choice-question',
                {                    
                    extraHeadLinks: '<script defer src="/js/pop-up.js" ></script>',
                    subHeader: myHeaders,
                    ...data
                });
        }
       else if (selectLevel === 3){
            res.render('dropdown-question',
                {                    
                    extraHeadLinks: '<script defer src="/js/pop-up.js" ></script>',
                    subHeader: myHeaders,
                    ...data
                });
        }
});

app.post(`/lord-of-the-rings/level=:${level}(\[1-5])&question=:${questionNumber}(\[1-9]|10)`,(req:any, res:any)=>{
    let answer = req.body.answer;
    let canswer = correctAnswer;
    if(answer === canswer){
            score +=1;
        res.redirect(`/lord-of-the-rings?level=${level}&question=${questionNumber}&correct=true`);
    }
    else { 
        if(questionNumber === 1){
            score =0;
        }
        res.redirect(`/lord-of-the-rings?level=${level}&question=${questionNumber}&correct=false`);
    }
});

app.listen(app.get('port'),async ()=>{
    allQuestions = await data.correctData();
    console.log( '[server] http://localhost:' + app.get('port'));
    });

export{};