import Header from "../_components/Header";
import { useTranslations } from "next-intl";
import RatingSummary from "./_components/RatingSummary";
import AwaitingYourReview from "./_components/AwaitingYourReview";
import Reviews from "./_components/Reviews";

export default function Page() {
  const t = useTranslations();

  return (
    <div className="min-w-0 mb-10">
      <Header
        title={t("reviewsAndRating")}
        subTitle={t("reviewsAndRatingSubtitle")}
      />

      <div className="space-y-5">
        <RatingSummary />
        <AwaitingYourReview />
        <Reviews />
      </div>

    </div>
  );
}