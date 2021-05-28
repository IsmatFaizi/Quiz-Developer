document.getElementById('backButton')
.addEventListener('click', () => { 
    window.history.back();
});
document.getElementById('goToCoins')
.addEventListener('click', () => { 
    window.location.href='/coin-history';
});
document.getElementById('backToLevelPageAside')
.addEventListener('click', () => { 
    window.location.href='/lord-of-the-rings/choice-of-level';
});