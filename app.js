const colaList = document.querySelectorAll('.cola_btn');
const selectList = document.querySelector('.select_cola_list');

colaList.forEach(element => {
    element.addEventListener('click', () => {
            console.log('cola click!');
            const selectLi = document.createElement('li');
            selectList.append(`
            <li><img src="mediaquery/Original_Cola.svg" alt="">
            <span>Original_Cola</span>
            <button class="count">1</button></li>
            `
            );
        
    });
});
