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
      settings: {
        Row: {
          id: number;
          minBookingLength: number;
          maxBookingLength: number;
          maxGuestsPerBooking: number;
          breakfastPrice: number;
        };
      };
      bookings: {
        Row: {
          numNights: number;
          numGuests: number;
          villaPrice: number;
          extraPrice: number;
          totalPrice: number;
          status: string;
          hasBreakfast: boolean;
          isPaid: boolean;
        };
      };
    };
  };
};

export type CreateVillaForm = {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: string;
};

export type VillaRowsProps = {
  v: Database["public"]["Tables"]["villa"]["Row"];
  data: Database["public"]["Tables"]["villa"]["Row"];
};
