
import { test, expect } from './fixtures';


test('Verify user can filter products by category', async ({ app }) => {
   

    await app.page.goto('/');
    await app.homePage.sanderLabel.click();
    await expect(app.homePage.filterCompleted).toBeVisible();
    const productNames = await app.homePage.productName.allInnerTexts();
    for (const name of productNames) {
        expect(name.toLowerCase()).toContain('sander');
    }
});
