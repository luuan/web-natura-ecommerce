import * as React from "react"

import { Input } from '@/components/ui/input';
import { IconSearch } from "@tabler/icons-react";

export default function SearchBar() {
    return (
      <div className="xl:w-96">
        <div className="relative flex w-full flex-wrap items-stretch">
            <span
                className="input-group-text flex flex-col items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                id="basic-addon2">
                <IconSearch className="lg:hidden"/>
            </span>
            <input
                type="search"
                className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                placeholder="Buscar"
                aria-label="buscar"
                aria-describedby="button-addon2" />
        </div>
      </div>
    )
  }