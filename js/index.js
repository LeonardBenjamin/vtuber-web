let welcomeDiv = document.createElement('div');
welcomeDiv.id = 'welcome';
let welcomeH1 = document.createElement('h1');
welcomeH1.textContent = 'Welcome to Oceanid Project!';
welcomeDiv.appendChild(welcomeH1);
document.body.appendChild(welcomeDiv);
let welcomeH4 = document.createElement('h4');
welcomeH4.textContent = 'Oceanid Project is a virtual YouTuber group. We are a group of talented people who come together to create and share our passion for music, art, and entertainment. Our goal is to bring joy and inspiration to our fans and to create a community where people can come together and share their creativity. We are always looking for new members to join our team and contribute their talents to our projects. If you are interested in joining us, please contact us through our website.';
welcomeDiv.appendChild(welcomeH4);



let button = document.createElement('button');
button.id = 'button';
button.textContent = 'Join us now!';
document.body.appendChild(button);
button.appendChild(welcomeDiv);






let audition = document.createElement('div');
audition.id = 'audition';
audition.textContent = 'Do you want to jon our project? Please click the button below to get more information!';
document.body.appendChild(audition);

let auditionButton = document.createElement('button');
auditionButton.id = 'audition-button';
auditionButton.textContent = 'Audition';
audition.appendChild(auditionButton);

auditionButton.addEventListener('click', () => {
    window.location.href = 'audition.html';
});


let footer = document.createElement('footer');
footer.id = 'footer';
footer.textContent = 'Copyright © 2024 Oceanid Project. All rights reserved.';
document.body.appendChild(footer);
