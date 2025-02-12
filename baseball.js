// 정답은 3자리로 이루어진 중복이 없는 숫자
// 게임 시작버튼 누르면 게임시작 게임버튼은 사라짐
// 목숨은 10번
// 입력값 입력위치 모두 같으면 스트라이크 , 입력값만 맞으면 볼, 둘다 아니면 아웃
//정답을 제출할때마다 히스토리창에 입력한 값 보여주기


// 게임시작 버튼 클릭
let life_count = 7;
let start = document.getElementById("start");
start.addEventListener('click', function () {
    alert("게임을 시작합니다. \n게임방법 : 7번 안에 4개의 숫자를 맞춰 성공하세요. \n4개의 숫자는 중복되지 않습니다.");
    start.style.display = "none";
    GameStart();
});

// 게임시작
function GameStart() {
    let life = document.getElementById('life');
    let history = document.getElementById("history");
    let check_btn = document.getElementById("check");
    life.innerHTML = life_count;
    history.style.display = 'block';
    check_btn.style.display = 'block';
    random();
}

// 게임오버
function GameOver() {
    alert("Game Over!!! 정답은 : " + answer.join("") + " 입니다.");
    location.reload();
}

// 정답비교
document.getElementById('check').addEventListener('click', function () {

    let text = document.querySelectorAll('.text-area input');
    let history = document.getElementById('history');
    let li = document.createElement('li');

    let strike = 0;

    for (let i = 0; i < 4; i++) {
        if (text[i].value == "" || text[i].value == null) {
            alert("숫자가 입력되지 않았습니다.");
            return;
        } else if (text[i].value == answer[i]) {
            text[i].style.background = 'green';
            strike++;
        } else if (answer.includes(parseInt(text[i].value))) {
            text[i].style.background = 'yellow';
        } else {
            text[i].style.background = 'gray';
        }

        history.appendChild(li);
        li.innerHTML += text[i].value + " ";
    }
    if(strike == 4){
        alert("정답입니다. 게임을 종료합니다.");
        location.reload();
    }
    life_count--;
    life.innerHTML = life_count;
    if (life_count < 1) {
        GameOver();
    }
})

// 랜덤 수 뽑기
let answer = [];
function random() {
    let numbers = new Set();
    while (numbers.size < 4) {
        let num = Math.floor(Math.random() * 9) + 1; 
        numbers.add(num); 
    }
    answer = [...numbers]; 
    console.log(answer);
    return answer;
}
