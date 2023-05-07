import Image from "next/image";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Banner({ to, onOpen }) {
  const [isShow, setIsShow] = useState(true);
  const [isHide, setIsHide] = useState(false);

  return (
    <div
      className={`fixed z-50 top-0 right-0 bottom-0 left-0 transition ${
        isHide ? "hidden" : "block"
      } ${isShow ? "opacity-100" : "opacity-0"}`}
    >
      <div className="absolute z-10 min-w-full min-h-screen bg-black/20"></div>
      <div className="absolute z-0 min-w-full min-h-screen bg-center bg-cover bg-cover-welcome"></div>
      <section
        className={`absolute z-20 flex min-h-screen min-w-full flex-col justify-end items-center ${poppins.className}`}
      >
        <Image
          src="/title.svg"
          alt="Pernikahan Ofi & Wildan"
          width={300}
          height={90}
        />
        <div className="items-center px-6 py-4 mx-6 mt-4 mb-16 border-2 border-white shadow-xl bg-black/30 shadow-black/60 rounded-xl">
          <p className="text-xs font-medium text-center text-white">
            Kepada Yth. Bapak/Ibu/Saudara/i
          </p>
          <p className="mt-4 mb-4 text-2xl font-bold text-center text-white animate-pulse">
            {to}
          </p>
          <a
            href="#cover"
            onClick={() => {
              setIsShow(false);

              setTimeout(function () {
                setIsHide(true);
              }, 1000);

              onOpen(true);
            }}
            className="block w-40 px-6 py-2 mx-auto text-xs font-semibold text-center text-black transition bg-white rounded-lg hover:bg-gray-300"
          >
            Buka Undangan
          </a>
        </div>
      </section>
    </div>
  );
}
