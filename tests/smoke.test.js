import { test } from '@playwright/test';

import LoginPage from '../pages/LoginPage.js';
import HomePage from '../pages/HomePage.js';
import RegularUser from '../resources/RegularUser.js';
import RandomUser from '../resources/RandomUser.js';
import MyAccountPage from '../pages/MyAccoutPage.js';

test.describe('Smoke Test', () => {
    let page;
    let homePage;
    let loginPage;
    let myAccountPage;
    let regularUser;
    let randomUser;

    test.beforeEach(async ({ browser }) => {
        page = await browser.newPage();
        homePage = new HomePage(page);
        loginPage = new LoginPage(page);
        myAccountPage = new MyAccountPage(page);
        regularUser = new RegularUser();
        randomUser = new RandomUser();
        await homePage.open();
    });
    test.afterEach(async () => {
        await page.close();
    });

    test('Valid login', async () => {
        await homePage.clickLoginBtn();
        await loginPage.enterUsername(regularUser.getUsername);
        await loginPage.enterPassword(regularUser.getPassword);
        await loginPage.clickLoginSubmitBtn();
        await loginPage.assertUsernameIsDisplayed(regularUser.getUsername);
    });
    test('Invalid login', async () => {
        await homePage.clickLoginBtn();
        await loginPage.enterUsername(randomUser.getUsername);
        await loginPage.enterPassword(randomUser.getPassword);
        await loginPage.clickLoginSubmitBtn();
        await loginPage.assertLoginErrorMsgIsDisplayed();
    });
    test('Logout', async () => {
        await homePage.clickLoginBtn();
        await loginPage.enterUsername(regularUser.getUsername);
        await loginPage.enterPassword(regularUser.getPassword);
        await loginPage.clickLoginSubmitBtn();
        await homePage.clickLogoutBtn();
        await homePage.assertUserIsOnTheHomepage();
    });
    test('Editing profile information', async () => {
        await homePage.clickLoginBtn();
        await loginPage.enterUsername(regularUser.getUsername);
        await loginPage.enterPassword(regularUser.getPassword);
        await loginPage.clickLoginSubmitBtn();
        await homePage.clickMyAccountBtn();
        await myAccountPage.enterFirstName(randomUser.getFirstName);
        await myAccountPage.enterLastName(randomUser.getLastName);
        await myAccountPage.clickSaveBtn();
        await myAccountPage.assertProfileSaveSuccessMsgIsDisplayed();
        await myAccountPage.assertProfileFirstName(randomUser.getFirstName);
        await myAccountPage.assertProfileLastName(randomUser.getLastName);
    });
    test('Editing profile with invalid username', async () => {
        await homePage.clickLoginBtn();
        await loginPage.enterUsername(regularUser.getUsername);
        await loginPage.enterPassword(regularUser.getPassword);
        await loginPage.clickLoginSubmitBtn();
        await homePage.clickMyAccountBtn();
        await myAccountPage.clearFirstNameInput();
        await myAccountPage.enterLastName(randomUser.getLastName);
        await myAccountPage.clickSaveBtn();
        await myAccountPage.assertEmptyFirstNameErrorMsg();
    })
});