let form_closer = document.getElementById('form_closer')
let hide_forms = document.getElementById('hide_forms')
let toggle_button = document.getElementById('toggle_button')

form_closer.addEventListener('click', ()=>{
    hide_forms.style.marginRight = '210vw';
    // hide_forms.style.opacity = '0';
    hide_forms.style.transition = '600ms ease-out';
    setTimeout(()=>{hide_forms.style.display = 'none';},800);
    // hide_forms.style.opacity = '0.7';
    
});

toggle_button.addEventListener('click', ()=>{
    hide_forms.style.display = 'flex';
    setTimeout(()=>{
        // hide_forms.style.opacity = '1';
        hide_forms.style.marginRight = '0';
        // hide_forms.style.transition = 'opacity 200ms ease-out';
        hide_forms.style.transition = '1200ms ease-out';
        

    },50);
    
});


// if (hide_forms.style.display = 'none'){
//     hide_forms.style.paddingTop = '40px';
//     opene.style.visibility = 'hidden'
//     opene.style.opacity = '0'
//     opene.style.transition = '1250ms'
// }

// if (hide_forms.style.display = 'flex'){
//     hide_forms.style.paddingTop = '0';
//     opene.style.visibility = 'visible'
//     opene.style.opacity = '1'
//     opene.style.transition = '1250ms'
// }