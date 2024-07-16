"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "@/app/firebase";
import ButtonBack from "@/components/ButtonBackMasuk";
import InputModal from "@/components/InputBulanModal";

const formatNumber = (num) => new Intl.NumberFormat("id-ID").format(num);

export default function PerBulan() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "Bulan"));
      const dataList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(dataList);
    };

    fetchData();
  }, []);

  const handleSave = async (newData) => {
    try {
      const docRef = await addDoc(collection(db, "Bulan"), newData);
      setData([...data, { id: docRef.id, ...newData }]);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="py-10 px-10">
      <div className="py-2">
        <ButtonBack />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Add Data
        </button>
      </div>
      <div className="border">
        <div className="flex poppins-semibold justify-center p-5 text-xl">
          <h1>Persembahan Bulan Januari 2024</h1>
        </div>
        <div className="py-5">
          <table className="table">
            <thead className="border justify-center">
              <tr className="border">
                <th className="border">Nama Kolom</th>
                <th className="border">Minggu 1</th>
                <th className="border">Minggu 2</th>
                <th className="border">Minggu 3</th>
                <th className="border">Minggu 4</th>
                <th className="border">Total Persembahan</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="border items-center">
                  <td className="border">{item.namaKolom}</td>
                  <td className="border">{formatNumber(item.minggu1)}</td>
                  <td className="border">{formatNumber(item.minggu2)}</td>
                  <td className="border">{formatNumber(item.minggu3)}</td>
                  <td className="border">{formatNumber(item.minggu4)}</td>
                  <td className="border">
                    {formatNumber(item.totalPersembahan)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <InputModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
}
