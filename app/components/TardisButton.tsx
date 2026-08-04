"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function TardisButton() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    dialogRef.current?.showModal();
    setOpen(true);
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    setOpen(false);
  };

  return (
    <>
      <div className="absolute bottom-0 right-0">
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-controls="tardis-dialog"
          onClick={openDialog}
          className="inline-flex items-center px-2 py-4 font-medium text-slate-400 transition hover:-translate-y-2 hover:text-teal-300 focus-visible:text-teal-300"
        >
          <span className="sr-only">Click to time travel</span>
          <Image
            src="/images/tardis/tardis.svg"
            alt="Spinning Tardis from Doctor Who"
            width={100}
            height={86}
            unoptimized
            className="tardis-spin"
          />
        </button>
      </div>

      <dialog
        id="tardis-dialog"
        ref={dialogRef}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          // Clicking the backdrop (not the panel) dismisses the dialog.
          if (e.target === dialogRef.current) closeDialog();
        }}
        className="m-auto w-full max-w-md rounded-lg border-0 bg-slate-800/95 p-8 text-center text-slate-300 shadow-2xl backdrop:bg-slate-950/80 backdrop:backdrop-blur-sm"
      >
        <h2 className="text-xl font-bold tracking-tight text-slate-200">
          You found the easter egg!
        </h2>

        <Image
          src="/images/tardis/tardis.svg"
          alt=""
          width={200}
          height={200}
          unoptimized
          className="tardis-spin mx-auto my-6"
        />

        <p className="text-sm leading-relaxed">
          Allons-y! The Tardis can take you anywhere in time and space - for now
          it settles for touring this page.
        </p>

        <button
          type="button"
          onClick={closeDialog}
          className="mt-6 inline-flex items-center rounded-md bg-teal-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-teal-300 focus-visible:bg-teal-300"
        >
          Close
        </button>
      </dialog>
    </>
  );
}
