function CalcularMedia(){

    //colocar todo conteudo

var linha = 1;

var coluna = 1;

var media = 0;

var tr = document.querySelectorAll("tr");




while(linha<tr.length){

    while(coluna<5){

        media = parseInt(media) + parseInt(tr[linha].children[coluna].textContent);

      // console.log (linha +" , "+ coluna);

       //

        coluna++;

    }

    media = media/4;

    tr[linha].children[coluna].textContent=media.toFixed(2);

    coluna = 1;

    linha++;

    media=0;

}

}



CalcularMedia();