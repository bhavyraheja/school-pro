import React, { useState, useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import countries from "@/countries";

type CountrySelectProps = {
  label: string;
  name: string;
  register: any;
  errors: any;
  setValue: (name: string, value: string) => void;
};

export default function CountryInput({ label, name, register, errors, setValue }: CountrySelectProps) {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Set default value for React Hook Form
  useEffect(() => {
    setValue(name, selectedCountry.value);
  }, [selectedCountry, name, setValue]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCountrySelect = (country: (typeof countries)[0]) => {
    setSelectedCountry(country);
    setShowDropdown(false);
    setValue(name, country.value); // Update form value
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-900 mb-1">{label}</label>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-left flex items-center justify-between shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span>{selectedCountry.label}</span>
          <ArrowDown className="w-4 h-4 text-gray-600" />
        </button>
        {showDropdown && (
          <div className="absolute left-0 top-full mt-1 w-full bg-white border rounded-md shadow-lg z-10 max-h-60 overflow-y-auto">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 text-sm w-full border-b focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <ul className="max-h-48 overflow-y-auto">
              {countries
                .filter((c) => c.label.toLowerCase().includes(search.toLowerCase()))
                .map((country) => (
                  <li
                    key={country.value}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm font-normal text-gray-700"
                    onClick={() => handleCountrySelect(country)}
                  >
                    {country.label}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
      {/* Hidden input for React Hook Form */}
      <input type="hidden" {...register(name)} value={selectedCountry.value} />
      {errors[name] && <span className="text-xs text-red-600">{label} is required</span>}
    </div>
  );
}
