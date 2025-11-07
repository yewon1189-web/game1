const message = document.querySelector("#message");
let changed = false; // 문장이 바뀌었는지 확인용

message.addEventListener("click", () => {
    if (!changed) {
        message.textContent = "빨리 가을이 왔으면 좋겠어!";
        changed = true;
        button.style.display = "block";
    }
});