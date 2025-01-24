/* eslint-disable prettier/prettier */
"use client";

import { FC } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@heroui/switch";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import clsx from "clsx";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light" || isSSR,
    "aria-label": `Switch to ${theme === "light" || isSSR ? "dark" : "light"} mode`,
    onChange,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          className,
          classNames?.base,
          "px-px transition-opacity hover:opacity-80 cursor-pointer"
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(classNames?.wrapper, [
            "w-auto h-auto",
            "bg-transparent",
            "rounded-lg",
            "flex items-center justify-center",
            "group-data-[selected=true]:bg-transparent",
            "!text-default-500",
            "pt-px",
            "px-0",
            "mx-0",
          ]),
        })}
      >
        {!isSelected || isSSR ? (
          <MdOutlineWbSunny color="#fff" size={20} />
        ) : (
          <FaMoon color="#000" size={20} />
        )}
      </div>
    </Component>
  );
};
