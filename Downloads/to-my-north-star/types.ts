
export type Page = 'home' | 'achievement' | 'memories' | 'letter' | 'wishes';

export interface Memory {
  id: number;
  imageUrl: string;
  caption: string;
  date: string;
}
