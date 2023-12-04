"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Company, companies } from "@/config/companies";
import { tabs } from "@/config/discover";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Page() {
  const [currentTab, setCurrentTab] = useState(0);
  const [filter, setFilter] = useState("");
  const router = useRouter();

  function handleTab(index: number) {
    if (index === currentTab) return;

    setCurrentTab(index);
    router.push("/discover#" + tabs[index].value, {
      scroll: false,
    });
  }

  function handleCompany(company: Company) {
    router.push(`/company/${company.slug}`);
  }

  function handleFilter(value: string) {
    setFilter(value);
  }

  function getFilteredCompanies() {
    const locations = {
      for: "Fortaleza",
      sp: "São Paulo",
      bh: "Belo Horizonte",
    } as {
      [key: string]: string;
    };

    if (filter === "") {
      return companies;
    }

    return companies.filter((company) => company.city === locations[filter]);
  }

  return (
    <div className="w-screen inline-flex items-center justify-center px-4 md:px-16">
      <div className="w-full lg:max-w-5xl">
        <div className="mx-auto w-fit">
          <h1 className="relative text-6xl">
            Descobrir
            <div className="-left-[0.5rem] top-0 absolute w-[calc(100%+1rem)] h-full bg-[#a5dc48] opacity-30 rounded-full" />
          </h1>
          <p className="mt-2 text-sm text-center font-light">
            Novas startups e conexões
          </p>
        </div>

        <div className="mt-8 w-full flex flex-col items-center justify-center">
          <div className="px-4 inline-flex items-center gap-4 border-b border-input">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => handleTab(index)}
                className="disabled:cursor-not-allowed"
                disabled={tab.block}
              >
                <h3
                  data-disabled={tab.block}
                  className={twMerge(
                    "text-muted-foreground text-2xl transition-colors",
                    "hover:text-foreground",
                    tabs[currentTab].value === tab.value && "text-foreground",
                    "data-[disabled=true]:hover:text-muted-foreground"
                  )}
                >
                  {tab.label}
                </h3>
              </button>
            ))}
          </div>

          <div className="mt-4 flex flex-col items-center gap-2 md:flex-row">
            <p className="text-lg">Me mostre somente as localizadas em</p>
            <Select defaultValue="" onValueChange={handleFilter}>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Qualquer cidade" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Qualquer cidade</SelectItem>
                <SelectItem value="for">Fortaleza</SelectItem>
                <SelectItem value="sp">São Paulo</SelectItem>
                <SelectItem value="bh">Belo Horizonte</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <section className="mt-12 mb-8 w-full">
          <div className="columns-1 space-y-4 md:columns-2 lg:columns-3">
            {getFilteredCompanies().length === 0 && (
              <span>Nenhuma encontrada</span>
            )}
            {getFilteredCompanies().length > 0 &&
              getFilteredCompanies().map((item, index) => (
                <button
                  key={index}
                  className={twMerge(
                    "group relative p-4 w-full h-fit flex bg-background rounded-lg border cursor-pointer transition-all hover:scale-105",
                    "odd:flex-col",
                    "even:flex-row even:items-center even:py-2"
                  )}
                  onClick={() => handleCompany(item)}
                >
                  <div
                    className={`absolute z-10 top-0 left-0 w-full h-16 rounded-t-lg bg-[#a5dc48] opacity-30 group-even:hidden`}
                  />
                  <div className="h-14 w-14 rounded-lg bg-white border group-odd:mt-6 group-odd:z-10">
                    <Image
                      src={item.logo}
                      alt=""
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-lg"
                    />
                  </div>

                  <div className="mt-2 text-start group-even:ml-2 group-even:w-[calc(100%-5rem)]">
                    <h3 className="text-xl font-semibold whitespace-nowrap">
                      {item.name}
                    </h3>
                    <p className="w-full text-sm line-clamp-2 group-odd:my-1">
                      {item.shortDescription}
                    </p>
                    <p className="mt-2 hidden text-xs text-muted-foreground group-odd:flex">
                      {item.type} • {item.city}
                    </p>
                  </div>
                </button>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}
