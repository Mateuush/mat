let movementSpeed = 3

const background = document.querySelector('.background')
background.style.background = 'linear-gradient(to bottom, #00000c 80%,#95979c 100%)'
let snowflakes = []
const snowflakesPerSecond = 7
setInterval(function () {
    const snowflake = document.createElement('div')
    snowflake.setAttribute('class', 'snowflake')
    background.prepend(snowflake)
    const {width} = getComputedStyle(background)
    const {width: snWidth} = getComputedStyle(snowflake)
    let maxLeftMargin = parseInt(width.substring(0, width.length - 2)) - parseInt(snWidth.substring(0, snWidth.length - 2))
    snowflake.style.marginLeft = `${randomNumber(0, maxLeftMargin)}px`
    snowflakes.push(snowflake)
}, 1000/snowflakesPerSecond)

setInterval(function () {
    snowflakes.forEach(snowflake => {
        const {marginTop} = getComputedStyle(snowflake)
        const currentMarginTopValue = parseInt(marginTop.substring(0, marginTop.length - 2))

        if (currentMarginTopValue + 5*movementSpeed >= window.innerHeight) {
            snowflake.remove()
        } else {
            const newMarginTopValue = currentMarginTopValue + movementSpeed
            snowflake.style.marginTop = `${newMarginTopValue}px`
        }
    })
}, 1000/60)