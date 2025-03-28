// Definição do tipo para um módulo
export type ModuloType = {
    id: number;
    titulo: string;
    resumo: string;
  };
  
  // Lista de módulos
  const modulos: ModuloType[] = [
    { id: 1, titulo: "Introdução ao Cloud 101", resumo: "Apenas alguns motivos para se aprender sobre a nuvem, como: " },
    { id: 2, titulo: "Introdução à Computação em Nuvem", resumo: "Estudei os benefícios da computação em nuvem e os principais modelos de serviço (IaaS, PaaS, SaaS)." },
    { id: 3, titulo: "Introdução à AWS", resumo: "Conheci a plataforma AWS, sua infraestrutura global e principais recursos." },
    { id: 4, titulo: "Principais Serviços da AWS", resumo: "Explorei serviços como EC2, S3, Lambda, RDS e suas aplicações." },
    { id: 5, titulo: "Carreiras na Nuvem", resumo: "Descobri oportunidades de carreira na área de computação em nuvem e certificações AWS." }
  ];
  
  export default modulos;
  