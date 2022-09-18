document.addEventListener('DOMContentLoaded', () => {
    start();
});

function start() {
    document.getElementById('slider').style.left = '-75%';
    document.getElementById('menuIcon').addEventListener('click', openMenu);
    document.getElementById('closeSliderBtn').addEventListener('click', closeMenu);
    let arrow = document.querySelectorAll('.arrow');

    let index = 0;
    changeApp(index)

    arrow[0].addEventListener('click', () => {
        index = index - 1;
        if (index < 0) {
            index = 5
        } else if (index > 5) {
            index = 0
        } else {
            index = index;
        }
        changeApp(index)
    })
    arrow[1].addEventListener('click', () => {
        index = index + 1;
        if (index < 0) {
            index = 5
        } else if (index > 5) {
            index = 0
        } else {
            index = index;
        }
        changeApp(index);
    })
};

function changeApp(index) {

    let apps = document.querySelectorAll('.appIcon');
    let txt = document.querySelectorAll('.appText');

    for (let i = 0; i < apps.length; i++) {
        apps[i].style.display = 'none';
        txt[i].style.display = 'none';
    }
    apps[index].style.display = 'inline-block';
    txt[index].style.display = 'grid';

}

function openMenu() {
    document.getElementById('slider').style.display = 'block';

    setTimeout(() => {
        document.getElementById('menuIcon').style.display = 'none';
        document.getElementById('slider').style.left = '0px';
    }, 1);// Serve para não pular a animação quando o display fica 'block'

    const aMob = document.querySelectorAll('.aMob');
    aMob.forEach(a => {
        a.addEventListener('click', () => {
            document.getElementById('slider').style.left = '-75%';
            document.getElementById('menuIcon').style.display = 'block';
            document.getElementById('slider-container').style.display = 'none';
        })
    })
};

function closeMenu() {
    document.getElementById('menuIcon').style.display = 'block';
    document.getElementById('slider').style.left = '-75%';
    
    setTimeout(() => {
        document.getElementById('slider').style.display = 'none';
    }, 300);
}