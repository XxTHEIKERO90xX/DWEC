const getRandomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
}
const getRandomColor = () => {
    const color1 = getRandomNumber(360);
    const color2 = getRandomNumber(100);
    const color3 = getRandomNumber(100);

    return `hsl(${color1}deg, ${color2}%, ${color3}%)`;
}
function getBackgroundColor() {
    const colorRandom = getRandomColor();
    document.getElementById("cuerpo").style.backgroundColor = colorRandom;
}
