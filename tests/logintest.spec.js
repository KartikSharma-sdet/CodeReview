import {test, expect} from '@playwright/test';
const {query} =  require('../Pages/database');
const { Orange } = require('../Pages/Orange').default;

test.use({viewport : {width:1500, height:700}});

test('Login-Logout-Test-Pass', async function ({page}) {

    const result = await query('SELECT username, password FROM testdata')
 
    const OrangeWeb = new Orange(page);
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await OrangeWeb.login(result[0].username, result[0].password); // hard code : "Admin", "admin123"

    await expect(page.url()).toContain('dashboard');    
    
    await OrangeWeb.logout();

    await expect(page.url()).toContain('login');  

});

test('Login-Logout-Test-Fail', async function ({page}) {

    const result = await query('SELECT username, password FROM testdata')
 
    const OrangeWeb = new Orange(page);
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await OrangeWeb.login(result[1].username, result[1].password);  // hard code  : "Admin", "admin1" 

    await expect(page.getByText("invalid credentials")).toBeVisible();    

});





// Run the following commands inorder to execute : 

// npx playwright test
// allure generate allure-results --clean -o allure-report
// allure open allure-report













// ui flow intercept api, how can I do that ?
// how to interact with api ? 
// javaScript basics, async await [naveen automation playlist]
// database integration, sql integration 
// playwright basic commands 
// push this code in github and make sir a collaborator. DONE.

















/* Code without POM being implemented */

// test.only ("LoginTest", async function({page}){
//     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//     await page.waitForTimeout(2000);

//     await page.getByPlaceholder('Username').fill("Admin", {delay : 300});

//     await page.getByPlaceholder('Password').fill('admin123', {delay : 300});

//     await page.getByRole('button', {name : 'Login'}).click();

//     await expect(page).toHaveURL(/dashboard/);

//     await page.getByAltText("profile picture").click(); 

//     await page.waitForTimeout(1000);

//     const locator = await page.getByText("Logout");
    
//     // locator.hover();
//     // await page.waitForTimeout(2000);

//     locator.click();

//     await expect(page).toHaveURL(/login/);
//     console.log("Logged out successfully")

// })
