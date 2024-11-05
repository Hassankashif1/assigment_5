import Image from "next/image";
export default function Home() {
  return (
    <div>
      {/* Header Start */}

      <header className="w-[1741.06px] h-[135.01px] bg-[#A29875]">
        <h2 className="text-white text-[66.78px] rye-regular pl-11 pt-4">
          Purity
        </h2>
      </header>
      {/* Header End */}

      {/* Hero Start */}

      <div
        className="w-[1271.01px] h-[573.59px]  mt-52 ml-52" 
        id="box"
      >
        <div id="box1" className="inline-block relative top[-15vh]">
          <h1 className="font-bold text-[37.8px] w-[472.97px] h-[162.53px] mb-10">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          
          <p className="font-medium text-[29.24px] w-[798.9px] h-[144px] text-[#787054] ">
            An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>
          
          <button className="w-[247.67px] h-[49.2px] bg-[#A29875] text-white rounded-[8.6px]  font-medium text-[25.8px] ">
            Explore Now
          </button>
        </div>
        <div id="box2" className=" inline-block">
          <Image
            src="/images/rs-group-wrap.svg"
            alt="Hero"
            width={421.38}
            height={573.59}
            className="ml-[46px]"
          ></Image>
        </div>
      </div>
    </div>
  );
}
