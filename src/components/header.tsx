import React from "react";
import Link from "next/link";
import LogoGmim from "../assets/img/logoGmim.png";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="px-[5%] py-4 bg-11">
        <div className="navbar  ">
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/user">HOME</Link>
                </li>
                <li>
                  <details>
                    <summary>TENTANG KAMI</summary>
                    <ul className="p-2">
                      <li>
                        <Link href="/user/tentang-kami/gmim">GMIM</Link>
                      </li>
                      <li>
                        <Link href="/user/tentang-kami/musafir">
                          MUSAFIR OHIO
                        </Link>
                      </li>
                      <li>
                        <Link href="/user/tentang-kami/pengakuan-iman">
                          PENGAKUAN IMAN
                        </Link>
                      </li>
                      <li>
                        <Link href="/user/tentang-kami/struktur-gereja">
                          STRUKTUR GEREJA
                        </Link>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <Link href="/pelayanan">PELAYANAN</Link>
                </li>
                <li>
                  <Link href="/galeri">GALERI</Link>
                </li>
              </ul>
            </div>
            <Link className="flex items-center gap-2" href="/user">
              <Image src={LogoGmim} className="w-12 h-12 rounded-[32px]" />
              <h1 className="text-[12px] md:text-sm poppins-semibold">
                GMIM MUSAFIR OHIO
              </h1>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 z-[1]">
              <li>
                <Link href="/user">HOME</Link>
              </li>
              <li>
                <details>
                  <summary>TENTANG KAMI</summary>
                  <ul className="p-2">
                    <li>
                      <Link href="/user/tentang-kami/gmim">GMIM</Link>
                    </li>
                    <li>
                      <Link href="/user/tentang-kami/musafir">
                        MUSAFIR OHIO
                      </Link>
                    </li>
                    <li>
                      <Link href="/user/tentang-kami/pengakuan-iman">
                        PENGAKUAN IMAN
                      </Link>
                    </li>
                    <li>
                      <Link href="/user/tentang-kami/struktur-gereja">
                        STRUKTUR GEREJA
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/pelayanan">PELAYANAN</Link>
              </li>
              <li>
                <Link href="/galeri">GALERI</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link className="btn" href="/login">
              Login
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
