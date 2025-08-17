import { PAGE_SIZE } from "../utils/constantist";
import supabase from "./supabase";

export async function getRezervs({ filter, sortBy, page }: any) {
  let query = supabase
    .from("bookings")
    // with count: exact to get the total number of records for Pagination
    .select("*,villa(name),guests(fullName,email)", { count: "exact" });

  // Filter on the back-end for better performance
  if (filter) {
    query = query[filter.method || "eq"](filter.field, filter.value);
  }

  //Sort on the back-end side
  if (sortBy.field) {
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "desc",
    });
  }

  //Pagination

  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }
  //Execute the query
  const { data, error, count } = await query;

  if (error) {
    console.error(error);
    throw new Error("رزروها لو نمی شوند.");
  }

  return { data, count };
}

export async function getRezerv(id: number) {
  const { data, error } = await supabase
    .from("bookings")
    .select("*, villa(*), guests(*)")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("رزروی پیدا نشد");
  }

  return data;
}

//for Update Rezerv
export async function updateRezerv(id: number, obj: any) {
  const { data, error } = await supabase
    .from("bookings")
    .update(obj)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("رزرو اپدیت نشد");
  }
  return data;
}

//for Delete Rezerv
export async function deleteRezerv(id: number) {
  const { data, error } = await supabase.from("bookings").delete().eq("id", id);
  if (error) {
    console.error(error);
    throw new Error("رزرو با موفقیت حذف نشد");
  }

  return data ?? [];
}
