const fetch = require('node-fetch');
const fs = require('fs/promises');

let allHeader = new fetch.Headers();
allHeader.append('Content-Type', 'application/json');
allHeader.append('Authorization', 'Bearer HwYTg2GpLJ9cESZnd6wn');
const getMovies = async ()=>{
try{
      let gegevens = await fetch('https://the-one-api.dev/v2/movie',
       {
            method: 'GET',
            headers: allHeader,
       })
        let jsonVersie = await gegevens.json();
        await fs.writeFile('movies.json', JSON.stringify(jsonVersie))
        console.log('Al movies gehaald')
    }
   catch
  {
    console.log("Bestaande movies worden gebruikt")
  }
  }

const getCharacters = async ()=>{
  try{
    let gegevens = await fetch('https://the-one-api.dev/v2/character',
  {
        method: 'GET',
        headers: allHeader,
   })
    let jsonVersie = await gegevens.json();
    await fs.writeFile('characters.json', JSON.stringify(jsonVersie))
    console.log('Al characters gehaald')
}
catch{
  console.log("Bestaande characters worden gebruikt")
}
}

const getQuotes = async ()=>{
  try{
  let gegevens = await fetch('https://the-one-api.dev/v2/quote?limit=2390',
   {
        method: 'GET',
        headers: allHeader,
   })   
    let jsonVersie = await gegevens.json();
    await fs.writeFile('quotes.json', JSON.stringify(jsonVersie))
    console.log('Al quotes gehaald')
}
catch {
  console.log("Bestaande quotes worden gebruikt")
}
}

(async () =>{
  await getCharacters();
  await getMovies();
  await getQuotes();
})();

let movies =undefined;
let quotes =undefined;
let characters =undefined;

const readData = async ()=>{
  movies = JSON.parse(await fs.readFile('./movies.json'));
  quotes = JSON.parse(await fs.readFile('./quotes.json'));
  characters = JSON.parse(await fs.readFile('./characters.json'));
}

const getCorrectQuotes = async ()=>{
  await readData();
  let moviesLength =await  movies.docs.length;
  let quotesLength =await  quotes.docs.length;
  let charactersLength =await characters.docs.length;
  let random = Math.floor(Math.random() * quotesLength) + 1;
  let quote =  quotes.docs[random].dialog;
  let characterName =  undefined;
  let movieName =  undefined;
  let wikiUrl =  undefined;

  for(let i = 0; i <charactersLength; i++){
    if (characters.docs[i]._id === quotes.docs[random].character ){
      characterName =   characters.docs[i].name;
      wikiUrl =  characters.docs[i].wikiUrl;
      break;
    }
  }

  for(let i = 0; i < moviesLength; i++){
    if (movies.docs[i]._id === quotes.docs[random].movie){
      movieName =  movies.docs[i].name;
      break;
    }
  }

  return {quote, characterName, movieName, wikiUrl};
}

let getWrongName =async ()=>{
  let charactersLength =await characters.docs.length;
  let random = Math.floor(Math.random() * charactersLength);
  return  characters.docs[random].name;
}

let getWrongMovie = async()=>{
  let moviesLength =await  movies.docs.length;
  let random = Math.floor(Math.random() * moviesLength);
  return  movies.docs[random].name;
}


let createAnswers = async () =>{
  let correctData = await getCorrectQuotes()
  let allAnswer =[];
  for(let i = 0; i <3; i++){
  allAnswer.push({characterName:getWrongName(), movieName: getWrongMovie()});
  }
  
  allAnswer.push({ characterName: correctData.characterName, movieName: correctData.movieName});
  let mixAnswers =[];
  for(let i = 0; i <4;i++){
    let random = Math.floor(Math.random() * allAnswer.length);
    mixAnswers.push(allAnswer[random]);
    allAnswer.splice(random,1);
  }
  await mixAnswers.push({ characterName: correctData.characterName, movieName: correctData.movieName});

  let quote = correctData.quote;
  let wiki = correctData.wikiUrl;
  let optionOne = await mixAnswers[0].characterName +' in ' +await mixAnswers[0].movieName;
  let optionTwo =await mixAnswers[1].characterName +' in ' +await mixAnswers[1].movieName;
  let optionThree =await mixAnswers[2].characterName +' in ' +await mixAnswers[2].movieName;
  let optionFour =await mixAnswers[3].characterName +' in ' +await mixAnswers[3].movieName;
  let correctAnswere =await mixAnswers[4].characterName +' in ' +await mixAnswers[4].movieName;
  return await { quote, wiki,optionOne,optionTwo,optionThree,optionFour, correctAnswere};
}

let correctData = async () =>{
  let allQuestions = [];
  allQuestions.push({leeg:'leeg'})
  for (let i=0; i<=50; i++){
    let createAnswer = await createAnswers();
      allQuestions.push(createAnswer)
  }
  return(allQuestions)
}
export{correctData }; 