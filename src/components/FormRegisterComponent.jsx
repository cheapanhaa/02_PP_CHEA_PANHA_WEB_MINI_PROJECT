import React from "react";
import Image from "next/image";
export default function FormRegisterComponent() {
  return (
    <div class=" flex justify-center">
      <div class=" sm:rounded-lg flex justify-center flex-1 mt-11 py-11">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex justify-between">
            <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
          </div>
          <form>
            <div class="grid gap-6 mb-6 md:grid-cols-2 mt-11 ">
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-100 border border-gray-200 peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out text-black"
                  placeholder="first name"
                  required
                />
              </div>
              <div>
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-100 border border-gray-200 peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out text-black"
                  placeholder="last name"
                  required
                />
              </div>
              <div>
                <label
                  for="company"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="company"
                  class="bg-gray-100 border border-gray-200 peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out text-black"
                  placeholder="example@example.com"
                  required
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  class="bg-gray-100 border border-gray-200 peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out text-black"
                  placeholder="0123456789"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
              <div>
                <label
                  for="website"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="website"
                  class="bg-gray-100 border border-gray-200 peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out text-black"
                  placeholder="××××××××××××××"
                  required
                />
              </div>
              <div>
                <label
                  for="visitors"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {" "}
                  Comfirm password
                </label>
                <input
                  type="password"
                  id="visitors"
                  class="bg-gray-100 border border-gray-200 peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out text-black"
                  placeholder="××××××××××××××"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex-text-center hidden lg:flex">
            <Image src={"/image/register.png"} width={500} height={50} />
          </div>
      </div>
    </div>
  );
}
