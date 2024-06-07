import React from "react";
import { Treatment } from "../../types";

interface DescriptionCardProps {
  children?: React.ReactNode;
  treatment: Treatment;
}

const PrescriptionCard: React.FC<DescriptionCardProps> = ({ treatment }) => {
  return (
    <div className="bg-gray p-4 rounded-md shadow-lg grid gap-y-2">
      <div>
        <h3 className="underline">Description:</h3>
        <p className="text-sm">{treatment.prescription}</p>
      </div>
      <div>
        <h3 className="underline">Date:</h3>
        <p className="text-sm">{treatment.date}</p>
      </div>
    </div>
  );
};

export default PrescriptionCard;