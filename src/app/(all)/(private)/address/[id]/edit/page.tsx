"use client";

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { useAppDispatch, useAppSelector } from "@/rtk/hooks";
import {
  AddressPayload,
  getAddressById,
  updateAddress,
} from "@/rtk/slices/addressSlice";

import FormField from "../../../add-address/_components/FormField";
import FormButtons from "../../../add-address/_components/FormButtons";
import SelectField from "../../../add-address/_components/SelectField";

export default function Page() {
  const t = useTranslations();
  const router = useRouter();
  const params = useParams();
  const dispatch = useAppDispatch();

  const id = Number(params.id);

  const { address, loading, updating } = useAppSelector(
    (state) => state.address
  );

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

  // Get address
  useEffect(() => {
    if (!Number.isNaN(id)) {
      dispatch(getAddressById(id));
    }
  }, [dispatch, id]);

  // Fill form when address is loaded
  useEffect(() => {
    if (address) {
      reset({
        address_type: address.address_type,
        name: address.name,
        phone: address.phone,
        city: address.city,
        national_address: address.national_address,
        detailed_address: address.detailed_address,
        postal_code: address.postal_code,
        is_default: address.is_default,
      });
    }
  }, [address, reset]);

  const onSubmit = async (data: AddressPayload) => {
    try {
      await dispatch(
        updateAddress({
          id,
          data,
        })
      ).unwrap();

      toast.success(t("addressUpdatedSuccessfully"));

      router.back();
    } catch (error) {
      console.error(error);
    }
  };

  // Loading address
  if (loading) {
    return (
      <section className="overflow-hidden rounded-2xl border border-(--border-dark) bg-(--bg-tertiary)">
        <div className="animate-pulse">
          <div className="border-b border-(--border-dark) px-4 py-5">
            <div className="h-5 w-32 rounded bg-(--bg-secondary)" />
            <div className="mt-2 h-3 w-56 rounded bg-(--bg-secondary)" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className="border-b border-(--border-dark) p-4"
              >
                <div className="mb-2 h-4 w-20 rounded bg-(--bg-secondary)" />
                <div className="h-10 w-full rounded-lg bg-(--bg-secondary)" />
              </div>
            ))}
          </div>

          <div className="flex justify-end gap-3 px-4 py-4">
            <div className="h-10 w-24 rounded-lg bg-(--bg-secondary)" />
            <div className="h-10 w-28 rounded-lg bg-(--bg-secondary)" />
          </div>
        </div>
      </section>
    );
  }

  // Address not found
  if (!address) {
    return (
      <section className="flex min-h-[50vh] items-center justify-center">
        <p className="text-sm text-(--text-muted)">
          {t("addressNotFound")}
        </p>
      </section>
    );
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-(--border-dark) bg-(--bg-tertiary)">
      {/* Header */}
      <div className="border-b border-(--border-dark) px-4 py-4.5">
        <h1 className="text-[16px] font-semibold text-(--text-primary)">
          {t("editAddress")}
        </h1>

        <p className="mt-0.5 text-xs text-gray-500">
          {t("editAddressDescription")}
        </p>
      </div>

      {/* Form */}
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
            error={errors.postal_code}
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
          creating={updating}
          cancelText={t("cancel")}
          submitText={t("update")}
          loadingText={t("updating")}
          onCancel={() => router.back()}
        />
      </form>
    </section>
  );
}