import { Grand_Hotel, Parisienne } from "next/font/google";
import Image from "next/image";

const grandHotel = Grand_Hotel({
  subsets: ["latin"],
  weight: ["400"],
});

const parisienne = Parisienne({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Brides() {
  return (
    <section
      id="brides"
      className="flex flex-col items-center py-12 bg-primary-900"
    >
      <h2 className={`text-4xl text-center mb-4 ${grandHotel.className}`}>
        Kedua Mempelai
      </h2>
      <p className="px-4 text-xs font-light text-center">
        Maha suci Allah Subhanahu Wa Ta'ala yang telah menciptakan makhluk-Nya
        berpasang-pasangan. Dengan memohon Rahmat dan Ridho Allah Subhanahu Wa
        Ta'ala, kami bermaksud menyelenggarakan pernikahan kami
      </p>

      <div className="p-1 my-8 bg-contain bg-card-ovi h-80 w-72">
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

      <Image src="/rofiqoh.svg" width={250} height={30} alt="rofiqoh" />

      <p className="px-4 mt-2 text-xs font-light text-center">
        Putri Bungsu dari Bapak H. Suharto & Ibu Hj. Shochifah
      </p>

      <span className="flex mt-2 mb-10">
        <Image src="/instagram.svg" width={16} height={16} alt="rofiqoh" />
        <p className="mx-1 text-xs font-light">rofiqohms</p>
      </span>

      <Image src="/brides-divider.svg" width={300} height={60} alt="divider" />

      <div className="p-1 my-8 bg-contain bg-card-wildan h-80 w-72">
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

      <Image src="/wildan.svg" width={250} height={30} alt="rofiqoh" />

      <p className="px-4 mt-2 text-xs font-light text-center">
        Putra kedua dari <br />
        Bapak Zainuri & Ibu Euis Yudarsih R.
      </p>

      <span className="flex mt-2">
        <Image src="/instagram.svg" width={16} height={16} alt="rofiqoh" />
        <p className="mx-1 text-xs font-light">wildannazar25</p>
      </span>
    </section>
  );
}
