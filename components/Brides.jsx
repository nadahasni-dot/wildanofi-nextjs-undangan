import { Grand_Hotel, Parisienne, Poppins } from "next/font/google";
import Image from "next/image";

const grandHotel = Grand_Hotel({
  subsets: ["latin"],
  weight: ["400"],
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function Brides() {
  return (
    <section
      id="brides"
      className="flex flex-col items-center py-12 bg-primary-900"
    >
      <h2
        data-aos="fade-down"
        className={`text-4xl text-center mb-4 ${grandHotel.className}`}
      >
        Kedua Mempelai
      </h2>
      <p
        data-aos="fade-down"
        className={`px-4 text-xs font-light text-center ${poppins.className}`}
      >
        Maha suci Allah Subhanahu Wa Ta'ala yang telah menciptakan makhluk-Nya
        berpasang-pasangan. Dengan memohon Rahmat dan Ridho Allah Subhanahu Wa
        Ta'ala, kami bermaksud menyelenggarakan pernikahan kami
      </p>

      <div
        data-aos="fade-right"
        className="p-1 my-8 bg-contain bg-card-wildan h-80 w-72"
      >
        <Image
          src="/img/wildan.png"
          width={276}
          height={276}
          alt="rofiqoh"
          className="mt-6 px-7"
        />
        <p className={`text-center mt-2 text-2xl ${parisienne.className}`}>
          Wildan
        </p>
      </div>

      <Image
        data-aos="fade"
        src="/wildan.svg"
        width={250}
        height={30}
        alt="rofiqoh"
      />

      <p
        data-aos="fade"
        className={`px-4 mt-2 text-xs font-light text-center ${poppins.className}`}
      >
        Putra kedua dari <br />
        Bapak Zainuri & Ibu Euis Yudarsih R.
      </p>

      <span data-aos="fade" className="flex mt-2 mb-8">
        <Image src="/instagram.svg" width={16} height={16} alt="rofiqoh" />
        <a
          href="https://instagram.com/wildannazar25"
          target="_blank"
          className={`mx-1 text-white text-xs font-light ${poppins.className}`}
        >
          wildannazar25
        </a>
      </span>

      <Image
        data-aos="fade"
        src="/brides-divider.svg"
        width={300}
        height={60}
        alt="divider"
      />

      <div
        data-aos="fade-left"
        className="p-1 my-8 bg-contain bg-card-ovi h-80 w-72"
      >
        <Image
          src="/img/ovi.png"
          width={276}
          height={276}
          alt="rofiqoh"
          className="mt-6 px-7"
        />
        <p className={`text-center mt-2 text-2xl ${parisienne.className}`}>
          Ofi
        </p>
      </div>

      <Image
        data-aos="fade"
        src="/rofiqoh.svg"
        width={250}
        height={30}
        alt="rofiqoh"
      />

      <p
        data-aos="fade"
        className={`px-4 mt-2 text-xs font-light text-center ${poppins.className}`}
      >
        Putri Bungsu dari <br />
        Bapak H. Suharto & Ibu Hj. Shochifah
      </p>

      <span data-aos="fade" className="flex mt-2">
        <Image src="/instagram.svg" width={16} height={16} alt="rofiqoh" />
        <a
          href="https://instagram.com/rofiqohms"
          target="_blank"
          className={`mx-1 text-xs font-light ${poppins.className}`}
        >
          rofiqohms
        </a>
      </span>
    </section>
  );
}
