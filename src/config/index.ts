interface Interest {
  label: string;
  value: string;
}

interface CompanySize {
  name: string;
  size: string;
}

export const interests: Interest[] = [
  {
    label: "Finanças",
    value: "finance",
  },
  {
    label: "Tecnologia",
    value: "technology",
  },
  {
    label: "Esportes",
    value: "sports",
  },
];

export const companySizes: CompanySize[] = [
  {
    name: "Semente",
    size: "1-10",
  },
  {
    name: "Pequeno",
    size: "11-50",
  },
  {
    name: "Médio",
    size: "51-200",
  },
  {
    name: "Largo",
    size: "201+",
  },
];
