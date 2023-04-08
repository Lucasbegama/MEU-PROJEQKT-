function clickMenu(){
    if(menu_bar.style.display=='block'){
        menu_bar.style.display='none'
    }else{
        menu_bar.style.display='block'
    }
}
let open = window.document.getElementById('open_menu')
let close =window.document.getElementById('close')
let menu =window.document.getElementById('menu_bar')
open.addEventeListener('click',aberto)
close.addEventeListener('click',fechado)

function close(){
    let fechado = document.getElementById('close')
}

function aberto(){
    menu.style.display='none'
}

function fechado(){
    menu.style.display='block'
}