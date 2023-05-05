import { Grand_Hotel } from "next/font/google";
import GuestBook from "./GuestBook";

const grandHotel = Grand_Hotel({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Gift() {
  return (
    <section
      id="others"
      className="flex flex-col items-stretch py-12 bg-primary-300 px-6"
    >
      <h2 className={`text-4xl text-center mb-2 ${grandHotel.className}`}>
        Hadiah
      </h2>
      <p className="text-xs text-center mb-6">
        Kehadiran Anda merupakan hadiah terindah. Namun, apabila Anda hendak
        memberikan tanda kasih kepada kami, dapat melalui fitur di bawah ini.
      </p>
      {/* TODO Open Sheet Hadiah */}
      <button className="block w-40 py-2 mx-auto transition text-xs rounded-xl bg-primary-900 hover:bg-opacity-70 mb-3">
        Kirim Hadiah
      </button>
      <button className="block w-40 py-2 mx-auto transition text-xs rounded-xl bg-white hover:bg-opacity-70 text-primary-300 mb-6">
        Konfirmasi Hadiah
      </button>
      {/* GUEST BOOK */}
      <GuestBook />
    </section>
  );
}
