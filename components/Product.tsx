"use client";

import { Image } from "@heroui/react";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";

import { desc } from "./primitives";

const datas = [1, 1, 1, 1, 1, 1, 1, 1];

const Product = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {datas.map((data, idx) => (
        <div
          key={idx}
          className="group overflow-hidden cursor-pointer relative hover:rounded-none rounded-t-large !bg-inherit"
        >
          <div className="bg-gray-100 w-full overflow-hidden">
            <Image
              alt="Product 1"
              className="aspect-[3/4] w-full object-cover object-top hover:scale-110 transition-all duration-700 rounded-none"
              src="https://readymadeui.com/images/fashion-img-1.webp"
            />
          </div>

          <Link href="http://localhost:3000/products/1">
            <div className="p-4 relative">
              <div className={desc}>
                <button
                  className="bg-transparent outline-none border-none"
                  title="Add to wishlist"
                  type="button"
                >
                  <FaRegHeart
                    className="fill-black dark:fill-white"
                    size={24}
                  />
                </button>
                <button
                  className="bg-transparent outline-none border-none"
                  title="Add to cart"
                  type="button"
                >
                  <GrCart className="fill-black dark:fill-white" size={24} />
                </button>
              </div>
              <div className="z-20 relative bg-inherit">
                <h6 className="text-sm font-semibold text-inherit truncate">
                  Lexicon Luxe - Tshirt
                </h6>
                <h6 className="text-sm text-inherit mt-2">$100.00</h6>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Product;
