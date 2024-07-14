import BasePage from "./BasePage.js";
import { expect } from '@playwright/test';

export default class HomePage extends BasePage {
    /**
     * @param {import('@playwright/test').Page} page
     */

    constructor(page) {
        super(page);
        this.page = page;
    }

    async assertUserIsOnTheHomepage() {
        await expect(this.page).toHaveURL('https://www.redmine.org/');
    }

    async open() {
        return super.open('');
    }

}