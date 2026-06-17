
import { BasePage } from "./BasePage";

export class Logoutpage extends BasePage{

    // Locators
    private static logout_button = "//a[text()='Logout']";

    // Methods for logout action

   static async logout(){

    await this.page.locator(this.logout_button).click();
    }
}