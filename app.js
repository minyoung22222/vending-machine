const colaBtns = document.querySelectorAll('.cola_btn');    // 콜라 버튼들
const selectList = document.querySelector('.select_cola_list');     // 선택된 콜라 리스트

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

        const selectedColaCnt = document.querySelector('.count').textContent;
        console.log(selectedColaCnt);
        console.log(e);

        createLi.append(createLiImg, createStrong, createSpan)       // li에 img, strong, span 태그 추가
        
        selectList.append(createLi)     // select_cola_list에 만들어진 li태그 추가
        
    });
});



const depositBtn = document.querySelector('.deposit_btn');      // 입금 버튼
const depositInp = document.querySelector('.deposit_inp');      // 입금 input박스
const balanceSpan= document.querySelector('.balance_money');      // 잔액: 0원
let balanceMoney = balanceSpan.textContent[0];
console.log(balanceMoney);
console.log(balanceSpan.innerHTML.slice(0, -1));
let test = balanceSpan.innerHTML.slice(0, -1);

// 입금하기
depositBtn.addEventListener('click', ()=>{
    balanceMoney = parseInt(balanceMoney) + parseInt(depositInp.value)
    
    console.log(balanceMoney);

    test = balanceMoney
    // console.log(parseInt(balanceSpan.innerHTML) = balanceMoney);
    // balanceMoney.append(depositInp.value , " 원");
    // console.log(depositInp.value);
    console.log(test);
    depositInp.value = '';
    
})