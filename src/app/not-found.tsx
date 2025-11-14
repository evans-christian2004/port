import Link from "next/link";

export default function NotFound() {
  return (
        <div className="container mx-auto min-h-screen flex gap-5 items-center flex-col justify-center sm:-mt-24 -mt-20">
            <div className="text-4xl shadow-white xs:text-[50px] xs:leading-none md:text-[50px] lg:text-[70px] xl:text-[90px] text-center">
                <h1 className=" ">
                    I dont think I have this page
                </h1>
                <p className="">&#40;maybe I should 🤔&#41;</p>
            </div>
            <div className="flex flex-col gap-4 mt-4 text-3xl shadow-white xs:text-[40px] xs:leading-none md:text-[50px] lg:text-[70px] xl:text-[90px] text-center">
                <p>for now though...</p>
                <Link 
                    className="bg-primary-400 hover:bg-pink-300 transition-all duration-300 px-12 py-6 rounded-full" 
                    href="/">
                        Back to Home &#x21A9;
                </Link>
            </div>
            
        </div>
    );
}