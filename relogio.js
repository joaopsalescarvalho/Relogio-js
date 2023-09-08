const handseconds = document.getElementById('sec');
const handminutes = document.getElementById("min");
const handhours = document.getElementById("hours");

const setClock = () => {

    const date = new Date();
    return {
        sec: date.getSeconds()/ 60,
        min:  date.getMinutes()/ 60 ,
        h:  date.getHours()/ 12,
    };

};

setInterval(() => {
    const { sec, min, h } = setClock();
    handseconds.style.transform = `translateX(-50%) rotate(${sec * 360}deg)`;
    handminutes.style.transform = `translateX(-50%) rotate(${min * 360}deg)`;
    handhours.style.transform = `translateX(-50%) rotate(${h  * 360}deg )`;


}, 1000);

