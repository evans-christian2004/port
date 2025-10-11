import Image from "next/image";
import { LetterCollision } from "./components/LetterCollision";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <LetterCollision/>
      <div className="h-screen"></div>
    </div>
  );
}
