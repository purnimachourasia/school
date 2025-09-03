"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function AddSchool() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [file, setFile] = useState<File | null>(null);

  const onSubmit = async (data: any) => {
    try {
      // Create FormData inside onSubmit
      const formData = new FormData();
      Object.keys(data).forEach((key) => formData.append(key, data[key]));
      if (file) formData.append("image", file);

      const res = await fetch("/api/schools/add", {
        method: "POST",
        body: formData, // ✅ do NOT set headers manually
      });

      if (res.ok) {
        alert("School added successfully!");
      } else {
        const err = await res.json();
        alert("Failed to add school: " + err.error);
      }
    } catch (err: any) {
      console.error("Submit Error:", err);
      alert("Failed to add school: " + err.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative px-4 sm:px-6"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl w-full"
        >
          <h1 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800">
            Add School
          </h1>

          {/* Inputs */}
          <input
            {...register("name", { required: true })}
            placeholder="School Name"
            className="w-full mb-3 sm:mb-4 px-4 py-2 border rounded-lg text-sm sm:text-base"
          />
          <input
            {...register("address", { required: true })}
            placeholder="Address"
            className="w-full mb-3 sm:mb-4 px-4 py-2 border rounded-lg text-sm sm:text-base"
          />
          <input
            {...register("city", { required: true })}
            placeholder="City"
            className="w-full mb-3 sm:mb-4 px-4 py-2 border rounded-lg text-sm sm:text-base"
          />
          <input
            {...register("state", { required: true })}
            placeholder="State"
            className="w-full mb-3 sm:mb-4 px-4 py-2 border rounded-lg text-sm sm:text-base"
          />
          <input
            {...register("contact", { required: true })}
            placeholder="Contact"
            type="tel"
            className="w-full mb-3 sm:mb-4 px-4 py-2 border rounded-lg text-sm sm:text-base"
          />
          <input
            {...register("email_id", { required: true, pattern: /^\S+@\S+$/i })}
            placeholder="Email"
            className="w-full mb-3 sm:mb-6 px-4 py-2 border rounded-lg text-sm sm:text-base"
          />

          {/* File input */}
          <div className="mb-6">
            <label className="block font-medium text-gray-700 mb-2 text-sm sm:text-base">
              Upload School Image
            </label>
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <label className="cursor-pointer px-3 sm:px-4 py-2 bg-cyan-800 text-white rounded-full hover:bg-cyan-850 transition text-sm sm:text-base">
                Choose File
                <input
                  type="file"
                  hidden
                  onChange={(e) =>
                    setFile(e.target.files ? e.target.files[0] : null)
                  }
                />
              </label>
              {file && (
                <span className="text-xs sm:text-sm text-gray-700 truncate max-w-[150px] sm:max-w-[200px]">
                  {file.name}
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-800 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-cyan-850 transition shadow-md text-sm sm:text-base"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
