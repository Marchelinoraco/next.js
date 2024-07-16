"use client";
import React, { useState, useEffect } from "react";
import ButtonBackMasuk from "@/components/ButtonBackMasuk";
import ModalTambahData from "@/components/ModalTambahData";
import ModalSuccess from "@/components/ModalSuccess";
import ModalConfirmDelete from "@/components/ModalConfirmDelete";
import {
  collection,
  doc,
  setDoc,
  onSnapshot,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
import { db } from "@/app/firebase";
import BackArrow from "@/assets/img/back-arrow.png";
import Link from "next/link";

const PerMinggu = () => {
  return (
    <div className="py-10 px-20">
      <div className="p-3 justify-between flex">
        <ButtonBackMasuk />
      </div>
      <div className="flex flex-col gap-3 poppins-semibold py-10 text-md">
        <Link href="/pemasukkan/perminggu/ibadahminggu">
          Persembahan Ibadah Minggu
        </Link>
        <Link href="/pemasukkan/perminggu/kolom">Kolom</Link>
        <Link href="/pemasukkan/perminggu/bipra">BIPRA</Link>
        <Link href="/pemasukkan/perminggu/komisi">Komisi</Link>
        <Link href="/pemasukkan/perminggu/sampulsyukur">
          Sampul Syukur Keluarga Lainnya
        </Link>
        <Link href="/pemasukkan/perminggu/perkunjunganhut">
          Persembahan Ibadah Perkunjungan Hut Pribadi Dan Keluarga
        </Link>
        <Link href="/pemasukkan/perminggu/lainnya">Pendapatan Lainnya</Link>
      </div>
    </div>
  );
};

export default PerMinggu;
