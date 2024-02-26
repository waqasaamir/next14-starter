import Image from "next/image";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  return (
    <div className="flex items-center gap-[100px]">
      <div className="flex-1 h-[500px] relative">
        <Image src="/contact.png" alt="" fill className="object-contain" />
      </div>
      <div className="flex-1">
        <form action="" className="flex flex-col gap-[20px]">
          <input
            className="p-[20px] rounded-[5px] border-none outline-none	bg-[#2d2b42] text-white"
            type="text"
            placeholder="Name and Surname"
          />
          <input
            className="p-[20px] rounded-[5px] border-none outline-none	bg-[#2d2b42] text-white"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="p-[20px] rounded-[5px] border-none outline-none	bg-[#2d2b42] text-white"
            type="text"
            placeholder="Phone Number (Optional)"
          />
          <textarea
            className="p-[20px] rounded-[5px] border-none outline-none	bg-[#2d2b42] text-white"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="p-[20px] bg-[#3673fd] text-white font-bold cursor-pointer border-none rounded-[5px]">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
