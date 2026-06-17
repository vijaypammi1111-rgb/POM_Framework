import{test} from "@playwright/test";
import { BasePage } from "../pages/BasePage";
import { commonpages } from "../pages/common_page";
import { Loginpage } from "../pages/LoginPage";
import { Logoutpage } from "../pages/Logoutpage";
import { verifypage } from "../pages/verification";

test("login functionality", async ({page})=>{
    BasePage.page= page;
    await BasePage.Openapplicationa("https://ctcorphyd.com/SureshIT/login.php");
    await commonpages.common_wait_method;
    await Loginpage.login("sureshit", "sureshit");
    await verifypage.verifytitle("SureshIT")
    await Logoutpage.logout()
})