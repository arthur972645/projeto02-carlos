import data from '../data.json' assert{'type':'json' };

console.log(data)

const btn = document.querySelector('#login')
//O event é importante, pois em formularios, o html mostra o que vc quer, mas depois atualiza e some
//O event permite permanecer com essas informaçõs
//Utiliza dessa forma que foi mostrada
btn.addEventListener('click', (event)=>{
    event.preventDefault()
    const user  = document.getElementById('user').value
    const passaword = document.getElementById('password').value

    const login = data.find((objeto) => objeto.usuario === user && objeto.senha === passaword)

    if(login){
        window.location = '../index.html'
    }else{
        alert('usuario não encontrado')
    }
    
})                                                                 