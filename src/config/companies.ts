export interface Company {
  name: string;
  slug: string;
  type: string;
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
    type: "Publicidade",
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
    type: "Publicidade",
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
  {
    name: "Daki",
    slug: "daki",
    type: "Tecnlogia",
    shortDescription:
      "No mercado online Daki, você encontra tudo que precisa com apenas alguns cliques. Experimente nossa entrega em minutos e aproveite mais o seu tempo.",
    logo: "https://assets-global.website-files.com/62d028335f5d2681ded451b2/62d0321385a6cb58db7fcb93_logo%20daki.svg",
    image:
      "https://assets-global.website-files.com/62d028335f5d2681ded451b2/62d04666c0e987162a4a9db6_DAKI-BINGO-0075-3_V4%20(1).png",
    description: `A Daki é um aplicativo de mercado para essenciais sob demanda, conhecida por ser pioneira em entregas rápidas no Brasil. Fundada em janeiro de 2021 por Alex Bretzner, Rafael Vasto e Rodrigo Maroja, a Daki opera prioritariamente em um modelo de dark stores, lojas fechadas ao público com raio de entrega reduzido a poucos quilômetros e com estoque próprio, que viabilizam a agilidade e eficiência desde a escolha dos produtos até a entrega, garantindo a melhor experiência de compra e cumprindo com sua missão de transformar momentos comuns em extraordinários.

    Com mais de 3000 produtos, que incluem: mercearia, hortifruti, carnes & congelados, padaria, bebidas, casa & limpeza, cuidado pessoal, bebê e até produtos para os pets, a Daki faz opera e atende em São Paulo, Barueri, Santos, Campinas, ABC Paulista, Osasco, Guarulhos, Rio de Janeiro, Niterói e em Belo Horizonte, e já conta com mais de 900 colaboradores. Em junho de 2021, a startup se fundiu com a JOKR. Em dezembro do mesmo ano, em seu segundo aporte de investimentos, a empresa passou a valer 1.2 bilhão de dólares, se tornando o unicórnio mais rápido das Américas.`,
    city: "Belo Horizonte",
    website: "https://soudaki.com/",
    lastHash:
      "0af2798647909d9b58bf2f1af74c0c81f21115148e41c2cceaf515759a7b2185",
  },
];
