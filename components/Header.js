// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Social from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16">
      <div className="container mx-auto">
        <div
          className="inline lg:flex:row justify-between items-center gap-y-4 
        py-4"
        >
          {/* logo */}
          <Link href={"/"}>
            <h1>.</h1>
            {/* <Image
              src={"/logo.png"}
              width={200}
              height={48}
              alt=""
              priority={true}
            /> */}
          </Link>
          {/* socials */}
          <Social />
        </div>
      </div>
    </header>
  );
};

export default Header;
