//importando puppeter
import puppeteer from 'puppeteer';

//exportando ele e abreindo a funcao asincrona onde utiliza await para esperar cada linha executar
async function  busca(){
    
    // variavel que guarda o a o pacote puppete com a função lauch

    const bronser = await puppeteer.launch({
        //habilita
        headless: false,
        slowMo:10
    });

    //variavel que guarda uma a função de uma nova pagina 
    const page = await bronser.newPage();
    //entrado no site
    await page.goto('https://github.com/login');
    //localiza o o campo de imput pelo id e escreve o texto.
    await page.type('#login_field','allanf333@gmail.com')
    //localiza o o campo de imput pelo id e escreve o texto.
    await page.type('#password','123456')
    //cria uma variavel que localiza por um id e referecia um tag,  apos isso abre uma função onde que ela mesmo reconhece  um tipo de texto   
    const valor = await page.$eval(".auth-form-header > h1", a => a.innerText);
    //  cria uma promisse onde navega ate o bottun utilizando o id e faz a acao do click
    await Promise.all([
        page.waitForNavigation(),
        page.click('.btn-primary')

    ]);
    //termina a execução 
    await bronser.close();
    
 


    return valor
}





export default {busca}