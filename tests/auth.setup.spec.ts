import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { usersCreds } from '../data/creds';


test('login as a customer', async ({ page }) => {

    const loginPage = new LoginPage(page);
    await page.goto('/auth/login');
    await loginPage.performLogin(usersCreds.customer.email, usersCreds.customer.password);

    await expect(page).toHaveURL(/\/account/);
    await page.context().storageState({ path: 'auth/session.json' });
})
