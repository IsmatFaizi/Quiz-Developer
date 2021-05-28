const nonAvailableOption = document.querySelectorAll('#nonAvailableOption');
const popupHome = document.getElementById('popupHome');
const overlayPopupHome = document.getElementById('overlayPopupHome');
const popupHomeLeave = document.getElementById('popupHomeLeave');


nonAvailableOption.forEach(element =>{
    element.addEventListener('click', () => {
    popupHome.classList.add('show_pop_up_home');
    overlayPopupHome.classList.add('show_overlay_pop_up_home')    
});
});

popupHomeLeave.addEventListener('click', () => {
    popupHome.classList.remove('show_pop_up_home');
    overlayPopupHome.classList.remove('show_overlay_pop_up_home')
});