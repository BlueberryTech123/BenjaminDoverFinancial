let index = 0;

const captchaImages = ["captchas/c1.png", "captchas/c2.png", "captchas/c3.png", "captchas/c4.png", "captchas/c5.png"]
const captchaAnswers = [342*123+32412, 420*69*69, 9, 2, 68824]

function captcha(valid = true) {
    let captchaWindow = document.getElementById("captchaWindow");
    let captchaImg = document.getElementById("captchaImg");
    let captchaInput = document.getElementById("captchaInput");

    let username = document.getElementById("username");
    let password = document.getElementById("password");

    if (username.value == "" || username.value == "") {
        username.style.background = "#dea2a2";
        password.style.background = "#dea2a2";

        return;
    }
    
    index = Math.floor(Math.random() * 4);
    captchaImg.src = captchaImages[index];
    captchaWindow.style.visibility = "visible";

    if (valid) {
        document.getElementById("errorText").innerHTML = "";
        captchaInput.style.background = "#fff";
    }
    else {
        document.getElementById("errorText").innerHTML = "Try Again";
        captchaInput.style.background = "#dea2a2";
    }
}

function submitCaptcha() {
    let captchaInput = document.getElementById("captchaInput");
    if (captchaInput.value == captchaAnswers[index])
    {
        captchaWindow.style.visibility = "hidden";
        window.open("loading.html", "_blank");
        return true;
    }
    captcha(false);
    return false
}

function rickroll() {
     window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
}