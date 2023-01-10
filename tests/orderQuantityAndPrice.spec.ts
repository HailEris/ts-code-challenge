import { test, expect } from '@playwright/test';
import { BasePage } from '../core/pages/basePage';

test.describe.parallel("Validate price consistency: Qty 1", () => {
  test.only('Validate price consistency: Qty 1', async ({ page, basePage }) => {
    await page.goto('https://amazon.com/');
  
    // Validate successful navigation
    await expect(page.title).toContain("Amazon.com");

    //     Enter text "Alexa" in search field and Submit
    await page.getByRole('textbox', { name: 'Search For' }).fill('Alexa');
    await page.getByRole('textbox', { name: 'Search For' }).press('Enter');
//     Validate successful navigation
    expect(page.title).toContain("Amazon.com : Alexa");
//     Save Price for item "All-New Exho Dot (5th Gen, 2022 release)" as variable: echoDotPrice
    let echoDotPrice = //Echo Dot Price Locator
//     Select item

//     Validate successful nacigation to product page

//     Valiate Price == echoDotPrice
//     Click "Add to Cart" button
    await page.getByRole('button', { name: 'Add to Cart' }).click();
//     Validate successful navigation to Cart Subtotal View
    expect(basePage.addedToCart).toBeVisible;
//     Validate Price == echoDotPrice

//     Click "Go to Cart" button
    await page.getByRole('link', { name: 'Go to Cart' }).click();
//     Validate successful navigation to Shopping Cart view
    expect(page).toHaveTitle("Shopping Cart");
//     Validate Price == echoDotPrice

  });

})

// Recently it has been observed some differences between quantity and total price until I get to the checkout page.
//
// Test design:

// Test 1: Single QTY Item - Cart Checkout Flow
//     Navigate to Amazon.com
//     Validate successfull navigation
//     Enter text "Alexa" in search field and Submit
//     Validate successful navigation
//     Save Price for item "All-New Exho Dot (5th Gen, 2022 release)" as variable: echoDotPrice
//     Select item
//     Validate successful nacigation to product page
//     Valiate Price == echoDotPrice
//     Click "Add to Cart" button
//     Click "No thanks" button on Protection Plan Pop-up
//     Validate successful navigation to Cart Subtotal View
//     Validate Price == echoDotPrice
//     Click "Go to Cart" button
//     Validate successful navigation to Shopping Cart view
//     Validate Price == echoDotPrice
//     end

// Test 2: 3 QTY Item - Cart Checkout Flow
//     Navigate to Amazon.com
//     Validate successfull navigation
//     Enter text "Alexa" in search field and Submit
//     Validate successful navigation
//     Save Price for item "All-New Exho Dot (5th Gen, 2022 release)" as variable: echoDotPrice
//     Change Qty dropdown to 3
//     Select item
//     Validate successful navigation to product page
//     Valiate Price == echoDotPrice * 3
//     Click "Add to Cart" button
//     Click "No thanks" button on Protection Plan Pop-up
//     Validate successful navigation to Cart Subtotal View
//     Validate Price == echoDotPrice * 3
//     Click "Go to Cart" button
//     Validate successful navigation to Shopping Cart view 
//     Validate Price == echoDotPrice * 3
//     end



// Test 1 Codegen:

test('test', async ({ page }) => {
    await page.goto('https://www.amazon.com/');
    await page.getByRole('textbox', { name: 'Search For' }).click();
    await page.getByRole('textbox', { name: 'Search For' }).fill('Alexa');
    await page.getByRole('textbox', { name: 'Search For' }).press('Enter');
    await page.getByRole('link', { name: 'All-New Echo Dot (5th Gen, 2022 release) | With bigger vibrant sound, helpful routines and Alexa | Charcoal' }).filter({ hasText: 'All-New Echo Dot (5th Gen, 2022 release) | With bigger vibrant sound, helpful ro' }).first().click();
    await page.goto('https://www.amazon.com/All-New-release-Smart-speaker-Charcoal/dp/B09B8V1LZ3/ref=sr_1_2?keywords=Alexa&qid=1672793578&sr=8-2');
    await page.locator('#corePriceDisplay_desktop_feature_div').getByText('27.').nth(1).click();
    await page.locator('#corePriceDisplay_desktop_feature_div').getByText('99').nth(1).click();
    await page.locator('#corePrice_feature_div').getByText('27.').nth(1).click();
    await page.locator('#corePrice_feature_div').getByText('99').nth(1).click();
    await page.getByRole('button', { name: 'Add to Cart' }).click();
    await page.getByRole('button', { name: 'Submit' }).click();
    await page.getByText('27.').nth(3).click();
    await page.locator('#sw-subtotal').getByText('99').nth(1).click();
    await page.getByText('$27.99').first().click();
    await page.getByRole('link', { name: 'Go to Cart' }).click();
    await page.locator('#sc-subtotal-amount-activecart').getByText('$27.99').click();
    await page.getByRole('button', { name: 'Proceed to checkout' }).click();
  });