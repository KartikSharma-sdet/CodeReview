# Test info

- Name: Login-Logout-Test-Fail
- Location: C:\Users\karti\OneDrive\Desktop\PlayWrightTheBeginning\tests\logintest.spec.js:25:5

# Error details

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Username')

    at Orange.login (C:\Users\karti\OneDrive\Desktop\PlayWrightTheBeginning\Pages\Orange.js:14:32)
    at C:\Users\karti\OneDrive\Desktop\PlayWrightTheBeginning\tests\logintest.spec.js:33:21
```

# Test source

```ts
   1 |
   2 | class Orange {
   3 |
   4 |     constructor(page) {
   5 |         this.page = page;
   6 |         this.usernameBox = page.getByPlaceholder('Username');
   7 |         this.passwordBox = page.getByPlaceholder('Password');
   8 |         this.loginButton = page.getByRole('button', {name : 'Login'});
   9 |         this.profileButton = page.getByAltText("profile picture");
  10 |         this.logoutButton = page.getByText("Logout");
  11 |     }
  12 |
  13 |     async login(username, password) {
> 14 |         await this.usernameBox.fill(username);
     |                                ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  15 |         await this.passwordBox.fill(password);
  16 |         await this.loginButton.click();
  17 |     }
  18 |
  19 |     async logout () {
  20 |         await this.profileButton.first().click();
  21 |         await this.logoutButton.click();
  22 |     }
  23 |
  24 |
  25 | }
  26 |
  27 | export default { Orange };
```