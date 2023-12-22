import menuCall from "./menu";
import contactCall from "./contact";

document.addEventListener("DOMContentLoaded", function () {
    const content = document.getElementById('content');
    const heading = document.createElement('h1');
    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');
    const homeContent = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');

    heading.textContent = "Nik's Table";

    homeButton.innerText = "Home";

    menuButton.innerText = "Menu";

    contactButton.innerText = "Contact";

    homeContent.classList.add("home_content");

    p1.textContent = `Nestled in a cobbled alley, where moonlight paints the windowpanes silver, sits "Nik's Table." Its story whispers back from
            brick walls aged by laughter and clinking glasses. Back in 1903, it was a speakeasy, a haven for dreamers and revolutionaries fueled by
            spiced lamb pies and Amelia's legendary plum wine. Whispers of poetry mingled with the scent of roasted garlic, and jazz pulsed like a forbidden heartbeat.`

    p2.textContent = `Today, "Nik's Table" whispers different dreams. Amelia's granddaughter, Luna, now reigns in the kitchen, her dishes a symphony of tradition
            and whimsy. Her ricotta gnocchi, light as moonbeams, melt on your tongue, carrying the earthy whisper of wild mushrooms. Tender roast duck, glazed with honey 
            and thyme, evokes an autumn sunset, each bite a burst of golden warmth. Even the simplest soup, a kaleidoscope of seasonal vegetables, sings with the sun-kissed 
            sweetness of fresh basil`

    p3.textContent = `Each dish is a story, an whispered adventure on a plate. The lamb shanks, braised until they fall apart, whisper of slow afternoons by the fire, 
            while the pistachio-crusted sea bass hums of Mediterranean tides. Nik's desserts, whimsical as moonlight on cobblestones, are pure magic. Her lavender shortbread 
            melts with a delicate sigh, and the lemon meringue pie, its peaks kissed with flame, is a sunbeam captured in a bite.`

    p4.textContent = `"Nik's Table" is more than a restaurant; it's a tapestry woven from laughter and memories, a melody of spices and stories. It's a place where time 
            slows, where the moon paints your dreams on the tablecloth, and every bite whispers a secret that lingers long after the last crumb is gone.`

    homeContent.appendChild(p1);
    homeContent.appendChild(p2);
    homeContent.appendChild(p3);
    homeContent.appendChild(p4);

    content.appendChild(heading);
    content.appendChild(homeButton);
    content.appendChild(menuButton);
    content.appendChild(contactButton);
    content.appendChild(homeContent);

    function clearContent() {
        content.innerHTML = "";
        content.appendChild(heading);
        content.appendChild(homeButton);
        content.appendChild(menuButton);
        content.appendChild(contactButton);
    }

    homeButton.addEventListener('click', function () {
        clearContent();
        homeContent.appendChild(p1);
        homeContent.appendChild(p2);
        homeContent.appendChild(p3);
        homeContent.appendChild(p4);
        content.appendChild(homeContent);
    });


    menuButton.addEventListener('click', function () {
        clearContent();
        menuCall();
    });

    contactButton.addEventListener('click', function () {
        clearContent();
        contactCall();
    });
});
