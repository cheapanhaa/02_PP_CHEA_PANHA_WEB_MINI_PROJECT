import ListBoardComponentHeader from "@/components/ListBoardComponentHeader";
import MonthlyStatisticsComponent from "@/components/MonthlyStatisticsComponent";
import NavbarComponent from "@/components/NavbarComponent";
import SidebarComponent from "@/components/SidebarComponent";
import TodoCardComponent from "@/components/TodoCardComponent";
import { getAllBoard } from "@/service/board.service";

export default async function Board() {
  // const data = await getAllBoard();

  return (
    <div className="grid grid-cols-12 w-screen">
      <div className="col-span-2">
        <SidebarComponent />
      </div>
      <div className="col-span-10">
        <NavbarComponent />
        <div className="content ml-5 py-3">
          <div className="grid grid-cols-12 gap-3">
            <div className="w-full cols col-span-8">
              <ListBoardComponentHeader />
              <div className="w-full">
                <TodoCardComponent />
                <TodoCardComponent />
              </div>
            </div>
            <div className="  col-span-4 w-full">
              <MonthlyStatisticsComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
