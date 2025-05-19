import {test, expect} from '@playwright/test';

test.use({viewport:{width:1500, height:700}})

test.only ("LoginTest", async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.waitForTimeout(2000);

    await page.getByPlaceholder('Username').fill("Admin", {delay : 300});

    await page.getByPlaceholder('Password').fill('admin123', {delay : 300});

    await page.getByRole('button', {name : 'Login'}).click();

    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText("profile picture").click(); 

    await page.waitForTimeout(1000);

    const locator = await page.getByText("Logout");
    
    // locator.hover();
    // await page.waitForTimeout(2000);

    locator.click();

    await expect(page).toHaveURL(/login/);
    console.log("Logged out successfully")

})








// ui flow intercept api, how can I do that ?
// how to interact with api ?
// javaScript basics, async await 
// database integration, sql integration 
// playwright basic commands 
// push this code in github and make sir a collaborator.