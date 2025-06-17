const rowEl = document.querySelector('.row')
const posts = [];

fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())
    .then(data => {
        renderString = ``;
        data.forEach(element => {
            console.log(element)
            renderString += `<div class="col-lg-4 col-md-6 col-sm-12"><div class="card d-flex">
                        <div class="card-pin">
                            <img src="./assets/img/pin.svg" alt="">
                        </div>
                        <div class="card-image">
                            <img id="card-image" src='${element.url}' alt="">
                        </div>
                        <div class="card-description">
                            <span id="card-description">${element.title}</span>
                        </div>
                    </div></div>`
            rowEl.innerHTML = renderString;
        });
    })
    .catch(error => console.error(error))