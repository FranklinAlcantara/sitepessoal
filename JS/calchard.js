function inserir(num) 
{
    let numero;
    numero = document.getElementById('saida').innerHTML;
    document.getElementById('saida').innerHTML = numero + num;
}


function igual() 
{

    
    let numero;
    numero = document.getElementById('saida').innerHTML;
        if (numero) 
        {
            document.getElementById('saida').innerHTML = eval (numero);
        }
            else {
                document.getElementById ('saida').innerHTML = "NOPE"
                 }
    
}

