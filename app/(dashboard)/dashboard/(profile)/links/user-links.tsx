"use client";

import * as React from "react";

import { LinkForm } from "./new-link-form";
import { LinkItem } from "./link-form";

import type { Link } from "@/types";
import { useBiolinkPreview } from "@/hooks/use-biolink-preview";

export function UserLinks() {
  const { biolink, loading } = useBiolinkPreview();
  const [userLinks, setUserLinks] = React.useState<Link[]>([]);

  React.useEffect(() => {
    if (biolink) {
      setUserLinks(biolink.links);
    }
  }, [biolink]);

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
