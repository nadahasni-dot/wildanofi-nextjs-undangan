import axios from "axios";
import moment from "moment/moment";
import { useState } from "react";
import { toast } from "react-toastify";

export default function GuestBook() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const timestamp = moment().format("MMMM Do YYYY, h:mm:ss a");

      console.log(timestamp);

      await axios.post("https://sheetdb.io/api/v1/q0635nmb1flmn", {
        data: [{ name, attendance, timestamp }],
      });

      setIsSubmitted(true);

      toast("Terimakasih! Berhasil menyimpan buku tamu", { type: "success" });
    } catch (error) {
      console.log(error, "error");
      toast(error.message, { type: "error" });
    }
  };

  return (
    <div className="bg-white rounded-xl drop-shadow-lg px-6">
      <h3 className="text-black font-semibold text-3xl mt-4 mb-1 text-center">
        Buku Tamu
      </h3>
      <p className="text-black text-xs text-center mb-4">
        Silahkan isi form kehadiran dibawah ini.
      </p>
      {isSubmitted ? (
        <div className="p-2 bg-white shadow shadow-black/20 rounded-lg mb-6">
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
            className="rounded-lg border-gray-400 border w-full bg-white px-2 py-1 drop-shadow-xl text-black active:border-primary-900 mb-4"
            required
          />
          <label htmlFor="name" className="text-black block mb-1">
            Konfirmasi Kehadiran
          </label>
          <select
            type="text"
            id="name"
            name="attendance"
            placeholder="Nama Anda"
            onChange={(e) => setAttendance(e.target.value)}
            className="rounded-lg border-gray-400 border w-full bg-white px-2 py-1 drop-shadow-xl text-black active:border-primary-900"
            required
          >
            <option selected={attendance === ""} value="">
              Pilih Kehadiran
            </option>
            <option selected={attendance === "Hadir"} value="Hadir">
              Hadir
            </option>
            <option selected={attendance === "Tidak Hadir"} value="Tidak Hadir">
              Tidak Hadir
            </option>
          </select>
          <button
            type="submit"
            className="block w-full py-2 mx-auto transition text-sm rounded-xl bg-primary-900 hover:bg-opacity-70 my-6"
          >
            Konfirmasi Hadiah
          </button>
        </form>
      )}
    </div>
  );
}
