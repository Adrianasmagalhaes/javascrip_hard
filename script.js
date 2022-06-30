function fillList() {
    var ul = document.querySelector('.lista ul');
    //    console.log(ul)
    var frases = ['Feliz Aniversário',
        'Tenha um bom dia',
        'Que sua semana seja uma bençao',
        'Até logo', 'Boa aula' , 'Deve junior']
    //for esta trazendo as frases conforme o console pediu
    for (let i = 0; i < frases.length; i++) {
        //variavel que possue o valor da string do array frases
        var liContent =(frases[i]);

        //cria o elemento li
        var li = document.createElement('li');

        //guarda a string em cada li criada
    li.textContent = liContent;
    //adiciona o li dentro do ul , empilhando a cada laço
    ul.appendChild(li);
    }
}
//chama a função quando o arquivo html for sempre carregado
fillList();