![simplinnovation](https://4.bp.blogspot.com/-f7YxPyqHAzY/WJ6VnkvE0SI/AAAAAAAADTQ/0tDQPTrVrtMAFT-q-1-3ktUQT5Il9FGdQCLcB/s350/simpLINnovation1a.png)

# Ramadan Prayer Times Display & Alarm

## 📋 Project Summary

Klik gambar berikut untuk melihat video demo:

[![Video](https://img.youtube.com/vi/0uLCCJUrUKU/0.jpg)](https://youtu.be/0uLCCJUrUKU)

Display jadwal Imsakiyah Ramadan dengan fitur: menampilkan jadwal Imsakiyah di kota tertentu (di Indonesia), setting kota secara wireless via WiFi & alarm azan otomatis setiap masuk waktu sholat. Dirancang dengan Raspberry Pi 3B+, untuk fitur display dengan Node.js (Express.js & Socket.io), sedangkan alarm azan otomatis dengan Python (Pygame). Data jadwal Imsakiyah diambil dari [Aladhan Prayer Times API](https://aladhan.com/prayer-times-api), sedangkan audio azan bersumber dari serial Upin & Ipin, dengan muazzin Syeikh Abdul Karim Al-Makki.

<hr>

## 📋 Project Tutorial

This project is built on __Raspberry Pi 3B+__ with __Raspbian OS__, __Python 3.x__ (I'm using 3.4 & 3.8) & __Node.js 8++__ (I'm using 10). So make sure you've installed Python 3.x & Node.js 8++, also __git__ to clone this project from my github.

- ### 1. Connect to WiFi & Check its IP

    Connect your Raspberry Pi to a WiFi connection, then check its IP address. On terminal type:

    ```bash
    $ ifconfig
    ```

    Your Pi's IP address must be various, it consists of some numbers with some dots like ```123.456.78.910```. Note your IP address!

<hr>

- ### 2. Clone this project

    Clone this project from my github repo. [Download here](https://github.com/LintangWisesa/RPi_Ramadan_PrayerTimes) or clone it from your terminal (make sure you've installed *__git__* on your Pi):

    ```bash
    $ git clone https://github.com/LintangWisesa/RPi_Ramadan_PrayerTimes.git
    ```

<hr>

- ### 3. Insert your IP on the app

    Inside this project folder, go to ```/public``` then insert your Pi's IP address on ```chat.js``` file.

    ```bash
    $ cd RPi_Ramadan_PrayerTimes

    $ cd public

    $ sudo nano chat.js
    ```

    Insert your IP address on the following line (```chat.js```):

    ```javascript
    var socket = io.connect('http://123.456.78.910:1234') 
    // change with your RPi IP address
    ```

    Exit & save it!

<hr>

- ### 4a. Run Express.js server (Display prayer times)

    Go back to the project root, then run its server application (```app.js``` file). It'll be better if you have __*nodemon*__ installed.

    ```bash
    $ node app
    ```
    or by using __*nodemon*__:

    ```bash
    $ nodemon app
    ```

    The server will be listening on port ```1234```, so you can access it via your Pi's web browser (for example *__Chromium__*): http://localhost:1234. It will make a GET request to Aladhan API then render an __*HTML*__ page with prayer times displayed, you can configure its city by click _Settings_ button on the page.

<hr>

- ### 4b. Run Python app (Alarm prayer times)

    Open new terminal, go to the project root, then run its Python application. If you're using Python below 3.5, use ```rpi34.py``` and if you're using Python above 3.5 please use ```rpi38.py``` file.

    ```bash
    $ python3 rpi34.py
    ```
    or

    ```bash
    $ python3 rpi38.py
    ```

    It will make a GET request to Aladhan API then play ```azan.mp3``` automatically every prayer times are occured.

<hr>

- ### 5. Control it from your gadget

You can also configure the city displayed (Indonesia only) via your laptop, tablet or even a smartphone. First connect your gadget to a WiFi which your Raspberry Pi is connected to. Open your browser & go to your Pi's IP address on port ```1234```, for example: http://123.456.78.910:1234. You'll see something similar with your Pi display & try to config its city. Enjoy!

<hr>

#### Lintang Wisesa :love_letter: _lintangwisesa@ymail.com_

[Facebook](https://www.facebook.com/lintangbagus) | 
[Twitter](https://twitter.com/Lintang_Wisesa) |
[Youtube](https://www.youtube.com/user/lintangbagus) |
[LinkedIn](https://www.linkedin.com/in/lintangwisesa/) | 
:octocat: [GitHub](https://github.com/LintangWisesa) |
[Hackster](https://www.hackster.io/lintangwisesa)