import { Company, companies } from "@/config/companies";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

async function getCompanyDetails(
  company: string
): Promise<Company | undefined> {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(companies.find((comp) => comp.slug === company)),
      1000
    );
  });
}

async function getProcessedData(hash: string) {
  try {
    const request = await fetch(
      `https://api.devnet.klever.finance/v1.0/transaction/${hash}?type=0`
    );
    const response = await request.json();

    const encodedData = response.data.transaction.data[0];

    let decodedString = "";
    for (let i = 0; i < encodedData.length; i += 2) {
      let hexCode = encodedData.substring(i, i + 2);
      let charCode = parseInt(hexCode, 16);
      decodedString += String.fromCharCode(charCode);
    }

    decodedString = decodedString.substring(1, decodedString.length - 1);
    const parsedData = JSON.parse(decodedString);

    return parsedData;
  } catch (error) {
    return {
      data: {
        social: 0,
        presence: 0,
      },
    };
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;

  const company = await getCompanyDetails(slug);
  if (!company) {
    notFound();
  }

  const { data: indicator } = await getProcessedData(company.lastHash);

  return (
    <div className="w-screen inline-flex items-center justify-center px-4 md:px-16 mb-12">
      <div className="w-full lg:max-w-5xl">
        <div className="flex items-center gap-1">
          <Link href="/discover" className="hover:underline">
            Descobrir
          </Link>
          <ChevronRight className="h-3 w-3 text-muted-foreground" />
          <span className="opacity-60">{slug}</span>
        </div>

        <div className="mt-4">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <Image
              src={company.logo}
              alt={company.name}
              width={128}
              height={128}
              className="h-24 w-24 rounded-lg object-cover border border-muted-foreground"
            />
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-semibold">{company.name}</h1>
              <p className="max-w-lg text-muted-foreground text-sm">
                {company.shortDescription}
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-col-reverse md:flex-row">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p>{company.description}</p>
              <Image
                src={company.image}
                alt={company.name}
                width={400}
                height={340}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="mb-4 md:mb-0 md:ml-8 min-w-fit p-4 border rounded border-muted-foreground/40 space-y-4 border-b-2 h-fit">
              <h3 className="text-xs text-muted-foreground/40 font-bold uppercase">
                sobre a {company.name}
              </h3>

              <div className="flex flex-col">
                <span className="font-semibold text-sm">Website</span>
                <Link
                  href={company.website}
                  className="text-sm hover:underline"
                >
                  {company.website.replace("https://", "")}
                </Link>
              </div>

              <div className="flex flex-col">
                <span className="font-semibold text-sm">Localização</span>
                <span className="text-sm">{company.city}</span>
              </div>

              <div className="flex flex-col">
                <span className="font-semibold text-sm">Tipo de empresa</span>
                <span className="text-sm text-muted-foreground">N/A</span>
              </div>

              <div className="flex flex-col">
                <span className="font-semibold text-sm">Categorias</span>
                <span className="text-sm text-muted-foreground">N/A</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h1 className="mb-2 text-xl font-semibold">Indicadores</h1>
            <div className="flex items-center gap-4">
              <div className="flex flex-col w-fit p-4 border rounded border-muted-foreground/40 border-b-2">
                <h3 className="text-muted-foreground/60 font-semibold uppercase text-sm">
                  Presença Social
                </h3>
                <span className="text-foreground text-3xl font-bold">
                  {indicator.social}
                </span>
              </div>
              <div className="flex flex-col w-fit p-4 border rounded border-muted-foreground/40 border-b-2">
                <h3 className="text-muted-foreground/60 font-semibold uppercase text-sm">
                  Presença em Mídia
                </h3>
                <span className="text-foreground text-3xl font-bold">
                  {indicator.presence}
                </span>
              </div>
            </div>

            <Link
              className="my-4 text-sm text-muted-foreground hover:underline"
              href={`https://api.devnet.klever.finance/v1.0/transaction/${company.lastHash}?type=0`}
            >
              Explore the transaction
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
