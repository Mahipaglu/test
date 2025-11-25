const PASSWORD = "1234";
function unlock() {
    const input = document.getElementById("passwordInput").value;
    const error = document.getElementById("error");
    if (input === PASSWORD) {
        document.getElementById("lock-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    } else {
        error.textContent = "Incorrect Password";
    }
}
