document.addEventListener("DOMContentLoaded", function() {
  const typedText = document.getElementById("typed-text");
  const aboutText = "https://drive.google.com/drive/folders/1p1w__WlIjmBHjd9RG44AslGrQr5qCYSF?usp=share_link";

  let i = 0;
  const speed = 25;

  function typeWriter() {
    if (i < aboutText.length) {
      typedText.innerHTML += aboutText.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
