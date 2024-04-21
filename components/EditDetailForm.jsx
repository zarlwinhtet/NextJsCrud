"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditDetailForm({ id, name, description }) {
  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/details/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newName, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update detail");
      }

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Name"
      />

      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Description"
      />

      <button
        type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
      >
        Update Detail
      </button>
    </form>
  );
}
