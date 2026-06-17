import {test} from "@playwright/test";
import { BasePage } from "../pages/BasePage";
import { commonpages } from "../pages/common_page";
import { Loginpage } from "../pages/LoginPage"; 
import { Logoutpage } from "../pages/Logoutpage";
import { verifypage } from "../pages/verification";
import { Addemployee } from "../pages/Add_emp";
import { deleteemployee } from "../pages/Delete_emp";


test.describe("test_suite_POM", async()=>{

    // Login test case
    test("login functionality", async ({page})=>{
        BasePage.page= page;
        await BasePage.Openapplicationa("https://ctcorphyd.com/SureshIT/login.php");
        await commonpages.common_wait_method;
        await Loginpage.login("sureshit", "sureshit");
        await verifypage.verifytitle("SureshIT")
        await Logoutpage.logout()
    })

    // Add Employee test case 

    test("addemployee", async({page})=>{
              BasePage.page= page;
        await BasePage.Openapplicationa("https://ctcorphyd.com/SureshIT/login.php");
        await commonpages.common_wait_method();
        await Loginpage.login("sureshit","sureshit");
        await Addemployee.Addemp("vijay", "kumar");
        await verifypage.verifytitle("SureshIT");
        await Logoutpage.logout();
        await BasePage.closeapplication();
    })

    // Delete Employee test case 

    test("deleteemp", async({page})=>{
        BasePage.page=page;
    
        await BasePage.Openapplicationa("https://ctcorphyd.com/SureshIT/login.php");
        await commonpages.common_wait_method();
        await Loginpage.login("sureshit","sureshit");
        await commonpages.common_wait_method();
        await deleteemployee.deleteemp();
        await Logoutpage.logout();
        await BasePage.closeapplication();
    
    })
    
})