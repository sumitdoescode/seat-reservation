import React from "react";
import { ArrowLeft, EllipsisVertical } from "lucide-react";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4 bg-[#7c13a1] text-white">
            <ArrowLeft />
            <h1 className="uppercase font-semibold text-base">Book seat</h1>
            <EllipsisVertical />
        </div>
    );
};

export default Navbar;
