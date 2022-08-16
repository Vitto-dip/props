

export default function verifSit(media){
    let sit = '';

    if(media > 0 && media < 10){ 
        sit = "Média inválida"
    }

    else if(media <= 10){
        sit = "Aluno passou" 
    }

    else if(media <= 3 && media >= 5){
        sit = "Aluno ta de rec" 
    }

    else{
        sit = "Aluno reprovou" 
    }
}