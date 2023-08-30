export interface Types {
  name: string;
  color: string;
  overview: {
    content: string;
    source: string;
    image: string;
  };
  structure: {
    content: string;
    source: string;
    image: string;
  };
  geology: {
    content: string;
    source: string;
    image1: string;
    image2: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
}

export type TabsDataTypes = (
  | {
      content: string;
      source: string;
      image1?: string;
      image2?: string;
      image?: string;
    }
  | {
      content: string;
      source: string;
      image1?: string;
      image2?: string;
      image?: string;
    }
)[];
