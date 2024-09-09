import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function ContactDetailsPage() {
  const { id } = useParams();
  const AllContacts = useAppSelector((state) => state.common.allContacts);
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  }
  return (
    <div className="relative w-full h-[100%] bg-custom-gradient flex items-center justify-center">
      <FaArrowLeftLong onClick={navigateHome} size={30} color="#fff" className="cursor-pointer absolute left-3 top-3" />
      {/* Contact details */}
      <div className="p-6 bg-white shadow-custom rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
        <div className="space-y-4">
          <p className="text-lg font-semibold">
            <span className="font-bold">Name:</span> {AllContacts[id].firstname}
          </p>
          <p className="text-lg font-semibold">
            <span className="font-bold">Last Name:</span> {AllContacts[id].lastname}
          </p>
          <p className="text-lg font-semibold">
            <span className="font-bold">Phone Number:</span> {AllContacts[id].phonenumber}
          </p>
          <p className="text-lg font-semibold">
            <span className="font-bold">Status:</span> {AllContacts[id].status}
          </p>
        </div>
      </div>
    </div>
  );
}
