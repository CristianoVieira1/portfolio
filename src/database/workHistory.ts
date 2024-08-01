import Digital from "../assets/images/services/digital.png";
import Parceiro from "../assets/images/services/parceiro.png";
import Pontotel from "../assets/images/services/pontotel.png";
import Velty from "../assets/images/services/teste.webp";
import Vibra from "../assets/images/services/vibra.png";

export interface WorkHistoryItem {
  id: number;
  company: string;
  image: string;
  position: string;
  period: string;
  description: string;
  tagOne?: string;
  tagTwo?: string;
  freelancer?: boolean;
}

const workHistory: WorkHistoryItem[] = [
  {
    id: 1,
    image: `${Vibra}`,
    tagOne: "React Native",
    tagTwo: "Senior Developer",
    company: "Vibra",
    position: "React Native Developer",
    period: "06/2024 - Atualmente",
    description: `Na vibra, estou envolvido diretamente no aplicativo de compra de combustíveis.`,
  },
  {
    id: 2,
    image: `${Pontotel}`,
    tagOne: "React Native",
    tagTwo: "Senior Developer",
    company: "Pontotel",
    position: "React Native Developer",
    period: "11/2023 - 06/2024",
    description: `Na Pontotel, estou envolvido em diversos aspectos do desenvolvimento de
    software, desde a concepção até a entrega, garantindo  que nossos clientes
    tenham acesso a soluções robustas e inovadoras.`,
  },
  {
    id: 3,
    image: `${Parceiro}`,
    tagOne: "React Native",
    tagTwo: "Senior Developer",
    company: "Parceiro da Construção",
    freelancer: true,
    position: "React Native Developer",
    period: "08/2023 - 02/2024",
    description: `Desenvolvi uma plataforma de cursos interativa e intuitiva como freelancer.
    Responsável pelo desenvolvimento completo do aplicativo, desde a
    concepção até a implementação. Utilizei tecnologias modernas para garantir
    uma experiência de usuário`,
  },
  {
    id: 4,
    image: `${Digital}`,
    tagOne: "React Native",
    tagTwo: "Senior Developer",
    company: "Digital Business",
    position: "React Native Developer",
    period: "08/2021 - 09/2023 ",
    description: `Tive a oportunidade
    de desempenhar um papel fundamental no desenvolvimento do aplicativo
    Colombo Bank, FBV 2023, Gazin Bank, aplicativo e sistema web Siga. `,
  },
  {
    id: 5,
    image: `${Velty}`,
    tagOne: "React Native",
    tagTwo: "Senior Developer",
    company: "Velty",
    position: "React Native Developer",
    period: "11/2020 - 08/2021",
    description: `Fui responsável pelo
    desenvolvimento de aplicativos móveis inovadores e de alto desempenho
    usando a tecnologia React Native. Isso incluiu a criação de aplicativos nativos.`,
  },
  {
    id: 6,
    image: `${Velty}`,
    tagOne: "React Native",
    tagTwo: "Pleno Developer",
    company: "BASE",
    position: "Desenvolvedor de front-end",
    period: "04/2019 - 11/2020",
    description: `Desenvolvimento de Interfaces de Usuário (UI): Liderei o desenvolvimento
    de interfaces de usuário atraentes e funcionais para uma variedade de
    projetos`,
  },
];

export default workHistory;
