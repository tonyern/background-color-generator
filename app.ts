const generatorColor = (): void => {
    let red: number = getRandomNumber();
    let green: number = getRandomNumber();
    let blue: number = getRandomNumber();

    document.body.style.background = `rgba(${red}, ${green}, ${blue})`;
    document.getElementById("display-color").innerHTML = `rgba(${red}, ${green}, ${blue})`;
}

const getRandomNumber = (): number => {
    return Math.random() * 255;
}