import { Outlet } from "react-router";
import {SidebarComponent} from "@syncfusion/ej2-react-navigations";
import NavItems from "~/components/sidebar-admin-dashboard/NavItems";
import MobileSidebar from "~/components/mobile-sidebar/MobileSidebar";
import "./index.scss";

const Index = () => {
    return (
        <div className="admin-layout">

                <MobileSidebar />

           <div className="flex">
              <aside className=" w-full max-w-[270px] hidden lg:block  ">
                  <SidebarComponent width={270} enableGestures={false} className="nav-sidebar-container">
                      <NavItems />
                  </SidebarComponent>
              </aside>

              <aside className="children">
                  <Outlet />
              </aside>
           </div>
        </div>
    )
}
export default Index