import Link from "next/link";
import PerMinggu from "./perminggu/page";
import PerBulan from "./perbulan/page";
import PerTahun from "./pertahun/page";

export default async function Pemasukkan() {
  return (
    <div className="p-10">
      <div className="flex gap-5">
        <div>
          <Link href="/pemasukkan/perminggu">Pemasukkan Mingguan</Link>
        </div>
        <div>
          <Link href="/pemasukkan/perbulan">Pemasukan Bulanan</Link>
        </div>
        <div>
          <Link href="/pemasukkan/pertahun">Pemasukkan Tahunan</Link>
        </div>
      </div>
    </div>
  );
}
