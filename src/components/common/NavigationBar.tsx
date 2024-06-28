import React from "react";
import { useRef, useEffect } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SideNavBar from "./SideNavBar";
function Navigation() {
  const [sideNavBar, setSideNavBar] = React.useState(false);
  const sideNavRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setSideNavBar(!sideNavBar);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sideNavRef.current &&
        !sideNavRef.current.contains(event.target as Node)
      ) {
        setSideNavBar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideNavRef]);

  return (
    <>
      <div className=" sticky top-0 z-50 bg-gray-100 border-b p-4">
        <div className=" container m-auto lg:px-36 lg:p-4 ">
          <div className="m-auto ">
            <div className=" flex justify-between align-middle items-center">
              {" "}
              <div className="lg:font-semibold lg:text-2xl font-medium text-xl">
                Branding
              </div>
              <div className="flex gap-5">
                <div className="  items-center lg:gap-4 flex ">
                  <div className="hidden sm:block"></div>
                  <div className="hidden sm:flex  justify-center items-center border size-10 rounded-md border-gray-200 hover:bg-gray-100">
                    <a href="">
                      <InstagramIcon />
                    </a>
                  </div>
                  <div className="hidden sm:flex  justify-center items-center border size-10 rounded-md border-gray-200 hover:bg-gray-100">
                    <WhatsAppIcon />
                  </div>
                  <div className="hidden sm:flex  justify-center items-center border size-10 rounded-md border-gray-200 hover:bg-gray-100">
                    <LinkedInIcon />
                  </div>
                </div>
                <div
                  className={` items-center lg:gap-3 ${
                    sideNavBar ? "hidden" : "flex"
                  }`}>
                  <button
                    onClick={handleClick}
                    className=" hover:bg-gray-200 lg:px-2 rounded-md lg:py-1">
                    <MenuRoundedIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {sideNavBar && (
        <div
          ref={sideNavRef}
          className=" bg-white h-full w-80 fixed top-0 right-0 z-50 border-l-2   border-r-2 border-gray-300 p-4">
          <SideNavBar toggleSidebar={handleClick} />
        </div>
      )}
    </>
  );
}

export default Navigation;
