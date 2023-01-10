import { chromium, test as base } from "@playwright/test";
import path from "path";
import { BasePage, CartPage } from "../pages/cartPage";
// import { TestFixtures } from "./types";


context: async ({}, use) => {
    const browser = await chromium.launch({headless: true});
    const context = await browser.newContext
}