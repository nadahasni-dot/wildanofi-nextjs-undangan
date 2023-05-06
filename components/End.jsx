import "add-to-calendar-button";

import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function End() {
  return (
    <div>
      <section
        className={`bg-cover-welcome bg-cover bg-center min-h-screen min-w-full  ${poppins.className}`}
      >
        <div className="absolute min-w-full min-h-screen backdrop-brightness-75"></div>
        <div className="absolute flex flex-col items-center justify-end min-w-full min-h-screen">
          <p className="mb-4 text-4xl font-bold">With Love</p>
          <Image
            src="/title.svg"
            alt="Pernikahan Ofi & Wildan"
            width={300}
            height={90}
            className="mb-20"
          />
        </div>
      </section>
    </div>
  );
}
