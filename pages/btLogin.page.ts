import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage.page";
import { BtLandingPage } from "./btLanding.page";

export class BtLoginPage extends BasePage {
  // Locators
  usernameInput: Locator;
  passwordInput: Locator;
  submitButton: Locator;
  logInButton: Locator;

  constructor(page: Page) {
    // Set the page object's URL
    super(page, "/");

    // Set the Locators
    this.usernameInput = page.getByRole("textbox", { name: "userName" });
    this.passwordInput = page.getByTestId("password"); // Explore whether this can componenet can be made accessible
    this.submitButton = page.getByRole("button", { name: "Submit" });
    this.logInButton = page.getByRole("button", { name: "Log In" });
  }

  async waitForPageLoad() {
    await this.page.waitForURL(this.URL);
    if(!expect(this.usernameInput).toBeVisible()) {
      expect(this.passwordInput).toBeVisible(); // Password input hidden until username is submitted
    }
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.submitButton.click();
    await this.waitForPageLoad(); // Wait for password input to appear
    await this.passwordInput.fill(password);
    await this.logInButton.click();

    // Verify user is logged in and redirected to landing page
    const btLandingPage = new BtLandingPage(this.page);
    await btLandingPage.waitForPageLoad();
  }
};