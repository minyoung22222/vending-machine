const colaBtns = document.querySelectorAll('.cola_btn');    // 콜라 버튼들
const selectList = document.querySelector('.select_cola_list');     // 선택된 콜라 리스트


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

        const createBtn = document.createElement('span');
        createBtn.classList.add('count')

        createLi.append(createLiImg, createStrong, createBtn)       // li에 img, strong, button 태그 추가
        
        selectList.append(createLi)     // select_cola_list에 만들어진 li태그 추가
        
    });
});
