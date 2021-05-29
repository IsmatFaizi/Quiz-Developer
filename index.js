"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var express = require('express');
var app = express();
var ejs = require('ejs');
var data = require('./data');
app.set('port', (process.env.PORT || 5000));
app.set('view engine', 'ejs');
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('assets'));
app.get('/', function (req, res) {
    res.render('index', {
        extraHeadLinks: '<script defer src="/js/home-page.js"></script>'
    });
});
var coins = 25;
var coinsHistory = [];
app.get('/coin-history', function (req, res) {
    res.render('coin-history', {
        subHeader: '<p class="p_first_header" >Coins History</p>',
        extraHeadLinks: '<script defer src="/js/cons-history-and-info-page.js"></script>',
        coins: coins,
        coinsHistory: coinsHistory
    });
});
app.get('/info-and-privacy', function (req, res) {
    res.render('info-and-privacy', {
        subHeader: '<p class="p_first_header" >Info & privacy</p>',
        extraHeadLinks: '<script defer src="/js/choice-of-level.js"></script>',
        coins: coins
    });
});
app.get('/lord-of-the-rings/choice-of-level', function (req, res) {
    res.render('choice-of-level', {
        subHeader: '<p class="p_first_header">LORD OF THE RINGS</p>',
        extraHeadLinks: '<script defer src="/js/choice-of-level.js"></script>',
        coins: coins
    });
});
var level = 1;
var questionNumber = 1;
var score = 0;
var correctAnswer = undefined;
var allQuestions = undefined;
app.get("/lord-of-the-rings", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var scoreboard, correct, hint, answer, count, myHeaders, data, selectLevel;
    return __generator(this, function (_a) {
        level = parseInt(req.query.level ? req.query.level : level);
        scoreboard = req.query.scoreboard ? req.query.scoreboard : false;
        questionNumber = parseInt(req.query.question ? req.query.question : questionNumber);
        correct = req.query.correct;
        hint = req.query.hint;
        answer = undefined;
        switch (level) {
            case 1: {
                answer = allQuestions[questionNumber];
                break;
            }
            case 2: {
                answer = allQuestions[10 + questionNumber];
                break;
            }
            case 3: {
                answer = allQuestions[20 + questionNumber];
                break;
            }
            case 4: {
                answer = allQuestions[30 + questionNumber];
                break;
            }
            case 5: {
                answer = allQuestions[40 + questionNumber];
                break;
            }
        }
        if (hint === 'true') {
            coins -= 3;
            coinsHistory.push({ reason: "Hint op level " + level + " vraag " + questionNumber, coins: -3 });
        }
        correctAnswer = answer.correctAnswere;
        count = 1;
        myHeaders = '<div class="level_and_questions_number">' +
            ("<p class=\"level\">Level " + level + "</p><p class=\"question_number\">Vraag " + questionNumber + " van 10</p>") +
            '</div> <p class="name_of_the_game">LORD OF THE RINGS</p></div>';
        data = { quote: answer.quote,
            answerOne: answer.optionOne,
            answerTwo: answer.optionTwo,
            answerThree: answer.optionThree,
            answerFour: answer.optionFour,
            hint: answer.wiki,
            correctAnswere: correctAnswer,
            questionNumber: questionNumber,
            level: level, volgende: "/lord-of-the-rings?level=" + level + "&question=" + (questionNumber + count), correct: correct,
            score: score,
            scoreboard: scoreboard,
            coins: coins };
        selectLevel = Math.floor(Math.random() * 3) + 1;
        if (questionNumber > 10) {
            coins += score;
            coinsHistory.push({ reason: "Level " + level, coins: "+ " + score });
            res.redirect("/lord-of-the-rings?level=" + level + "&question=10&scoreboard=true");
        }
        else if (selectLevel === 1) {
            res.render('drag-and-drop-question', __assign({ extraHeadLinks: '<script defer src="/js/pop-up.js" ></script> <script defer src="/js/drag-and-drop.js"></script> ', subHeader: myHeaders }, data));
        }
        else if (selectLevel === 2) {
            res.render('choice-question', __assign({ extraHeadLinks: '<script defer src="/js/pop-up.js" ></script>', subHeader: myHeaders }, data));
        }
        else if (selectLevel === 3) {
            res.render('dropdown-question', __assign({ extraHeadLinks: '<script defer src="/js/pop-up.js" ></script>', subHeader: myHeaders }, data));
        }
        return [2 /*return*/];
    });
}); });
app.post("/lord-of-the-rings/level=:" + level + "([1-5])&question=:" + questionNumber + "([1-9]|10)", function (req, res) {
    var answer = req.body.answer;
    var canswer = correctAnswer;
    if (answer === canswer) {
        score += 1;
        res.redirect("/lord-of-the-rings?level=" + level + "&question=" + questionNumber + "&correct=true");
    }
    else {
        if (questionNumber === 1) {
            score = 0;
        }
        res.redirect("/lord-of-the-rings?level=" + level + "&question=" + questionNumber + "&correct=false");
    }
});
app.listen(app.get('port'), function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data.correctData()];
            case 1:
                allQuestions = _a.sent();
                console.log('[server] http://localhost:' + app.get('port'));
                return [2 /*return*/];
        }
    });
}); });
