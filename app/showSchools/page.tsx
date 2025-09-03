"use client";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await fetch("/api/schools/get");
        const data = await res.json();
        setSchools(data);
      } catch (err) {
        console.error("Error fetching schools:", err);
      }
    };
    fetchSchools();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top Bar */}
      <header className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
          {/* Left Email */}
          <div className="text-sm flex items-center gap-2">
            <span className="text-white">✉</span>
            <a
              href="mailto:mail@uniformapp.in"
              className="hover:underline font-bold"
            >
              mail@uniformapp.in
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-4 text-sm font-bold items-center">
            <a href="#" className="hover:underline">
              Common Admissions
            </a>
            <a href="#" className="hover:underline">
              School Portal
            </a>
            <a href="#" className="hover:underline">
              Find Schools
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <a href="#" className="hover:underline">
              Log In
            </a>
            <a
              href="#"
              className="bg-cyan-900 px-3 py-1 rounded hover:bg-cyan-950 transition"
            >
              Sign Up
            </a>
            {/* Social Icons */}
            <div className="flex gap-3 ml-4">
              <a href="#" className="hover:text-cyan-300">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-cyan-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-cyan-300">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-cyan-300">
                <FaYoutube />
              </a>
            </div>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-gradient-to-r from-teal-700 to-cyan-800 text-white px-4 py-4 flex flex-col gap-3 absolute top-full left-0 w-full shadow-lg z-50">
            <a href="#" className="hover:underline">
              Common Admissions
            </a>
            <a href="#" className="hover:underline">
              School Portal
            </a>
            <a href="#" className="hover:underline">
              Find Schools
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
            <a href="#" className="hover:underline">
              Log In
            </a>
            <a
              href="#"
              className="bg-cyan-900 px-3 py-2 rounded hover:bg-cyan-950 transition w-fit"
            >
              Sign Up
            </a>
            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-cyan-300">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-cyan-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-cyan-300">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-cyan-300">
                <FaYoutube />
              </a>
            </div>
          </div>
        )}
      </header>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Best Schools in Your City
        </h1>
        <p className="text-lg mt-4 opacity-90">
          Choose from a wide variety of schools based on your priorities
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <input
            type="text"
            placeholder="Search by name or city..."
            className="px-4 py-2 rounded-l-md border-2 border-gray-300 text-black w-72 focus:outline-none"
          />
          <button className="bg-cyan-900 px-5 py-2 rounded-r-md hover:bg-cyan-950 transition text-white">
            Search
          </button>
        </div>
      </section>

      {/* Schools Grid */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.isArray(schools) && schools.length > 0 ? (
            schools.map((school: any) => (
              <div
                key={school.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={school.image || "/placeholder.png"}
                  alt={school.name}
                  className="h-44 w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="font-semibold text-lg text-gray-800">
                    {school.name}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">
                    {school.city}, {school.state}
                  </p>
                  <p className="text-gray-500 text-xs">{school.address}</p>
                  <div className="mt-3">
                    <a
                      href={`mailto:${school.email_id}`}
                      className="text-teal-600 text-sm hover:underline"
                    >
                      {school.email_id}
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No schools found.</p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-teal-700 to-cyan-800 text-gray-300 py-10 mt-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg text-white">
              Subscribe to our Newsletter
            </h3>
            <p className="text-sm opacity-80 mt-2 hover:text-white cursor-pointer">
              Get updated about admissions, deadlines and articles.
            </p>
            <div className="mt-3 flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter email here..."
                className="px-4 py-2 text-black rounded-md sm:rounded-l-md sm:rounded-r-none w-full focus:outline-none mb-3 sm:mb-0"
              />
              <button className="bg-teal-600 px-4 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md text-white hover:bg-teal-700 transition">
                →
              </button>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="font-bold text-lg text-white">Important Links</h3>
            <ul className="mt-3 space-y-2 text-sm opacity-90">
              <li className="hover:text-white cursor-pointer">
                Schools in India
              </li>
              <li className="hover:text-white cursor-pointer">Other Schools</li>
              <li className="hover:text-white cursor-pointer">
                Colleges in India
              </li>
              <li className="hover:text-white cursor-pointer">
                Advertise With Us
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold text-lg text-white">Support</h3>
            <ul className="mt-3 space-y-2 text-sm opacity-90">
              <li className="hover:text-white cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-sm opacity-70 px-4">
          © 2025 School Directory. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
