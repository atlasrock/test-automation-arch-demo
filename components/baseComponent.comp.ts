import { Locator, Page } from "@playwright/test";

/* About Component Objects
This project uses the Page Object Model (POM) to organize UI-related code, such as Locators and actions.
This file addresses the global components that appear across multiple pages, such as the job picker and top
navigation bar.

Component Objects should follow SOLID priniples. To encourage this:
- Create BaseComponents for the main types of components. Mark these as abstract.
- BaseComponents should only contain the bare minimum functionality for that component type.
- Liberally use modifiers like private, protected, and readonly
 */

/**
 * The BaseComponent class contains variables and methods that are common to _all_ components within the application.
 * All component objects should extend BaseComponent.
 */
export abstract class BaseComponent {
  // Using shorthand to create and set variables on the BasePage object
  constructor(public readonly locator: Locator) {}
}
