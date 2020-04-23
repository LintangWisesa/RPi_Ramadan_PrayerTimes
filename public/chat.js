// socket io in front end

// Make connection
var socket = io.connect('http://localhost:1234/')
// var socket = io.connect('http://192.168.43.163:1234') // change with your RPi IP address

// Get value from html
var message = document.getElementById('message')
var send = document.getElementById('send')
var feedback = document.getElementById('feedback')

// output
var kota = document.getElementById('kota')
var tanggalM = document.getElementById('tanggalM')
var tanggalH = document.getElementById('tanggalH')
var imsak = document.getElementById('imsak')
var subuh = document.getElementById('subuh')
var dzuhur = document.getElementById('dzuhur')
var asar = document.getElementById('asar')
var magrib = document.getElementById('magrib')
var isya = document.getElementById('isya')

// emit button click events
send.addEventListener('click', ()=>{
    socket.emit('chat', {
        message: message.value,
    })
})

// emit keypress input events: "Lintang is typing..."
message.addEventListener('keypress', ()=>{
    socket.emit('typing')
})

// listen for events
socket.on('chat', (data)=>{
    kota.innerHTML = `${data.message}`
    feedback.innerHTML = ''

    // get api
    var url = `http://api.aladhan.com/v1/timingsByCity?city=${data.message}&country=Indonesia&method=5`

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
})

socket.on('typing', (data)=>{
    feedback.innerHTML = `<i>User is typing...</i>`
})