import React from "react";
import { GoPlusCircle } from "react-icons/go";
import ContactCard from "../../components/contactcard/contactcard";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { toggleModalMenuTrue } from "../../redux-slices/common";
import Modal from "../../components/modal/modal";
import NoResult from "../../assets/noresult.png";

const ContactPage: React.FC = () => {
  const dispatch = useAppDispatch();

  // Contains all the contacts.
  const AllContacts = useAppSelector((state) => state.common.allContacts);

  const openModal = () => {
    dispatch(toggleModalMenuTrue());
  };

  return (
    <div className="p-10 sm:p-1 lg:p-10 w-full max-h-[90vh] overflow-y-scroll">
      <button
        onClick={openModal}
        type="button"
        className="text-white flex items-center gap-5 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-3 text-center me-2 mb-2"
      >
        <GoPlusCircle size={25} color="#fff" /> Add Contact
      </button>

      {/* Rendering all contacts cards */}

      {AllContacts.length === 0 ? (
        <div className="h-[100%] w-full flex flex-col items-center justify-center">
          <img
            src={NoResult}
            alt="noresult"
            className="object-contain h-[50%] w-[100%]"
          />
          <p className="text-gray-400 sm: text-xs mb-2 lg: text-[13px]">
            Look like there are no contacts added.
          </p>
          <p className="text-gray-400 text-center sm: text-xs lg: text-[13px]">
            Please add new contact by pressing "Add Contact button on top left"
          </p>
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {AllContacts.map((item, index) => (
            <ContactCard key={index} index={index} contact={item} />
          ))}
        </div>
      )}
      <Modal />
    </div>
  );
};

export default ContactPage;
