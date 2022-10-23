


function onSelectCategory(elBtn) {
    const elNavBtns = elBtn.parentElement.querySelectorAll('.btn-nav')
    if (elBtn.parentElement.classList.contains('dropdown')) {
        onSelectCategory(elBtn.parentElement)
    }
    for (const btn of elNavBtns) {
        if (btn.innerText === elBtn.innerText) btn.classList.add('selected')
        else btn.classList.remove('selected')
    }
}

function toggleDropDown(elDrop) {
    let elMenu = elDrop.querySelector('.dropdown-menu')
    elMenu.classList.add('active')
}
function hideDropDown(elDrop) {
    let elMenu = elDrop.querySelector('.dropdown-menu')
    elMenu.classList.remove('active')
}

function onReadMore() {
    toggleScreen('read')
}

function onToggleMenu() {
    toggleScreen('menu')
}


function toggleScreen(modal) {
    let elBody = document.querySelector('body')
    elBody.classList.toggle('screen-modal')
    if (modal) elBody.classList.toggle(modal)
    else elBody.classList.remove('menu', 'read')
}