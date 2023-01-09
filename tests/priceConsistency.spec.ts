import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.target.com/s?searchTerm=Alexa');
});

const searchTerm = "Alexa"
const priceSelector = "#pageBodyContainer > div:nth-child(1) > div > div:nth-child(4) > div > div.styles__StyledRow-sc-wmoju4-0.iYeeUz > div.styles__StyledCol-sc-fw90uk-0.ePYoxU > div > section > div > div:nth-child(1) > div > div > div.styles__ImageAndInfoWrapper-sc-1iglypx-3.lmjkvZ > div.styles__StyledProductCardBody-sc-bcz5ql-0.ciEEqI > div > div > div.styles__ProductCardPriceAndPromoStyled-sc-1p9w55v-0.hikmng > div.styles__PriceStandardLineHeight-sc-m1iu3h-0.jqDsCz > div.h-padding-r-tiny > span > span"

test.describe.parallel('Qty 1 item price remains consistent', () => {
    test.only('Qty 1 item price remains consistent', async ({ page }) => {
       
        // let itemPrice = String

        // Switched bneginning URL to URL for search to hasten test
        // await page.locator('[data-test="\\@web\\/Search\\/SearchInput"]').fill('Alexa');
        // await page.locator('[data-test="\\@web\\/Search\\/SearchInput"]').press('Enter');
        expect (page.url()).toBe("https://www.target.com/s?searchTerm=Alexa");

        //TODO: Locate 'current-price' for 'Amazon Echo Dot (3rd Generation) - Charcoal'
        var priceElement = await page.$("#pageBodyContainer > div:nth-child(1) > div > div:nth-child(4) > div > div.styles__StyledRow-sc-wmoju4-0.iYeeUz > div.styles__StyledCol-sc-fw90uk-0.ePYoxU > div > section > div > div:nth-child(2) > div > div > div.styles__ImageAndInfoWrapper-sc-1iglypx-3.lmjkvZ > div.styles__StyledProductCardBody-sc-bcz5ql-0.ciEEqI > div > div > div.styles__ProductCardPriceAndPromoStyled-sc-1p9w55v-0.hikmng > div.styles__PriceStandardLineHeight-sc-m1iu3h-0.jqDsCz > div.h-padding-r-tiny > span > span");


        // var priceElement = await page.getByRole('heading', {name:'Amazon Echo Dot (3rd Generation) - Charcoal'}).getByLabel('data-test="current-price"');
        console.log (priceElement);

        //TODO: Get Price and save as var: itemPrice
        // var priceElement = await.page.$x("data-test='current-price'" below:[text='Amazon Echo Dot (3rd Generation)']);
        // var price = await page.evaluate (priceElement => priceElement.textContent, priceElement);
        // let itemPrice = price;
        // await page.getByText('$74.99').click();
        // console.log (itemPrice);

        // await page.getByRole('heading', { name: 'Amazon Echo (4th Gen) - Smart Home Hub with Alexa' }).getByRole('link', { name: 'Amazon Echo (4th Gen) - Smart Home Hub with Alexa' }).click();
        // // TODO: Validate product-price value matches var: itemPrice
        // // await page.locator('[data-test="product-price"]').click();
        // await page.locator('[data-test="orderPickupButton"]').click();
        // await page.locator('[data-test="espDrawerContent-declineCoverageButton"]').click();
        // await page.locator('[data-test="\\@web\\/CartLink"]').click();
        // // TOCO: Validate cart-summary-subtotal value matches var: itemPrice
        // await page.locator('[data-test="cart-summary-subTotal"]').getByText('$74.99').click();
    })
});

//TODO: Test similar to one above, but with Qty: 3 sepected from dropdown prior to putting item in cart and base price for item saved as variable: (itemPrice = value * 3)
// test.describe.parallel('Qty 3 item price remains consistent')

