import { Grand_Hotel } from "next/font/google";
import Image from "next/image";

const grandHotel = Grand_Hotel({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Date({ sesi }) {
  return (
    <section
      id="dates"
      className="flex flex-col items-stretch py-12 bg-primary-300"
    >
      <h2
        data-aos="fade-down"
        className={`text-4xl text-center mb-6 ${grandHotel.className}`}
      >
        Tanggal Penting
      </h2>

      <div
        data-aos="fade"
        className="bg-cover-dates h-52 bg-cover bg-center mx-5 rounded-xl mb-6"
      ></div>

      <div
        data-aos="fade-down"
        className="bg-white drop-shadow rounded-xl mx-5"
      >
        {/* 1 Date Info */}
        <div data-aos="fade-left" className="flex flex-col items-stretch">
          <div className="flex pl-4 pr-6 pt-8 justify-between items-center mb-4">
            <div className="flex flex-col items-stretch">
              <h3 className="text-xl text-primary-900 font-medium mb-1">
                Minggu
              </h3>
              <div className="flex mb-1 items-center">
                <p className="text-3xl text-primary-900 font-semibold mr-2">
                  14
                </p>
                <div className="flex flex-col">
                  <p className="text-primary-900 text-sm">Mei 2023</p>
                  <p className="text-primary-900 text-xs font-semibold">
                    Pukul 07.00 s.d Selesai
                  </p>
                </div>
              </div>
              <Image
                src="/dates-divider-sm.svg"
                alt="akad nikah"
                width={180}
                height={4}
              />
              <p className="text-primary-900 text-xs font-medium my-1">
                Kediaman Mempelai Wanita
              </p>
              <p className="text-primary-900 text-xs">
                Jl. Anjasmoro Gg. 1A, RT/RW 05/01 <br />
                Turirejo Kec. Lawang
              </p>
            </div>
            <Image
              src="/akad-nikah.svg"
              alt="akad nikah"
              width={20}
              height={50}
            />
          </div>

          <a
            href="https://maps.app.goo.gl/jLtewZGjkbiQA8JU7"
            target="_blank"
            className="block px-8 py-2 mx-auto transition text-xs border rounded-xl bg-primary-900 hover:bg-opacity-70 "
          >
            Buka Maps
          </a>
        </div>

        <Image
          data-aos="fade-down"
          src="/dates-divider.svg"
          alt="divider"
          width={600}
          height={50}
          className="px-4 my-8"
        />

        {/* 1 Date Info */}
        <div data-aos="fade-right" className="flex flex-col items-stretch mb-6">
          <div className="flex pl-6 pr-4 justify-between items-center mb-4">
            <Image src="/resepsi.svg" alt="akad nikah" width={30} height={50} />
            <div className="flex flex-col items-end">
              <h3 className="text-xl text-end text-primary-900 font-medium mb-1">
                Minggu
              </h3>
              <div className="flex items-center mb-1 justify-end">
                <div className="flex flex-col">
                  <p className="text-primary-900 text-sm text-end">Mei 2023</p>
                  {sesi === "1" ? (
                    <p className="text-primary-900 text-xs font-semibold text-end">
                      Sesi 1: 13.00 - 15.00 WIB
                    </p>
                  ) : (
                    <p className="text-primary-900 text-xs font-semibold text-end">
                      Sesi 2: 15.30 - 19.00 WIB
                    </p>
                  )}
                </div>
                <p className="text-3xl text-primary-900 font-semibold ml-2">
                  14
                </p>
              </div>
              <Image
                src="/dates-divider-sm.svg"
                alt="akad nikah"
                width={180}
                height={4}
              />
              <p className="text-primary-900 text-xs font-medium my-1 text-end">
                Aula Masjid Diponegoro
              </p>
              <p className="text-primary-900 text-xs text-end">
                Dr. Sutomo, Lawang, Turi, Lawang, <br />
                Kec. Lawang, Kabupaten Malang
              </p>
            </div>
          </div>

          <a
            href="https://goo.gl/maps/tgABq4Lt2EwYSQK4A"
            target="_blank"
            className="block px-8 py-2 mx-auto transition text-xs border rounded-xl bg-primary-900 hover:bg-opacity-70 "
          >
            Buka Maps
          </a>
        </div>
      </div>
    </section>
  );
}
