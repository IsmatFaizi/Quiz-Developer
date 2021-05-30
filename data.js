"use strict";
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
exports.correctData = void 0;
var fetch = require('node-fetch');
var fs = require('fs/promises');
var allHeader = new fetch.Headers();
allHeader.append('Content-Type', 'application/json');
allHeader.append('Authorization', 'Bearer HwYTg2GpLJ9cESZnd6wn');
var getMovies = function () { return __awaiter(void 0, void 0, void 0, function () {
    var gegevens, jsonVersie, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                return [4 /*yield*/, fetch('https://the-one-api.dev/v2/movie', {
                        method: 'GET',
                        headers: allHeader
                    })];
            case 1:
                gegevens = _b.sent();
                return [4 /*yield*/, gegevens.json()];
            case 2:
                jsonVersie = _b.sent();
                return [4 /*yield*/, fs.writeFile('movies.json', JSON.stringify(jsonVersie))];
            case 3:
                _b.sent();
                console.log('Al movies gehaald');
                return [3 /*break*/, 5];
            case 4:
                _a = _b.sent();
                console.log("Bestaande movies worden gebruikt");
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var getCharacters = function () { return __awaiter(void 0, void 0, void 0, function () {
    var gegevens, jsonVersie, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                return [4 /*yield*/, fetch('https://the-one-api.dev/v2/character', {
                        method: 'GET',
                        headers: allHeader
                    })];
            case 1:
                gegevens = _b.sent();
                return [4 /*yield*/, gegevens.json()];
            case 2:
                jsonVersie = _b.sent();
                return [4 /*yield*/, fs.writeFile('characters.json', JSON.stringify(jsonVersie))];
            case 3:
                _b.sent();
                console.log('Al characters gehaald');
                return [3 /*break*/, 5];
            case 4:
                _a = _b.sent();
                console.log("Bestaande characters worden gebruikt");
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var getQuotes = function () { return __awaiter(void 0, void 0, void 0, function () {
    var gegevens, jsonVersie, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                return [4 /*yield*/, fetch('https://the-one-api.dev/v2/quote?limit=2390', {
                        method: 'GET',
                        headers: allHeader
                    })];
            case 1:
                gegevens = _b.sent();
                return [4 /*yield*/, gegevens.json()];
            case 2:
                jsonVersie = _b.sent();
                return [4 /*yield*/, fs.writeFile('quotes.json', JSON.stringify(jsonVersie))];
            case 3:
                _b.sent();
                console.log('Al quotes gehaald');
                return [3 /*break*/, 5];
            case 4:
                _a = _b.sent();
                console.log("Bestaande quotes worden gebruikt");
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
var getData = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getCharacters()];
            case 1:
                _a.sent();
                return [4 /*yield*/, getMovies()];
            case 2:
                _a.sent();
                return [4 /*yield*/, getQuotes()];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
getData();
var movies = undefined;
var quotes = undefined;
var characters = undefined;
var readData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, _c, _d, _e, _f;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _b = (_a = JSON).parse;
                return [4 /*yield*/, fs.readFile('./movies.json')];
            case 1:
                movies = _b.apply(_a, [_g.sent()]);
                _d = (_c = JSON).parse;
                return [4 /*yield*/, fs.readFile('./quotes.json')];
            case 2:
                quotes = _d.apply(_c, [_g.sent()]);
                _f = (_e = JSON).parse;
                return [4 /*yield*/, fs.readFile('./characters.json')];
            case 3:
                characters = _f.apply(_e, [_g.sent()]);
                return [2 /*return*/];
        }
    });
}); };
var getCorrectQuotes = function () { return __awaiter(void 0, void 0, void 0, function () {
    var moviesLength, quotesLength, charactersLength, random, quote, characterName, movieName, wikiUrl, i, i;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, readData()];
            case 1:
                _a.sent();
                return [4 /*yield*/, movies.docs.length];
            case 2:
                moviesLength = _a.sent();
                return [4 /*yield*/, quotes.docs.length];
            case 3:
                quotesLength = _a.sent();
                return [4 /*yield*/, characters.docs.length];
            case 4:
                charactersLength = _a.sent();
                random = Math.floor(Math.random() * quotesLength) + 1;
                quote = quotes.docs[random].dialog;
                characterName = undefined;
                movieName = undefined;
                wikiUrl = undefined;
                for (i = 0; i < charactersLength; i++) {
                    if (characters.docs[i]._id === quotes.docs[random].character) {
                        characterName = characters.docs[i].name;
                        wikiUrl = characters.docs[i].wikiUrl;
                        break;
                    }
                }
                for (i = 0; i < moviesLength; i++) {
                    if (movies.docs[i]._id === quotes.docs[random].movie) {
                        movieName = movies.docs[i].name;
                        break;
                    }
                }
                return [2 /*return*/, { quote: quote, characterName: characterName, movieName: movieName, wikiUrl: wikiUrl }];
        }
    });
}); };
var getWrongName = function () { return __awaiter(void 0, void 0, void 0, function () {
    var charactersLength, random;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, characters.docs.length];
            case 1:
                charactersLength = _a.sent();
                random = Math.floor(Math.random() * charactersLength);
                return [2 /*return*/, characters.docs[random].name];
        }
    });
}); };
var getWrongMovie = function () { return __awaiter(void 0, void 0, void 0, function () {
    var moviesLength, random;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, movies.docs.length];
            case 1:
                moviesLength = _a.sent();
                random = Math.floor(Math.random() * moviesLength);
                return [2 /*return*/, movies.docs[random].name];
        }
    });
}); };
var createAnswers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var correctData, allAnswer, i, mixAnswers, i, random, quote, wiki, optionOne, _a, optionTwo, _b, optionThree, _c, optionFour, _d, correctAnswere, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0: return [4 /*yield*/, getCorrectQuotes()];
            case 1:
                correctData = _f.sent();
                allAnswer = [];
                for (i = 0; i < 3; i++) {
                    allAnswer.push({ characterName: getWrongName(), movieName: getWrongMovie() });
                }
                allAnswer.push({ characterName: correctData.characterName, movieName: correctData.movieName });
                mixAnswers = [];
                for (i = 0; i < 4; i++) {
                    random = Math.floor(Math.random() * allAnswer.length);
                    mixAnswers.push(allAnswer[random]);
                    allAnswer.splice(random, 1);
                }
                return [4 /*yield*/, mixAnswers.push({ characterName: correctData.characterName, movieName: correctData.movieName })];
            case 2:
                _f.sent();
                quote = correctData.quote;
                wiki = correctData.wikiUrl;
                return [4 /*yield*/, mixAnswers[0].characterName];
            case 3:
                _a = (_f.sent()) + ' in ';
                return [4 /*yield*/, mixAnswers[0].movieName];
            case 4:
                optionOne = _a + (_f.sent());
                return [4 /*yield*/, mixAnswers[1].characterName];
            case 5:
                _b = (_f.sent()) + ' in ';
                return [4 /*yield*/, mixAnswers[1].movieName];
            case 6:
                optionTwo = _b + (_f.sent());
                return [4 /*yield*/, mixAnswers[2].characterName];
            case 7:
                _c = (_f.sent()) + ' in ';
                return [4 /*yield*/, mixAnswers[2].movieName];
            case 8:
                optionThree = _c + (_f.sent());
                return [4 /*yield*/, mixAnswers[3].characterName];
            case 9:
                _d = (_f.sent()) + ' in ';
                return [4 /*yield*/, mixAnswers[3].movieName];
            case 10:
                optionFour = _d + (_f.sent());
                return [4 /*yield*/, mixAnswers[4].characterName];
            case 11:
                _e = (_f.sent()) + ' in ';
                return [4 /*yield*/, mixAnswers[4].movieName];
            case 12:
                correctAnswere = _e + (_f.sent());
                return [4 /*yield*/, { quote: quote, wiki: wiki, optionOne: optionOne, optionTwo: optionTwo, optionThree: optionThree, optionFour: optionFour, correctAnswere: correctAnswere }];
            case 13: return [2 /*return*/, _f.sent()];
        }
    });
}); };
var correctData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var allQuestions, i, createAnswer;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                allQuestions = [];
                allQuestions.push({ leeg: 'leeg' });
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i <= 50)) return [3 /*break*/, 4];
                return [4 /*yield*/, createAnswers()];
            case 2:
                createAnswer = _a.sent();
                allQuestions.push(createAnswer);
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/, (allQuestions)];
        }
    });
}); };
exports.correctData = correctData;
