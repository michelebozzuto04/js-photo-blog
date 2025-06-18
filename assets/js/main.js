const rowEl = document.querySelector('.row')
const modalEl = document.getElementById("modal");
const posts = [];

function openModal() {
    modalEl.classList.remove('d-none');
    modalEl.classList.add('d-flex');
}

function closeModal() {
    modalEl.classList.remove('d-flex');
    modalEl.classList.add('d-none');
}

fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())
    .then(data => {
        renderString = ``;
        data.forEach(element => {
            console.log(element)
            const colEl = document.createElement('div');
            colEl.classList.add('col-lg-4', 'col-md-6', 'col-sm-12');
            const cardEl = document.createElement('div');
            cardEl.classList.add('card', 'd-flex');
            const cardPinEl = document.createElement('div');
            cardPinEl.classList.add('card-pin');
            const cardImageEl = document.createElement('div');
            cardImageEl.classList.add('card-image');
            const cardDescriptionEl = document.createElement('div');
            cardDescriptionEl.classList.add('card-description');
            cardPinEl.innerHTML = '<img src="./assets/img/pin.svg" alt=""></img>';
            cardImageEl.innerHTML = `<img id="card-image" src='${element.url}' alt="">`;
            cardDescriptionEl.innerHTML = `<span id="card-description">${element.title}</span>`;
            cardEl.append(cardPinEl, cardImageEl, cardDescriptionEl);
            colEl.appendChild(cardEl);
            rowEl.appendChild(colEl);

            cardEl.addEventListener('click', () => {
                openModal()
                modalEl.addEventListener('click', () => {
                    closeModal()
                })
            })
        });
    })
    .catch(error => console.error(error))

