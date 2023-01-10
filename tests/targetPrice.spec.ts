import { test, expect, type Page } from '@playwright/test';
import { cartPage } from '../core/pages/cartPage'; 

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.target.com/s?searchTerm=Alexa');
});

test.describe.parallel("Target Price Consistency Qty: 1, Added from Search Results", () => {
    test.only('Price Consistency Qty: 1, Added from Search Results', async ({ page,  }) => {
        var priceElement = await page.getByTestId('current-price').first().innerText();
        console.log (priceElement);
        await page.getByRole('button').filter({ hasText: 'Add To Cart' }).first().click();
        // expect (page.locator('[data-test="product-price"]')).toHaveText(priceElement);
        // await page.locator('[data-test="shippingButton"]').click();
        // await page.locator('data-test="orderPickupButton"').click();
        await page.locator('[data-test="espDrawerContent-declineCoverageButton"]').click();
        await page.locator('[data-test="\\@web\\/CartLink"]').click();
        console.log(page.getByTestId('data-test=cartItem-price'));
        expect (cartPage.itemPrice.first()).toHaveText(priceElement);
        expect (cartPage.subtotalPrice).toHaveText(priceElement);
    });
})

test.describe.parallel("Target Price Consistency Qty: 1, Added from Product Detail View", () => {
    test('Price Consistency Qty: 1, Added from Product Detail View', async ({ page }) => {
        var priceElement = await page.getByTestId('current-price').first().innerText();
        console.log (priceElement);
        await page.getByTestId('data-test="product-title"').first().click();
        expect (page.locator('[data-test="product-price"]')).toHaveText(priceElement);
        await page.locator('[data-test="shippingButton"]').click();
        await page.locator('[data-test="espDrawerContent-declineCoverageButton"]').click();
        await page.locator('[data-test="\\@web\\/CartLink"]').click();
        console.log(page.getByTestId('data-test="cartItem-price"'));
        expect (page.getByTestId('data-test="cartItem-price"')).toHaveText(priceElement);
        expect (page.getByTestId('data-test=cart-summary-subTotal')).toHaveText(priceElement);
    });
})



//Qty: 3
        // await page.getByRole('button', { name: 'Qty 1' }).click();
        // await page.locator('[data-test="\\@nicollet\\/SelectCustom\\/Popover"]').getByRole('link', { name: '3' }).click();