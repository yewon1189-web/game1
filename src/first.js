const bar = document.querySelector("#progress-bar");

// 페이지 로드 후 0.3초 뒤 시작
setTimeout(() => {
    bar.style.width = "60%"; // 왼쪽 → 오른쪽으로 차기
}, 300);

// 2초 뒤 멈춤 (transition이 자동으로 멈춤)
setTimeout(() => {
    button.style.display = "block";
    bar.style.transition = "none";
    // 버튼 보이기
}, 2300);