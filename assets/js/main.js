const rowEl = document.querySelector('.row')
const modalEl = document.getElementById("modal");
const modalImageEl = document.querySelector(".modal-image");
const closeModalEl = document.getElementById("closeIcon");
const modalBackwardEl = document.querySelector(".backward i");
const modalForwardEl = document.querySelector(".forward i");

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
            cardDescriptionEl.innerHTML = `<span class="card-date">${element.date}</span><span class="card-title">${element.title}</span>`;
            cardEl.append(cardPinEl, cardImageEl, cardDescriptionEl);
            colEl.appendChild(cardEl);
            rowEl.appendChild(colEl);


            // Event listener to open modal on card click
            cardEl.addEventListener('click', () => {

                openModal()

                closeModalEl.addEventListener('click', () => {
                    closeModal()
                })

                let currentIndex = data.indexOf(element);

                modalImageEl.innerHTML = `<img id="card-image" src='${data[currentIndex].url}' alt=""></img><div><span>${data[currentIndex].date}</span><span>${data[currentIndex].title}</span></div>`;

                // Listener for next image
                modalForwardEl.addEventListener('click', () => {
                    if (currentIndex == data.length - 1) {
                        currentIndex = 0;
                    } else if (currentIndex < data.length) {
                        currentIndex++;
                    }

                    modalImageEl.innerHTML = `<img id="card-image" src='${data[currentIndex].url}' alt=""></img><div><span>${data[currentIndex].date}</span><span>${data[currentIndex].title}</span></div>`;
                })

                // Listener for previous image
                modalBackwardEl.addEventListener('click', () => {
                    if (currentIndex == 0) {
                        currentIndex = data.length - 1;
                    } else if (currentIndex > 0) {
                        currentIndex--;
                    }

                    modalImageEl.innerHTML = `<img id="card-image" src='${data[currentIndex].url}' alt=""></img><div><span>${data[currentIndex].date}</span><span>${data[currentIndex].title}</span></div>`;
                })

                // Listener to detect click outside of modal
                modalEl.addEventListener('click', (event) => {
                    if (event.target.closest([".modal-image", ".backward", ".forward", "#closeIcon"])) return
                    closeModal()
                })
            })
        });
    })
    .catch(error => console.error(error))

