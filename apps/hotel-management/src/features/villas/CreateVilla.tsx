import { useForm, type SubmitHandler } from "react-hook-form";
import type { CreateVillaForm } from "../../types/database.types";
import { useCreateVilla } from "./hooks/useCreateVilla";
import { useUpdateVilla } from "./hooks/useUpdateVilla";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

export function CreateVilla({
  villaEdit = {},
  onCloseModal,
}: {
  villaEdit?: Partial<CreateVillaForm>;
  onCloseModal?: () => void;
}) {
  const { id: editId, ...editValue } = villaEdit;
  const { isCreating, createVilla } = useCreateVilla();
  const { isEditing, editVilla } = useUpdateVilla();
  const editSession = Boolean(editId);
  const { register, handleSubmit, reset } = useForm<CreateVillaForm>({
    defaultValues: editSession ? editValue : {},
  });

  //for disable feature
  const isWorking = isCreating || isEditing;

  const onSubmit: SubmitHandler<CreateVillaForm> = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    const payload = { ...data, image };
    const commonOption = {
      onSuccess: () => {
        reset();
        onCloseModal?.();
      },
    };

    // if editSession find , villa edited and if not createVilla(insert & update both handle together)
    if (editSession)
      editVilla({ newVillaData: payload, id: editId }, commonOption);
    else createVilla(payload, commonOption);
    // console.log(data);
  };
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="نام ویلا">
        <Input
          type="text"
          id="name"
          {...register("name")}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="ظرفیت">
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity")}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="قیمت ویلا">
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice")}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="تخفیف">
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount")}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="توضیحات">
        <Textarea
          id="description"
          defaultValue=""
          {...register("description")}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="عکس خانه">
        <FileInput id="image" accept="image/*" {...register("image")} />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          size="medium"
          type="reset"
          disabled={isWorking}
          onClick={() => onCloseModal?.()}
        >
          بازگشت
        </Button>
        <Button variation="primary" size="medium" disabled={isWorking}>
          {editSession ? "ویرایش" : "اضافه"}
        </Button>
      </FormRow>
    </Form>
  );
}
