function shape() {};

shape.prototype.triangle = () => {
    return "<polygon points='0,300 150,50 300, 300' />"
}

shape.prototype.square = () => {
    return "<polygon points='0,300 300,300 300,0 0,0' />"
}

shape.prototype.circle = () => {
    return "<circle cx='150' cy='150' r='150' />"
}

module.exports = shape;