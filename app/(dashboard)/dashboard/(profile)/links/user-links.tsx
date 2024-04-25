"use client";

import * as React from "react";

import { LinkForm } from "./link-form";
import { LinkItem } from "./link-item";

import { dummyBiolink } from "@/constants/dummy";

import type { Link } from "@/types";

export function UserLinks() {
  const [userLinks, setUserLinks] = React.useState<Link[]>(dummyBiolink.links);
  const [loading, setLoading] = React.useState(false);

  return (
    <div>
      <LinkForm />
      <div className="mt-4">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            <div>Your links</div>
            <ul className="mt-4 space-y-4">
              {userLinks.map((item, index) => (
                <li key={index}>
                  <LinkItem item={item} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
