
function onToggleMenu() {
    document.body.classList.toggle('menu-open')
}

function onSelectCategory(elBtn) {
    const elNavBtns = document.querySelectorAll('.btn-nav')
    for (const btn of elNavBtns) {
        if (btn.innerText === elBtn.innerText) btn.classList.add('selected')
        else btn.classList.remove('selected')
    }
}