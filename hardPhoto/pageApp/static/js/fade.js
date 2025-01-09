let fade = document.querySelectorAll('.fadeElem');
for(let f of fade) {
    f.style.visibility = 'hidden';
    f.style.opacity = '0';
}

/* let a = prompt('Введите число');
alert(a == 1);
if (a == 1) {
    for(f of fade){
        f.style.visibility = 'visible'
    }
} */

/* for(f of fade){
    f.onScroll = function() {
        for(f of fade){
            let scrollTop = f.scrollTop;
            if (scrollTop > 50){
                for(f of fade){
                    f.style.visibility = 'visible'
                }
            }
        } 
    }
} */

/* document.querySelector('#fadeEl').onScroll = function() {
    if(document.querySelector('#fadeEl').scrollTop > 10){
        alert('Okay, we did it..')
    }
} */
    window.addEventListener('scroll', () => {
        for(f of fade){
            let fadeRect  = f.getBoundingClientRect();
            let clientRectTop =  (Number(document.documentElement.clientHeight));
            if (fadeRect.top < (clientRectTop - 80)){
                f.style.visibility = 'visible'
                f.style.opacity = '1'
                f.style.paddingTop = '0'
                f.style.transition = '1250ms'
            }
        }
    });

    document.querySelector('#navBar').style.visibility = 'visible'
    document.querySelector('#navBar').style.opacity = '1'
    // document.querySelector('#navBar').style.top = '0'
    document.querySelector('#navBar').style.transition = '1250ms'


    //Код для появления и скрытия выпадающего меню1
    document.getElementById('portfolio').addEventListener('mouseover', () => {
        let a = document.getElementById('dropDownContent');
        a.style.visibility = 'visible'
        a.style.opacity = '1'
        a.style.marginTop = '0'
        a.style.transition = '500ms'
    })
    
    document.getElementById('portfolio').addEventListener('mouseout', () => {
        let a = document.getElementById('dropDownContent');
        a.style.visibility = 'hidden'
        a.style.opacity = '0'
        a.style.marginTop = '20px'
        a.style.transition = '500ms'
    });
    let a = document.getElementById('dropDownContent');

    a.addEventListener('mouseover', () => {
        a.style.visibility = 'visible'
        a.style.opacity = '1'
        a.style.marginTop = '0'
        a.style.transition = '500ms'
    });

    a.addEventListener('mouseout', () => {
        a.style.visibility = 'hidden'
        a.style.opacity = '0'
        a.style.marginTop = '20px'
        a.style.transition = '500ms'
    });
    
    
    //Код для появления и скрытия выпадающего меню2
    document.getElementById('info').addEventListener('mouseover', () => {
        let b = document.getElementById('dropDownContent_2');
        b.style.visibility = 'visible'
        b.style.opacity = '1'
        b.style.marginTop = '0'
        b.style.transition = '500ms'
    })
    
    document.getElementById('info').addEventListener('mouseout', () => {
        let b = document.getElementById('dropDownContent_2');
        b.style.visibility = 'hidden'
        b.style.opacity = '0'
        b.style.marginTop = '20px'
        b.style.transition = '500ms'
    });
    let b = document.getElementById('dropDownContent_2');

    b.addEventListener('mouseover', () => {
        b.style.visibility = 'visible'
        b.style.opacity = '1'
        b.style.marginTop = '0'
        b.style.transition = '500ms'
    });

    b.addEventListener('mouseout', () => {
        b.style.visibility = 'hidden'
        b.style.opacity = '0'
        b.style.marginTop = '20px'
        b.style.transition = '500ms'
    });
    /*     for(f of fade){
    var rect = f.getBoundingClientRect();
    console.log(rect.top);
    console.log('Высота окна =' + ' ' + (Number(document.documentElement.clientHeight) + 2));

} 
 */

/* for(let aButton of document.querySelectorAll('.aButton')){
    aButton.addEventListener('mousedown', () => {
        aButton.style.opacity = '0.75'
        aButton.style.transition = 'opacity 200ms'
    });

    aButton.addEventListener('mouseup', () => {
        aButton.style.opacity = '1'
        aButton.style.transition = 'opacity 200ms'    
    });
} */

/* opacity:0.8;
-moz-opacity:0.8;
filter: alpha(opacity=80) black;
-khtml-opacity: 0.8;
background-color:#000; */

/* let phLinks = document.querySelectorAll('.sh_link');
for(let link of phLinks){
    link.addEventListener('mouseover',() => {
        link.style.opacity = '0.8'
        link.style.backgroundColor = '#000'
        link.style.backgroundColor = '#000'
        link.style.backgroundColor = '#000'
        link.style.backgroundColor = '#000'
    });
    link.addEventListener('mouseout')
} */