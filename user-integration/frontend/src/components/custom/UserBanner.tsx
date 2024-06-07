import React, { useEffect, useState } from "react";
import SafeArea from "./SafeArea";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";
import { Briefcase, ChevronRight, Hash, Phone } from "lucide-react";
import { getUser } from "../../utils/httpUtils";
import { User } from "../../types";

interface UserBannerProps {
  children?: React.ReactNode;
  userid: string;
}

function getInitials(name: string) {
  return name.slice(0, 2);
}

const UserBanner: React.FC<UserBannerProps> = ({ userid }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [seeMore, setSeeMore] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      try {
        const data = await getUser(userid);
        setUser(data[0]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, [userid]);

  if (isLoading) {
    return (
      <div className="shadow-md bg-gray col-span-2">
        <SafeArea>
          <div className="flex justify-between">
            <div className="flex space-x-8 px-4 py-8">
              <Avatar className="w-24 h-24 shadow-md rounded-full">
                <AvatarFallback>
                  <Skeleton className="w-full h-full rounded-full" />
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center space-y-3">
                <Skeleton className="w-40 h-7" />
                <Skeleton className="w-52 h-5" />
              </div>
            </div>
            <div className="flex flex-col space-y-2 justify-center items-end">
              <div className="flex space-x-2 items-center">
                <Skeleton className="w-24 h-4" />
              </div>
              <div className="flex space-x-2 items-center">
                <Skeleton className="w-28 h-4" />
              </div>
              <div className="flex space-x-2 items-center">
                <Skeleton className="w-36 h-4" />
              </div>
            </div>
          </div>
        </SafeArea>
      </div>
    );
  }

  if (isError || !user) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="shadow-md bg-gray col-span-2">
      <SafeArea>
        <div className="flex flex-column flex-wrap justify-between items-between min-h-screen">
          <div className="flex flex-wrap">
            <div className="flex flex-wrap space-x-8 px-4 pt-8 pb-4 max-h-32">
              <Avatar className="w-24 h-24 shadow-md rounded-full">
                <AvatarFallback>
                  <AvatarFallback className="text-4xl">
                    {getInitials(user.name!)}
                  </AvatarFallback>
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col justify-center space-y-1">
                <h2 className="text-3xl font-semibold">{user.name}</h2>
                <p className="text-xl font-light">{user.email}</p>
              </div>
              <div className="flex px-4 py-6 max-h-24">
                <button onClick={() => setSeeMore(!seeMore)}>
                  Click to see more information
                </button>
                <ChevronRight className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="flex flex-col text-gray-500 space-y-1 mx-8 justify-center items-start">
            {seeMore && (
              <>
                <div className="flex space-x-2 items-center">
                  <Hash className="w-4 h-4" />
                  <p className="text-md font-light">
                    {user.age ? user.age + " Years Old" : "unknown"}
                  </p>
                </div>
                <div className="flex space-x-2 items-center">
                  <Phone className="w-4 h-4" />
                  <p className="text-sm font-light">
                    {user.phone ?? "unknown"}
                  </p>
                </div>
                <div className="flex space-x-2 items-center">
                  <Briefcase className="w-4 h-4" />
                  <p className="text-sm font-light">
                    {user.occupation ?? "Unkown"}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </SafeArea>
    </div>
  );
};

export default UserBanner;
