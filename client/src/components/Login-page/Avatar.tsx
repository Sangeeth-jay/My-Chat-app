"use client";
import React from "react";
import Image from "next/image";
import { AvatarProps } from "@/types";

const Avatar = ({avatarId, setAvatarId}:AvatarProps) => {
  return (
    <>
      <div onClick={() => setAvatarId((Math.random()*20).toFixed())} className="avatar cursor-pointer mx-auto mb-5 tooltip" data-tip="Click to change">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100">
          <Image
            src={`https://robohash.org/${avatarId}.png`}
            alt="avatar"
            width={256}
            height={256}
          />
        </div>
      </div>
    </>
  );
};

export default Avatar;
