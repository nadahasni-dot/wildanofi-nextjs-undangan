import Brides from "@/components/Brides";
import Cover from "@/components/Cover";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function Invitation() {
  return (
    <main
      className={`bg-white flex min-h-screen flex-col ${poppins.className}`}
    >
      <Head>
        <title>Pernikahan Ofi & Wildan</title>
      </Head>
      {/* COVER */}
      <Cover />

      {/* BRIDES */}
      <Brides />

      {/* DATE */}

      {/* GALLERT */}

      {/* HADIAH & BUKU TAMU */}

      {/* UCAPAN DOA */}

      {/* END */}
    </main>
  );
}
