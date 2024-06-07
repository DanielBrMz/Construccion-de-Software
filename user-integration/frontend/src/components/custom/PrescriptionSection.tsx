import { getTreatment } from "../../utils/httpUtils";
import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Skeleton } from "../ui/skeleton";
import { Treatment } from "../../types";
import PrescriptionCard from "./PrescriptionCard";

interface DescriptionsSectionProps {
  children?: React.ReactNode;
  userid: string;
}

function filterPrescriptions(descriptions: Treatment[], searchTerm: string) {
  return descriptions.filter((description) => {
    return (
      description.description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      description.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
}

const PrescriptionsSection: React.FC<DescriptionsSectionProps> = ({
  userid,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [descriptions, setDescriptions] = useState<Treatment[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchDescriptions = async () => {
      setIsLoading(true);
      try {
        const data = await getTreatment(userid);
        setDescriptions(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDescriptions();
  }, [userid]);

  if (isLoading) {
    return (
      <div className="p-4 flex flex-col space-y-6">
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-semibold">Past descriptions</h1>
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Filter prescritptions..."
            type="text"
          />
        </div>
        <div className="grid gap-y-4">
          {new Array(2).fill(null).map((_, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-md shadow-md animate-pulse"
            >
              <div className="flex flex-col space-y-2">
                <Skeleton className="w-20 h-4" />
                <Skeleton className="w-[80%] h-3" />
                <Skeleton className="w-[60%] h-3" />
                <div className="py-1"></div>
                <Skeleton className="w-20 h-4" />
                <Skeleton className="w-[80%] h-3" />
                <Skeleton className="w-[60%] h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (isError || !descriptions) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="p-4 flex flex-col space-y-6">
      <div className="flex flex-col space-y-4">
        <h1 className="text-2xl font-semibold">Past prescriptions</h1>
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Filter prescriptions..."
          type="text"
        />
      </div>

      <div className="grid gap-y-4 max-h-[32rem] overflow-y-scroll">
        {filterPrescriptions(descriptions, searchTerm).length === 0 && (
          <div className="w-full flex items-center justify-center p-6">
            <h2 className="text-white/40">No descriptions found</h2>
          </div>
        )}
        {filterPrescriptions(descriptions, searchTerm).map((description) => (
          <PrescriptionCard key={description.id} treatment={description} />
        ))}
      </div>
    </div>
  );
};

export default PrescriptionsSection;
