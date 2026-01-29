import { Page } from "@playwright/test";
import { BaseComponent } from "../components/baseComponent.comp";
import { BtJobPicker } from "../components/btJobPicker.comp";
import { BtTopNav } from "../components/btTopNav.comp";

/* About Page Objects
This project uses the Page Object Model (POM) to organize UI-related code, such as Locators and actions.
Test data should _not_ be stored in page objects, but methods can use and send test data.

Page Objects should follow SOLID priniples. To encourage this:
- Create BasePages for the main types of pages. Mark these as abstract.
- BasePages should only contain the bare minimum functionality for that page type.
- Liberally use modifiers like private, protected, and readonly
 */

/**
 * The BasePage class contains variables and methods that are common to _all_ pages within the application.
 * All page objects should extend BasePage.
 */
export abstract class BasePage {
  jobPicker: BtJobPicker;
  topNav: BtTopNav;

  // Using shorthand to create and set variables on the BasePage object
  constructor(protected readonly page: Page, public readonly URL: string) {
    this.jobPicker = new BtJobPicker(page.getByTestId("job-picker"));
    this.topNav = new BtTopNav(page.getByTestId("top-nav")); 
  }

  /**
   * Navigate to the page object's given URL
   */
  async goto() {
    await this.page.goto(this.URL);
  }

  /**
   * Wait for the page to be loaded
   */
  abstract waitForPageLoad(): any;
}
