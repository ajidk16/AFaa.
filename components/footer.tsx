/* eslint-disable react/no-unknown-property */
"use client";

import { Link } from "@heroui/link";
import NextLink from "next/link";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import { siteConfig } from "@/config/site";

export const Footer = () => {
  return (
    <footer className="font-sans tracking-wide pt-12 pb-6">
      <div className="flex flex-wrap justify-between gap-10">
        <div className="max-w-md">
          <NextLink href="javascript:void(0)">
            <h1 className="text-2xl md:text-5xl text-inherit font-extrabold">
              {siteConfig.name}
            </h1>
          </NextLink>
          <div className="mt-6">
            <p className="text-inherit leading-relaxed text-sm">
              ReadymadeUI is a library of pre-designed UI components built for
              Tailwind CSS. It offers a collection of versatile, ready-to-use
              components that streamline the development process by providing a
              wide range of UI elements.
            </p>
          </div>
          <ul className="mt-10 flex space-x-5">
            <li>
              <NextLink href={siteConfig.links.fb}>
                <FaFacebook size={24} />
              </NextLink>
            </li>
            {/* <li>
              <NextLink href={siteConfig.links.ig}>
                <FaLinkedin size={24} />
              </NextLink>
            </li> */}
            <li>
              <NextLink href={siteConfig.links.ig}>
                <RiInstagramFill size={24} />
              </NextLink>
            </li>
            <li>
              <NextLink href={siteConfig.links.x}>
                <FaTwitter size={24} />
              </NextLink>
            </li>
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-inherit font-semibold text-base relative max-sm:cursor-pointer">
            Services
          </h4>

          <ul className="mt-6 space-y-4">
            <li>
              <Link
                className="hover:text-gray-800 text-inherit text-sm"
                href="javascript:void(0)"
              >
                Web Development
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-800 text-inherit text-sm"
                href="javascript:void(0)"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-800 text-inherit text-sm"
                href="javascript:void(0)"
              >
                Support
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-800 text-inherit text-sm"
                href="javascript:void(0)"
              >
                Client Portal
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-800 text-inherit text-sm"
                href="javascript:void(0)"
              >
                Resources
              </Link>
            </li>
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-inherit font-semibold text-base relative max-sm:cursor-pointer">
            Platforms
          </h4>
          <ul className="space-y-4 mt-6">
            <li>
              <Link
                className="hover:text-gray-800 text-inherit text-sm"
                href="javascript:void(0)"
              >
                Hubspot
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-800 text-inherit text-sm"
                href="javascript:void(0)"
              >
                Integration Services
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-800 text-inherit text-sm"
                href="javascript:void(0)"
              >
                Marketing Glossar
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-800 text-inherit text-sm"
                href="javascript:void(0)"
              >
                UIPath
              </Link>
            </li>
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-inherit font-semibold text-base relative max-sm:cursor-pointer">
            Company
          </h4>

          <ul className="space-y-4 mt-6">
            <li>
              <Link
                className="hover:text-gray-800 text-inherit text-sm"
                href="javascript:void(0)"
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-800 text-inherit text-sm"
                href="javascript:void(0)"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-800 text-inherit text-sm"
                href="javascript:void(0)"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-800 text-inherit text-sm"
                href="javascript:void(0)"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-800 text-inherit text-sm"
                href="javascript:void(0)"
              >
                Events
              </Link>
            </li>
          </ul>
        </div>

        <div className="max-lg:min-w-[140px]">
          <h4 className="text-inherit font-semibold text-base relative max-sm:cursor-pointer">
            Additional
          </h4>

          <ul className="space-y-4 mt-6">
            <li>
              <Link
                className="hover:text-gray-800 text-inherit text-sm"
                href="javascript:void(0)"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-800 text-inherit text-sm"
                href="javascript:void(0)"
              >
                Partners
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-800 text-inherit text-sm"
                href="javascript:void(0)"
              >
                Sitemap
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-800 text-inherit text-sm"
                href="javascript:void(0)"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-800 text-inherit text-sm"
                href="javascript:void(0)"
              >
                News
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <hr className="mt-10 mb-6 border-gray-300" />

      <div className="flex flex-wrap max-md:flex-col gap-4">
        <ul className="md:flex md:space-x-6 max-md:space-y-2">
          <li>
            <Link
              className="hover:text-gray-800 text-inherit text-sm"
              href="javascript:void(0)"
            >
              Terms of Service
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-800 text-inherit text-sm"
              href="javascript:void(0)"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-gray-800 text-inherit text-sm"
              href="javascript:void(0)"
            >
              Security
            </Link>
          </li>
        </ul>

        <p className="text-inherit text-sm md:ml-auto">
          © ReadymadeUI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
