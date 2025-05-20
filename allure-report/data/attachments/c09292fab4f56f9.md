# Test info

- Name: Login-Logout-Test-Fail
- Location: C:\Users\karti\OneDrive\Desktop\PlayWrightTheBeginning\tests\logintest.spec.js:25:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: getByText('invalid credentials')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for getByText('invalid credentials')

    at C:\Users\karti\OneDrive\Desktop\PlayWrightTheBeginning\tests\logintest.spec.js:35:57
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test';
   2 | const {query} =  require('../Pages/database');
   3 | const { Orange } = require('../Pages/Orange').default;
   4 |
   5 | test.use({viewport : {width:1500, height:700}});
   6 |
   7 | test('Login-Logout-Test-Pass', async function ({page}) {
   8 |
   9 |     const result = await query('SELECT username, password FROM testdata')
   10 |  
   11 |     const OrangeWeb = new Orange(page);
   12 |     
   13 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   14 |
   15 |     await OrangeWeb.login(result[0].username, result[0].password); // hard code : "Admin", "admin123"
   16 |
   17 |     await expect(page.url()).toContain('dashboard');    
   18 |     
   19 |     await OrangeWeb.logout();
   20 |
   21 |     await expect(page.url()).toContain('login');  
   22 |
   23 | });
   24 |
   25 | test('Login-Logout-Test-Fail', async function ({page}) {
   26 |
   27 |     const result = await query('SELECT username, password FROM testdata')
   28 |  
   29 |     const OrangeWeb = new Orange(page);
   30 |     
   31 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   32 |
   33 |     await OrangeWeb.login(result[1].username, result[1].password);  // hard code  : "Admin", "admin1" 
   34 |
>  35 |     await expect(page.getByText("invalid credentials")).toBeVisible();    
      |                                                         ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
   36 |
   37 | });
   38 |
   39 |
   40 |
   41 |
   42 |
   43 | // Run the following commands inorder to execute : 
   44 |
   45 | // npx playwright test
   46 | // allure generate allure-results --clean -o allure-report
   47 | // allure open allure-report
   48 |
   49 |
   50 |
   51 |
   52 |
   53 |
   54 |
   55 |
   56 |
   57 |
   58 |
   59 |
   60 |
   61 | // ui flow intercept api, how can I do that ?
   62 | // how to interact with api ? 
   63 | // javaScript basics, async await [naveen automation playlist]
   64 | // database integration, sql integration 
   65 | // playwright basic commands 
   66 | // push this code in github and make sir a collaborator. DONE.
   67 |
   68 |
   69 |
   70 |
   71 |
   72 |
   73 |
   74 |
   75 |
   76 |
   77 |
   78 |
   79 |
   80 |
   81 |
   82 |
   83 |
   84 | /* Code without POM being implemented */
   85 |
   86 | // test.only ("LoginTest", async function({page}){
   87 | //     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   88 |
   89 | //     await page.waitForTimeout(2000);
   90 |
   91 | //     await page.getByPlaceholder('Username').fill("Admin", {delay : 300});
   92 |
   93 | //     await page.getByPlaceholder('Password').fill('admin123', {delay : 300});
   94 |
   95 | //     await page.getByRole('button', {name : 'Login'}).click();
   96 |
   97 | //     await expect(page).toHaveURL(/dashboard/);
   98 |
   99 | //     await page.getByAltText("profile picture").click(); 
  100 |
  101 | //     await page.waitForTimeout(1000);
  102 |
  103 | //     const locator = await page.getByText("Logout");
  104 |     
  105 | //     // locator.hover();
  106 | //     // await page.waitForTimeout(2000);
  107 |
  108 | //     locator.click();
  109 |
  110 | //     await expect(page).toHaveURL(/login/);
  111 | //     console.log("Logged out successfully")
  112 |
  113 | // })
  114 |
```