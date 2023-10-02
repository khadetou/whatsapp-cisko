import { create } from "zustand";

type Dictionnaries =
  | {
      header: {
        home: string;
        aboutUs: string;
        events: string;
        volunteer: string;
        donateNow: string;
        campaign: string;
        contact: string;
        contactUs: string;
      };
      heroSection: {
        topTitle: string;
        mainTitle: string;
        paragraph: string;
        donateButton: string;
      };
    }
  | undefined;
interface DictionnariesProps {
  dictionnaries: Dictionnaries;

  setdictionnaries: (dictionnaries: Dictionnaries) => void;
}

const useDictionnaries = create<DictionnariesProps>((set) => ({
  dictionnaries: undefined,
  setdictionnaries: (dictionnaries) => set({ dictionnaries }),
}));

export default useDictionnaries;
