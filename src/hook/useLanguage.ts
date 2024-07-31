import { create } from 'zustand';

const useLanguage = create((set: any) => ({
  language: {
    id: 0,
    value: '',
    type: 'en',
  },
  addLanguage: ({ id, value, type }) => {
    set(() => ({
      language: { id, value, type },
    }));
  },
}));

export default useLanguage;
