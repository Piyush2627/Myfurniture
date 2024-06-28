import AboutBanner from "../../assets/images/AboutBanner.png";
import ArchitectureSvg from "../../assets/Architects.svg";
function About() {
  return (
    <div>
      <div className=" relative">
        {" "}
        <img src={AboutBanner} className=" absolute left-0 top-12" alt="" />
        <div className=" container mx-auto lg:px-36 h-screen">
          <p className=" text-8xl font-semibold -z-10 pt-12">Abour Us</p>
          <p className="w-1/2 mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            culpa tenetur odio quod mollitia laborum natus tempora ut officia.
            Rerum provident quo voluptatum, distinctio veritatis atque,
            quibusdam aperiam doloribus optio exercitationem facere hic. Debitis
            nemo corrupti cumque aliquam? Consectetur alias nobis iure quos
            ducimus facilis distinctio eveniet amet modi cumque dolore
            voluptatem saepe excepturi, eos enim natus temporibus dicta ad
            architecto accusamus expedita delectus assumenda deserunt.
            Exercitationem vero sapiente sunt impedit, iure deserunt, unde
            excepturi nihil omnis totam quibusdam eligendi repudiandae debitis
            expedita rerum perferendis inventore dolores incidunt! Earum, neque
            facere illum tempora asperiores magnam excepturi. Error
            necessitatibus tempore quasi.
          </p>
        </div>
      </div>
      <div className=" container mx-auto lg:px-36 my-12">
        <p className=" text-center text-6xl font-bold ">Our Services</p>
      </div>
      <div className=" container mx-auto lg:px-36 my-12">
        <div className=" grid grid-cols-3 gap-12">
          <div className=" align-middle text-center items-center gap-4 flex flex-col justify-center border rounded-md p-4 hover:shadow-lg ransition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <img src={ArchitectureSvg} className="  w-14" alt="" />
            <p className=" font-bold text-4xl">Architects</p>
            <p className="">
              Consectetur Lorem ipsum dolor sit ame consectetur adipisicing
              elit, sed do eiusmod tempor dolor sit ame consectetur adipisicing
              elit.
            </p>
          </div>
          <div className=" align-middle text-center items-center gap-4 flex flex-col justify-center border rounded-md p-4 hover:shadow-lg ransition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <img src={ArchitectureSvg} className="  w-14" alt="" />
            <p className=" font-bold text-4xl">Architects</p>
            <p className="">
              Consectetur Lorem ipsum dolor sit ame consectetur adipisicing
              elit, sed do eiusmod tempor dolor sit ame consectetur adipisicing
              elit.
            </p>
          </div>
          <div className=" align-middle text-center items-center gap-4 flex flex-col justify-center border rounded-md p-4 hover:shadow-lg ransition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <img src={ArchitectureSvg} className="  w-14" alt="" />
            <p className=" font-bold text-4xl">Architects</p>
            <p className="">
              Consectetur Lorem ipsum dolor sit ame consectetur adipisicing
              elit, sed do eiusmod tempor dolor sit ame consectetur adipisicing
              elit.
            </p>
          </div>
          <div className=" align-middle text-center items-center gap-4 flex flex-col justify-center border rounded-md p-4 hover:shadow-lg ransition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <img src={ArchitectureSvg} className="  w-14" alt="" />
            <p className=" font-bold text-4xl">Architects</p>
            <p className="">
              Consectetur Lorem ipsum dolor sit ame consectetur adipisicing
              elit, sed do eiusmod tempor dolor sit ame consectetur adipisicing
              elit.
            </p>
          </div>
          <div className=" align-middle text-center items-center gap-4 flex flex-col justify-center border rounded-md p-4 hover:shadow-lg ransition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <img src={ArchitectureSvg} className="  w-14" alt="" />
            <p className=" font-bold text-4xl">Architects</p>
            <p className="">
              Consectetur Lorem ipsum dolor sit ame consectetur adipisicing
              elit, sed do eiusmod tempor dolor sit ame consectetur adipisicing
              elit.
            </p>
          </div>
          <div className=" align-middle text-center items-center gap-4 flex flex-col justify-center border rounded-md p-4 hover:shadow-lg ransition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
            <img src={ArchitectureSvg} className="  w-14" alt="" />
            <p className=" font-bold text-4xl">Architects</p>
            <p className="">
              Consectetur Lorem ipsum dolor sit ame consectetur adipisicing
              elit, sed do eiusmod tempor dolor sit ame consectetur adipisicing
              elit.
            </p>
          </div>
        </div>
      </div>

      <div className=" container mx-auto lg:px-36 my-24">
        <p className=" text-center text-6xl font-bold ">Our Visoin</p>
        <p className="mt-5 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt itaque
          perferendis velit laudantium eaque veritatis dicta commodi quos odit
          incidunt! Necessitatibus veniam soluta doloribus est rerum esse
          aspernatur consectetur quis, dolorem dolores illo unde facere earum
          aliquam neque possimus minus officiis? Dolorem delectus possimus,
          consequatur adipisci maiores incidunt ut iusto.
        </p>
      </div>
      <div className=" container mx-auto lg:px-36 my-24">
        <p className=" text-center text-6xl font-bold ">Our Mission</p>
        <p className="mt-5 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt itaque
          perferendis velit laudantium eaque veritatis dicta commodi quos odit
          incidunt! Necessitatibus veniam soluta doloribus est rerum esse
          aspernatur consectetur quis, dolorem dolores illo unde facere earum
          aliquam neque possimus minus officiis? Dolorem delectus possimus,
          consequatur adipisci maiores incidunt ut iusto.
        </p>
      </div>
    </div>
  );
}

export default About;
