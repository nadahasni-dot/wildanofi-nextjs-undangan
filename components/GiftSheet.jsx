import Image from "next/image";
import { toast } from "react-toastify";

export default function GiftSheet() {
  const copyBankNumber = () => {
    navigator.clipboard.writeText("039083672");
    toast("No. Rekening berhasil disalin di papan klip", { type: "success" });
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(
      "Jl. Anjasmoro gang 1A RT 05  RW 01 Desa Turirejo Kecamatan Lawang Kabupaten Malang"
    );
    toast("Alamat berhasil disalin di papan klip", { type: "success" });
  };

  return (
    <div className="bg-white/80 flex flex-col items-center rounded-tl-lg rounded-tr-lg mx-2 py-6">
      <Image
        src="/hadiah-nikah.svg"
        alt="Hadiah Nikah"
        width={230}
        height={50}
      />
      <p className="text-xs text-center text-primary-900 px-20 mt-1 mb-6">
        Silahkan kirim hadiah Melalui nomor rekening dompet digital berikut:
      </p>
      <img
        onClick={copyBankNumber}
        src="/img/bank.png"
        alt="bank account"
        className="mb-4"
      />
      <img
        onClick={copyAddress}
        src="/img/address.png"
        alt="bank account"
        className="mb-8"
      />
      <p className="text-xl text-center font-semibold text-primary-900 px-20">
        Terimakasih
      </p>
    </div>
  );
}
