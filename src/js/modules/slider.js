

const btnPrev = document.querySelector('.navigation-btn.prev')
const btnNext = document.querySelector('.navigation-btn.next ')
const slide = document.querySelector('.participants__slider').offsetWidth
const sliderLine = document.querySelector('.slider-line')
let offfset = 0
document.querySelector('.slide-num-two').innerHTML = document.querySelectorAll('.slider__item').length
let slideNum = 3

export function slider() {
    btnNext.onclick = () => {
        offfset = offfset + slide
        sliderLine.style.right = offfset + 'px'
        slideNum = slideNum + 3
        if (sliderLine.offsetWidth / 2 <= offfset){
            sliderLine.style.right = 0 + 'px'
            offfset = 0
            slideNum = 3
        }
        document.querySelector('.slide-num-one').innerHTML = slideNum 
    }
    btnPrev.onclick = () => {
        offfset = offfset - slide
        sliderLine.style.right = -offfset + 'px'
        slideNum = slideNum - 3
        if (0 >=  offfset){
            sliderLine.style.right = 0 + 'px'
            offfset = 0
            slideNum = 3 
        }
        document.querySelector('.slide-num-one').innerHTML = slideNum
    }
}