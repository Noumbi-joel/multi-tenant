import { StoreFrontTitle, Typography } from "@/components";

type Props = {
  mainTitleCat: string;
  mainTitleCatDetails: string;
};

const StoreFrontCategoryList = ({
  mainTitleCat,
  mainTitleCatDetails,
}: Props) => {
  return (
    <section className="bg-grayscale-300 py-8 mb-8">
      <StoreFrontTitle title={mainTitleCat} content={mainTitleCatDetails} />
      <div className="my-8 mt-8 md:px-20 px-5 grid grid-cols-1 lg:grid-cols-3 gap-2">
        <Typography className="h-[350px] text-sm text-gray-900 mt-4">
          No categories
        </Typography>
      </div>
    </section>
  );
};

export default StoreFrontCategoryList;
