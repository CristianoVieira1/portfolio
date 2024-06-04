import ColomboMobile from '../assets/images/gallery/colomboTeste.png'
import FBV2023 from '../assets/images/gallery/fbv.png'
import GazinMobile from '../assets/images/gallery/gazinBank.png'
import OticaHouse from '../assets/images/gallery/house.png'
import Pdc from '../assets/images/gallery/parceiro.png'
import Siga from '../assets/images/gallery/siga.png'

interface GalleryItem {
  imageUrl: string
  thumbnailUrl: string
  title: string
  description: string
  tags: string[]
  width: number
  height: number
}

export const galleryData: GalleryItem[] = [
  {
    imageUrl: `${ColomboMobile}`,
    thumbnailUrl: `${ColomboMobile}`,
    width: 1400,
    height: 1400,
    title: 'Colombo Bank',
    tags: ['Colombo Bank', 'React Native'],
    description: `Desenvolvi o aplicativo Colombo Banck em React Native, utilizando styled-components para estilização avançada, o que permitiu criar interfaces dinâmicas e visualmente atraentes de forma eficiente.
    Optei por componentes reutilizáveis para maximizar a modularidade e facilitar a manutenção do código, garantindo consistência visual e funcional em todo o aplicativo.
    `
  },
  {
    imageUrl: `${GazinMobile}`,
    thumbnailUrl: `${GazinMobile}`,
    width: 1400,
    height: 1400,
    title: 'Gazin Bank',
    tags: ['Gazin Bank', 'React Native'],
    description: `Integrei o sistema PIX, assegurando uma implementação fluida e segura para que os usuários pudessem realizar transações financeiras instantâneas de forma confiável.
      Implementei um canal de ajuda robusto, utilizando tecnologias modernas para garantir uma experiência de suporte ao cliente eficiente e acessível, promovendo uma comunicação clara e direta entre usuários e a equipe de suporte.
      Adotei práticas de desenvolvimento ágil, utilizando metodologias como Scrum, para garantir entregas frequentes e alinhadas com as necessidades do cliente e do mercado.
      `
  },
  {
    imageUrl: `${FBV2023}`,
    thumbnailUrl: `${FBV2023}`,
    width: 1400,
    height: 1400,
    title: 'FBV 2023',
    tags: ['FBV 2023', 'React Native', 'UX Design'],
    description: `Desenvolvi o aplicativo FBV 2023 em um período intensivo de 30 dias, do conceito à entrega final. O objetivo era criar uma plataforma robusta e funcional para um evento específico, garantindo uma experiência intuitiva e eficiente para os usuários.
      Utilizei tecnologias modernas como React Native para o desenvolvimento front-end, garantindo uma interface responsiva e de alto desempenho. A escolha pelo uso de styled-components permitiu um estilo consistente e fácil de manter em todo o aplicativo, enquanto componentes reutilizáveis ajudaram a acelerar o desenvolvimento e garantir consistência visual.`
  },
  {
    imageUrl: `${OticaHouse}`,
    thumbnailUrl: `${OticaHouse}`,
    width: 1400,
    height: 1400,
    title: 'Ótica House',
    tags: ['Ótica House', 'ReactJs', 'VTEX'],
    description: `A Ótica House foi um projeto desafiador onde desenvolvi uma plataforma de ecommerce robusta em ReactJS, integrada de forma eficiente à plataforma VTEX. Utilizando styled-components para estilização avançada e criando componentes reutilizáveis, como o carrinho de compras, filtros dinâmicos de produtos e um sistema de checkout personalizado, a experiência de compra foi cuidadosamente otimizada para oferecer praticidade e estética. Implementei também funcionalidades específicas, como a integração fluida de catálogos de produtos e gestão de estoque em tempo real, garantindo uma experiência de usuário coesa e confiável.`
  },
  {
    imageUrl: `${Pdc}`,
    thumbnailUrl: `${Pdc}`,
    width: 1400,
    height: 1400,
    title: 'Parceiro da Construção',
    tags: ['Parceiro da Construção', 'React Native', 'UX Design'],
    description: `Desenvolvi integralmente o aplicativo da Parceiro da Construção, uma plataforma educacional avançada que combina cursos interativos com uma experiência robusta de plataforma de vídeo. Implementei desde o cadastro de usuários até a integração de vídeos em alta qualidade, garantindo uma experiência de aprendizado imersiva e acessível. Destaquei-me ao permitir que os usuários realizem exames finais diretamente no aplicativo, proporcionando conveniência e eficiência no processo educacional. Utilizei tecnologias avançadas para garantir segurança e desempenho, enquanto os componentes foram desenvolvidos com foco na reutilização e escalabilidade. Assim, o aplicativo não apenas facilita o acesso ao conhecimento, mas também oferece uma plataforma interativa e confiável para o setor da construção.`
  },
  {
    imageUrl: `${Siga}`,
    thumbnailUrl: `${Siga}`,
    width: 1400,
    height: 1400,
    title: 'Parceiro da Construção',
    tags: ['Sistema Siga', 'React Native', 'Reactjs'],
    description: `Participei do desenvolvimento do SIGA, uma plataforma robusta para cadastro e localização de máquinas agrícolas. Implementei o sistema utilizando React Native para a aplicação móvel e ReactJS para a versão web, oferecendo uma experiência unificada e eficiente para diferentes tipos de usuários: usuário padrão, administrador e gestor. Uma das principais funcionalidades do SIGA é a geolocalização em tempo real dos equipamentos agrícolas, permitindo um monitoramento preciso e em tempo real das máquinas em operação. Além disso, o sistema fornece detalhes abrangentes sobre o uso e a manutenção dos equipamentos, garantindo uma gestão eficaz e otimizada para os usuários.`
  }
]
