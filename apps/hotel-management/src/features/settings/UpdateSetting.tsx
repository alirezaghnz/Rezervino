import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useSetting } from "./hooks/useSetting";
import { useUpdateSetting } from "./hooks/useUpdateSetting";

function UpdateSettings() {
  const {
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSetting() as any;

  const { isPending, editSetting } = useUpdateSetting();

  function handleSetting(e: any, field: any) {
    const { value } = e.target;
    if (!value) return;
    editSetting({ [field]: value });
  }
  return (
    <Form>
      <FormRow label="محدودیت کمترین روز برای رزرو">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          disabled={isPending}
          onBlur={(e) => handleSetting(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow label="محدودیت بیشترین روز رزرو">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          disabled={isPending}
          onBlur={(e) => handleSetting(e, "maxBookingLength")}
        />
      </FormRow>
      <FormRow label="محدودیت تعداد مهمان">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          disabled={isPending}
          onBlur={(e) => handleSetting(e, "maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow label="قیمت صبحانه">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          disabled={isPending}
          onBlur={(e) => handleSetting(e, "breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettings;
