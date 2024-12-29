const destined = document.getElementById("destined");
destined.style.float = "right";
const box = document.createElement("h1");
const text = document.createElement("h3");
box.textContent = "🍆";
box.style.fontSize = "4em";
destined.style.fontSize = "10em";
const sprinkle = document.getElementById("sprinkle");
box.style.position = "fixed";
const moveAmount = 10;
let x = 0;
let y = 0;
document.body.append(box);

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;        
        }

console.log("x:" + x);
console.log("y:" + y);

    box.style.top = `${y}px`;
    box.style.left = `${x}px`;
    if(x >= 1000 ){
        text.textContent = "Mating";
        if(x == 1130 && y == 20){
            text.textContent = "ah ah ah G-Spot";
            box.textContent = "💦💦";
            sprinkle.style.display = "block";
            sprinkle.play();

        }
    }
    else{
        
        text.textContent = "Is this the best you can do!!";
    }
    document.body.append(text);
}
} );


