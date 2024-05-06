"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NewPlatformLinkForm } from "./new-platform-form";
import { NewWebsiteLinkForm } from "./new-website-link-form";

export function NewLinkForm() {
  const [isOpen, setIsOpen] = React.useState(false);

  const close = () => setIsOpen(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger
        className="flex max-w-xs items-center justify-center gap-2"
        asChild
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="w-full rounded-full"
          size="lg"
        >
          <PlusIcon className="mr-2 size-4 text-gray-300" />
          Add Link
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add new Link</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="website">
          <TabsList className="mb-8 grid w-full grid-cols-2">
            <TabsTrigger value="website">Website</TabsTrigger>
            <TabsTrigger value="platform">Platform</TabsTrigger>
          </TabsList>
          <TabsContent value="website">
            <NewWebsiteLinkForm close={close} />
          </TabsContent>
          <TabsContent value="platform">
            <NewPlatformLinkForm close={close} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
