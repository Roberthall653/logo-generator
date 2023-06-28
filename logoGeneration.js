const shape = require('./lib/shapes')
const validateText = require('./lib/text')


function generateLogo(data) {
    validateText(data.text);


    if (data.shape === 'circle'){
        const circleImg = new shape

    return `<svg viewbox='0 0 300 300' width='300' height ='200'
    stroke='${data.shapeColor}'
    fill='${data.shapeColor}'>
    ${circleImg.circle()}
    <text font-size='6em' x='75' y='175' fill='${data.textColor}'> ${data.text}</text>
    </svg>
        `
} else if (data.shape === 'triangle'){
    const triangleImg = new shape 

    return `<svg viewbox='0 0 300 300' width='300' height ='200'
    stroke='${data.shapeColor}'
    fill='${data.shapeColor}'>
    ${triangleImg.triangle()}
    <text font-size='5em' x='75' y='250' fill='${data.textColor}'> ${data.text}</text>
    </svg>
        `
} else {
    const squareImg = new shape
    return `<svg viewbox='0 0 300 300' width='300' height ='200'
    stroke='${data.shapeColor}'
    fill='${data.shapeColor}'>
    ${squareImg.square()}
    <text font-size='5em' x='75' y='235' fill='${data.textColor}'> ${data.text}</text>
    </svg>
        `
}};


module.exports = generateLogo;