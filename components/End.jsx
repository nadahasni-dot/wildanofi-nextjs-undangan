import "add-to-calendar-button";

import Image from "next/image";
import { Cormorant, Alex_Brush, Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
const cormorant = Cormorant({ subsets: ["latin"] });
const alexBrush = Alex_Brush({ subsets: ["latin"], weight: ["400"] });

export default function End() {
  return (
          
      <section
        className={`flex bg-cover-end bg-cover bg-center min-h-screen min-w-full flex-col justify-end items-center ${poppins.className}`}
      >
        <p className="mb-4 text-4xl font-bold">With Love</p>
        <Image
          src="/title.svg"
          alt="Pernikahan Ofi & Wildan"
          width={300}
          height={90}
          className="mb-20"
        />        
      </section>    
  );
}
