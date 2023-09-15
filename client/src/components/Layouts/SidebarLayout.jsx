import { Link } from "react-router-dom";
import { BiHome, BiBriefcase } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { PiNotebookBold } from "react-icons/pi";
import { AiOutlineFolderOpen } from "react-icons/ai";

const SidebarLayout = () => {
  return (
    <div className="fixed top-0 left-0 bg-white w-20 h-screen border-r">
      <div className="my-4">
        <div className="flex justify-center items-center">
          <div className="w-10 h-10">
            <img
              src="../../../public/logo.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <span className="hidden">Zenix</span>
        </div>
      </div>
      <div className="mt-8 px-3">
        <div className="flex flex-col gap-y-4">
          <div className="bg-blue-800 px-1 py-2 rounded-md">
            <Link to="/">
              <div className="flex justify-center items-center">
                <div>
                  <BiHome color="#FFFFFF" fontSize={25} />
                </div>
                <span className="hidden">Home</span>
              </div>
            </Link>
          </div>
          <div className=" px-1 py-2 rounded-md">
            <Link to="/">
              <div className="flex justify-center items-center">
                <div>
                  <PiNotebookBold color="#0F172A" fontSize={25} />
                </div>
                <span className="hidden">Catatan</span>
              </div>
            </Link>
          </div>
          <div className=" px-1 py-2 rounded-md">
            <Link to="/">
              <div className="flex justify-center items-center">
                <div>
                  <AiOutlineFolderOpen color="#0F172A" fontSize={25} />
                </div>
                <span className="hidden">Dokumen</span>
              </div>
            </Link>
          </div>
          <div className="bg-white px-1 py-2 rounded-md">
            <Link to="/">
              <div className="flex justify-center items-center">
                <div>
                  <BiBriefcase color="#0F172A" fontSize={25} />
                </div>
                <span className="hidden">Info</span>
              </div>
            </Link>
          </div>
          <div className="bg-white px-1 py-2 rounded-md">
            <Link to="/">
              <div className="flex justify-center items-center">
                <div>
                  <FiSettings color="#0F172A" fontSize={25} />
                </div>
                <span className="hidden">Pengaturan</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
