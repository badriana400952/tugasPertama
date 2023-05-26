


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
 
// var onOff = false;

// // Fungsi untuk mengubah status onOff dari hidup ke mati atau sebaliknya
// function toggleOnOff() {
//   onOff = !onOff; // Menggunakan operator negasi (!) untuk membalik nilai boolean
// }

// // Contoh penggunaan fungsi toggleOnOff
// console.log(onOff); // Output: false (mati)
// toggleOnOff();
// console.log(onOff); // Output: true (hidup)
// toggleOnOff();
// console.log(onOff)