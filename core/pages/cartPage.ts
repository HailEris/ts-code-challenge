import { test, expect, Page, Locator } from '@playwright/test';


export class CartPage {
    readonly page: Page;
    readonly itemPrice: Locator;
    readonly subtotalPrice: Locator;
    constructor(page: Page) {
        this.page = page;
        this.itemPrice = page.getByTestId('cartItem-price');
        this.subtotalPrice = page.getByTestId('cart-summary-subTotal').locator('p');
    }

}
