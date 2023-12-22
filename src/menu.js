function menuCall() {
    const content = document.getElementById('content');
    const menuContent = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');
    const p7 = document.createElement('p');
    const p8 = document.createElement('p');
    const p9 = document.createElement('p');
    const p10 = document.createElement('p');
    const p11 = document.createElement('p');
    const p12 = document.createElement('p');
    const p13 = document.createElement('p');
    const p14 = document.createElement('p');
    const p15 = document.createElement('p');

    menuContent.classList.add('menu_content');
    menuContent.classList.add('home_content');

    p1.textContent = "Dish";
    p2.textContent = "Description";
    p3.textContent = "Price(Stardust Coins)";
    p4.textContent = "Pixie Dust Salad";
    p5.textContent = "Greens, rose petals, starfruit, & vinaigrette";
    p6.textContent = "12";
    p7.textContent = "Dragon's Breath Soup";
    p8.textContent = "Spicy tomato, okra, corn, & pepper";
    p9.textContent = "8";
    p10.textContent = "Cloud Cake Canapés";
    p11.textContent = "Goat cheese & honey puffs on clouds";
    p12.textContent = "7";
    p13.textContent = "Comet's Trail Burger";
    p14.textContent = "Wagyu beef, caramelized onions, gorgonzola, & aioli";
    p15.textContent = "18";

    menuContent.appendChild(p1);
    menuContent.appendChild(p2);
    menuContent.appendChild(p3);
    menuContent.appendChild(p4);
    menuContent.appendChild(p5);
    menuContent.appendChild(p6);
    menuContent.appendChild(p7);
    menuContent.appendChild(p8);
    menuContent.appendChild(p9);
    menuContent.appendChild(p10);
    menuContent.appendChild(p11);
    menuContent.appendChild(p12);
    menuContent.appendChild(p13);
    menuContent.appendChild(p14);
    menuContent.appendChild(p15);

    content.appendChild(menuContent);
}

export default menuCall;