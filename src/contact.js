function contactCall() {

    const content = document.getElementById('content');
    const contactContent = document.createElement('div');
    const head = document.createElement('p');
    const addr = document.createElement('p');
    const pin = document.createElement('p');
    const phone = document.createElement('p');

    contactContent.classList.add('contact_content');
    contactContent.classList.add('home_content');
    head.textContent = "Address and Contact info(24/7):";
    head.style.fontSize = "x-large";
    addr.textContent = "Star Valley";
    pin.textContent = "556655";
    phone.textContent = "1234567890"

    contactContent.appendChild(head);
    contactContent.appendChild(addr);
    contactContent.appendChild(pin);
    contactContent.appendChild(phone);

    content.appendChild(contactContent);
}

export default contactCall;