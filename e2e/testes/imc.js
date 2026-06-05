const { Builder, By } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const fs = require('fs');
const path = require('path');

const BASE_URL = 'http://localhost:3000';
const SCREENSHOTS_DIR = path.join(__dirname, '..', 'screenshots');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
    fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

let driver;

async function tiraFoto(nome) {
    const imagem = await driver.takeScreenshot();

    fs.writeFileSync(
        path.join(SCREENSHOTS_DIR, `${nome}.png`),
        imagem,
        'base64'
    );

    console.log(`Foto tirada: ${nome}.png`);
}

async function main() {

    const options = new chrome.Options();

    options.addArguments(
        '--headless=new',
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu'
    );

    driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {

        console.log('Abrindo aplicação...');

        await driver.get(BASE_URL);

        await tiraFoto('pagina_inicial');

        console.log('Preenchendo dados...');

        await driver.findElement(By.id('peso')).sendKeys('70');
        await driver.findElement(By.id('altura')).sendKeys('1.75');

        await tiraFoto('dados_preenchidos');

        console.log('Clicando em calcular...');

        await driver.findElement(By.id('calcular')).click();

        await driver.sleep(2000);

        await tiraFoto('resultado');

        const resultado = await driver
            .findElement(By.id('resultado'))
            .getText();

        console.log('Resultado encontrado:', resultado);

        if (!resultado.includes('22')) {
            throw new Error(`Resultado inválido: ${resultado}`);
        }

        console.log('Teste executado com sucesso!');

    } catch (erro) {

        console.error('Erro:', erro);

    } finally {

        if (driver) {
            await driver.quit();
        }

    }
}

main();