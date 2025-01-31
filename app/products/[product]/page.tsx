/* eslint-disable jsx-a11y/aria-role */
"use client";

import { SiShopee, SiTiktok } from "react-icons/si";
import {
  Image,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

import { IcLazada, IcTokped } from "@/components/icons";

const ProductId = () => (
  <div className="font-[sans-serif] mt-16">
    <div className="w-full">
      <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-8 max-lg:gap-12 max-sm:gap-8">
        <div className="w-full lg:sticky top-0 lg:col-span-3">
          <div className="grid grid-cols-2 gap-0.5">
            <div>
              <Image
                alt="Product"
                className="w-full aspect-[182/243] object-top object-cover"
                src="https://readymadeui.com/images/fashion-img-1.webp"
              />
            </div>
            <div>
              <Image
                alt="Product2"
                className="w-full aspect-[182/243] object-top object-cover"
                src="https://readymadeui.com/images/fashion-img-2.webp"
              />
            </div>
            <div>
              <Image
                alt="Product3"
                className="w-full aspect-[182/243] object-top object-cover"
                src="https://readymadeui.com/images/fashion-img-3.webp"
              />
            </div>
            <div>
              <Image
                alt="Product4"
                className="w-full aspect-[182/243] object-top object-cover"
                src="https://readymadeui.com/images/fashion-img-4.webp"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:col-span-2">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              Women Embroidered A-line Kurta
            </h3>
            <div className="flex items-center gap-1.5 mt-2">
              <FaStar color="#9333ea" size={16} />
              <FaStar color="#9333ea" size={16} />
              <FaStar color="#9333ea" size={16} />
              <FaStar color="#9333ea" size={16} />
              <FaStar color="#d1d5db" size={16} />

              <div className="flex items-center gap-4 text-gray-500">
                <span className="text-sm text-gray-500">40</span>
                <span>|</span>
                <Link
                  className="text-sm text-gray-500 underline"
                  href="javascript:void(0)"
                >
                  View All Reviews
                </Link>
              </div>
            </div>
            <p className="text-gray-500 mt-4 text-sm">
              Women Embroidered Georgette A-line Kurta with Attached Dupatta in
              a rich maroon shade, featuring intricate embroidery, and a
              lightweight georgette fabric.
            </p>
            <div className="flex items-center flex-wrap gap-4 mt-4">
              <h4 className="text-gray-800 text-2xl sm:text-3xl font-bold">
                $12
              </h4>
              <p className="text-gray-500 text-lg">
                <span className="line-through">$16</span>
                <span className="text-sm ml-1.5">Tax included</span>
              </p>
            </div>
          </div>

          <hr className="my-6 border-gray-300" />

          {/* <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              Sizes
            </h3>
            <div className="flex flex-wrap gap-4 mt-4">
              <button
                className="w-10 h-9 border border-gray-300 hover:border-purple-600 text-sm  flex items-center justify-center shrink-0"
                type="button"
              >
                SM
              </button>

              <button
                className="w-10 h-9 border border-purple-600 hover:border-purple-600 text-sm  flex items-center justify-center shrink-0"
                type="button"
              >
                MD
              </button>
              <button
                className="w-10 h-9 border border-gray-300 hover:border-purple-600 text-sm  flex items-center justify-center shrink-0"
                type="button"
              >
                LG
              </button>
              <button
                className="w-10 h-9 border border-gray-300 hover:border-purple-600 text-sm  flex items-center justify-center shrink-0"
                type="button"
              >
                XL
              </button>
              <button
                className="w-10 h-9 border border-gray-300 hover:border-purple-600 text-sm  flex items-center justify-center shrink-0"
                type="button"
              >
                XXL
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">
              <button
                className="px-4 py-3 w-[45%] border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold  "
                type="button"
              >
                Add to wishlist
              </button>
              <button
                className="px-4 py-3 w-[45%] border border-purple-600 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold  "
                type="button"
              >
                Add to cart
              </button>
            </div>
          </div> */}

          <Dropdown>
            <DropdownTrigger>
              <Button variant="bordered">Beli di pihak ketiga</Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Action event example"
              onAction={(key) => alert(key)}
            >
              <DropdownItem key="shopee" startContent={<SiShopee />}>
                Shopee
              </DropdownItem>
              <DropdownItem key="tiktok" startContent={<SiTiktok />}>
                Tiktok
              </DropdownItem>
              <DropdownItem
                key="lazada"
                startContent={<IcLazada className="h-4 w-4 text-black" />}
              >
                Lazada
              </DropdownItem>
              <DropdownItem
                key="tokopedia"
                startContent={<IcTokped className="h-4 w-4 text-black" />}
              >
                Tokopedia
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <hr className="my-6 border-gray-300" />

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              Select Delivery Location
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Enter the pincode of your area to check product availability.
            </p>
            <div className="flex items-center gap-2 mt-4 max-w-sm">
              <input
                className="bg-gray-100 px-4 py-2.5 text-sm w-full  border-0 outline-0"
                placeholder="Enter pincode"
                type="number"
              />
              <button
                className="border-0 outline-0 bg-purple-600 hover:bg-purple-700 text-white  px-4 py-2.5 text-sm"
                type="button"
              >
                Apply
              </button>
            </div>
          </div>

          <hr className="my-6 border-gray-300" />

          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              Product Information
            </h3>
            <div className="mt-2" role="accordion">
              <div className="hover:bg-gray-100 transition-all">
                <button
                  className="w-full text-sm font-semibold text-left px-4 py-2.5 text-gray-800 flex items-center"
                  type="button"
                >
                  <span className="mr-4">Product details</span>
                  <svg
                    className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-180"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                      data-original="#000000"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="pb-4 px-4">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>

              <div className="hover:bg-gray-100 transition-all">
                <button
                  className="w-full text-sm font-semibold text-left px-4 py-2.5 text-gray-800 flex items-center"
                  type="button"
                >
                  <span className="mr-4">Vendor details</span>
                  <svg
                    className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-90"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                      data-original="#000000"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="pb-4 px-4 hidden">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>

              <div className="hover:bg-gray-100 transition-all">
                <button
                  className="w-full text-sm font-semibold text-left px-4 py-2.5 text-gray-800 flex items-center"
                  type="button"
                >
                  <span className="mr-4">Return and exchange policy</span>
                  <svg
                    className="w-3 h-3 fill-current ml-auto shrink-0 -rotate-90"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                      data-original="#000000"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
                <div className="pb-4 px-4 hidden">
                  <p className="text-sm text-gray-500 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-300" />

          <div className="mt-6">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              Customer Reviews
            </h3>
            <div className="flex items-start mt-4">
              <Image
                className="w-12 h-12 rounded-full border-2 border-white"
                src="https://readymadeui.com/team-2.webp"
              />
              <div className="ml-3">
                <h4 className="text-sm font-bold">John Doe</h4>
                <div className="flex space-x-1 mt-1">
                  <svg
                    className="w-[14px] h-[14px] fill-purple-600"
                    fill="none"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-purple-600"
                    fill="none"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-purple-600"
                    fill="none"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-purple-600"
                    fill="none"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <svg
                    className="w-[14px] h-[14px] fill-[#CED5D8]"
                    fill="none"
                    viewBox="0 0 14 13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                  <p className="text-xs text-gray-500 !ml-2">2 months ago</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <Link
              className="block text-purple-600 hover:underline text-sm mt-6 font-semibold"
              href="javascript:void(0)"
            >
              Read all reviews
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProductId;
