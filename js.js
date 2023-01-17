function setGradient() {
    card.style.background = 
    `linear-gradient(${gradRotate.value}deg, ${color1.value}, ${color2.value})`;
    css.textContent = card.style.background + ";";
    }