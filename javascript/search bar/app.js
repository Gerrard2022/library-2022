const userCard = document.querySelector('[data-user-template]');
const userCardContainer = document.querySelector('[data-user-cards-container');
const searchInput = document.querySelector('[data-search]');

let users = [];

searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();

    users.forEach(item => {
        const isVisible =item.name.toLowerCase().includes(value) || item.email.toLowerCase().includes(value);
        item.element.classList.toggle('hide', !isVisible);
    })

});

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => {
    users = data.map(item => {
        const card = userCard.content.cloneNode(true).children[0]
        const header = card.querySelector('[data-header]')
        const body = card.querySelector('[data-body]')

        header.textContent = item.name;
        body.textContent = item.email;

        userCardContainer.append(card);

        return { name: item.name, email: item.email, element: card }
    })
})