
function handleKirim() {
let nama = document.getElementById('nama').value;
let email = document.getElementById('email').value;
let phone = document.getElementById('phone').value;
let selec = document.getElementById('selec').value;
let deskripsi = document.getElementById('deskripsi').value;

    let myEmail = "badrian0402@gmail.com";
    let a = document.createElement("a");
    a.href = `mailto:${myEmail}?select=${selec}&body=hallo, nama saya ${nama}. ${deskripsi}. ${phone}. ${email}`;
    a.click();
    
    console.log(nama);
    console.log(email);
    console.log(phone);
    console.log(selec);
    console.log(deskripsi);
}
console.log('haha');