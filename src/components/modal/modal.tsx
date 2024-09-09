import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import {
  toggleModalMenuFalse,
  addContact,
  updateContact,
  setEditInfo,
} from "../../redux-slices/common";

interface DataTypes {
  firstname: string;
  lastname: string;
  phonenumber: string;
  status: string;
}

export default function Modal() {
  const dispatch = useAppDispatch();
  //   const isOpen = useAppSelector((state) => state.common.isModalOpen);
  const {
    contactToEdit,
    isModalOpen: isOpen,
    editIndex,
  } = useAppSelector((state) => state.common);

  const toggleModal = () => {
    dispatch(toggleModalMenuFalse());
  };

  const [error, setError] = useState("");
  const [data, setData] = useState<DataTypes>({
    firstname: "",
    lastname: "",
    phonenumber: "",
    status: "",
  });

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const phoneNumber = data.phonenumber;
    const phoneNumberLength = phoneNumber.length;

    // Checking if phone number length is exactly 10 digits
    if (phoneNumberLength !== 10) {
      setError("Phone number must be exactly 10 digits.");
      return;
    }

    // Checking if phone number contains only digits
    if (!/^\d+$/.test(phoneNumber)) {
      setError(
        "Please enter a valid phone number. Only numeric characters are allowed."
      );
      return;
    }

    if (editIndex !== null) {
      dispatch(updateContact({ index: editIndex, updatedContact: data }));
      dispatch(
        setEditInfo({
          index: null,
          contact: { firstname: "", lastname: "", phonenumber: "", status: "" },
        })
      );
    } else {
      dispatch(addContact(data));
    }

    setError("");
    setData({
      firstname: "",
      lastname: "",
      phonenumber: "",
      status: "",
    });

    toggleModal();
  };

  useEffect(() => {
      setData({
        firstname: contactToEdit.firstname,
        lastname: contactToEdit.lastname,
        phonenumber: contactToEdit.phonenumber,
        status: contactToEdit.status,
      });
  }, [contactToEdit]);

  return (
    isOpen && (
      <div
        id="authentication-modal"
        className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-75"
      >
        <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700 sm: w-[95%]">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Create contact
            </h3>
            <button
              type="button"
              onClick={toggleModal}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal Body */}
          <div className="p-4 md:p-5">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your First Name
                </label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  onChange={handleChange}
                  value={data.firstname}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Last Name
                </label>
                <input
                  type="text"
                  name="lastname"
                  onChange={handleChange}
                  value={data.lastname}
                  id="lastname"
                  placeholder="Doe"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phonenumber"
                  id="phonenumber"
                  value={data.phonenumber}
                  onChange={handleChange}
                  placeholder="+91 5685254896"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
              </div>
              <div>
                <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Status
                </span>
                <div className="flex items-center space-x-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="status"
                      value="active"
                      checked={data.status === "active"}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Active
                    </span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="status"
                      value="inactive"
                      checked={data.status === "inactive"}
                      onChange={handleChange}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Inactive
                    </span>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {editIndex !== null ? "Edit Contact" : "Add Contact"}
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  );
}
