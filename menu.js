async function loadMenu() {
    const menu = await fetch('menu.html');
    document.getElementById('menu-container').innerHTML = await menu.text();
}

async function loadMenuFR() {
    const menu = await fetch('menuFR.html');
    document.getElementById('menu-container').innerHTML = await menu.text();
}