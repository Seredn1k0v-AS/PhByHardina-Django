var openerH = document.querySelector('#opener').clientHeight;
var barH = document.querySelector('#menu').clientHeight;
var mar_T = 20;
// var mar_T = +getComputedStyle(document.querySelector('#opener')).marginTop;
var H = openerH + barH + mar_T;

// function FirstAct(elem) {
//     elem.style.transform = 'translateY(-40px)'
// }

// function SecAct(elem) {
//     elem.style.transform = 'translateY(0px)'
//     elem.style.transition = '750'
// }


window.addEventListener('scroll', () => {
        if (pageYOffset > H) {
            let menuStyle = document.querySelector('#menu');
            menuStyle.style.position = 'fixed'
            menuStyle.style.top = '-40px'
            menuStyle.style.transform = 'translateY(40px)'
            menuStyle.style.transition = 'transform 750ms'
            
        }
    });

window.addEventListener('scroll', () => {
     if (pageYOffset < H) {
         let menuStyle = document.querySelector('#menu');
         menuStyle.style.position = 'relative'
         menuStyle.style.top = '0'
         menuStyle.style.transform = 'translateY(0)'

        //  menuStyle.style.top = openerH + mar_T + 'px'
     }
});






















// window.addEventListener('scroll', () => {
//     let navBar = document.querySelector('#menu');
//     let navBarRect = navBar.getBoundingClientRect();
//     // console.log('Координаты меню' + ' '  + navBarRect.top);
//     if (navBarRect.top < -38) {
//         console.log('First circumstance')
//         navBar.style.position = 'fixed'
//         navBar.style.top = '-38px'
//         navBar.style.transform = 'translateY(38px)'
//         navBar.style.transition = '1000ms'
//     }

// });
// window.addEventListener('scroll', () => {
//     let navBar = document.querySelector('#menu');
//     let navBarRect = navBar.getBoundingClientRect();
//     let opener = document.querySelector('#opener');
//     let openerRect = opener.getBoundingClientRect();
//     // console.log('Координаты меню' + ' '  + navBarRect.top);
//     if (navBarRect.top < -39) {
//         console.log('Second circumstance')
//         navBar.style.position = 'fixed'
//         navBar.style.top = '0'
//         navBar.style.transform = 'translateY(38px)'
//         navBar.style.transition = '2750ms'
//     }

// });
    








//     //Возвращает меню на свое место при прокрутке вверх
// window.addEventListener('scroll', () => {
//     let navBar = document.querySelector('#menu');
//     let opener = document.querySelector('#opener');
//     let openerRect = opener.getBoundingClientRect();
//     // console.log('opener bottom = ' + openerRect.bottom);
//     if (openerRect.bottom > 0) {
//         console.log('Тут уже должно работать равенство')
//         navBar.style.position = 'relative'
//         navBar.style.left = '0'
//         // navBar.style.top = '0'
//         navBar.style.transform = 'translateY(38px)'
        
//     }
 
// });