import datetime
import requests
import time as delay
from pygame import mixer, time

# load azan.mp3
mixer.init()
# mixer.music.load('C:/Users/HP/Downloads/RasPi_Ramadhan_INDONESIA/azan.mp3')
mixer.music.load('/home/pi/RPi_Ramadan_PrayerTimes/azan.mp3')

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

    print('{j}:{m}:{d}'.format(j=jam, m=menit, d=detik))
    if ('{j}:{m}'.format(j=jam, m=menit) == subuh) or ('{j}:{m}'.format(j=jam, m=menit) == duhur) or ('{j}:{m}'.format(j=jam, m=menit) == asar) or ('{j}:{m}'.format(j=jam, m=menit) == magrib) or ('{j}:{m}'.format(j=jam, m=menit) == isya): 
        print('Waktunya azan')
        mixer.music.play()
        while mixer.music.get_busy(): 
            time.Clock().tick(10)
    
    delay.sleep(1) # delay 1s
