"use client";
import React, { useState, useEffect, ChangeEvent, FormEvent, FC } from "react";
import axios from "axios";
import Button from "@/shared/ui/button";
import ModalBlock from "./modal";

interface UserName {
  first: string;
  last: string;
}

interface User {
  name: UserName;
}

interface APIResponse {
  results: User[];
}

const NameSelectionForm: FC = () => {
  const [names, setNames] = useState<string[]>([]);
  const [selectedName, setSelectedName] = useState<string>("");

  useEffect(() => {
    axios
      .get<APIResponse>("https://randomuser.me/api/?results=10")
      .then((response) => {
        const fetchedNames = response.data.results.map(
          (user) => `${user.name.first} ${user.name.last}`
        );
        setNames(fetchedNames);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedName(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (selectedName) {
      alert(`Selected Name: ${selectedName}`);
    } else {
      alert("Please select a name");
    }
  };

  return (
    <section className="px-16 mx-auto flex flex-col items-start justify-center gap-6 my-12">
      <h2 className="text-3xl uppercase font-bold ">
        Choose <span className="text-[#3177F2]">Your Name</span>
      </h2>
      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          {names.map((name, index) => (
            <label
              key={index}
              className="flex items-center gap-2  p-6 rounded-2xl w-full  cursor-pointer shadow-custom-shadow"
            >
              <input
                type="checkbox"
                value={name}
                checked={selectedName === name}
                onChange={handleCheckboxChange}
                className="hidden peer"
              />
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center peer-checked:bg-[#FF5D17] peer-checked:border-[#FF5D17]">
                {selectedName === name && (
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                )}
              </div>
              <span>{name}</span>
            </label>
          ))}
        </div>

        <ModalBlock name={selectedName} />
      </form>
    </section>
  );
};

export default NameSelectionForm;
