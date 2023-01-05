import { Locator, Page } from "@playwright/test";

export class BasePage {
    readonly page: Page;

    readonly addedToCart: Locator;

    constructor(page: Page) {
        this.page = page;

        this.addedToCart = page.locator( "text = 'Added to Cart'");
    }
}
