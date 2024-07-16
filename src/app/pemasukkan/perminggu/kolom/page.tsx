import React from "react";
import Link from "next/link";

export default function KolomPerminggu() {
  return (
    <div className="py-10 px-10">
      <div className="mb-4 flex justify-between">
        <button className="btn rounded-lg bg-ungu1">
          <Link href="/pemasukkan/perminggu">Kembali</Link>
        </button>
        <button className="btn rounded-lg bg-ungu1">
          Tambah Pemasukkan Kolom
        </button>
      </div>

      <div>
        <div>
          <h1 className="poppins-semibold text-md">
            Persembahan Minggu ke 1 bulan januari
          </h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">Kolom</th>
                <th className="border border-gray-300 px-4 py-2">Jumlah</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 16 }, (_, index) => (
                <tr key={index} className="bg-white even:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    Kolom {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
