const puppeteer = require('puppeteer');

(async() => {

  
    // variavel que guarda o a o pacote puppete com a função lauch
    const bronser = await puppeteer.launch({
        headless: false
    });

    //variavel que guarda uma a função de uma nova pagina 
    const page = await bronser.newPage();
   
    await page.goto('https://github.com/login');

    await page.waitForSelector('#login_field')

    await page.type('#login_field','allanf333@gmail.com')

    await page.type('#password','123456')

    await page.waitForSelector('#password')


    await Promise.all([
        page.waitForNavigation(),
        page.click('.btn-primary')

    ]);

    await page.waitForTimeout(3000)
    

    await bronser.close();


})();