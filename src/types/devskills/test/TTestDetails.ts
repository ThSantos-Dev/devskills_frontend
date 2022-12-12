export type TTestInfo = {
    titulo: string;
    descricao: string;
    duracao: string;
    dataFim: Date;
    empresa: TCompanyInfo;
    tecnologias: TTestSkill[];
    stacks: TTestStack[];
  }
  
export type TCompanyInfo = {
    id: number;
    logo: string;
    nome: string;
}
  
  export type TTestSkill = {
    habilidade: TSkill;
  }
  
  export type TSkill = {
    id: number;
    icone: string;
    nome: string;
  }
  
  export type TTestStack = {
    stack: TStack;
  }
  
  export type TStack = {
    id: number;
    nome: string;
  }
  