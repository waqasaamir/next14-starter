import Image from "next/image";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  return (
    <div className="flex gap-[100px]">
      <div className="flex-1 flex-column gap-[50px]">
        <h2 className="text-[#3673fd]">About Agency</h2>
        <h1 className="text-[54px]">
          We create digital ideas that are bigger, bolder, braver and better.
        </h1>
        <p className="text-[20px] font-light">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-column gap-2.5">
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-column gap-2.5">
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
          <div className="flex flex-column gap-2.5">
            <h1>10 K+</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className="relative flex-1">
        <Image
          src="/about.png"
          alt="About Image"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default AboutPage;
