"use client";

import Image from "next/image";
import * as React from "react";

import { Font, TitleEffect, WeatherEffect as Weather } from "@/lib/types";
import { Bio } from "@/components/biolink/bio";
import { Title } from "@/components/biolink/title";
import { Username } from "@/components/biolink/username";
import { ProfilePicture } from "@/components/biolink/profile-picture";
import { dummyBiolink } from "@/lib/dummy";
import { Details } from "@/components/biolink/details";
import { WeatherEffect } from "@/components/biolink/effects/weather-effect";

export function ProfileShowcase() {
  return (
    <div className="relative w-[240px]">
      <WeatherEffect variant={Weather.Thunder} preview />
      <div className="relative w-fit overflow-hidden rounded-2xl p-4">
        {dummyBiolink.config.background?.url && (
          <Image
            src="/background.jpg"
            className="absolute inset-0 h-full w-full object-cover"
            alt="background image"
            width={500}
            height={500}
            unoptimized
          />
        )}
        <div className="relative mx-auto flex max-w-md flex-col items-start justify-center">
          <ProfilePicture
            src={dummyBiolink.user.image}
            nullable
            className="mb-4 rounded-[1.2rem]"
          />
          <Title
            options={{
              color: "#0cbb18",
              font: Font.Creepster,
            }}
            effect={dummyBiolink.config.effects?.title}
            user={dummyBiolink.user}
          />
          <Username
            username={dummyBiolink.user.username}
            options={dummyBiolink.config.profile?.text}
          />
          <Bio
            bio={dummyBiolink.user.bio}
            options={dummyBiolink.config.profile?.text}
          />
          <Details
            occupation={dummyBiolink.user.occupation}
            location={dummyBiolink.user.location}
            options={dummyBiolink.config.profile?.text}
          />
        </div>
      </div>
    </div>
  );
}
