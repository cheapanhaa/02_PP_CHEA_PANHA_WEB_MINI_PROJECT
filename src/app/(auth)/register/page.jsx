"use client";
import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const register = () => {
  const router = useRouter();

  async function handlerRegister(userInfo) {
    // console.log(userInfo.get("email"), userInfo.get("password"));
    const newUserInfo = {
      firstName: userInfo.get("firstName"),
      lastName: userInfo.get("lastName"),
      email: userInfo.get("email"),
      gender: userInfo.get("gender"),
      profile_url: "string",
    };
    const res = await signIn("credentials", {
      redirect: false,
      ...newUserInfo,
    });
    if (res.ok) {
      router.push("/login");
    }
    console.log("res login", res);
  }
  return (
    <div class=" flex justify-center">
      <div class=" sm:rounded-lg flex justify-center flex-1 mt-11 py-11">
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="flex justify-between">
            <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
          </div>
          <form action={handlerRegister}>
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
                  name="firstName"
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
                  name="lastName"
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
                  name="email"
                  id="company"
                  class="bg-gray-100 border border-gray-200 peer h-10 w-full rounded-md bg-gray-50 px-4 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out text-black"
                  placeholder="example@example.com"
                  required
                />
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Gender :
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="" disabled selected>
                    Choose your gender
                  </option>
                  <option value="F">Female</option>
                  <option value="M">Male</option>
                </select>
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
                  name="password"
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
                  name="comfirmpassword"
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
          <Image src={"/assets/icons/sign-up.svg"} width={500} height={50} />
        </div>
      </div>
    </div>
  );
};

export default register;
