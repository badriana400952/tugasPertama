
const promise = new Promise((dataAda, dataTidakAda) => {
    const xx = new XMLHttpRequest();

    xx.open("GET", "https://api.npoint.io/ea470c91349b54c73573", true);

    xx.onload = () => {
        if (xx.status === 200) {
            dataAda(JSON.parse(xx.response));
        } else {
            dataTidakAda('error broh');
        }
    };

    xx.onerror = () => {
        dataTidakAda('network error');
    }
    xx.send();
    // console.log(xx)
})

async function dataMahasiswa() {
    const response = await promise;
    console.log('ini promisis', response)
    let dataHtml = "";
    response.map((d) => {
        dataHtml += ` <tr>
        <td>${d.id}</td>
        <td>${d.nama}</td>
        <td>${d.nim}</td>
        <td>${d.jurusan}</td>
    </tr>`
    });
    document.getElementById('table').innerHTML = dataHtml;
}

dataMahasiswa()
//buat function dari button search
//menggunakan async await dalam mendapatkan janji dari url
async function mapDataMahasiswa(nama) {
    const response = await promise;
    console.log(response)
// buat variabel input untuk mendapatkan input di html berdasarka id "search", dan ambil property value
    let input = document.getElementById('search');
    let value = input.value
    // lalu tampilkan apa yg di tulis dari input
    console.log("ini cari", value)
    //buat variabel filterSearching yang di dalam nya terdapat hasil respon dari async await. lalu filter dengan parameter yang akan di ulang
    const filterSearching = response.filter((d) => {
        //lalu jalankan parameter(d) jika sama dengan value
        //ingat value itu variabel yang berisi dom
        return d.nama === value;
    })
        // buat variabel kosng
    let dataHtml = "";
    // lalu hasil dari filter di pecah atau di ulang dengan parameter (d) 
    filterSearching.map(function (d) {
        // isikan data html yang tadi dengan tag atau data yang akan di ulang
        dataHtml += `
            <tr>
                <td>${d.id}</td>
                <td>${d.nama}</td>
                <td>${d.nim}</td>
                <td>${d.jurusan}</td>
            </tr>
        `
    });
    // lalu javascript carikan saya elemen berdasarkan id table, manipulasi dia dan isikan data html tadi
    document.getElementById('table').innerHTML = dataHtml;

}