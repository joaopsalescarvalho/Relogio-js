const handseconds = document.querySelector('#sec');
const handminutes = document.querySelector("#min");
const handhours = document.querySelector("#hours");

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setClock = () => {

    const date = new Date();
    
       const sec= date.getSeconds() / 60;
       const min= (sec + date.getMinutes()) / 60;
       const h= (min + date.getHours()) / 12;

    setRotation(handseconds, sec);
    setRotation(handminutes, min);
    setRotation(handhours, h);

};

setClock();

setInterval(setClock, 1000);