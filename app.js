const colaBtns = document.querySelectorAll('.cola_btn');
const selectList = document.querySelector('.select_cola_list');


colaBtns.forEach(colaBtn => {
    colaBtn.addEventListener('click', (e) => {
        const selectedCola = e.target;
        
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

        createLi.append(createLiImg, createStrong, createBtn)
        
        selectList.append(createLi)
        
    });
});
