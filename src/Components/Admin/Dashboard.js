import React from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from "react-pro-sidebar";

const Dashboard = () => {
  return (
    <ProSidebarProvider>
      <div style={{ display: 'flex', height: '100%' }}>
        <Sidebar>
          <Menu>
            <SubMenu label="Charts">
              <MenuItem> Pie charts </MenuItem>
              <MenuItem> Line charts </MenuItem>
            </SubMenu>
            <MenuItem> Documentation </MenuItem>
            <MenuItem> Calendar </MenuItem>
          </Menu>
        {/* <main>
          <button onClick={() => collapseSidebar()}>Collapse</button>
        </main> */}
        </Sidebar>
      </div>
    </ProSidebarProvider>
  );
};

export default Dashboard;
