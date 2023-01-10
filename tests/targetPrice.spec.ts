import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.target.com/s?searchTerm=Alexa');
});

test.describe.parallel("Target Price Consistency Qty: 1", () => {
    test('Price Consistency Qty: 3', async ({ page }) => {
        //This selector is un-ideal and will make the test flaky. In real world situation I would add a data-testId value in the FE code to enable testing.
        var priceElement = await page.getByTestId('current-price').nth(0).innerText();
        console.log (priceElement);
        await page.getByText('Amazon Echo Dot (3rd Generation) - Charcoal').click();
        expect (page.locator('[data-test="product-price"]')).toHaveText(priceElement);
        // await page.getByRole('button', { name: 'Qty 1' }).click();
        // await page.locator('[data-test="\\@nicollet\\/SelectCustom\\/Popover"]').getByRole('link', { name: '3' }).click();
        await page.locator('[data-test="shippingButton"]').click();
        await page.locator('[data-test="espDrawerContent-declineCoverageButton"]').click();
        await page.locator('[data-test="\\@web\\/CartLink"]').click();
        console.log(page.getByTestId('[data-test="cartItem"'));
        expect (page.getByTestId('[data-test="cartItem-price"]')).toHaveText(priceElement);
        expect (page.getByTestId('[data-test="cart-summary-subTotal"]')).toHaveText(priceElement);
    });
})