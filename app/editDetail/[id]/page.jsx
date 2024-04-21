import EditDetailForm from "@/components/EditDetailForm";

const getDetailById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/details/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch details");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function editDetail({ params }) {
  const { id } = params;
  const { detail } = await getDetailById(id);
  const { name, description } = detail;

  return <EditDetailForm id={id} name={name} description={description} />;
}
