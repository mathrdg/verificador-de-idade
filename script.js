function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano || fano.value < 1900){
    window.alert('Verifique os dados e tente novamente!')
} else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto')
    if (fsex[0].checked) {
        gênero = 'Homem'
        if (idade >=0 && idade <10){
            //Criança
            img.setAttribute('src', 'assets/Bebê.png')
        } else if (idade < 21) {
            //Adolescente
            img.setAttribute('src', 'assets/Criança homem.png')
        } else if (idade < 50){
            //Adulto
            img.setAttribute('src', 'assets/Homem adulto.png')
        } else {
            //idoso
            img.setAttribute('src', 'assets/Idoso homem.png')
        }
    } else if (fsex[1]){
        gênero = 'Mulher'
        if (idade >=0 && idade <10){
            //Criança
            img.setAttribute('src', 'assets/Bebê.png')
        } else if (idade < 21) {
            //Adolescente
            img.setAttribute('src', 'assets/Jovem mulher.png')
        } else if (idade < 50){
            //Adulto
            img.setAttribute('src', 'assets/Mulher adulta.png')
        } else {
            //idoso
            img.setAttribute('src', 'assets/Idoso mulher.png')
        }
   
    
   
    }
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)

}
}