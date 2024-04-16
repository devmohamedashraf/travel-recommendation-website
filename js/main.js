

console.log('Hello World!');
const recommendations = document.querySelector('.recommendations');


let beaches = []
let countries = []
let temples = []

const getRecommendations = async () => {
    const res = await fetch('https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json');
    const data = await res.json();
    return data;
}


let inputSearch = document.querySelector('.search input');
let buttonSearch = document.querySelector('.search .btn-search');


buttonSearch.addEventListener('click', async () => {
    recommendations.innerHTML = '';
    const data = await getRecommendations();
    let search = inputSearch.value.toLowerCase();
    beaches = data.beaches.filter(beach => beach.name.toLowerCase().includes(search));
    countries = data.countries.filter(country => country.name.toLowerCase().includes(search));
    temples = data.temples.filter(temple => temple.name.toLowerCase().includes(search));


    displayRecommendations();
});

const createCard = (item) => {
    let card = document.createElement('div');
    card.classList.add('recommendation');
    card.innerHTML = `
        <div class="image">
            <img src="https://images.unsplash.com/photo-1589806036187-fcbc6a7a23b6?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </div>
        <div class="content">
            <h2>${item.name}</h2>
            <p>${item.description}</p>
            <button class="btn">
                Visit
            </button>
        </div>
    `;
    return card;
}
const displayRecommendations = () => {
    beaches.forEach(beach => {
        let card = createCard(beach);
        recommendations.appendChild(card);
    });

    countries.forEach(country => {
        let card = createCard(country);
        recommendations.appendChild(card);
    });

    temples.forEach(temple => {
        let card = createCard(temple);
        recommendations.appendChild(card);
    });
}



