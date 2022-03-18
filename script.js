let index = 0;

const captchaImages = ["captchas/c1.png", "captchas/c2.png", "captchas/c3.png", "captchas/c4.png", "captchas/c5.png"]
const captchaAnswers = [342*123+32412, 420*69*69, 9, 2, 68824]

function captcha() {
    let captchaWindow = Document.getElementById("captchaWindow");
    let captchaImg = Document.getElementById("captchaImg");
    
    index = Math.floor(Math.random() * 4);
    captchaImg.src = captchaImages[index];
    captchaWindow.style.visibility = "visible";
}

function submitCaptcha() {
    let captchaInput = Document.getElementById("captchaInput");
    captchaWindow.style.visibility = "hidden";
}