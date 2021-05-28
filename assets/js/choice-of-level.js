
document.getElementById('backButton')
    .addEventListener('click', () => { 
        window.location.href='/';
});
document.getElementById('goToCoins')
    .addEventListener('click', () => { 
        window.location.href='/coin-history';
});
let levelNumber = undefined;

document.getElementById('level1')
    .addEventListener('click', () => {
        window.location.replace("/lord-of-the-rings?level=1&question=1");
});

document.getElementById('level2')
    .addEventListener('click', () => {
        window.location.replace("/lord-of-the-rings?level=2&question=1");
});

document.getElementById('level3')
    .addEventListener('click', () => {
        window.location.replace("/lord-of-the-rings?level=3&question=1"); 
});

document.getElementById('level4')
    .addEventListener('click', () => {
        window.location.replace("/lord-of-the-rings?level=4&question=1"); 
});

document.getElementById('level5')
    .addEventListener('click', () => {
        window.location.replace("/lord-of-the-rings?level=5&question=1"); 
});
