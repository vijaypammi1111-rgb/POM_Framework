import { BasePage } from "./BasePage";

export class commonpages extends BasePage {

    static async common_wait_method(){
        await this.page.waitForTimeout(3000);
    }

}