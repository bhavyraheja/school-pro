import { cn } from "@/lib/utils";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowDown, CircleHelp } from "lucide-react";
import countries from "@/countries";

type PhoneInputProps = {
  register: any;
  errors: any;
  label: string;
  name: string;
  phoneCode: string;
  toolTipText?: string;
  setValue?: (name: string, value: any) => void;
};

export default function PhoneInput({
  register,
  errors,
  label,
  name,
  phoneCode,
  toolTipText,
  setValue,
}: PhoneInputProps) {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCountrySelect = (country: any) => {
    setSelectedCountry(country);
    setShowDropdown(false);
    if (setValue) {
      setValue(phoneCode, country.phoneCode); // Update phone code value in the form
    }
  };

  return (
    <div>
      <div className="flex space-x-2 items-center">
        <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        {toolTipText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button>
                  <CircleHelp className="w-4 h-4 text-slate-500" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{toolTipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="mt-2">
        <div className="relative flex rounded-md shadow-sm border border-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
          {/* Country Code Dropdown */}
          <div className="relative">
            <button
              type="button"
              className="bg-gray-100 border-r px-3 py-2 rounded-l-md text-sm flex items-center space-x-2 font-normal hover:bg-gray-200 transition text-gray-700"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <span className="flex items-center space-x-1">
                <span>{selectedCountry.value}</span>
                <span>{selectedCountry.phoneCode}</span>
              </span>
              <ArrowDown className="w-4 h-4 text-gray-600" />
            </button>
            {showDropdown && (
              <div className="absolute left-0 top-full bg-white border rounded-md shadow-lg w-56 z-10 max-h-60 overflow-y-auto">
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
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm font-normal flex items-center space-x-2 text-gray-700"
                        onClick={() => handleCountrySelect(country)}
                      >
                        <span>{country.value}</span>
                        <span className="text-gray-600">{country.phoneCode}</span>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>

          {/* Phone Number Input */}
          <input
            id={name}
            type="text"
            {...register(name, { required: true })}
            className={cn(
              "block w-full px-3 py-2 rounded-r-md border-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm",
              errors[name] && "border-red-500"
            )}
            placeholder="Phone number"
          />
        </div>
        {errors[name] && <span className="text-xs text-red-600">{label} is required</span>}
      </div>
    </div>
  );
}
