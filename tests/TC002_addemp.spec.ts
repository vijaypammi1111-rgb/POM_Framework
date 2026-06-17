import{test} from "@playwright/test"
import { BasePage } from "../pages/BasePage"
import { commonpages } from "../pages/common_page";
import { Loginpage } from "../pages/LoginPage";
import { Addemployee } from "../pages/Add_emp";
import { verifypage } from "../pages/verification";
import { Logoutpage } from "../pages/Logoutpage";

test("addemployee", async({page})=>{
          BasePage.page= page;
    await BasePage.Openapplicationa("https://ctcorphyd.com/SureshIT/login.php");
    await commonpages.common_wait_method();
    await Loginpage.login("sureshit","sureshit");
    await Addemployee.Addemp("vijay","kumar");
    await verifypage.verifytitle("SureshIT");
    await Logoutpage.logout();
    await BasePage.closeapplication();
})