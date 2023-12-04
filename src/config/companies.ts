export interface Company {
  name: string;
  slug: string;
  shortDescription: string;
  logo: string;
  image: string;
  description: string;
  city: string;
  website: string;
  lastHash: string;
}

export const companies: Company[] = [
  {
    name: "Index Digital",
    slug: "index-digital",
    shortDescription:
      "A Index Digital é uma software house com sede em Fortaleza, Ceará, que há mais de 17 anos desenvolve soluções de tecnologia, como sites e apps.",
    logo: "https://idx.digital/wp-content/themes/index_2021/assets/images/logo-index-pink.png",
    image: "https://idx.digital/wp-content/uploads/2021/05/about-image.png",
    description: `A Index Digital é uma software house com sede em Fortaleza – Ceará, que há mais de 17 anos desenvolve soluções de tecnologia, como sites e portais, aplicativos para dispositivos móveis (celulares e tablets), lojas virtuais, integrações de sistemas via APIs, blogs, hotsites, intranets, landing pages e startups.

      Além disso, atuamos nas áreas de consultoria de produtos digitais, SEO e UI/UX. Contamos com soluções customizadas voltadas às necessidades de cada um de nossos clientes, buscando através da tecnologia, oferecer inovação e resultados online.`,
    city: "Fortaleza",
    website: "https://idx.digital/",
    lastHash:
      "497986b480fcbe3e0e1e1ba10c0429922f5722bae6a3d4ca02165170b994754b",
  },
  {
    name: "Rock!",
    slug: "rock",
    shortDescription:
      "Porque escolher a Rock? Se você procura uma agência de publicidade completa com planejamento, criação e produção venha nos conhecer melhor. Você vai se surpreender!",
    logo: "https://www.agenciarock.com.br/images/cafe.png",
    image: "https://www.agenciarock.com.br/images/tablet5.jpg",
    description: `Nossa agência trabalha com uma equipe dedicada e especializada em projetos de brand, criação de campanhas publicitárias, sites, marketing digital e comunicação. Oferecemos nosso conhecimento e experiência na realização de projetos que tragam reconhecimento e resultados reais para sua empresa. Estaremos focados no seu objetivo.
    Sim, nós atendemos clientes de diversos segmentos. Sempre adoramos um desafio, essa é nossa atitude e trabalhar com seriedade é o nosso compromisso.
    Para maiores informações sobre a nossa empresa e possíveis trabalhos ficaremos felizes em atendê-los.`,
    city: "São Paulo",
    website: "https://agenciarock.com.br/",
    lastHash:
      "497986b480fcbe3e0e1e1ba10c0429922f5722bae6a3d4ca02165170b994754b",
  },
];

export const blockchainC = [
  // 497986b480fcbe3e0e1e1ba10c0429922f5722bae6a3d4ca02165170b994754b
  {
    company: "Index Digital",
    data: {
      social: 45,
      presence: 34,
    },
  },
  // 13f03e7f0bda87e178c9b793eb222ce8b359bed85af89f6cc367f368bc2aa70f
  {
    company: "Roc",
    data: {
      social: 67,
      presence: 54,
    },
  },
  // 0af2798647909d9b58bf2f1af74c0c81f21115148e41c2cceaf515759a7b2185
  {
    company: "Bolero",
    data: {
      social: 54,
      presence: 67,
    },
  },
];
