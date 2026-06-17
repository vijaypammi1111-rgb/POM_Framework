import{test} from "@playwright/test"
import { BasePage } from "../pages/BasePage"
import { commonpages } from "../pages/common_page";
import { Loginpage } from "../pages/LoginPage";
import { deleteemployee } from "../pages/Delete_emp";
import { Logoutpage } from "../pages/Logoutpage";


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
