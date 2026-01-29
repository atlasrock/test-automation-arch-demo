import test from "@playwright/test";
import { BtLoginPage } from "../pages/btLogin.page";

test("Log into Buildertrend", async ({ page }) => {
  const loginPage = new BtLoginPage(page);
  await loginPage.goto();
  await loginPage.login("coleATtwo", "passpass");
});