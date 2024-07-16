import ButtonBack from "@/components/ButtonBackMasuk";
import TableMasuk from "@/components/TableMasuk";

export default async function PerTahun() {
  return (
    <div className="py-10 px-10 ">
      <div className="py-2 ">
        <ButtonBack />
      </div>
      <TableMasuk />
    </div>
  );
}
