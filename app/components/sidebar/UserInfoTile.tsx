import React from "react";
import Image from "next/image";
import { FaRegUser as Avatar } from "react-icons/fa";

interface UserInfoTileProps {
  userName: string;
  userAvatar: string;
}

function UserInfoTile({ userName, userAvatar }: UserInfoTileProps) {
  return (
    <div className="flex items-center gap-2 px-8">
      <div className="relative flex h-10 w-10 min-w-10 items-center justify-center overflow-hidden rounded-full border border-light-borderColor dark:border-dark-borderColor">
        {userAvatar ? (
          <Image
            src={userAvatar}
            alt="avatar"
            priority
            fill
            sizes="100vw, 100vh"
            className="h-auto w-full object-cover object-top"
          />
        ) : (
          <Avatar className="text-xl text-lightGray" />
        )}
      </div>
      <p className="truncate first-letter:uppercase">{userName}</p>
    </div>
  );
}

export default UserInfoTile;
