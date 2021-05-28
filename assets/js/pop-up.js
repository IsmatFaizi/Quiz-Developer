/*activeren van hint option pop-up*/
const openHintOption = document.getElementById('OpenHintOption');
const modal_container = document.getElementById('HintOptionContainer');
const closeHintOption = document.getElementById('closeHintOption');
const overlay = document.getElementById('overlay');
const openHint = document.getElementById('openHint');


openHintOption.addEventListener('click', () => {
    modal_container.classList.add('show_hint_opttion');
    overlay.classList.add('show_overlay');

});

closeHintOption.addEventListener('click', () => {
    modal_container.classList.remove('show_hint_opttion');
    overlay.classList.remove('show_overlay');
});
openHint.addEventListener('click', () => {
    modal_container.classList.remove('show_hint_opttion');
    overlay.classList.remove('show_overlay');
});


/*activeren van waarschuwing voor het verlaten van een pagina*/
const backToLevelPage = document.getElementById('backButton');
const backToLevelPageAside = document.getElementById('backToLevelPageAside');
const leaveContainer = document.getElementById('leaveContainer');
const cancelLeave = document.getElementById('cancelLeave');
const leavePage = document.getElementById('leavePage');

backToLevelPage.addEventListener('click', () => {
    leaveContainer.classList.add('show_leave_warning');
    overlay.classList.add('show_overlay');
});

cancelLeave.addEventListener('click', () => {
    leaveContainer.classList.remove('show_leave_warning');
    overlay.classList.remove('show_overlay');
});

backToLevelPageAside.addEventListener('click', () => {
    leaveContainer.classList.add('show_leave_warning');
    overlay.classList.add('show_overlay');
});

/*activeren van pop-up om te melden dat history pagina niet toeganlijk tijdens spelen*/
const coinsOfQuestionsPage = document.getElementById('goToCoins');
const coinsPopUp = document.getElementById('coinsPopUp');
const closeCoins = document.getElementById('closeCoins');

coinsOfQuestionsPage.addEventListener('click', () => {
    coinsPopUp.classList.add('show_coins_po_up');
    overlay.classList.add('show_overlay');
});

closeCoins.addEventListener('click', () => {
    coinsPopUp.classList.remove('show_coins_po_up');
    overlay.classList.remove('show_overlay');
});
/*activeren van correct of niet correct antwoord*/
const correctAnswer = document.getElementById('correctAnswer');
const wronAnswer = document.getElementById('wronAnswer');
const overlayAnswerFeedback = document.getElementById('overlayAnswerFeedback');
const nextCorrectAnswer = document.getElementById('nextCorrectAnswer');
const nextWronAnswer = document.getElementById('nextWronAnswer');

nextCorrectAnswer.addEventListener('click', () => {
    overlayAnswerFeedback.classList.remove('show_feedback_overlay');
    correctAnswer.classList.remove('show_pop_up_correct_antwoord');
});

nextWronAnswer.addEventListener('click', () => {
    overlayAnswerFeedback.classList.remove('show_feedback_overlay');
    wronAnswer.classList.remove('show_pop_up_niet_correct_antwoord');
});

let correctAnswerFunction = ()=>{
    overlayAnswerFeedback.classList.add('show_feedback_overlay');
    correctAnswer.classList.add('show_pop_up_correct_antwoord');
    
}
let wronAnswerFunction = () => {
    overlayAnswerFeedback.classList.add('show_feedback_overlay');
    wronAnswer.classList.add('show_pop_up_niet_correct_antwoord');
}

const popupScoreBoard = document.getElementById('popupScoreBoard')
const overlayScoreboard = document.getElementById('overlayScoreboard')

let scoreboard = () => {
    overlayScoreboard.classList.add('show_overlay_scoreboard');
    popupScoreBoard.classList.add('show_score_board');
}
