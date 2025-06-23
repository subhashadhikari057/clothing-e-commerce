"use client";

import React from "react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export default function InputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
}: InputFieldProps) {
  return (
    <div className="mb-6 w-full">
      <label
        htmlFor={name}
        className="block mb-2 text-sm text-gray-600 tracking-wide"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full border-b border-gray-300 outline-none bg-transparent py-2 px-1 text-gray-900 placeholder:text-gray-400 text-sm tracking-wide focus:border-black transition"
      />
    </div>
  );
}
