import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectCategory() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Produtos" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Produtos</SelectLabel>
          <SelectItem value="Maquiagem">Maquiagem</SelectItem>
          <SelectItem value="Protetor Solar">Protetor Solar</SelectItem>
          <SelectItem value="Perfumes">Perfumes</SelectItem>
          <SelectItem value="Cremes">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
