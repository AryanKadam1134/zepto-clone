import React from "react";

import zeptoLogo from "../assets/primary-logo.svg";
import {
  ChevronDown,
  CircleUserRound,
  Zap,
  ShoppingCart,
  Search,
} from "lucide-react";

const Header = () => {
  return (
    <div className="bg-white py-5 border-b border-[#e5e7eb]">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <img src={zeptoLogo} alt="Zepto Logo" className="h-7.5" />

          {/* Location Selection */}
          <div className="flex flex-col gap-1 w-[300px]">
            <div className="flex items-center gap-1 text-[#332060]">
              <Zap size={12} fill="#332060" />
              <span className="text-[15px] font-bold">
                Delivery in Minutes*
              </span>
            </div>

            <div className="flex items-center gap-1 text-[#707685]">
              <span className="text-[13px] font-medium">Select Location</span>

              <ChevronDown size={13} />
            </div>
          </div>

          {/* Search Bar */}
          <div className="w-full relative border rounded-md border-[#e5e7eb]">
            <Search
              size={19}
              className="absolute left-3 top-1/2 -translate-y-1/2"
            />

            <input
              type="text"
              placeholder="Search for products"
              className="pl-10 w-full px-4 py-2"
            />
          </div>

          {/* Login */}
          <div className="flex flex-col gap-1 items-center text-xs">
            <CircleUserRound size={23} />
            <span className="font-light">Login</span>
          </div>

          {/* Cart */}
          <div className="flex flex-col gap-1 items-center text-xs">
            <ShoppingCart size={23} />
            <span className="font-light">Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
