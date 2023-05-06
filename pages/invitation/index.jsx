import Brides from "@/components/Brides";
import Cover from "@/components/Cover";
import Date from "@/components/Date";
import Head from "next/head";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";
import Gallery from "@/components/Gallery";
import Gift from "@/components/Gift";
import { ToastContainer } from "react-toastify";

// Toastify CSS
import "react-toastify/dist/ReactToastify.css";
import Document from "next/document";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function Invitation() {
  const router = useRouter();
  const { to, sesi } = router.query;

  return (
    <main
      className={`bg-white flex min-h-screen scroll-smooth flex-col ${poppins.className}`}
    >
      <Head>
        <title>Pernikahan Ofi & Wildan</title>
        <link rel="stylesheet" href="/css/style.css" />
      </Head>      
      {/* COVER */}
      <Cover />

      {/* BRIDES */}
      <Brides />

      {/* DATE */}
      <Date sesi={sesi} />

      {/* GALLERT */}
      <Gallery />

      {/* HADIAH & BUKU TAMU */}
      <Gift />

      {/* UCAPAN DOA */}

      {/* END */}

      <ToastContainer />
    </main>
  );
}
