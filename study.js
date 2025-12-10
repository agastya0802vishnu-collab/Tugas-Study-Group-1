console.log("---Tiket Masuk Zoo---");

let pengunjung = [
    { nama: "Judy", umur: 5 },
    { nama: "Tom", umur: 15 },
    { nama: "Alice", umur: 25 },
    { nama: "Bob", umur: 70 }
]

let hargaticket = 50000;

for (let i = 0; i < pengunjung.length; i++) {
    let namaPengunjung = pengunjung[i].nama;
    let umur = pengunjung[i].umur;
    let pesan = "";

    if (umur < 5) {
        pesan = "Free! Untuk balita";
    } else if (umur <= 12) {
        pesan = "Diskon 50% Harga Ticket: " + (hargaticket / 2);
    } else if (umur >= 60) {
        pesan = "Diskon 30% Harga Ticket: " + (hargaticket * 0.7);
    } else {
        pesan = "Harga normal: " + hargaticket;
    }

    console.log("Nama:", namaPengunjung);
    console.log("Umur:", umur, "tahun");
    console.log("Keterangan:", pesan);
    console.log("---------------------");
}
