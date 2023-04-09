
//confing de menu_bar 
function clickMenu(){
    let open = window.document.getElementById('open_menu')
    let menu = window.document.getElementById('menu_bar')
    let close = window.document.getElementById('close')
   

    if(menu.style.display=='block'){
        menu.style.display='none'
        close.style.display='none'
    }else{
        menu.style.display='block'
        close.style.display='block'
    }if(menu.style.display=='block'){
           open.style.display='none'
    }else{
        open.style.display='block'
    }
   
    
}






