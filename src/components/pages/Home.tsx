// images
import WhiteChair from "../../assets/images/WhiteChair.png";
import SofaChair from "../../assets/images/SofaChair.png";
import BookRack from "../../assets/images/BookRack.png";
import YelllowSofa from "../../assets/images/YellowSofa.png";
import SofawithRack from "../../assets/images/pngwing.com (5).png";
import Greem from "../../assets/images/GREEM.png";
import UpAnimation from "../animation/UpAnimation";
import SideAnimation from "../animation/SideAnimation";
function Home() {
  return (
    <div>
      {/* section 1 */}
      <div className="bg-gray-100  overscroll-contain">
        <div className="block container mx-auto justify-around md:px-24 px-2 py-20 items-center md:flex">
          <div className=" flex flex-col space-y-2 md:space-y-2 lg:space-y-4 items-center justify-center content-centermd:mt-12  content-center md:justify-start md:items-start md:content-start">
            <div className="">
              <UpAnimation delay={0}>
                <p className="font-bold uppercase w-44 text-amber-500 leading-6 text-center text-sm md:w-10 md:text-justify">
                  Chair Collection 2024
                </p>
              </UpAnimation>
            </div>
            <UpAnimation delay={0.2}>
              <div className="lg:font-bold lg:text-6xl md:text-4xl font-bold text-4xl">
                Welcome to Branding
              </div>
            </UpAnimation>
            <UpAnimation delay={0.4}>
              <div className="lg:w-96 text-center md:text-left ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus, odit.
              </div>
            </UpAnimation>
            <UpAnimation delay={0.5}>
              <div className="">
                <button className="bg-black rounded-xl text-white font-bold px-6 py-3">
                  Connect us
                </button>
              </div>
            </UpAnimation>
          </div>
          <div className="">
            <SideAnimation delay={0.5}>
              <img src={WhiteChair} alt="" />
            </SideAnimation>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="flex container mx-auto justify-center md:px-36 px-0 mt-24 md:flex text-center flex-col items-center md:flex-row md:justify-center">
        <div className="w-auto lg:w-1/2">
          <img src={SofaChair} alt="" />
        </div>
        <div className="w-auto md:mt-12 lg:mt-12 flex flex-col space-y-2 md:space-y-4 lg:space-y-4 lg:w-1/2 xl:mt-12 xl:justify-start xl:items-start xl:text-left">
          <UpAnimation delay={0}>
            <div className="">
              <p className=" font-thin uppercase text-gray-500 leading-6">
                Chair Collection 2024
              </p>
            </div>
          </UpAnimation>
          <UpAnimation delay={0.2}>
            <div className="lg:font-bold lg:w-96 lg:text-5xl md:text-4xl font-bold text-4xl">
              Welcome to Branding
            </div>
          </UpAnimation>

          <UpAnimation delay={0.3}>
            <div className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
              odit.
            </div>
          </UpAnimation>

          <UpAnimation delay={0.4}>
            <div className="">
              {" "}
              <button className="bg-gray-700 rounded-xl text-white font-bold px-6 py-3 text-xs md:text-base">
                Starting from ₹ 5000 /-
              </button>
            </div>
          </UpAnimation>
        </div>
      </div>
      {/* section 3 */}
      <div className=" container m-auto px-36 py-8 text-center lg:18 mt-36">
        <UpAnimation delay={0}>
          <p className=" font-semibold uppercase text-5xl">
            Most Selling Products
          </p>
        </UpAnimation>
      </div>
      <div className="container mx-auto px-36 flex flex-col md:flex-row justify-center space-x-6">
        <div className="  * rounded flex flex-col justify-center">
          <img
            src={BookRack}
            className=" object-contain size-96  rounded-md"
            alt=""
          />
          <div className=" text-center  ">
            <p className="font-bold text-xl">Pracing</p>
            <p>₹ 200 -/</p>
          </div>
        </div>
        <div className="   rounded flex flex-col justify-center">
          <img
            src={YelllowSofa}
            className=" object-contain size-96  rounded-md"
            alt=""
          />
          <div className=" text-center ">
            <p className="font-bold text-xl">Pracing</p>
            <p>₹ 200 -/</p>
          </div>
        </div>
        <div className="   rounded flex flex-col justify-center">
          <img
            src={SofaChair}
            className=" object-contain size-96  rounded-md"
            alt=""
          />
          <div className=" text-center ">
            <p className="font-bold text-xl">Pracing</p>
            <p>₹ 200 -/</p>
          </div>
        </div>
        <div className="   rounded flex flex-col justify-center">
          <img
            src={SofaChair}
            className=" object-contain size-96  rounded-md"
            alt=""
          />
          <div className=" text-center ">
            <p className="font-bold text-xl">Pracing</p>
            <p>₹ 200 -/</p>
          </div>
        </div>
      </div>
      <div className=" container mx-auto flex justify-center mt-36">
        <img src={SofawithRack} alt="" />
      </div>
      <div className=" container text-center mx-auto px-36 mt-24">
        <p className="text-6xl my-8 font-semibold">Heading</p>
        <p className="text-2xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          vero aliquam hic sed, similique atque, delectus porro quae nulla saepe
          ab consequatur consectetur error dolorum a ipsa, nihil harum ut nam
          sint consequuntur. Non, iste saepe. Accusantium vel minima aperiam.
        </p>
      </div>
      <div>
        <div className="container mx-auto">
          <img src={Greem} className=" object-center" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
