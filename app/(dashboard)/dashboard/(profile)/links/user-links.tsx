"use client";

import * as React from "react";

import { LinkForm } from "./link-form";
import { LinkItem } from "./link-item";

import type { Link } from "@/lib/types";

const dummySocialLinks: Link[] = [
  {
    id: "1",
    order: 1,
    title: "Facebook",
    url: "https://www.example.com/dummy1",
    icon: "FaDummy1Icon", // Placeholder for the icon, replace it with the actual icon name or URL
  },
  {
    id: "2",
    order: 2,
    title: "Instagram",
    url: "https://www.example.com/dummy2",
    icon: "FaDummy2Icon", // Placeholder for the icon, replace it with the actual icon name or URL
  },
];

export function UserLinks() {
  const [userLinks, setUserLinks] = React.useState<Link[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setUserLinks(dummySocialLinks);
    setLoading(false);
  }, []);

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
