export type Database = {
  public: {
    Tables: {
      villa: {
        Row: {
          id: number;
          name: string;
          maxCapacity: number;
          regularPrice: number;
          discount: number;
          description: string;
          image: string;
        };
      };
    };
  };
};
