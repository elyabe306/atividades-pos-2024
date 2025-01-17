const URL = 'https://swapi.dev/api/planets/';

function fetchPlanetas() {
    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição à API');
            }
            return response.json(); 
        })
        .then(data => {
            
            exibirPlanetas(data.results);
            
            if (data.next) {
                URL = data.next;
                fetchPlanetas();
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao carregar os dados');
        });
}

function exibirPlanetas(planetas) {
    const lista = document.getElementById('planetas-lista');
    planetas.forEach(planeta => {
        
        const item = document.createElement('li');
        item.classList.add('planeta-item');

        item.innerHTML = `
            <h3>${planeta.name}</h3>
            <p><strong>Clima:</strong> ${planeta.climate}</p>
            <p><strong>Terreno:</strong> ${planeta.terrain}</p>
            <p><strong>População:</strong> ${planeta.population}</p>
        `;

        lista.appendChild(item);
    });
}

document.addEventListener('DOMContentLoaded', fetchPlanetas);