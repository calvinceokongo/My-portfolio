const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

const swiperSlideImg = document.getElementsByClassName('swiper-button-prev/next')[0]

swiperSlideImg.addEventListener('onscroll', () => {
    swiperSlideImg.classList.swiper('active')
})

fetch(': https://api.explorer.kcc.io/vipapi/coin/latest/kcs?apikey=your_apikey', {
    method: 'POST',
    headers: {
        'content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'User 1'
    })

}).then(res => {
    return res.json()
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'))