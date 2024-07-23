"use client";
import React, { useEffect, useState } from "react";
import { images } from "../../utils/images.js";
import { pelayanan } from "@/utils/pelayanan.js";
import { ibadahMinggu } from "@/utils/ibadahminggu.js";
import { renungan } from "@/utils/renungan.js";
import { pkb } from "@/utils/pkb.js";
import { wki } from "@/utils/wki.js";
import { kolom } from "@/utils/kolom.js";
import { pra } from "@/utils/pra.js";
import { berita } from "@/utils/berita.js";

const User = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  return (
    <div>
      {" "}
      <div className="poppins-bold">
        <div className="carousel w-full h-[200px] md:h-[550px] relative overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              id={`slide${index + 1}`}
              className={`carousel-item absolute w-full h-full transition-opacity duration-1000 ease-in-out ${
                currentSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute w-full h-full bg-opacity-50 flex-col bg-black p-4">
                <div className="flex-col md:my-20 text-white md:mx-[10%]">
                  <h1
                    className={`text-center poppins-thin md:text-3xl ${
                      currentSlide === index ? "animate-fade-in" : "opacity-0"
                    }`}
                  >
                    GEREJA MASEHI INJILI di MINAHASA JEMAAT MUSAFIR COLOMBUS
                    OHIO - USA
                  </h1>
                  <p
                    className={`text-center poppins-light-italic ${
                      currentSlide === index ? "animate-fade-in" : "opacity-0"
                    }`}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero ducimus voluptas maxime, fugiat ut amet exercitationem
                    dolore voluptatem nemo temporibus asperiores libero cum
                    neque unde, ex molestias obcaecati harum velit?
                  </p>
                </div>
              </div>
              <img
                src={image.url}
                className="w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex md:justify-between pt-1 rounded-[50px] bg-white shadow-xl mt-3 lg:mx-[10%] min-[1500px]:mx-[15%] min-[2000px]:mx-[20%]">
        <div className="ml-3 mt-10 animate-slide-in-left">
          <h1 className="poppins-semibold">Informasi</h1>
          <div>
            {pelayanan.slice(0, 3).map((item, index) => (
              <a
                href="/pelayanan"
                key={index}
                className="card my-3 mx-10 h-[150px] hover:translate-x-8 duration-500 bg-base-100 image-full shadow-xl"
              >
                <figure>
                  <img src={item.url} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title poppins-regular">{item.judul}</h2>
                  <p className="poppins-thin">{item.tanggal}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="mb-10 pb-3 mt-10 py-3 rounded-3xl animate-slide-in-right">
          <div>
            <h1 className="poppins-semibold ml-3 text-black">
              Jadwal Pelayanan
            </h1>
          </div>
          <div className="mx-10 my-3">
            <div className="collapse collapse-arrow bg-[#DBE2EF]">
              <input type="radio" name="my-accordion" defaultChecked />
              <div className="collapse-title text-xl poppins-regular">
                Ibadah Minggu
              </div>
              <div className="collapse-content">
                {ibadahMinggu.map((ibadah, index) => (
                  <div key={index}>
                    <p>{`Tanggal: ${ibadah.tanggal}`}</p>
                    <p>{`Tempat: ${ibadah.tempat}`}</p>
                    <p>{`Waktu: ${ibadah.waktu}`}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="collapse collapse-arrow bg-[#DBE2EF] my-4">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title text-xl poppins-regular">
                Renungan
              </div>
              <div className="collapse-content">
                {renungan.map((renung, index) => (
                  <div key={index}>
                    <p>{`Tanggal: ${renung.tanggal}`}</p>
                    <p>{`Waktu: ${renung.waktu}`}</p>
                    <p>{`Perikop: ${renung.perikop}`}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="collapse collapse-arrow bg-[#DBE2EF] my-4">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title text-xl poppins-regular">PKB</div>
              <div className="collapse-content">
                {pkb.map((item, index) => (
                  <div key={index}>
                    <p>{`Tanggal: ${item.tanggal}`}</p>
                    <p>{`Waktu: ${item.waktu}`}</p>
                    <p>{`Keterangan: ${item.keterangan}`}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="collapse collapse-arrow bg-[#DBE2EF] my-4">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title text-xl poppins-regular">WKI</div>
              <div className="collapse-content">
                {wki.map((item, index) => (
                  <div key={index}>
                    <p>{`Tanggal: ${item.tanggal}`}</p>
                    <p>{`Waktu: ${item.waktu}`}</p>
                    <p>{`Keterangan: ${item.keterangan}`}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="collapse collapse-arrow bg-[#DBE2EF] my-4">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title text-xl poppins-regular">
                Kolom
              </div>
              <div className="collapse-content">
                {kolom.map((item, index) => (
                  <div key={index}>
                    <p>{`Tanggal: ${item.tanggal}`}</p>
                    <p>{`Waktu: ${item.waktu}`}</p>
                    <p>{`Keterangan: ${item.keterangan}`}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="collapse collapse-arrow bg-[#DBE2EF] my-4">
              <input type="radio" name="my-accordion" />
              <div className="collapse-title text-xl poppins-regular">
                Pemuda - Remaja - ASM
              </div>
              <div className="collapse-content">
                {pra.map((item, index) => (
                  <div key={index}>
                    <p>{`Tanggal: ${item.tanggal}`}</p>
                    <p>{`Waktu: ${item.waktu}`}</p>
                    <p>{`Keterangan: ${item.keterangan}`}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mx-[10%]  min-[1500px]:mx-[15%] min-[2000px]:mx-[20%] my-10">
        <div className="bg-base-100 max-w-sm flex justify-center items-center my-10 mx-auto py-3 rounded-tl-xl rounded-br-xl">
          {" "}
          <h1 className="poppins-light-italic text-xl">Berita Gmim Musafir</h1>
        </div>
        <div className="carousel  carousel-end rounded-box">
          {berita.slice(0, 4).map((item, index) => (
            <div
              key={index}
              className="carousel-item hover:-translate-y-1 duration-500 "
            >
              <a
                href=""
                className="relative max-w-sm mx-1 bg-white rounded-lg shadow-md"
              >
                <img
                  src={item.url}
                  alt={`Berita ${item.judul}`}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 top-0  bg-black bg-opacity-50 text-white p-4 rounded-b-lg w-full">
                  <h2 className="text-xl poppins-regular-italic mb-2">
                    {item.judul}
                  </h2>
                  <div className="flex justify-end bottom-0">
                    <p className="text-sm mb-2">{item.tanggal}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default User;
