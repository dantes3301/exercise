

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

const stagesBtnPrev = document.querySelector('.stages-navigation-btn.prev')
const StagesbtnNext = document.querySelector('.stages-navigation-btn.next ')
const sliderRow = document.querySelector('.stages__slider-row')
const stagesSlide = document.querySelector('.stages__slider-item').offsetWidth
let stagesOffset = 0 
let stagesSlideNum = 0

export function stegesSlider() {
    document.querySelectorAll('.stages__slider-item').forEach(elem => {
        console.log(elem);
        document.querySelector('.pagination').innerHTML += `<span class="pagination-item"> </span>`
        document.querySelectorAll('.pagination-item')[0].classList.add('active')
    })
    StagesbtnNext.onclick = () => {
        stagesSlideNum++
        stagesOffset = stagesOffset + stagesSlide + 40
        sliderRow.style.right = stagesOffset +'px'
        
        if (stagesSlideNum >= document.querySelectorAll('.pagination-item').length) {
            document.querySelectorAll('.pagination-item').forEach(e=>{
                e.classList.remove('active')
            })
            stagesSlideNum = 0 
            document.querySelectorAll('.pagination-item')[stagesSlideNum].classList.add('active')
        }
        else{
            document.querySelectorAll('.pagination-item').forEach(e=>{
                e.classList.remove('active')
            })
            
            document.querySelectorAll('.pagination-item')[stagesSlideNum].classList.add('active')
        }
        if (sliderRow.offsetWidth <= stagesOffset){
            sliderRow.style.right = 0 + 'px'
            stagesOffset = 0
            stagesSlideNum=0
        }
       
    }
    stagesBtnPrev.onclick = () => {
        stagesSlideNum--
        stagesOffset = stagesOffset - stagesSlide - 40
        sliderRow.style.right = stagesOffset + 'px'
        if (0 >= stagesSlideNum) {
            document.querySelectorAll('.pagination-item').forEach(e=>{
                e.classList.remove('active')
            })
            stagesSlideNum =  document.querySelectorAll('.pagination-item').length
            
            document.querySelectorAll('.pagination-item')[stagesSlideNum - 1].classList.add('active')
        }
        else{
            document.querySelectorAll('.pagination-item').forEach(e=>{
                e.classList.remove('active')
            })
            
            document.querySelectorAll('.pagination-item')[stagesSlideNum-1].classList.add('active')
        }
        if (0 >  stagesOffset){
            stagesOffset = sliderRow.offsetWidth - stagesSlide  -40
            sliderRow.style.right = sliderRow.offsetWidth - stagesSlide  -40 + 'px'
        }
        console.log(stagesOffset, stagesSlide);
        console.log(stagesOffset);
    }
}