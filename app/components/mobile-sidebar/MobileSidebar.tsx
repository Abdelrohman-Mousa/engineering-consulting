import { Link } from "react-router-dom";
import {SidebarComponent} from "@syncfusion/ej2-react-navigations";
import "./mobile-sidebar.scss";
import NavItems from "~/components/sidebar-admin-dashboard/NavItems";

const MobileSidebar = () => {
    let sidebar: SidebarComponent;

    const toggleSidebar = () => {
        sidebar.toggle();
    }

    return (
        <div className="mobile-sidebar">
            <header className="mobile-header">
                <Link to="/" className="logo-mobile-sidebar">
                    <img
                        src="/assets/icons/logo.svg"
                         alt="logo"
                    />

                    <h1>Engineering <br/> Consulting</h1>
                </Link>

                <button onClick={toggleSidebar}>
                    <img src="/assets/icons/menu1.svg" alt="menu"
                     className="size-8"
                    />
                </button>
            </header>

            <SidebarComponent
              width={270}
              ref={(Sidebar) => sidebar = Sidebar}
              created={() => sidebar.hide()}
              closeOnDocumentClick={true}
              showBackdrop={true}
              type="over"
              className="nav-sidebar-container"
            >
               <NavItems handleClick={toggleSidebar} />
            </SidebarComponent>
        </div>
    )
}
export default MobileSidebar
