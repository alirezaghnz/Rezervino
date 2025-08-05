import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertVilla } from "../../services/apiVillas";
import toast from "react-hot-toast";
import type { CreateVillaForm } from "../../types/database.types";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

export function CreateVilla({ villaEdit = {} }) {
  const { id: editId, ...editValue } = villaEdit;
  const editSession = Boolean(editId);
  const { register, handleSubmit, reset } = useForm<CreateVillaForm>({
    defaultValues: editSession ? editValue : {},
  });
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createVilla } = useMutation({
    mutationFn: insertVilla,
    onSuccess: () => {
      toast.success("ویلا جدید اضافه شد");
      queryClient.invalidateQueries({ queryKey: ["villa"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const { isLoading: isEditing, mutate: editVilla } = useMutation({
    mutationFn: ({ newVillaData, id }) => insertVilla(newVillaData, id),
    onSuccess: () => {
      toast.success("ویلا با موفقیت ویرایش شد");
      queryClient.invalidateQueries({ queryKey: ["villa"] });
      reset();
    },
    onError: (err) => toast.error(err.message),
  });

  const isWorking = isCreating || isEditing;

  const onSubmit: SubmitHandler<CreateVillaForm> = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (editSession)
      editVilla({ newVillaData: { ...data, image }, id: editId });
    else createVilla({ ...data, image: image });
    // console.log(data);
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow>
        <Label htmlFor="name">نام ویلا</Label>
        <Input
          type="text"
          id="name"
          {...register("name")}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">حداکثر ظرفیت</Label>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity")}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">قیمت ویلا</Label>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice")}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">تخفیف</Label>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount")}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="description">توضیحات</Label>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description")}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">عکس ویلا</Label>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image")}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset" disabled={isWorking}>
          بازگشت
        </Button>
        <Button disabled={isWorking}>{editSession ? "ویرایش" : "اضافه"}</Button>
      </FormRow>
    </Form>
  );
}
