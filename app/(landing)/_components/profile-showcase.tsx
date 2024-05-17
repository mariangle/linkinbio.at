"use client";

import Image from "next/image";
import * as React from "react";

import { Font, TitleEffect, WeatherEffect as Weather } from "@/lib/types";
import { Bio } from "@/components/biolink/bio";
import { Title } from "@/components/biolink/title";
import { Username } from "@/components/biolink/username";
import { ProfilePicture } from "@/components/biolink/profile-picture";
import { dummyUser } from "@/lib/dummy";
import { Details } from "@/components/biolink/details";
import { WeatherEffect } from "@/components/biolink/effects/weather-effect";

export function ProfileShowcase() {
  return (
    <div className="relative w-[240px]">
      <WeatherEffect variant={Weather.Thunder} preview />
      <div className="relative w-fit overflow-hidden rounded-2xl p-4">
        {dummyUser.config.background.url && (
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
            src={dummyUser.user.image}
            nullable
            className="mb-4 rounded-[1.2rem]"
          />
          <Title
            options={{
              color: "#0cbb18",
              effect: TitleEffect.Typewriter,
              font: Font.Creepster,
            }}
            user={dummyUser.user}
          />
          <Username
            username={dummyUser.user.username}
            options={{
              font: dummyUser.config.profile.text.font,
              color: dummyUser.config.profile.text.color,
            }}
          />
          <Bio
            bio={dummyUser.user.bio}
            options={{
              font: dummyUser.config.profile.text.font,
              color: dummyUser.config.profile.text.color,
            }}
          />
          <Details
            occupation={dummyUser.user.occupation}
            location={dummyUser.user.location}
            options={{
              font: dummyUser.config.profile.text.font,
              color: dummyUser.config.profile.text.color,
            }}
          />
        </div>
      </div>
    </div>
  );
}
