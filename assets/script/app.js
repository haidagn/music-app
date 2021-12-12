$(document).on('click', '.navbar-left_links ul .item', function () {
    $(this).addClass('active').siblings().removeClass('active')
})
$(document).on('click', '.main-links ul .item', function () {
    $(this).addClass('active').siblings().removeClass('active')
})

// xu ly nhac playing 



const songAudio = document.querySelector('.song-audio')
const playButton = document.querySelector('.play-inner')
const nextButton = document.querySelector('.next')
const backButton = document.querySelector('.back')

const app = {
    songs: [
        {
            number: 1,
            name: 'Lalisa',
            singer: 'Lisa',
            image: '<img src="./assets/images/singers/lisa.jpg" alt="">',
            backgroundColor: 'background-color: #9E9E9E',
            path: './assets/songs/lalisa.mp3'
        },
        {
            number: 2,
            name: 'How You Like That',
            singer: 'BlackPink',
            image: '<img src="./assets/images/singers/blackpink.jpg" alt="">',
            backgroundColor: 'background-color: #F378B1',
            path: './assets/songs/howyoulikethat.mp3'
        },
        {
            number: 3,
            name: 'Crazy Over You',
            singer: 'BlackPink',
            image: '<img src="./assets/images/singers/blackpink.jpg" alt="">',
            backgroundColor: 'background-color: #F378B1',
            path: './assets/songs/crazyoveryou.mp3'
        },
        {
            number: 4,
            name: 'on The Ground',
            singer: 'Rosé',
            image: '<img src="./assets/images/singers/rose.jpg" alt="">',
            backgroundColor: 'background-color: #7D5A9F',
            path: './assets/songs/ontheground.mp3'
        },

    ],
    render: function () {

    },
    handel: function () {
        let isPlaying = true
        const avtSong = document.getElementById('avt-song'),
            nameSong = document.getElementById('name-song'),
            nameSinger = document.getElementById('name-singer'),
            playBox = document.getElementById('playbox')
        // nhac mac dinh
        let index = 0
        let songPath = this.songs[index].path
        songAudio.setAttribute('src', songPath)
        playBox.setAttribute('style', this.songs[index].backgroundColor)
        avtSong.innerHTML = app.songs[index].image
        nameSong.innerHTML = app.songs[index].name
        nameSinger.innerHTML = app.songs[index].singer

        // chuyen bai tiep theo
        nextButton.addEventListener('click', function () {
            index++
            if (index < Object.keys(app.songs).length) {
                avtSong.innerHTML = app.songs[index].image
                nameSong.innerHTML = app.songs[index].name
                nameSinger.innerHTML = app.songs[index].singer
                playBox.setAttribute('style', app.songs[index].backgroundColor)
                songPath = app.songs[index].path
                songAudio.setAttribute('src', songPath)
                isPlaying = false
                songAudio.play()
            } else {
                index = 0
                songPath = app.songs[index].path
                avtSong.innerHTML = app.songs[index].image
                nameSong.innerHTML = app.songs[index].name
                nameSinger.innerHTML = app.songs[index].singer
                playBox.setAttribute('style', app.songs[index].backgroundColor)
                songAudio.setAttribute('src', songPath)
                isPlaying = false
                songAudio.play()
            }
            return index

        })

        //chuyen ve bai truoc do
        backButton.addEventListener('click', function () {
            index--
            if (index >= 0) {
                songPath = app.songs[index].path
                avtSong.innerHTML = app.songs[index].image
                nameSong.innerHTML = app.songs[index].name
                nameSinger.innerHTML = app.songs[index].singer
                playBox.setAttribute('style', app.songs[index].backgroundColor)
                songAudio.setAttribute('src', songPath)
                isPlaying = false
                songAudio.play()
            } else {
                index = Object.keys(app.songs).length - 1
                avtSong.innerHTML = app.songs[index].image
                nameSong.innerHTML = app.songs[index].name
                nameSinger.innerHTML = app.songs[index].singer
                playBox.setAttribute('style', app.songs[index].backgroundColor)
                songPath = app.songs[index].path
                songAudio.setAttribute('src', songPath)
                isPlaying = false
                songAudio.play()
            }
            return index
        })
        playButton.addEventListener('click', playPause)
        function playPause() {
            if (isPlaying) {
                songAudio.play()
                playButton.innerHTML = '<ion-icon name="pause"></ion-icon>'
                isPlaying = false
            } else {
                songAudio.pause()
                playButton.innerHTML = '<ion-icon name="play"></ion-icon>'
                isPlaying = true
            }
        }

        // tien trinh thanh propress
        const propress = document.getElementById('propress')
        songAudio.ontimeupdate = function () {
            if (songAudio.duration) {
                const propressPercent = Math.floor(songAudio.currentTime / songAudio.duration * 100)
                propress.value = propressPercent
            }
        }
        // tien trinh tua nhac
        propress.onchange = function (e) {
            const seekTime = songAudio.duration / 100 * e.target.value
            songAudio.currentTime = seekTime
        }
    },
    start: function () {
        this.handel()
        this.render()
    }
}
app.start()