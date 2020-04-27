import datetime
import requests
import time as delay
from pygame import mixer, time

# load azan.mp3
mixer.init()
mixer.music.load('C:/Users/HP/Downloads/RasPi_Ramadhan_INDONESIA/azan.mp3')

# request aladhan api
url = 'http://api.aladhan.com/v1/timingsByCity?city=Tangerang Selatan&country=Indonesia&method=5'
data = requests.get(url)
output = data.json()
output = output['data']['timings']

imsak = output['Imsak']
subuh = output['Fajr']
duhur = output['Dhuhr']
asar = output['Asr']
magrib = output['Maghrib']
isya = output['Isha']
print(imsak, subuh, duhur, asar, magrib, isya)
# print(imsak)
# print(type(imsak))

while True:
    # time now
    x = datetime.datetime.now()
    jam = x.strftime("%H") # jam sistem 24
    menit = x.strftime("%M") # menit
    detik = x.strftime("%S") # detik

    print(f'{jam}:{menit}:{detik}')
    if (f'{jam}:{menit}' == subuh) or (f'{jam}:{menit}' == duhur) or (f'{jam}:{menit}' == asar) or (f'{jam}:{menit}' == magrib) or (f'{jam}:{menit}' == isya):
        print('Waktunya azan')
        mixer.music.play()
        while mixer.music.get_busy(): 
            time.Clock().tick(10)
    
    delay.sleep(1) # delay 1s