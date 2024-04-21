"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function addDetail() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !description) {
      alert("Name and description are required");
      return;
    }
    try {
      const res = await fetch("http://localhost:3000/api/details", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, description }),
      });

      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create a user");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Name"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Description"
      />

      <button
        type="submit"
        className="bg-blue-500 font-bold text-white py-3 px-6 w-fit"
      >
        Add Detail
      </button>
    </form>
  );
}
