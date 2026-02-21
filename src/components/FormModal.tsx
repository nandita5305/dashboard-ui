"use client";

import Image from "next/image";
import { useState } from "react";

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";

  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";

  const [open, setOpen] = useState(false);

  const Form = () => {
    // DELETE FORM
    if (type === "delete" && id) {
      return (
        <form className="p-4 flex flex-col gap-4">
          <span className="text-center font-medium">
            All data will be lost. Are you sure you want to delete this {table}?
          </span>
          <button
            type="button"
            className="bg-red-700 text-white py-2 px-4 rounded-md w-max self-center"
          >
            Delete
          </button>
        </form>
      );
    }

    // CREATE / UPDATE FORM
    if (type === "create" || type === "update") {
      return (
        <form className="p-4 flex flex-col gap-4">
          <h2 className="text-lg font-semibold capitalize">
            {type} {table}
          </h2>

          <input
            type="text"
            placeholder={`Enter ${table} name`}
            defaultValue={data?.name || ""}
            className="border p-2 rounded-md"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-md w-max"
          >
            {type === "create" ? "Create" : "Update"}
          </button>
        </form>
      );
    }

    return <p>Form not found!</p>;
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor}`}
        onClick={() => setOpen(true)}
      >
        <Image src={`/${type}.png`} alt="" width={16} height={16} />
      </button>

      {/* Modal */}
      {open && (
        <div className="w-screen h-screen fixed left-0 top-0 bg-black bg-opacity-60 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />

            {/* Close Button */}
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <Image src="/close.png" alt="close" width={14} height={14} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;