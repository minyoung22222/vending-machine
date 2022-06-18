const colaBtns = document.querySelectorAll('.cola_btn');    // 콜라 버튼들
const selectColaLi = document.querySelector('.select_cola_list');     // 선택된 콜라 리스트

console.log(selectColaLi);

// 콜라 선택 리스트에 콜라 추가하기
colaBtns.forEach(colaBtn => {       // 콜라버튼들 순회
    colaBtn.addEventListener('click', (e) => {
        const selectedCola = e.target;      // 선택된 콜라
        
        const createLi = document.createElement('li');

        const colaLiImg = selectedCola.querySelector('img');
        const colaImgsrc = colaLiImg.getAttribute('src');
        const createLiImg = document.createElement('img');
        createLiImg.setAttribute('src', colaImgsrc);

        const createStrong = document.createElement('strong');
        createStrong.classList.add('cola_name');
        createStrong.append(selectedCola.querySelector('.cola_name').textContent);

        const createSpan = document.createElement('span');
        createSpan.classList.add('count');
        createSpan.append(1);

        const selectedColaCnt = document.querySelector('.count').textContent;
        console.log(selectedColaCnt);
        console.log(e);

        createLi.append(createLiImg, createStrong, createSpan)       // li에 img, strong, span 태그 추가
        
        selectColaLi.append(createLi)     // select_cola_list에 만들어진 li태그 추가
        
    });
});



const depositBtn = document.querySelector('.deposit_btn');      // 입금 버튼
const depositInp = document.querySelector('.deposit_inp');      // 입금 input박스
const myMoney = document.querySelector('.mymoney_num');

// 입금하기
depositBtn.addEventListener('click', ()=>{
    let myMoneyNum = parseInt(myMoney.textContent) + parseInt(depositInp.value);
    myMoney.innerHTML = myMoneyNum;     // 소지금에 입금 금액 나타내기
    depositInp.value = '';
    
});

const getBtn = document.querySelector('.get_btn');
const getcolaLi = document.querySelector('.getcola_list');
const myMoneyNum = document.querySelector('.mymoney_num');
const balanceNum = document.querySelector('.balance_num');

getBtn.addEventListener('click', () => {
    console.log(myMoneyNum.textContent);
    if(myMoneyNum.textContent === '0') {
        alert('소지금을 입금해주세요!');
    }else if (parseInt(myMoneyNum.textContent) < 1000) {
        alert('소지금이 부족합니다 ㅠㅠ');
    }
    console.log(selectColaLi.innerHTML);
    getcolaLi.append(selectColaLi.innerHTML)
})