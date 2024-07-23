// src/app/musafir/page.tsx
import React from "react";
import Header from "@/components/header";

export default function Musafir() {
  return (
    <div className="bg-11">
      {/* Header Section */}
      <div className="flex justify-center bg-gradient-to-r from-slate-100 to-slate-500 items-center bg-auto bg-center bg-fixed py-24">
        <h1 className="text-3xl max-md:text-xl text-black text-center poppins-thin animate-fade-in">
          KONFESI GMIM
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="bg-white md:mx-[10%] mb-10 shadow-xl md:p-10">
        <div className="flex-col text-center gap-3 p-10 md:p-[10%]">
          <h2 className="text-xl font-bold ">KAMI MENGAKU BAHWA : </h2>
          <p className="mb-10 text-center">
            Tuhan Allah yang kekal itu: Esa, Berdaulat; Bapa Pencipta dan
            Pemelihara alam semesta. Tuhan Allah menjadi manusia di dalam Yesus
            Kristus, Juruselamat yang hidup, rela berkorban, menderita, bahkan
            mati di kayu salib, dikuburkan dan pada hari ke tiga bangkit
            mengalahkan dosa dan maut, naik ke sorga, dan akan datang kembali
            dalam kemuliaan untuk menghadirkan dan menggenapkan kerajaan damai
            sejahtera. Tuhan Allah hadir dan berkarya melalui Roh Kudus dalam
            sejarah dunia hingga akhir zaman.​
          </p>
          <h2 className="text-xl font-bold ">KAMI MENGAKU BAHWA : </h2>
          <p className="mb-10 text-center">
            Alkitab Perjanjian Lama dan Perjanjian Baru, adalah Firman Allah
            tertulis yang diwahyukan Tuhan Allah sendiri, sumber pemberitaan
            Injil dan pedoman hidup orang percaya.​
          </p>
          <h2 className="text-xl font-bold ">KAMI MENGAKU BAHWA : </h2>
          <p className="mb-10 text-center">
            Allah menciptakan manusia laki-laki dan perempuan, untuk membangun
            kehidupan bersama turun temurun; orang percaya terpanggil mengelola
            dan memelihara alam semesta dengan bertanggung jawab, dengan bekerja
            keras dan dengan jujur.​
          </p>
          <h2 className="text-xl font-bold ">KAMI MENGAKU BAHWA : </h2>
          <p className="mb-10 text-center">
            GMIM adalah persekutuan orang-orang percaya yang dipilih dan
            diselamatkan oleh Yesus Kristus Kepala Gereja dan Juruselamat dunia.
            GMIM melayankan Sakramen Baptisan Kudus dan Perjamuan Kudus. GMIM
            yang dihadirkan Tuhan di tanah Minahasa dan di seluruh dunia adalah
            arak-arakan orang percaya yang hidup, mati dan bangkit bersama
            Kristus, diutus untuk bersekutu, bersaksi dan melayani di tengah
            keragaman budaya, tradisi, etnis, ras, kepercayaan dan agama untuk
            menghadirkan keselamatan dan tanda-tanda Kerajaan Allah yang penuh
            damai sejahtera bagi orang-orang percaya dan bagi semua
          </p>
          <h2 className="text-xl font-bold ">KAMI MENGAKU BAHWA : </h2>
          <p className="mb-10 text-center">
            Orang-orang percaya kepada Yesus Kristus yang melakukan kehendak-Nya
            memperoleh kehidupan kekal hingga Dia datang kembali.Amin.
          </p>
        </div>
      </div>
    </div>
  );
}
