import { Page } from "@playwright/test";
import { BasePage } from "./basePage.page";
import { BtJobPicker } from "../components/btJobPicker.comp";
import { BtTopNav } from "../components/btTopNav.comp";

export class BtTasksPage extends BasePage {
  // Locators

  constructor(page: Page) {
    // Set the page object's URL
    super(page, "/app/Tasks");
  }

  async waitForPageLoad() {
    await this.page.waitForURL(this.URL);
  }
}