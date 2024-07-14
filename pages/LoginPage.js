import BasePage from "./BasePage.js";
import { expect } from '@playwright/test';

export default class LoginPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        super(page);
        this.page = page;
        this.usernameInputField = page.locator('#username');
        this.passwordInputField = page.locator('#password');
        this.loginSubmitBtn = page.locator('#login-submit');
        this.loginErrorMsg = page.locator('#flash_error');
    }

    async enterUsername(username) {
        await this.usernameInputField.fill(username);
    }
    async enterPassword(password) {
        await this.passwordInputField.fill(password);
    }
    async clickLoginSubmitBtn() {
        await this.loginSubmitBtn.click();
    }

    async assertUsernameIsDisplayed(username) {
        await expect(this.page.locator(`//div[@id = 'loggedas' and contains(.,'Logged in as ${username}')]`)).toBeVisible();
    }
    async assertLoginErrorMsgIsDisplayed() {
        await expect(this.loginErrorMsg).toBeVisible();
    }

    async open() {
        return super.open('');
    }

}