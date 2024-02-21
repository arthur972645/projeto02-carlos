document.addEventListener('DOMContentLoaded', () => {
    const urlParam = new URLSearchParams(window.location.search)
    // console.log(urlParam.get('index'))
    const paramIndex = urlParam.get('index')
    console.log(paramIndex)
    const url = `https://swapi.dev/api/people/${Number(paramIndex)+1}/`
    
    fetch(url)
    .then((response) => {
        if(!response.ok){
            throw new Error('Erro de rede: codigo'+response.status)
        }
        return response.json()
    })
    .then((data)=>{
        personagem(data)
    })
    .catch((err) => console.log(err))


    function personagem(item){
        const personagemImg = document.querySelector('.personagem-img')
        const nome = document.querySelector('.personagem-img')
        const altura = document.querySelector('.personagem-img')
        const peso = document.querySelector('.personagem-img')
        const genero = document.querySelector('.personagem-img')
        const cor_cabelo = document.querySelector('.personagem-img')
        const  cor_olho= document.querySelector('.personagem-img')
        const cor_pele = document.querySelector('.personagem-img')
        const data_nascimento = document.querySelector('.personagem-img')

          personagemImg.src = `../image/perso${paramIndex}.png`
          nome.innerHTML = `Nome: ${item.name}`
          altura.innerHTML = `Altura: ${item.height}cm`
          peso.innerHTML = `Peso: ${item.mass}`
          genero.innerHTML = `Gênero: ${item.gender}`
          cor_cabelo.innerHTML = `Cor do cabelo: ${item.hair_color}`
          cor_olho.innerHTML = `Cor do olhos: ${item.eye_color}`
          cor_pele.innerHTML = `Cor da pele: ${item.skin_color}`
          data_nascimento.innerHTML = `Data Aniversário: ${item.birth.year}`        
        
    }
    
})