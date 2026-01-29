import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage.page";
import { BtJobPicker } from "../components/btJobPicker.comp";
import { BtTopNav } from "../components/btTopNav.comp";
import { BaseComponent } from "../components/baseComponent.comp";

export class BtLandingPage extends BasePage {
  // Locators
  emptyStateHeader: Locator;
  userJobSummarySection: Locator;

  // Page Properties
  isJobSelected: boolean;

  constructor(page: Page) {
    // Set the page object's URL
    super(page, "/app/Landing");

    // Set the Locators
    this.emptyStateHeader = page.getByRole("heading", { name: "Job Summary" });
    this.userJobSummarySection = page.getByTestId("user-job-summary-section");
    this.isJobSelected = false; // Job is not selected on first login
  }

  async waitForPageLoad() {
    await this.page.waitForURL(this.URL, { waitUntil: "domcontentloaded" });
    expect(this.jobPicker.locator).toBeVisible();
    expect(this.topNav.locator).toBeVisible();
    if(!(await this.emptyStateHeader.isVisible())) { // Verify User/Job summary section is visible if the empty state is hidden
      expect(this.userJobSummarySection).toBeVisible()
    };
  }
}