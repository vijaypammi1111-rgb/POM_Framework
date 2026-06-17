import { BasePage } from "./BasePage";

export class Addemployee extends BasePage{

    // Locators
    private static frame = "//iframe[@id='rightMenu']";
    private static add_button = "//input[@value='Add']";
    private static last_name= "//input[@name='txtEmpLastName']";
    private static first_name= " // input[@name='txtEmpFirstName']";
    private static save_button = "//input[@value='Save']";
    private static back_button=" // input[@value='Back']";

    // Methods or Actions to perform

    static async Addemp(firstname:string, lastname:string){
        const iframe= this.page.frameLocator(this.frame);
        await iframe.locator(this.add_button).click();
        await iframe.locator(this.last_name).fill(lastname);
        await iframe.locator(this.first_name).fill(firstname);
        await iframe.locator(this.save_button).click();
        await iframe.locator(this.back_button).click();
    
    }

}