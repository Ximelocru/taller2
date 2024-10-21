import { series } from './data.js';
const tableBody = document.getElementById('seriesTabla');
const detailCard = document.getElementById('seriesDetalles');
let promedio = document.getElementById("average");
tabla(series);
function tabla(series) {
    if (tableBody && detailCard) {
        let num_series = 0;
        let temporadas = 0;
        series.forEach(function (serie) {
            const columna = document.createElement('tr');
            columna.innerHTML = `
            <td>${serie.id}</td>
            <td><a href="#" class="serie-link" data-id="${serie.id}">${serie.name}</a></td>  
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
            tableBody.appendChild(columna);
            num_series++;
            temporadas += serie.seasons;
        });
        promedio.innerHTML = temporadas / num_series + "";
        tableBody.addEventListener('click', function (event) {
            const target = event.target;
            if (target && target.classList.contains('serie-link')) {
                event.preventDefault(); // para poder personalizarla 
                const serieId = Number(target.getAttribute('data-id')); // id de la seria clickeada
                const serie = series.find(s => s.id === serieId); // revusa si si es la misma 
                if (serie) {
                    detailCard.innerHTML = `
                    <div class="card" style="width: 18rem;">
                        <img src="${serie.imagen}" class="card-img-top" alt="${serie.name}">
                        <div class="card-body">
                            <h5 class="card-title">${serie.name}</h5>
                            <p class="card-text">${serie.resumen}</p>
                            <a href="${serie.link}" class="btn btn-primary" target="_blank">Más información</a>
                        </div>
                    </div>
                `;
                }
            }
        });
    }
}
