import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { useRouter } from "next/router";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],  
});

export default function Home() {
  const router = useRouter();
  const name = router.query.to;

  return (
    <>
      <Head>
        <title>Pernikahan Ofi & Wildan</title>
      </Head>
      <main>
        <section
          className={`bg-cover-welcome bg-cover bg-center flex min-h-screen flex-col justify-end items-center ${poppins.className}`}
        >
          <Image
            src="/title.svg"
            alt="Pernikahan Ofi & Wildan"
            width={300}
            height={90}            
          />
          <p className="mt-4 text-xs font-medium">
            Kepada Yth. Bapak/Ibu/Saudara/i
          </p>
          <p className="mt-4 text-2xl font-bold animate-pulse">{name}</p>
          <Link
            href="/invitation"
            className="px-6 py-2 mt-4 mb-24 text-xs font-semibold text-black transition bg-white rounded-lg hover:bg-gray-300"
          >
            Buka Undangan
          </Link>
        </section>
      </main>
    </>
  );
}
