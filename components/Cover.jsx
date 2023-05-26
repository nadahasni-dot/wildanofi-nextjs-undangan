import "add-to-calendar-button";

import Image from "next/image";
import { Cormorant, Alex_Brush, Poppins } from "next/font/google";
import CountdownTimer from "./CountdownTimer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
const cormorant = Cormorant({ subsets: ["latin"] });
const alexBrush = Alex_Brush({ subsets: ["latin"], weight: ["400"] });

export default function Cover() {
  return (
    <section
      id="cover"
      className={`flex flex-col justify-between w-full min-h-screen bg-center bg-cover bg-cover-hero overflow-hidden ${poppins.className}`}
    >
      <div>
        <div data-aos="fade-down" className="flex justify-between px-10 mt-12">
          <Image src="/cover-divider.svg" width={25} height={5} alt="divider" />
          <h3 className={`text-primary-200 text-2xl ${cormorant.className}`}>
            Pernikahan
          </h3>
          <Image src="/cover-divider.svg" width={25} height={5} alt="divider" />
        </div>

        <h1
          data-aos="fade"
          className={`text-primary-200 text-5xl text-center mt-5 ${alexBrush.className}`}
        >
          Wildan & Ofi
        </h1>

        <h3 data-aos="fade" className="mt-2 text-center text-primary-200">
          03.06.2023
        </h3>
      </div>

      <div data-aos="fade" className="mb-14">
        {/* Countdown Timer */}
        <CountdownTimer targetTime={new Date("June 03, 2023 12:30:00")} />

        <a
          href="https://calendar.google.com/calendar/u/0/r/eventedit?dates=20230603T123000/20230603T143000&ctz=Asia/Jakarta&text=Pernikahan+Ofi+%26+Wildan&location=Gedung+Zainuri+Universitas+Muhammadiyah+Jember&uid=f4462101-061e-4976-9b9e-cc3f37b97a7c"
          target="_blank"
        >
          <button className="block px-6 py-2 mx-auto font-semibold transition border rounded-lg hover:bg-primary-900 hover:bg-opacity-20 border-primary-900 text-primary-900">
            Simpan Tanggal
          </button>
        </a>
      </div>
    </section>
  );
}
