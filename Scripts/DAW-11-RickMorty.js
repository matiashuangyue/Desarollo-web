document.getElementById('getAllCharacters').addEventListener('click', getAllCharacters);
document.getElementById('applyFilters').addEventListener('click', applyFilters);

function getAllCharacters() {
    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => displayCharacters(data.results))
        .catch(error => displayError(error));
}

function applyFilters() {
    const name = document.getElementById('name').value;
    const status = document.getElementById('status').value;
    const species = document.getElementById('species').value;
    const type = document.getElementById('type').value;
    const gender = document.getElementById('gender').value;

    let url = 'https://rickandmortyapi.com/api/character/?';
    if (name) url += `name=${name}&`;
    if (status) url += `status=${status}&`;
    if (species) url += `species=${species}&`;
    if (type) url += `type=${type}&`;
    if (gender) url += `gender=${gender}`;

    fetch(url)
        .then(response => response.json())
        .then(data => displayCharacters(data.results))
        .catch(error => displayError(error));
}

function displayCharacters(characters) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    characters.forEach(character => {
        const characterDiv = document.createElement('div');
        characterDiv.className = 'character';
        characterDiv.innerHTML = `
            <h2>${character.name}</h2>
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
            <p>Type: ${character.type}</p>
            <p>Gender: ${character.gender}</p>
            <img src="${character.image}" alt="${character.name}">
        `;
        resultsDiv.appendChild(characterDiv);
    });
}

function displayError(error) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p>Error: ${error.message}</p>`;
}
