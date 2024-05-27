function rastrear(cod){
    if (cod == 'NJR05022024'){
        document.getElementById('info_turtle').style.display = 'flex'
        document.getElementById('turtle_not_found').style.display = 'none'
    }
    else{
        document.getElementById('turtle_not_found').style.display = 'block'
        document.getElementById('info_turtle').style.display = 'none'
    }
}