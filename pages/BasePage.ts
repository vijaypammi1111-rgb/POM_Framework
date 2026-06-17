// Main page Reference and Open Application
import {FrameLocator, Page} from "@playwright/test";

export class BasePage{
static page: Page;
static iframe: FrameLocator;
static iframe1: FrameLocator;

  static async Openapplicationa(url:string){
    await BasePage.page.goto(url);
    await  BasePage.page.frameLocator;
    console.log("application opened")
  }
  static async closeapplication(){
    await BasePage.page.close();
  }
}