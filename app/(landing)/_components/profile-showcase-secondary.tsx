"use client";

import * as React from "react";

import { Title } from "@/components/biolink/title";
import { Username } from "@/components/biolink/username";
import { ProfilePicture } from "@/components/biolink/profile-picture";
import { dummyBiolink } from "@/lib/dummy";
import { TitleEffect, Font } from "@/lib/types";
import { TopIcon } from "@/components/biolink/icon";

export function ProfileShowcaseSecondary() {
  return (
    <div
      className="w-[250px] rounded-2xl p-4"
      style={{
        backgroundImage: `linear-gradient(0deg, #DDD2F3, #CDEDF4)`,
      }}
    >
      <div className="mx-auto flex w-full items-start justify-start gap-4">
        <ProfilePicture
          src="https://images.unsplash.com/photo-1517639493569-5666a7b2f494?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFzdGVsJTIwYWVzdGhldGljfGVufDB8fDB8fHww"
          nullable
          className="size-16"
        />
        <div>
          <Title
            options={{
              color: "#f178a1",
              font: Font.GreatVibes,
            }}
            effect={TitleEffect.CherryBlossoms}
            user={{
              title: "Maria",
              premium: true,
            }}
          />
          <Username username="maria" className="mt-0 text-white" />
          <div className="mt-2 flex items-center gap-2">
            <TopIcon
              options={{
                color: "#f178a1",
                shadow: false,
              }}
              item={dummyBiolink.links.platform[0]}
              size="sm"
            />
            <TopIcon
              options={{
                color: "#f178a1",
                shadow: false,
              }}
              item={dummyBiolink.links.platform[1]}
              size="sm"
            />
            <TopIcon
              options={{
                color: "#f178a1",
                shadow: false,
              }}
              item={dummyBiolink.links.platform[2]}
              size="sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
