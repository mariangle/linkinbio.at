"use client";

import * as React from "react";

import { dummyUser } from "@/lib/dummy";

import { Button } from "@/components/biolink/button";
import { SpotifyTrack } from "@/components/biolink/modules/spotify";
import { SoundcloudTrack } from "@/components/biolink/modules/soundcloud";
import { PerspectiveContainer } from "./perspective-container";
import { ButtonCustomizer } from "./button-showcase";
import { ProfileShowcase } from "./profile-showcase";
import { TopIconStyle } from "@/lib/types";
import { ProfileShowcaseSecondary } from "./profile-showcase-secondary";
import { TopIcon } from "@/components/biolink/top-icon";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function HeroShowcase() {
  return (
    <div className="relative hidden w-full space-y-8 2xl:block">
      <div className="flex flex-wrap items-center justify-center gap-8">
        <PerspectiveContainer>
          <SpotifyTrack
            options={{
              contentId: "0xaFw2zDYf1rIJWl2dXiSF",
              enabled: true,
              darkBackground: false,
              compactLayout: true,
            }}
          />
        </PerspectiveContainer>
        <div className="pointer-events-none flex items-center gap-2 rounded-full border bg-white px-3 py-2 dark:bg-neutral-900">
          {iconLinks.map((item, idx) => (
            <TopIcon
              options={{
                color: "#000000",
                style: TopIconStyle.SocialBackgroundWhiteColor,
                shadow: true,
              }}
              key={idx}
              item={item}
              size="sm"
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col items-end gap-6">
          <PerspectiveContainer>
            <ProfileShowcaseSecondary />
          </PerspectiveContainer>
          <PerspectiveContainer>
            <div className="h-[50px] w-[150px] translate-x-4">
              <SoundcloudTrack
                options={{
                  trackId: "329430750",
                  enabled: true,
                }}
              />
            </div>
          </PerspectiveContainer>
        </div>
        <div className="mt-6 flex flex-col gap-10">
          <ButtonCustomizer />
          <PerspectiveContainer className="translate-x-8">
            <ProfileShowcase />
          </PerspectiveContainer>
        </div>
        <div className="w-full space-y-8">
          <PerspectiveContainer className="mr-2">
            <ViewLiveExample />
          </PerspectiveContainer>
          <PerspectiveContainer className="ml-8">
            <Button
              config={dummyUser.config.button}
              item={dummyUser.links.platform[3]}
            />
          </PerspectiveContainer>
        </div>
      </div>
    </div>
  );
}

export function ViewLiveExample() {
  return (
    <div className="border-rotate relative overflow-hidden rounded-2xl bg-yellow-50 p-px dark:bg-border">
      <Link
        href="/johndoe"
        target="_blank"
        rel="noopener nofollow"
        className="relative flex items-center gap-2 whitespace-nowrap rounded-2xl bg-white px-6 py-4  text-sm font-medium shadow-lg dark:bg-neutral-900"
      >
        View live example
        <ArrowUpRight className="size-4 shrink-0" />
      </Link>
    </div>
  );
}

const iconLinks = [
  {
    id: "example_link_id",
    order: 0,
    title: "Instagram",
    url: "https://instagram.com/username",
    isTopIcon: true,
    provider: "Instagram",
    username: "username",
    archived: false,
  },
  {
    id: "example_link_id",
    order: 0,
    title: "Snapchat",
    url: "https://snapchat.com/username",
    isTopIcon: true,
    provider: "Snapchat",
    username: "username",
    archived: false,
  },
  {
    id: "example_link_id",
    order: 0,
    title: "Tiktok",
    url: "https://tiktok.com/username",
    isTopIcon: true,
    provider: "Tiktok",
    username: "username",
    archived: false,
  },
  {
    id: "example_link_id",
    order: 0,
    title: "LinkedIn",
    url: "https://linkedin.com/in/username",
    isTopIcon: true,
    provider: "LinkedIn",
    username: "username",
    archived: false,
  },
];
