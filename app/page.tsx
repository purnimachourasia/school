import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <main className="bg-white shadow-lg rounded-xl p-8 flex flex-col gap-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">School Management</h1>
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/addSchool"
            className="px-6 py-3 bg-cyan-800 text-white rounded-lg font-semibold hover:bg-cyan-900 transition"
          >
            ➕ Add School
          </Link>
          <Link
            href="/showSchools"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            📚 Show Schools
          </Link>
        </div>
      </main>
    </div>
  );
}

            
