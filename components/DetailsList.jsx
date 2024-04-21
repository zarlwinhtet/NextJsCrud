import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getDetails = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/details", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to Fetch");
    }
    return res.json();
  } catch (error) {
    console.log("Error Loading", error);
  }
};

export default async function DetailsList() {
  const { details } = await getDetails();
  return (
    <>
      {details.map((d) => (
        <div
          key={d._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{d.name}</h2>
            <div>{d.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={d._id} />
            <Link href={`/editDetail/${d._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
