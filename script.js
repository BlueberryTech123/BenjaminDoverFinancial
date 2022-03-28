let index = 0;
let count = 0;

let chatOpen = false;
const retMsg = ["Shut the fuck up", "lmao", "Great!", "I didn't understand that. However, I did find something <a href='#' onclick='rickroll()'>that might help</a>", "I didn't understand that. However, I did find some links that could help:<br><ul><li><a href='https://bit.ly/3uAikUJ'>How do I grow bonsai trees?</a></li><li><a href='https://bit.ly/3LnZ2c4'>Is water drinkable?</a></li></ul>"]

const captchaImages = ["captchas/c1.png", "captchas/c2.png", "captchas/c3.png", "captchas/c4.png", "captchas/c5.png"]
const captchaAnswers = [342*123+32412, 420*69*69, 9, 2, 68824]


function fakeLoading() {
    window.location.href = "loading.html";
}

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
        window.location.href = "financial.html";
        return true;
    }
    return false
}

function rickroll() {
     window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank")
}

function toggleChat() {
    let chat = document.getElementById("chat");
    
    if (chatOpen) {
        chat.style.visibility = "hidden";
    }
    else
    {
        chat.style.visibility = "visible";
    }
    chatOpen = !chatOpen;
}

function sendMessage() {
    //console.log("hi")
    let msgPanel = document.getElementById("chatMiddle");
    let message = document.getElementById("message");

    if (message.value == "") return;

    count++;
    msgPanel.innerHTML += "<div class='chatMsgMe'>" + message.value + "</div>";
    message.value = "";
    msgPanel.scrollTop = msgPanel.scrollHeight;

    let sec = Math.floor(Math.random() * 1000);
    setTimeout(function () {
        msgPanel.innerHTML += "<div class='chatMsgOther'>" + retMsg[Math.floor(Math.random() * (retMsg.length))] + "</div>";
        msgPanel.scrollTop = msgPanel.scrollHeight;
    }, sec + 100);

}