let aboutText = document.createElement('h1');
aboutText.textContent = 'About Oceanid Project';
document.body.appendChild(aboutText);


let aboutParagraph = document.createElement('p');
aboutParagraph.textContent = 'Oceanid Project is a virtual YouTuber group. We are a group of talented people who come together to create and share our passion for music, art, and entertainment. Our goal is to bring joy and inspiration to our fans and to create a community where people can come together and share their creativity. We are always looking for new members to join our team and contribute their talents to our projects. If you are interested in joining us, please contact us through our website.';
document.body.appendChild(aboutParagraph);

let aboutImage = document.createElement('img');
aboutImage.src = '../img/zander_pc.png';
aboutImage.alt = 'Oceanid Project';
document.body.appendChild(aboutImage);

let aboutLink = document.createElement('a');
aboutLink.href = 'https://www.youtube.com/channel/UCa_Y8p5Z33Q35fq39QfkJaQ';
aboutLink.textContent = 'Visit Our YouTube Channel';
document.body.appendChild(aboutLink);
