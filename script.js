document.addEventListener("DOMContentLoaded", function() {
  const typedText = document.getElementById("typed-text");
  const aboutText = "Welcome to the Brimbank Lions Cricket Club! We are a young and passionate team, dedicated to playing cricket and fostering a spirit of camaraderie. Our club was established in 2020, and since then, we have been actively participating in the MYCA Competition during the winter season.\n\nAt Brimbank Lions Cricket Club, we believe in creating an inclusive and supportive environment for all players. Whether you're a seasoned cricketer or new to the sport, our club offers a place for everyone. We value teamwork, sportsmanship, and continuous improvement.\n\nJoin us to experience the thrill of cricket and make lifelong friendships along the way. We train regularly, compete with other teams, and enjoy the passion for the game together. Come be a part of our growing family!";

  let i = 0;
  const speed = 15;

  function typeWriter() {
    if (i < aboutText.length) {
      typedText.innerHTML += aboutText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      const aboutSection = document.getElementById("about");
      aboutSection.classList.add("loaded");

      const aboutPhoto = document.getElementById("about-photo");
      aboutPhoto.style.top = "0";
    }
  }

  typeWriter();
});
