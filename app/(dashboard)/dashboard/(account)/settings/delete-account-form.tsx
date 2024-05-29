"use client";

import * as React from "react";
import { useFormStatus } from "react-dom";

import {
  FormHeading,
  FormDescription,
  FormContainer,
  FormFooter,
  FormContent,
} from "@/components/dashboard/form";
import { Button } from "@/components/ui/button";
import { deleteAccount } from "@/server/actions/delete-account";
import { ConfirmDialog } from "@/components/ui/confirm-dialog";

export function DeleteAccountForm() {
  const [open, setOpen] = React.useState(false);
  const { pending } = useFormStatus();

  return (
    <>
      <ConfirmDialog
        open={open}
        close={() => setOpen(false)}
        onConfirm={async () => {
          await deleteAccount();
        }}
      />
      <form
        action={() => {
          setOpen(true);
        }}
      >
        <FormContainer className="border-destructive/50">
          <FormContent>
            <div>
              <FormHeading>Delete Account</FormHeading>
              <FormDescription>
                Permanently delete your linkinbio.at account, all of your links,
                customizations and their respective stats. This action cannot be
                undone - please proceed with caution.
              </FormDescription>
            </div>
          </FormContent>
          <FormFooter className="border-t border-t-destructive/50">
            <Button
              variant="destructive"
              className="rounded-full"
              disabled={pending}
            >
              Delete
            </Button>
          </FormFooter>
        </FormContainer>
      </form>
    </>
  );
}
