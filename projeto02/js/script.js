document.addEventListener('DOMContentLoaded', ()=> {
    const baseURL = "https://swapi.dev/api/people/"

    fetch(baseURL)
    .then((response) =>{
        if(!response.ok){
            throw new Error('Erro de rede ! código'+response.status)
        }
        return response.json()
    })
    .then((data) => {
        console.log(data.results[0].name)
        redenrizarPersonagem(data)
    })
    .catch((err) => console.log(err))
})
function redenrizarPersonagem(items){
    const container = document.getElementById('personagem-container');
    items.results.forEach((item,index)=>{
        const divPersonagem = document.createElement('div')
        divPersonagem.innerHTML = `
            <div class = "personagem-caixa">
                <img src="./image/perso${index}.png">
                <div>
                    <h3> ${item.name} </h3>
                </div>
            </div>
        `;

        divPersonagem.classList.add('personagem')
        container.appendChild(divPersonagem)
    });
}