"use client";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { BsCheck } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n } from "@/modules/i18n/i18n.config";

const LocaleSwitcher = () => {
  const pathName = usePathname();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  const flags = [
    {
      name: (
        <div className="tw-flex tw-items-center tw-justify-between">
          <span className="fi fi-fr fis"></span>
          <p className="!tw-m-0 tw-font-semibold tw-text-sm">
            {pathName.endsWith("en") ? "French" : "Français"}
          </p>
        </div>
      ),
    },
    {
      name: (
        <div className="tw-flex tw-items-center tw-justify-between">
          <span className="fi fi-us fis "></span>
          <p className="!tw-m-0 tw-font-semibold tw-text-sm">
            {pathName.endsWith("en") ? "English" : "Anglais"}
          </p>
        </div>
      ),
    },
  ];

  const flagsWithLocales = flags.map((flag, index) => {
    const locale = i18n.locales[index]; // Assign the locale based on the index
    return { ...flag, locale };
  });

  const [selected, setSelected] = useState(
    pathName.endsWith("en") ? flagsWithLocales[1] : flagsWithLocales[0]
  );
  return (
    <div className="tw-absolute tw-top-0 tw-w-[124px]">
      <Listbox value={selected} onChange={setSelected}>
        <div className="tw-relative tw-mt-1">
          <Listbox.Button className="tw-relative tw-w-full tw-cursor-default tw-rounded-lg tw-bg-white tw-py-2 tw-pl-3 tw-pr-8 tw-text-left tw-shadow-md focus:tw-outline-none focus-visible:tw-border-indigo-500 focus-visible:tw-ring-2 focus-visible:tw-ring-white focus-visible:tw-ring-opacity-75 focus-visible:tw-ring-offset-2 focus-visible:tw-ring-offset-orange-300 sm:tw-text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="tw-pointer-events-none tw-absolute tw-inset-y-0 tw-right-0 tw-flex tw-items-center tw-pr-2">
              <RiArrowDropDownLine
                className="tw-h-6 tw-w-6 tw-text-gray-700"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="tw-transition tw-ease-in tw-duration-100"
            leaveFrom="tw-opacity-100"
            leaveTo="tw-opacity-0"
          >
            <Listbox.Options className="tw-absolute tw-mt-1 tw-max-h-60 tw-w-full tw-overflow-auto tw-rounded-md tw-bg-white tw-py-1 tw-text-base tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 focus:tw-outline-none sm:tw-text-sm !tw-pl-0">
              {flagsWithLocales.map((flag, flagIdx) => (
                <Link
                  key={flagIdx}
                  className="tw-text-inherit tw-no-underline"
                  href={redirectedPathName(flag.locale)}
                >
                  <Listbox.Option
                    className={({ active }) =>
                      `tw-relative tw-cursor-default tw-select-none tw-py-2 tw-pl-4 tw-pr-8 ${
                        active
                          ? "tw-bg-amber-100 tw-text-amber-900"
                          : "tw-text-gray-900"
                      }`
                    }
                    value={flag}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`tw-block tw-truncate ${
                            selected ? "tw-font-medium" : "tw-font-normal"
                          }`}
                        >
                          {flag.name}
                        </span>
                        {selected ? (
                          <span className="tw-absolute tw-inset-y-0 tw-left-0 tw-flex tw-items-center tw-pl-3 tw-text-amber-600">
                            <BsCheck
                              className="tw-h-5 tw-w-5 "
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                </Link>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default LocaleSwitcher;
