import React from "react";
import { useAppDispatch } from "../../hooks";
import {
  setEditInfo,
  toggleModalMenuTrue,
  deleteContact,
} from "../../redux-slices/common";
import { IoIosArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";

interface ContactCardProps {
  contact: { [key: string]: any };
  index: number;
}

const ContactCard: React.FC<ContactCardProps> = (props) => {
  const { contact, index } = props;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Function to edit the contact
  const onEdit = () => {
    dispatch(setEditInfo({ index: index, contact: contact }));
    dispatch(toggleModalMenuTrue());
  };

  // Function to delete the contact
  const onDelete = () => {
    dispatch(deleteContact(index));
  };

  // navigate to contact details page
  const handleNavigation = () => {
    navigate(`/contactdetails/${index}`)
  }

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-4">
      <h3 className="text-lg font-semibold">
        {contact.firstname} {contact.lastname}
      </h3>
      <p
        className={`text-sm ${
          contact.status === "active" ? "text-green-500" : "text-red-500"
        }`}
      >
        {contact.status === "active" ? "Active" : "Inactive"}
      </p>
      <div className="flex justify-between items-center gap-2 mt-3">
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>

        <IoIosArrowDropright size={30} className="cursor-pointer" color="rgb(156, 163, 175)" onClick={handleNavigation}/>
      </div>
    </div>
  );
};

export default ContactCard;
