import { Grand_Hotel, Poppins } from "next/font/google";
import GuestBook from "./GuestBook";
import { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

// bottom sheet css
import "react-spring-bottom-sheet/dist/style.css";
import GiftSheet from "./GiftSheet";
import GiftConfirmationSheet from "./GiftConfirmationSheet";

const grandHotel = Grand_Hotel({
  subsets: ["latin"],
  weight: ["400"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function Gift() {
  const [isSendGiftOpen, setIsSendGiftOpen] = useState(false);
  const [isGiftConfirmationOpen, setIsGiftConfirmationOpen] = useState(false);

  return (
    <section
      id="others"
      className={`flex flex-col items-stretch py-12 bg-primary-300 px-6 ${poppins.className}`}
    >
      <h2
        data-aos="fade-dwon"
        className={`text-4xl text-center mb-2 ${grandHotel.className}`}
      >
        Hadiah
      </h2>
      <p
        data-aos="fade-down"
        className={`text-xs text-center mb-6 ${poppins.className}`}
      >
        Kehadiran Anda merupakan hadiah terindah. Namun, apabila Anda hendak
        memberikan tanda kasih kepada kami, dapat melalui fitur di bawah ini.
      </p>
      {/* Sheet Gift */}
      <BottomSheet
        className="bg-primary-900"
        open={isSendGiftOpen}
        onDismiss={() => setIsSendGiftOpen(false)}
      >
        <GiftSheet />
      </BottomSheet>
      {/* Sheet Gift Confirmation */}
      <BottomSheet
        open={isGiftConfirmationOpen}
        onDismiss={() => setIsGiftConfirmationOpen(false)}
      >
        <GiftConfirmationSheet />
      </BottomSheet>
      <button
        data-aos="fade"
        onClick={() => setIsSendGiftOpen(true)}
        className="block w-40 py-2 mx-auto mb-3 text-xs transition rounded-xl bg-primary-900 hover:bg-opacity-70"
      >
        Kirim Hadiah
      </button>
      <button
        data-aos="fade"
        onClick={() => setIsGiftConfirmationOpen(true)}
        className="block w-40 py-2 mx-auto mb-6 text-xs transition bg-white rounded-xl hover:bg-opacity-70 text-primary-300"
      >
        Konfirmasi Hadiah
      </button>
      {/* GUEST BOOK */}
      <GuestBook />
    </section>
  );
}
