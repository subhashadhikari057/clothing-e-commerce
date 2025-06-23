"use client";

import { Users, Handshake, Leaf } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    { icon: Users,     title: "Women Empowerment" },
    { icon: Handshake, title: "Authentic from Nepal" },
    { icon: Leaf,      title: "Sustainable" },
  ];

  return (
    <div className="w-full py-6 px-4 bg-white font-cormorant text-gray-700 text-[14px] leading-relaxed font-sm">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-y-6 gap-x-4 sm:gap-x-6">
          {features.map(({ icon: Icon, title }) => (
            <div key={title} className="flex flex-col items-center text-center space-y-1">
              <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
                <Icon size={20} strokeWidth={1.5} className="text-gray-700" />
              </div>
              <h3 className="text-[12.5px] sm:text-[13.5px] font-medium leading-tight text-gray-800">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
