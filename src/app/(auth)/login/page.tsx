import Image from "next/image";
import Link from "next/link";
import { Form } from "./form";

export default function Page() {
  return (
    <main className="w-screen h-screen p-6 grid grid-cols-1 gap-12 md:grid-cols-[1fr_2fr]">
      <section className="p-12 hidden flex-col justify-between bg-[#D9EAB8] rounded-lg lg:flex">
        <div className="inline-flex items-center gap-2">
          <Image src="/logo.svg" width={20} height={20} alt="Nexco logo" />
          <h3 className="text-xl tracking-widest dark:text-background">
            NEXCO
          </h3>
        </div>

        <div>
          <h1 className="font-medium text-5xl dark:text-background">
            Começe sua jornada conosco.
          </h1>
          <p className="mt-4 dark:text-background">
            Tenha acesso as melhores recomendações baseadas no seu perfil.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center">
          <div className="max-w-sm p-4 flex flex-col gap-4 bg-black/10 rounded-lg">
            <p className="text-sm dark:text-background">
              Muito interessante! Tive a oportunidade de achar uma startup do
              meu interesse e tive uma rápida resposta do CTO.
            </p>

            <div className="inline-flex items-center gap-4">
              <Image
                className="rounded-md"
                src="/profile-pic.png"
                width={50}
                height={50}
                alt="User relate profile picture"
              />

              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold dark:text-background">
                  Wil Macedo
                </p>
                <p className="text-sm text-black/60">
                  CTO na{" "}
                  <Link
                    href="https://progy.com.br"
                    className="text-black/90 hover:underline"
                  >
                    @Progy
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <button className="mx-auto h-2 w-2 bg-black rounded-full hover:bg-black/60" />
        </div>
      </section>
      <section>
        <Form />
      </section>
    </main>
  );
}
