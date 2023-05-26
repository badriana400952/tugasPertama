//buat array kosong
let blogr = [];



function tambahBlog(event) {
    //untuk menghilangkan default reload

    event.preventDefault()
    //masukan ionc kedalam variabel
    let nodejsic = ' <i class="fa-brands fa-node"></i>';
    let reactic = '<i class="fa-brands fa-react"></i>';
    let typeScriptic = '<i class="fa-brands fa-square-js"></i>';
    let nextic = '<i class="fa-brands fa-vuejs"></i>';

    //masukan elemen berdasarkan id dengan value yg di input kedalam variabel
    let nama = document.getElementById("nama").value;
    let start = document.getElementById("start").value;
    let endd = document.getElementById("endDate").value;
    let deskripsi = document.getElementById("deskripsi").value;
    //masukan element berdasarkan id dengan cheklis yang di pilih kedalam variabel
    let iconnode = document.getElementById("nodeJss").checked ? nodejsic : "";
    let iconreact = document.getElementById("react").checked ? reactic : "";
    let iconnext = document.getElementById("next").checked ? nextic : "";
    let typeScript = document.getElementById("typeScript").checked ? typeScriptic : "";
    let image = document.getElementById("image").files;

    let x = new Date(start)
    let y = new Date(endd)
    let tanggalSekarang = x.getTime();
    let tanggalDurasi = y.getTime();
    let jarak = tanggalDurasi - tanggalSekarang ;
    // let durasi = Math.floor(jarak / (1000 * 60 * 60 * 24 * 30))


    let detik = Math.floor(jarak / 1000);
    let menit = Math.floor(detik / 60); 
    let jam = Math.floor(menit / 60); //82080
    let hari = Math.floor(jam / 24);
    let bulan = Math.floor(hari / 30);



    //upload omage 
    image = URL.createObjectURL(image[0]);
    console.log(image);

    //buat object
    let blogs = {
        nama,
        detik,
        menit,
        jam,
        hari,
        bulan,
        jarak,
        tanggalDurasi,
        tanggalSekarang,
        start,
        endd,
        deskripsi,
        iconnode,
        iconreact,
        iconnext,
        typeScript,
        image,
        // postWaktu: new Date(),
    };

    //array kosong bloger masukan/tambahkan object blogs kedalam
    blogr.push(blogs);
    console.log(blogr);

    //memanggil function ketika function tambah blog di jalankan
    viewElement();

}

function viewElement() {
    //ketika di klik
    //document berdasarkan id contentView ubah menjadi kosong
    document.getElementById("view").innerHTML = "";

    for (let index = 0; index < blogr.length; index++) {
        document.getElementById("view").innerHTML += `
        <div class="view-grup">
            <div class="view-img">
                <img src="${blogr[index].image}" alt="badro" >
            </div>
            <div class="veiw-desk">
                <h1>${blogr[index].nama}</h1>
                <p>Dari ( ${blogr[index].start})  </p>
                <p>Sampai ( ${blogr[index].endd})  </p>
                <p>Durasi  ${blogr[index].bulan} Bulan atau ${blogr[index].hari} hari</p>
                <p>${blogr[index].deskripsi}</p>
            </div>
            <div class="iconss">
                ${blogr[index].iconnode}
                ${blogr[index].iconreact}
                ${blogr[index].iconnext}
                ${blogr[index].typeScript}
                </div>
            <div class="buttonGrup">
            <button><a href="detail.html">Detail</a> </button>
                <button>Delete</button>
            </div>
        </div>
    `;
    }

}
// function getFullStart(time) {

//     return time;
// }

// getFullStart()