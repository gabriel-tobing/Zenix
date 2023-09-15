import { BiBell } from "react-icons/bi";
import { FaBars } from "react-icons/fa6";

const NavbarLayout = () => {
  return (
    <div className="fixed top-0 right-0 border-b px-2 py-4 w-main-sm">
      <div className="flex justify-end items-center gap-x-5 w-full">
        <button type="button">
          <BiBell color="#0F172A" fontSize={23} />
        </button>
        <button type="button">
          <FaBars color="#0F172A" fontSize={23} />
        </button>
      </div>
    </div>
  );
};

export default NavbarLayout;
