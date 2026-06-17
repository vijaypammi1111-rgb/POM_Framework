// Objects / Elements and Methods related to login page
import { BasePage } from "./BasePage";

export class Loginpage extends BasePage{
// Locators
   private static textbox_username = "//input[@type='text']";
   private static textbox_password = "//input[@type='password']";
   private static login_button = "//input[@type='Submit']";

   // Methods need to create

   static async login(username: string , password: string){

    await this.page.locator(this.textbox_username).fill(username);
    await this.page.locator(this.textbox_password).fill(password);
    await this.page.locator(this.login_button).click();
   }
    
}