"use client";

import { Selector } from "@/components/selector";
import { Building2, Check } from "lucide-react";
import { FormEvent, useState } from "react";
import { twMerge } from "tailwind-merge";

interface FormProps {
  interests: {
    id: string;
    name: string;
  }[];
  companySizes: {
    id: string;
    name: string;
    description: string;
  }[];
}

export function Form({ interests, companySizes }: FormProps) {
  const [interest, setInterest] = useState<string[]>([]);
  const [companyType, setCompanyType] = useState<string[]>([]);
  const [news, setNews] = useState<boolean>(true);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({ interest, companyType, news });
  }

  function isValid() {
    return interest.length > 0 && companyType.length > 0;
  }

  function addCompanyType(id: string) {
    if (companyType.includes(id)) return;

    setCompanyType((prev) => [...prev, id]);
  }

  function removeCompanyType(id: string) {
    if (!companyType.includes(id)) return;

    setCompanyType((prev) => prev.filter((item) => item !== id));
  }

  function handleClick(id: string) {
    if (companyType.includes(id)) {
      removeCompanyType(id);
      return;
    }

    addCompanyType(id);
  }

  return (
    <form className="md:max-w-3xl" onSubmit={handleSubmit}>
      <div>
        <h1 className="text-3xl font-semibold">Configurador</h1>
        <p className="mt-2 text-sm">
          Configure sua conta de acordo com o seu perfil de investimento
        </p>

        <div className="mt-8">
          <p>
            Interesses <span className="text-sm text-red-300">*</span>
          </p>
          <Selector
            options={interests.map(({ id, name }) => ({
              value: id,
              label: name,
            }))}
            onChange={setInterest}
            placeholder="Pesquise por um assunto"
          />
        </div>

        <div className="mt-8">
          <p>
            Preferências de tamanho{" "}
            <span className="text-sm text-red-300">*</span>
          </p>
          <div
            className={twMerge(
              "mt-2 grid grid-cols-4 gap-4",
              companySizes.length === 0 && "grid-cols-1"
            )}
          >
            {companySizes.length === 0 && (
              <p className="text-xs text-muted-foreground">
                Não foi possível carregar os tamanhos
              </p>
            )}
            {companySizes.map((company, index) => (
              <button
                key={index}
                data-selected={companyType.includes(company.id)}
                className="group relative px-3 py-6 flex flex-col items-center justify-center gap-2 rounded-lg border border-input cursor-pointer hover:ring-ring hover:ring-2 hover:ring-offset-2 data-[selected=true]:border-[#b2d56d]"
                onClick={() => handleClick(company.id)}
              >
                <div className="absolute h-5 w-5 flex items-center justify-center top-3 right-3 border border-input rounded-full group-data-[selected=true]:border-ring">
                  <Check
                    size={10}
                    color="#b2d56d"
                    className="hidden group-data-[selected=true]:block"
                  />
                </div>

                <div className="p-2 border border-input rounded-sm">
                  <Building2 size={16} />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold">{company.name}</h3>
                  <span className="text-sm opacity-70">
                    {company.description}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <p>Receber novidades</p>
          <button
            data-selected={news}
            className="group mt-2 inline-flex items-center gap-2"
            onClick={() => setNews((prev) => !prev)}
          >
            <div className="h-5 w-5 flex items-center justify-center top-3 right-3 border border-input rounded-full group-data-[selected=true]:border-ring">
              <Check
                size={10}
                color="#b2d56d"
                className="hidden group-data-[selected=true]:block"
              />
            </div>

            <p className="text-sm">
              Quero receber atualizações e sugestões de novas startups
            </p>
          </button>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="absolute bottom-12 right-32 px-[1.5rem] py-2.5 bg-[#D9EAB8] rounded-full transition-all hover:opacity-70 disabled:cursor-not-allowed disabled:bg-[#C3D1A6] disabled:hover:opacity-100 dark:text-background"
          disabled={!isValid()}
        >
          Começar
        </button>
      </div>
    </form>
  );
}
