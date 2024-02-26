import Image from "next/image";

const Home = () => {
  return (
    <div className="flex gap-[100px]">
      <div className=" flex-1 flex-column gap-[50px]">
        <h1 className="text-[96px]">Creative Thoughts Agency.</h1>
        <p className="text-[20px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
          blanditiis adipisci minima reiciendis a autem assumenda dolore.
        </p>
        <div className="flex gap-[20px]">
          <button className="p-[20px] min-w-[120px] bg-[#3673fd] text-white cursor-pointer border-none rounded-[5px]">
            Learn More
          </button>
          <button className="p-[20px] min-w-[120px] bg-white text-[#3673fd] cursor-pointer border-none rounded-[5px]">
            Contact
          </button>
        </div>
        <div className='w-[500px] h-[50px] relative '>
          <Image src="/brands.png" alt="" fill />
        </div>
      </div>
      <div className='flex-1 relative'>
        <Image src="/hero.gif" alt="" fill />
      </div>
    </div>
  );
};

export default Home;
