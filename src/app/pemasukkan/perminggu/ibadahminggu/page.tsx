"use client";
import React, { useState } from "react";
import Link from "next/link";
import IbadahMingguModal from "@/components/IbadahMingguModal";

const IbadahMinggu = () => {
  const [date, setDate] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedIbadah, setSelectedIbadah] = useState("");
  const [amount, setAmount] = useState(0);
  const [ibadahSections, setIbadahSections] = useState([]);

  const openModal = (ibadah) => {
    setSelectedIbadah(ibadah);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedIbadah("");
  };

  const handleSubmit = () => {
    // Handle submit logic here
    console.log(`Ibadah: ${selectedIbadah}, Amount: ${amount}`);
    closeModal();
  };

  const addIbadahSection = () => {
    const newId = ibadahSections.length
      ? ibadahSections[ibadahSections.length - 1].id + 1
      : 1;
    const newSection = {
      id: newId,
      offerings: [
        { name: "Persembahan Ibadah Minggu Subuh", amount: 0 },
        { name: "Persembahan Ibadah Minggu Siang", amount: 0 },
        { name: "Persembahan Ibadah Minggu Malam", amount: 0 },
      ],
    };
    setIbadahSections([...ibadahSections, newSection]);
  };

  const handleAmountChange = (sectionId, offeringName, newAmount) => {
    const updatedSections = ibadahSections.map((section) => {
      if (section.id === sectionId) {
        const updatedOfferings = section.offerings.map((offering) =>
          offering.name === offeringName
            ? { ...offering, amount: newAmount }
            : offering
        );
        return { ...section, offerings: updatedOfferings };
      }
      return section;
    });
    setIbadahSections(updatedSections);
  };

  return (
    <div className="p-10">
      <div>
        <button className="btn rounded-lg bg-ungu1">
          <Link href="/pemasukkan/perminggu">Kembali</Link>
        </button>
      </div>
      <div className="flex justify-center poppins-semibold text-lg">
        <h1>Persembahan Ibadah Minggu</h1>
      </div>
      <div className="flex justify-end poppins-semibold text-lg">
        <button className="btn bg-ungu1 rounded-lg" onClick={addIbadahSection}>
          Tambah Minggu
        </button>
      </div>

      {ibadahSections.map((section) => (
        <div key={section.id} className="ibadah my-5 border pt-5">
          <div className="my-2">
            <label
              htmlFor={`date-${section.id}`}
              className="poppins-semibold text-lg mr-2"
            >
              Tanggal:
            </label>
            <input
              id={`date-${section.id}`}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="border rounded-lg p-2"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Ibadah</th>
                  <th className="border border-gray-300 px-4 py-2">Jumlah</th>
                  <th className="border border-gray-300 px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {section.offerings.map((offering) => (
                  <tr key={offering.name} className="bg-white even:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      {offering.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <input
                        type="number"
                        value={offering.amount}
                        onChange={(e) =>
                          handleAmountChange(
                            section.id,
                            offering.name,
                            e.target.value
                          )
                        }
                        className="border rounded-lg p-2 w-full"
                      />
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      <button
                        className="btn bg-blue-500 rounded-lg"
                        onClick={() => openModal(offering.name)}
                      >
                        Input Jumlah
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      <IbadahMingguModal
        visible={modalVisible}
        onClose={closeModal}
        onSubmit={handleSubmit}
        selectedIbadah={selectedIbadah}
        amount={amount}
        setAmount={setAmount}
      />
    </div>
  );
};

export default IbadahMinggu;
