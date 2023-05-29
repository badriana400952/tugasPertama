<!-- send email -->

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



<!-- blogs -->


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




<!-- testiMonials -->

const testimonialData = [
  {
    author: "Abel Dustin",
    quote: "Jagalah Kebersihan",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 5,
  },
  {
    author: "Cintara Surya",
    quote: "Keren cuys!!",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4,
  },
  {
    author: "Dandi Cuy",
    quote: "The Best Pelayanannya!",
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 5,
  },
  {
    author: "bob",
    quote: "lorem ipsums!",
    image:
      "https://images.unsplash.com/photo-1682687982502-1529b3b33f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 2,
  },
];

function allTestimonials() {
  let testimonialHTML = "";

  testimonialData.forEach(function (item) {
    testimonialHTML += `<div class="testimonial">
                            <img
                                src="${item.image}"
                                class="profile-testimonial"
                            />
                            <p class="quote">${item.quote}</p>
                            <p class="author">- ${item.author}</p>
                            <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                        </div>
        `;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonials();

function filterTestimonials(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter(function (item) {
    return item.rating === rating;
  });

  //   console.log(testimonialFiltered);

  if (testimonialFiltered.length === 0) {
    testimonialHTML += `<h1>Data not found!</h1>`;
  } else {
    testimonialFiltered.forEach(function (item) {
      testimonialHTML += `<div class="testimonial">
                                <img
                                    src="${item.image}"
                                    class="profile-testimonial"
                                />
                                <p class="quote">${item.quote}</p>
                                <p class="author">- ${item.author}</p>
                                <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                            </div>
                        `;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}




<!-- Hof -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>
    <div class="container mt-5">

    <input type="text" id="search" onchange=cariData() >

        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nama</th>
                    <th scope="col">Nim</th>
                    <th scope="col">Jurusan</th>
                </tr>
            </thead>
            <tbody id="table">

            </tbody>
        </table>
    </div>

    <script>
        const dataMahasiswa = [
            {
                id: 1,
                nama: "Badriana",
                nim: "1234567823",
                jurusan: "Teknik Mesin"
            },
            {
                id: 3,
                nama: "John",
                nim: "1234567854",
                jurusan: "Teknik Industri"
            },
            {
                id: 3,
                nama: "John Doe",
                nim: "1234564578",
                jurusan: "Teknik Informatika"
            },
            {
                id: 4,
                nama: "Doe",
                nim: "1234560878",
                jurusan: "Management Bisnis"
            },
            {
                id: 5,
                nama: "Bayu",
                nim: "1234567998",
                jurusan: "Ekonomi SDM"
            },
            {
                id: 6,
                nama: "Bahrudin",
                nim: "1234567348",
                jurusan: "Bahasa Indonesia"
            },
        ]

        console.log(dataMahasiswa);

        function viewTabel() {
            let dataHtml = "";
            dataMahasiswa.map(function (d) {
                dataHtml += `
                    <tr>
                        <td>${d.id}</td>
                        <td>${d.nama}</td>
                        <td>${d.nim}</td>
                        <td>${d.jurusan}</td>
                    </tr>
                `
            });
            document.getElementById('table').innerHTML = dataHtml;
        }
        viewTabel()

        
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
</body>

</html>
