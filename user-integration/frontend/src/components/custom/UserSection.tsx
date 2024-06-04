//import { User, getUsers } from "@/api/getUsers";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { UserCard, UserSkeleton } from "./UserCard";
import { Input } from "../ui/input";
import { SERVER_URL } from "../../Constants/serverConstants";
import { User } from "../../types";

interface UsersSectionProps {
  children?: React.ReactNode;
}

const getUsers = async () => {
  const response = await fetch(`${SERVER_URL}/users`);
  const data = await response.json();
  return data;
}

function filterUsers(users: User[], searchTerm: string): User[] {
  return users.filter((user) => {
    return (
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
}

const UsersSection: React.FC<UsersSectionProps> = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (users.isLoading) {
    return (
      <div className="px-4 py-12 grid gap-y-10">
        <div className="flex flex-col space-y-6">
          <h1 className="text-3xl font-bold">Patients</h1>
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Filter some users..."
            type="text"
          />
        </div>
        <div className="grid grid-cols-3 gap-8">
          {new Array(11).fill(null).map((_, index) => (
            <UserSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  if (users.isError || !users.data) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className="px-4 py-12 grid gap-y-10">
      <div className="flex flex-col space-y-6">
        <h1 className="text-3xl font-bold">Patients</h1>
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Filter some users..."
          type="text"
        />
      </div>
      <div className="grid grid-cols-3">
        {filterUsers(users.data, searchTerm).map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </div>
    </div>
  );
};

export default UsersSection;