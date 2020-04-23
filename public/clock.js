var clock = document.getElementById('jam')

renderJam = function(){
    var waktu = new Date()
    var jam = waktu.getHours()
    var noljam = ''
    if(jam < 10){
        noljam = 0
    } else {
        noljam = ''
    }
    var menit = waktu.getMinutes()
    var nolmenit = ''
    if(menit < 10){
        nolmenit = 0
    } else {
        nolmenit = ''
    }
    var detik = waktu.getSeconds()
    var noldetik = ''
    if(detik < 10){
        noldetik = 0
    } else {
        noldetik = ''
    }
    clock.innerHTML = `${noljam}${jam}:${nolmenit}${menit}:${noldetik}${detik}`
}
renderJam()

setInterval(renderJam, 1000)