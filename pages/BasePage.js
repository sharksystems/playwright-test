export default class BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        this.page = page;
        this.loginBtn = page.locator('a.login');
        this.logoutBtn = page.locator('a.logout');
        this.myAccountBtn = page.locator('a.my-account');
    }

    async clickLoginBtn() {
        await this.loginBtn.click();
    }
    async clickLogoutBtn() {
        await this.logoutBtn.click();
    }
    async clickMyAccountBtn() {
        await this.myAccountBtn.click();
    }

    async open(path) {
        await this.page.goto(`https://www.redmine.org/${path}`);
    }

}