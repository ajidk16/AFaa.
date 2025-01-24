"use client";

import { Image } from "@heroui/react";

import { CartIcon, LoveIcon } from "./icons";

const datas = [1, 1, 1, 1, 1, 1, 1, 1];

const Product = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {datas.map((data, idx) => (
        <div
          key={idx}
          className="group overflow-hidden cursor-pointer relative hover:rounded-none rounded-large !bg-inherit"
        >
          <div className="bg-gray-100 w-full overflow-hidden">
            <Image
              alt="Product 1"
              className="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700"
              src="https://readymadeui.com/images/fashion-img-1.webp"
            />
          </div>

          <div className="p-4 relative">
            <div
              className="flex flex-wrap justify-between gap-2 w-full absolute px-4 pt-3 z-10
            transition-all duration-500
            left-0 right-0
            group-hover:bottom-20
            lg:bottom-5 lg:opacity-0 lg:bg-white lg:group-hover:opacity-100
            max-lg:bottom-20 max-lg:py-3 max-lg:bg-white/60"
            >
              <button
                className="bg-transparent outline-none border-none"
                title="Add to wishlist"
                type="button"
              >
                <LoveIcon className="fill-gray-800 w-5 h-5 inline-block" />
              </button>
              <button
                className="bg-transparent outline-none border-none"
                title="Add to cart"
                type="button"
              >
                <CartIcon className="fill-gray-800 w-5 h-5 inline-block" />
              </button>
            </div>
            <div className="z-20 relative bg-inherit">
              <h6 className="text-sm font-semibold text-inherit truncate">
                Lexicon Luxe - Tshirt
              </h6>
              <h6 className="text-sm text-inherit mt-2">$100.00</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
