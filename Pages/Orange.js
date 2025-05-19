
class Orange {

    constructor(page) {
        this.page = page;
        this.usernameBox = page.getByPlaceholder('Username');
        this.passwordBox = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', {name : 'Login'});
        this.profileButton = page.getByAltText("profile picture");
        this.logoutButton = page.getByText("Logout");
    }

    async login(username, password) {
        await this.usernameBox.fill("Admin");
        await this.passwordBox.fill("admin123");
        await this.loginButton.click();
    }

    async logout () {
        await this.profileButton.first().click();
        await this.logoutButton.click();
    }


}

export default { Orange };