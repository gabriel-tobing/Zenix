import SidebarLayout from "../components/Layouts/SidebarLayout";
import NavbarLayout from "../components/Layouts/NavbarLayout";
import ToDoListLayout from "../components/Layouts/ToDoListLayout";
import MainLayout from "../components/Layouts/MainLayout";

const HomePage = () => {
  return (
    <div className="flex absolute left-20 w-main-sm">
      <SidebarLayout />
      <div>
        <NavbarLayout />
        <MainLayout>
          <ToDoListLayout />
        </MainLayout>
      </div>
    </div>
  );
};

export default HomePage;
