import { BasePage } from "./BasePage";

export class deleteemployee extends BasePage{

    // Locators need to initialize
    private static frame1 = "//iframe[@id='rightMenu']";
    private static check_box= "//input[@value='6541']";
    private static delete_button= "//input[@value='Delete']";

    static async deleteemp(){
        const iframe1 = this.page.frameLocator(this.frame1);
        await iframe1.locator(this.check_box).check();
        await iframe1.locator(this.delete_button).click();
        console.log("Employee deleted successfully");
    }

}