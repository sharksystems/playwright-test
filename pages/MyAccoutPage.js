import BasePage from "./BasePage.js";
import { expect } from '@playwright/test';

export default class MyAccountPage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        super(page);
        this.page = page;
        this.firstNameInputField = page.locator('#user_firstname');
        this.lastNameInputField = page.locator('#user_lastname');
        this.profileSaveBtn = page.getByRole('button', { name: 'Save' });
        this.profileSaveSuccessfulMsg = page.locator('#flash_notice');
        this.emptyFirstNameErrorMsg = page.locator("//div[@id='errorExplanation' and contains(.,'First name cannot be blank')]");
    }

    async enterFirstName(firstName) {
        await this.firstNameInputField.fill(firstName);
    }
    async enterLastName(lastName) {
        await this.lastNameInputField.fill(lastName);
    }
    async clearFirstNameInput() {
        await this.firstNameInputField.clear();
    }
    async clickSaveBtn() {
        await this.profileSaveBtn.click();
    }

    async assertProfileSaveSuccessMsgIsDisplayed() {
        await expect(this.profileSaveSuccessfulMsg).toBeVisible();
    }
    async assertEmptyFirstNameErrorMsg() {
        await expect(this.emptyFirstNameErrorMsg).toBeVisible();
    }
    async assertProfileFirstName(firstName) {
        await expect(this.firstNameInputField).toHaveValue(firstName);
    }
    async assertProfileLastName(lastName) {
        await expect(this.lastNameInputField).toHaveValue(lastName);
    }

    async open() {
        return super.open('');
    }

}