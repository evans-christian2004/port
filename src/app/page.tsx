import Image from "next/image";
import { LetterCollision } from "./components/LetterCollision";

export default function Home() {
  return (
    <div className="overflow-hidden ">
      <section className="snap-always snap-start">
        <LetterCollision/>
      </section>
      <section className="">
        <div className="snap-always snap">
          <h1 className="text-6xl mt-64">Hi Im Christian</h1>
        </div>
      </section>
    </div>
  );
}
