const posts = [];

fetch('https://lanciweb.github.io/demo/api/pictures/')
    .then(response => response.json())
    .then(data => {
        data.forEach(post => {
            posts.push(post);
        });
    })

console.log(posts)