import axios from "axios";
import moment from "moment";
import Image from "next/image";
import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

export default function GiftConfirmationSheet() {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [note, setNote] = useState("");

  const addConfirmation = (confirmationData) => {
    return axios.post(
      "https://api.sheetson.com/v2/sheets/Sheet1",
      {
        ...confirmationData,
      },
      {
        headers: {
          Authorization:
            "Bearer BwcI4qkYDFQXaEnnRdOhc1g2uCmiQsIG1NyiOZcF-Db7-dZYkO7Rb_RNl3Q",
          "X-Spreadsheet-Id": "12JPFimibUXdUbMIrwf20fNmHYoM7RGAPhYA0kBfqPxY",
          "Content-Type": "application/json",
        },
      }
    );
  };

  const {
    mutate: addConfirmationData,
    isLoading,
    isSuccess,
    error,
  } = useMutation(addConfirmation, {
    onSuccess: () => {
      toast("Terimakasih! Konfirmasi hadiah anda berhasil disimpan.", {
        type: "success",
      });
    },
    onError: () => {
      console.log(error, "error");
      toast(error.message, { type: "error" });
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isLoading) return;

    const timestamp = moment().format("MMMM Do YYYY, h:mm a");
    addConfirmationData({ name, type, note, timestamp });
  };

  return (
    <div className="bg-white/80 flex flex-col items-center rounded-tl-lg rounded-tr-lg mx-2 pt-6">
      <Image
        src="/konfirmasi-hadiah.svg"
        alt="Hadiah Nikah"
        width={230}
        height={50}
      />
      <p className="text-xs text-center text-primary-900 px-6 mt-1 mb-6">
        Kami sangat berterima kasih kepada Bapak/Ibu/Saudara/i yang berkenan
        memberikan tanda kasih kepada kami. Silakan melakukan konfirmasi pada
        kolom di bawah untuk mempermudah pendataan
      </p>
      <div className="bg-white w-full p-4 rounded-tl-xl rounded-tr-xl shadow shadow-black/20">
        {isSuccess ? (
          <div className="p-2 bg-white shadow shadow-black/20 rounded-lg">
            <p className="text-sm text-black">
              Terimakasih <span className="font-semibold">{name}</span> atas
              konfirmasinya
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="text-black block mb-1">
              Nama
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama Anda"
              className="rounded-lg border-gray-200 border w-full bg-white px-2 py-1 drop-shadow-xl text-black active:border-primary-900 mb-4"
              required
            />
            <label htmlFor="type" className="text-black block mb-1">
              Konfirmasi Kehadiran
            </label>
            <select
              type="text"
              id="type"
              name="type"
              placeholder="Pilih Hadiah"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-lg border-gray-200 border w-full bg-white px-2 py-1 drop-shadow-xl text-black active:border-primary-900 appearance-none mb-4"
              required
            >
              <option value="">Pilih Hadiah</option>
              <option value="E-Money">E-Money</option>
              <option value="Barang">Barang</option>
            </select>
            <label htmlFor="note" className="text-black block mb-1">
              Keterangan
            </label>
            <textarea
              type="text"
              id="note"
              name="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Silahkan berikan pesan kepada kami"
              className="rounded-lg border-gray-200 border w-full bg-white px-2 py-1 drop-shadow-xl text-black active:border-primary-900 mb-4"
              required
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="block w-full py-2 mx-auto transition text-sm rounded-xl bg-primary-900 hover:bg-opacity-70 mb-6"
            >
              {isLoading ? <>Menyimpan...</> : <>Konfirmasi</>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
