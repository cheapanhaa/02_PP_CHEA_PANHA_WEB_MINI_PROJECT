import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";
import WorkspacePopupComponent from "@/components/WorkspacePopupComponent";
import React from "react";

export default function List() {
  return (
    <>
      <div className="grid grid-flow-col">
        <SidebarComponent />
        <NavbarComponent />
      </div>
    </>
  );
}
