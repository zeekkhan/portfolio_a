// links
import Link from "next/link";

// icons
import { RiLinkedinLine, RiGithubLine, RiWhatsappLine } from "react-icons/ri";

const Socials = () => {
  return (
    // <div className='flex items-center gap-x-5 text-lg'>
    //   <Link href={""} className='hover:text-accent transition-all duration-300'>
    //     <RiLinkedinLine />
    //   </Link>
    //   <Link href={""} className='hover:text-accent transition-all duration-300'>
    //     <RiFacebookLine />
    //   </Link>
    //   <Link href={""} className='hover:text-accent transition-all duration-300'>
    //     <RiWhatsappLine />
    //   </Link>
    // </div>
    <div className="flex justify-end items-center gap-x-5 text-lg">
      <Link
        href={"https://www.linkedin.com/in/aziz-ur-rahman-579a6a292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
        className="hover:text-blue-500 transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://github.com/zeekkhan"}
        className="hover:text-blue-500 transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://wa.me/923469900770"}
        className="hover:text-green-500 transition-all duration-300"
      >
        <RiWhatsappLine />
      </Link>
    </div>
  );
};

export default Socials;
