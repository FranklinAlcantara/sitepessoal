function inserir(num) 
{
    let numero;
    numero = document.getElementById('numsaida').innerHTML;
    document.getElementById('numsaida').innerHTML = numero + num;
}


function igual() 
{
    let numero;
    numero = document.getElementById('numsaida').innerHTML;
        if (numero) 
        {
            document.getElementById('numsaida').innerHTML = eval (numero);
        }
            else {
                numero = ("NADA");
                document.getElementById('numsaida').innerHTML= numero;
                 }
    
}


function apagar (num)
{
    document.getElementById('numsaida').innerHTML=("");
}





