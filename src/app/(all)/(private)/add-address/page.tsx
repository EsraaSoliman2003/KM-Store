"use client";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import {
    AddressPayload,
    createAddress,
} from "@/rtk/slices/addressSlice";
import { toast } from "sonner";
import FormField from "./_components/FormField";
import FormButtons from "./_components/FormButtons";
import SelectField from "./_components/SelectField";

export default function Page() {
    const t = useTranslations();
    const router = useRouter();
    const dispatch = useAppDispatch();

    const { creating } = useAppSelector((state) => state.address);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<AddressPayload>({
        defaultValues: {
            address_type: "home",
            name: "",
            phone: "",
            city: "",
            national_address: "",
            detailed_address: "",
            postal_code: "",
            is_default: false,
        },
    });

    const onSubmit = async (data: AddressPayload) => {
        try {
            await dispatch(createAddress(data)).unwrap();

            reset();

            toast.success(t("addressCreatedSuccessfully"));

            router.back();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="overflow-hidden rounded-2xl border border-(--border-dark) bg-(--bg-tertiary)">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-(--border-dark) px-4 py-4.5">
                <div>
                    <h1 className="text-[16px] font-semibold text-(--text-primary)">
                        {t("createAddress")}
                    </h1>

                    <p className="mt-0.5 text-xs text-gray-500">
                        {t("createAddressDescription")}
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="grid grid-cols-1 gap-x-5 md:grid-cols-2">
                    {/* Address Type */}
                    <SelectField
                        name="address_type"
                        register={register}
                        error={errors.address_type}
                    />

                    {/* Name */}
                    <FormField
                        label={t("name")}
                        name="name"
                        register={register}
                        error={errors.name}
                        placeholder={t("enterName")}
                        required={t("required")}
                    />

                    {/* Phone */}
                    <FormField
                        label={t("phoneNumber")}
                        name="phone"
                        register={register}
                        error={errors.phone}
                        placeholder={t("enterPhoneNumber")}
                        type="tel"
                        required={t("required")}
                    />

                    {/* City */}
                    <FormField
                        label={t("city")}
                        name="city"
                        register={register}
                        error={errors.city}
                        placeholder={t("enterCity")}
                        required={t("required")}
                    />

                    {/* National Address */}
                    <FormField
                        label={t("nationalAddress")}
                        name="national_address"
                        register={register}
                        error={errors.national_address}
                        placeholder={t("enterNationalAddress")}
                        required={t("required")}
                    />

                    {/* Postal Code */}
                    <FormField
                        label={t("postalCode")}
                        name="postal_code"
                        register={register}
                        placeholder={t("enterPostalCode")}
                    />

                    {/* Detailed Address */}
                    <FormField
                        label={t("detailedAddress")}
                        name="detailed_address"
                        register={register}
                        error={errors.detailed_address}
                        placeholder={t("enterDetailedAddress")}
                        textarea
                        rows={3}
                        required={t("required")}
                    />

                    {/* Default Address */}
                    <div className="flex items-center justify-between gap-4 border-b border-(--border-dark) p-4 md:col-span-2">
                        <div>
                            <label
                                htmlFor="is_default"
                                className="block cursor-pointer text-sm font-medium text-(--text-primary)"
                            >
                                {t("defaultAddress")}
                            </label>

                            <p className="mt-1 text-xs text-gray-500">
                                {t("defaultAddressDescription")}
                            </p>
                        </div>

                        <input
                            id="is_default"
                            type="checkbox"
                            {...register("is_default")}
                            className="h-4 w-4 shrink-0 cursor-pointer accent-(--main)"
                        />
                    </div>

                </div>

                <FormButtons
                    creating={creating}
                    cancelText={t("cancel")}
                    submitText={t("create")}
                    loadingText={t("creating")}
                    onCancel={() => router.back()}
                />
            </form>
        </section>
    );
}