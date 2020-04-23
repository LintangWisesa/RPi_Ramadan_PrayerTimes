// Initial data: Jakarta

var kota = document.getElementById('kota')
var tanggalM = document.getElementById('tanggalM')
var tanggalH = document.getElementById('tanggalH')
var imsak = document.getElementById('imsak')
var subuh = document.getElementById('subuh')
var dzuhur = document.getElementById('dzuhur')
var asar = document.getElementById('asar')
var magrib = document.getElementById('magrib')
var isya = document.getElementById('isya')

// get API aladhan
city = kota.textContent
console.log(city)
var url = `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=Indonesia&method=5`

fetch(url).then(function (response) {
    return response.json();
}).then(function (data) {
    tanggalM.innerHTML = `${data.data.date.gregorian.day} ${data.data.date.gregorian.month.en} ${data.data.date.gregorian.year}`
    tanggalH.innerHTML = `${data.data.date.hijri.day} ${data.data.date.hijri.month.en} ${data.data.date.hijri.year}`
    imsak.innerHTML = `${data.data.timings.Imsak}`
    subuh.innerHTML = `${data.data.timings.Fajr}`
    dzuhur.innerHTML = `${data.data.timings.Dhuhr}`
    asar.innerHTML = `${data.data.timings.Asr}`
    magrib.innerHTML = `${data.data.timings.Maghrib}`
    isya.innerHTML = `${data.data.timings.Isha}`
    console.log(data);
}).catch(function (err) {
    console.warn('Something went wrong.', err);
});