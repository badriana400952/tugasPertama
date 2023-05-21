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
    let end = document.getElementById("end").value;
    let deskripsi = document.getElementById("deskripsi").value;
    //masukan element berdasarkan id dengan cheklis yang di pilih kedalam variabel
    let iconnode = document.getElementById("nodeJss").checked ? nodejsic : "";
    let iconreact = document.getElementById("react").checked ? reactic : "";
    let iconnext = document.getElementById("next").checked ? nextic : "";
    let typeScript = document.getElementById("typeScript").checked ? typeScriptic : "";
    let image = document.getElementById("image").files;

    //upload omage 
    image = URL.createObjectURL(image[0]);
    console.log(image);

    //buat object
    let blogs = {
        nama,
        start,
        end,
        deskripsi,
        iconnode,
        iconreact,
        iconnext,
        typeScript,
        image,
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
    document.getElementById("contentView").innerHTML = "";
        
    for (let index = 0; index < blogr.length; index++) {
        document.getElementById("contentView").innerHTML +=`
        <div class="view-grup">
            <div class="view-img">
                <img src="${blogr[index].image}" alt="badro" >
            </div>
            <div class="veiw-desk">
                <h1>${blogr[index].nama}</h1>
                <p>${blogr[index].start}</p>
                <p>${blogr[index].end}</p>
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