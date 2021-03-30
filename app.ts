const generatorColor = (): void => {
    let red: number = Math.random() * 255;
    let green: number = Math.random() * 255;
    let blue: number = Math.random() * 255;

    displayOutputHTML(red, green ,blue);
}

const displayOutputHTML = (red: number, green: number, blue: number): void => {
    document.body.style.background = `rgba(${red}, ${green}, ${blue})`;
    document.getElementById("display-color").innerHTML = `rgba(${red}, ${green}, ${blue})`;
}