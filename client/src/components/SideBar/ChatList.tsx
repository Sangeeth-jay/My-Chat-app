"use client";
import { fetchUsers } from "@/lib/fetchers";
import { useAllUsers } from "@/store/userStore";
import { userProps } from "@/types";
import React, { useEffect } from "react";
import { shallow } from "zustand/shallow";

const ChatList = ({ mySelf }: { mySelf: userProps }) => {
  const { users, setUsers } = useAllUsers(
    (state:any) => ({
      users: state.users,
      setUsers: state.setUsers,
    }),
    shallow
  );

  useEffect(() => {
    fetchUsers(mySelf, setUsers);
    console.log(users);
    
  }, [users]);

  return (
    <>
      <ul className="my-5 flex flex-col"></ul>
    </>
  );
};

export default ChatList;
