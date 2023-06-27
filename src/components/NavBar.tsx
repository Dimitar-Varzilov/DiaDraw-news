import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import SearchBar from "./SearchBar";

const navigation = [{ name: "News", href: "#", current: true }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <nav className="sticky">
      <div className="sticky mx-auto px-2 sm:px-4 lg:px-20">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <a className="block h-8 w-auto" href="/">
                DiaDraw <span className="text-red-500">News</span>
              </a>
            </div>
            <SearchBar />
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-red-600 underline decoration-red-600"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
