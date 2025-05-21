# Test info

- Name: Login-Only
- Location: C:\Users\karti\OneDrive\Desktop\PlayWrightTheBeginning\tests\logintest.spec.js:7:6

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 302
Received: 200
    at C:\Users\karti\OneDrive\Desktop\PlayWrightTheBeginning\tests\logintest.spec.js:15:31
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test';
   2 | const {query} =  require('../Pages/database');
   3 | const { Orange } = require('../Pages/Orange').default;
   4 |
   5 | test.use({viewport : {width:1500, height:700}});
   6 |
   7 | test.only('Login-Only', async function({request}){
   8 |
   9 |     const response = await request.post('https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate',
   10 |         {
   11 |             data: {'username' : 'Admin', 'password' : "admin123"},
   12 |             headers : {}
   13 |         });
   14 |     console.log(response.json());
>  15 |     expect(response.status()).toBe(302);
      |                               ^ Error: expect(received).toBe(expected) // Object.is equality
   16 |
   17 |
   18 |
   19 | });
   20 |
   21 |  
   22 |
   23 |
   24 |
   25 | test('Login-Logout-Test-Pass', async function ({page}) {
   26 |
   27 |     const result = await query('SELECT username, password FROM testdata')
   28 |
   29 |     // page.on('request', request => {
   30 |     //     console.log(`➡️ Request: ${request.method()} ${request.url()}`);
   31 |     // });
   32 |
   33 |     // page.on('response', response => {
   34 |     //     console.log(`⬅️ Response: ${response.status()} ${response.url()}`);
   35 |     // });
   36 |  
   37 |     const OrangeWeb = new Orange(page);
   38 |     
   39 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   40 |
   41 |     await OrangeWeb.login(result[0].username, result[0].password); // hard code : "Admin", "admin123"
   42 |
   43 |     await expect(page.url()).toContain('dashboard');   
   44 |     
   45 |     await OrangeWeb.logout();
   46 |
   47 |     await expect(page.url()).toContain('login');  
   48 |     
   49 |
   50 | });
   51 |
   52 | test('Login-Logout-Test-Fail', async function ({page}) {
   53 |
   54 |     const result = await query('SELECT username, password FROM testdata')
   55 |  
   56 |     const OrangeWeb = new Orange(page);
   57 |     
   58 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   59 |
   60 |     await OrangeWeb.login(result[1].username, result[1].password);  // hard code  : "Admin", "admin1" 
   61 |
   62 |     await expect(page.getByText("invalid credentials")).toBeVisible();    
   63 |
   64 | });
   65 |
   66 |
   67 |
   68 |
   69 |
   70 | // Run the following commands inorder to execute : 
   71 |
   72 | // npx playwright test
   73 | // allure generate allure-results --clean -o allure-report
   74 | // allure open allure-report
   75 |
   76 |
   77 |
   78 |
   79 |
   80 |
   81 |
   82 |
   83 |
   84 |
   85 |
   86 |
   87 |
   88 | // ui flow intercept api, how can I do that ?
   89 | // how to interact with api ? 
   90 | // javaScript basics, async await [naveen automation playlist]
   91 | // database integration, sql integration. DONE. 
   92 | // playwright basic commands 
   93 | // push this code in github and make sir a collaborator. DONE.
   94 |
   95 |
   96 |
   97 |
   98 |
   99 |
  100 |
  101 |
  102 |
  103 |
  104 |
  105 |
  106 |
  107 |
  108 |
  109 |
  110 |
  111 | /* Code without POM being implemented */
  112 |
  113 | // test.only ("LoginTest", async function({page}){
  114 | //     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  115 |
```