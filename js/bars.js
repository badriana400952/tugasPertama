


let klikBuka = false;

function toggle() {
    let ul = document.getElementById('muncul');
    // console.log('onOff')
    if(!klikBuka) {
        ul.style.display = "block";
        klikBuka = true;
        console.log("hidup")
        klikBuka = true

    }else{
        ul.style.display = "none";
        console.log("mati")
        klikBuka = false

    }

  
}
 
