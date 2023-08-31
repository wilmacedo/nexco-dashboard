"use client";

import { X } from "lucide-react";
import { ChangeEvent, MouseEvent, useState } from "react";

interface SelectorProps {
  placeholder?: string;
  options: {
    value: string;
    label: string;
  }[];
  onChange: (selects: string[]) => void;
}

export function Selector({ options, onChange, ...props }: SelectorProps) {
  const [selects, setSelects] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  function handleAdd(event: MouseEvent<HTMLElement>, value: string) {
    event.currentTarget.blur();

    const newSelects = [...selects];
    if (!newSelects.includes(value)) {
      newSelects.push(value);

      const input = document.querySelector(
        "#selector-input"
      ) as HTMLInputElement;
      if (input) input.value = "";
    }

    onChange(newSelects);
    setSelects(newSelects);
  }

  function handleRemove(value: string) {
    let newSelects = [...selects];
    if (newSelects.includes(value)) {
      newSelects = newSelects.filter((select) => select !== value);
    }

    onChange(newSelects);
    setSelects(newSelects);
  }

  function handleInputSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  function getOptions() {
    if (search.length === 0) return options;

    return options.filter((option) =>
      option.label.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="group relative flex items-center h-10 w-full rounded-lg border border-input text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
      {selects.map((option, index) => (
        <div
          key={index}
          className="mx-1 inline-flex gap-1 text-xs bg-[#F0F1EB] rounded-md"
        >
          <span className="p-2 pr-0">
            {options.find((op) => option === op.value)?.label}
          </span>
          <button
            className="px-1 rounded-tr-md rounded-br-md transition-all hover:bg-red-300"
            onClick={() => handleRemove(option)}
            type="button"
          >
            <X strokeWidth={1.5} size={12} />
          </button>
        </div>
      ))}
      <input
        id="selector-input"
        className="px-3 py-2 w-full bg-background rounded-lg placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        onChange={handleInputSearch}
        {...props}
      />

      <div className="absolute z-10 flex flex-col top-12 invisible opacity-0 w-full bg-background border border-input rounded-lg shadow-sm transition-all group-focus-within:visible group-focus-within:opacity-100">
        {getOptions().length === 0 && (
          <span className="p-3 text-xs opacity-40">
            Nenhum assunto encontrado.
          </span>
        )}

        {getOptions().length > 0 &&
          getOptions().map((option, index) => (
            <button
              className="p-3 text-xs text-start transition-all hover:bg-[#D9EAB9] last:rounded-b-lg first:rounded-t-lg"
              key={index}
              onClick={(event) => handleAdd(event, option.value)}
              type="button"
            >
              {option.label}
            </button>
          ))}
      </div>
    </div>
  );
}
