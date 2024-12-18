import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function Footer() {
  return (
    <div>
      <div className="bg-gray-100 border-t ">
        <div className=" container mx-auto px-36 p-24">
          <div className="flex justify-between gap-12 md:px-16 lg:px-">
            <div className="w-1/2">
              <div className="flex flex-col space-y-5">
                <p className="font-semibold text-lg">Address</p>
                <div className=" flex gap-3">
                  <PlaceIcon />
                  Hello there Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Numquam, distinctio!
                </div>
                <div className=" flex gap-3">
                  <LocalPhoneIcon />
                  +91 984095222{" "}
                </div>
                <div className=" flex "></div>
              </div>
            </div>
            <div className=" w-1/2">
              <div className="flex flex-col space-y-5">
                <p className="font-semibold text-lg">About Us</p>
                <div className=" flex gap-3">Help Contect Us </div>
                <div className=" flex gap-3">About Us </div>
                <div className=" flex gap-3">Terms And Conditions </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" text-center">© 2024 Helendo. All Rights Reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
