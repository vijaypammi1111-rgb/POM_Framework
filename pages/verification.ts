
import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

export class verifypage extends BasePage{
    // Methods for verification

    static async verifytitle (expectedtitle: string){
        await expect(this.page).toHaveTitle(expectedtitle);
        console.log("Verification completed");
    }

}