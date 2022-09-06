document.addEventListener('DOMContentLoaded', () => {
    start();
});

function start() {
    // let appCard = document.getElementById('appCard');
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
