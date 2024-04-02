//the old animation script but refactored to use a class for the planets

var animate;
var planets = [];

class Planet {
    constructor(name, orbit, angle, speed, size, color) {
        this.name = name;
        this.orbit = orbit;
        this.angle = angle;
        this.speed = speed;
        this.size = size;
        this.color = color;
    }
    setCSSAttributes() {
        var planet = document.getElementById(this.name);
        planet.style.background = this.color;
        planet.style.width = this.size;
        planet.style.height = this.size;
        planet.style.position = 'absolute';
    }
    setPosition(left, top) {
        var planet = document.getElementById(this.name);
        var size = this.size.slice(0,-2);
        planet.style.left = (left - (size / 2)) + 'px';
        planet.style.top = (top - (size / 2)) + 'px';
    }
    angleIncriment() {
        this.angle = this.angle + (this.speed);
    }
}
function solarSystem() {
    const box = getBoundingBox();
    const {xCenter, yCenter} = box;
    var canvas = document.getElementById('canvas');
    canvas.style.background = '#222222';
    var orbits = [
        0, 300.9, 600.2,
        1000.6, 1300.0, 2000.5,
        3000.0, 3800.0, 4515.0
    ];
    var speeds = [
        0, 88.0, 224.7,
        365.2, 687.0, 4331,
        10747, 30589, 59800
    ];
    var sizes = [
        150000, 18000, 37500,
        37500, 30000, 100000,
        100000, 50000, 50000
    ];
    var windowHeight = (document.getElementById('canvas').offsetHeight / 2) - 10;
    var orbitRatio = orbits[8] / windowHeight;
    var speedRatio = 0.0125 / speeds[3];
    var sizeRatio = 30 / sizes[0];
    let sun = new Planet('sun', 0, 0, 0, sizeRatio * sizes[0] + 'px', 'yellow');
    let mercury = new Planet('mercury', orbits[1] / orbitRatio, 0,
    (speedRatio / speeds[1]) * 10000, sizeRatio * sizes[1] + 'px', '#e5e5e5');
    let venus = new Planet('venus', orbits[2] / orbitRatio, 0,
    (speedRatio / speeds[2]) * 10000, sizeRatio * sizes[2] + 'px', '#a57c1b');
    let earth = new Planet('earth', orbits[3] / orbitRatio, 0,
    (speedRatio / speeds[3]) * 10000, sizeRatio * sizes[3] + 'px', 'cyan');
    let mars = new Planet('mars', orbits[4] / orbitRatio, 0,
    (speedRatio / speeds[4]) * 10000, sizeRatio * sizes[4] + 'px', '#B7410E');
    let jupiter = new Planet('jupiter', orbits[5] / orbitRatio, 0,
    (speedRatio / speeds[5]) * 10000, sizeRatio * sizes[5] + 'px', '#bcafb2');
    let saturn = new Planet('saturn', orbits[6] / orbitRatio, 0,
    (speedRatio / speeds[6]) * 10000, sizeRatio * sizes[6] + 'px', '#eddbad');
    let uranus = new Planet('uranus', orbits[7] / orbitRatio, 0,
    (speedRatio / speeds[7]) * 10000, sizeRatio * sizes[7] + 'px', '#93B8BE');
    let neptune = new Planet('neptune', orbits[8] / orbitRatio, 0,
    (speedRatio / speeds[8]) * 10000, sizeRatio * sizes[8] + 'px', '#2990B5');
    planets.push(
        sun, mercury, venus,
        earth, mars, jupiter,
        saturn, uranus, neptune);
    for (let i = 0; i < planets.length; i++) {
        var div = document.createElement('div');
        div.setAttribute('id', planets[i].name);
        canvas.appendChild(div);
    }
    for (let i = 0; i < planets.length; i++) {
        planets[i].setCSSAttributes();
    }
    move();
}
function move() {
    for (let i = 0; i < planets.length; i++) {
        planets[i].angleIncriment();
    }
    for (let i = 0; i < planets.length; i++) {
        newPosition(planets[i]);
    }
    animate = setTimeout(move, 1);
}
function newPosition(planet) {
    const box = getBoundingBox();
    const {xCenter, yCenter} = box;
    var orbit = planet.orbit;
    var left = Math.cos(planet.angle);
    left = xCenter + (orbit * left);
    var top = Math.sin(planet.angle);
    top = yCenter + (orbit * top);
    planet.setPosition(left, top);
}
function stop() {
    clearTimeout(animate);
}
function start() {
    animate = setTimeout(move, 1);
}
function getBoundingBox() {
    const box = document.getElementById('canvas');
    const ret = {};
    ret.xCenter = box.offsetWidth / 2;
    ret.yCenter = box.offsetHeight / 2;
    return ret;
}