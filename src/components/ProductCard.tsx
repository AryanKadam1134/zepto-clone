import CustomButton from "./CustomButton";
import type { Product } from "../types/api.types";

const ProductCard = ({ product }: { product: Product }) => {
  const { image, price, title } = product || {};

  return (
    <div className="flex flex-col gap-2">
      <div className="relative h-[138px] w-full flex items-center justify-center border border-[#e5e7eb] rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="relative z-0 h-full object-cover hover:scale-105 transition-all duration-200"
        />

        <CustomButton
          variant="red"
          name="Add"
          className="absolute bottom-1 right-1 cursor-pointer"
        />
      </div>

      <CustomButton variant="green" name={`₹${price}`} />

      <p className="font-medium text-sm">{title}</p>

      <p className="font-light text-xs text-[#586274]">1 Pack</p>
    </div>
  );
};

export default ProductCard;
