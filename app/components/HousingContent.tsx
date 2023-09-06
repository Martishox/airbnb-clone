"use client";
import { FC } from "react";
import { CldImage } from "next-cloudinary";
import { usePropertiesData } from "@/app/lib/hooks/usePropertiesData/usePropertiesData";
import { AiFillStar } from "react-icons/ai";

interface IHousingContent {
  selectedCategory: string;
}

const HousingContent: FC<IHousingContent> = ({
  selectedCategory,
}) => {
  const { properties } = usePropertiesData();

  const filteredProperties = selectedCategory
    ? properties.filter((property) =>
        property?.category?.includes(selectedCategory)
      )
    : properties;

  return (
    <>
      <div className="grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mx-10 ">
        {filteredProperties.length > 0
          ? filteredProperties.map((property, index) => (
              <div
                key={`housing-item-${index}`}
                className="flex flex-col mt-5 mb-3 mx-auto w-full sm:w-auto sm:mx-2">
                <CldImage
                  src={property.imageURL}
                  alt="logo"
                  className="rounded-xl w-full h-full"
                  width={278}
                  height={288}
                  crop="fill"
                />
                <div className="flex justify-between items-center mt-3">
                  <span className="font-bold truncate">
                    {property.title}
                  </span>
                  <div className="flex items-center mr-2">
                    <AiFillStar />
                    <span className="font-normal pl-1">
                      {typeof property.rating === "string"
                        ? property.rating
                        : property.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
                <h2 className="text-gray-600">{property.desc}</h2>
                <span className="font-bold">
                  &euro; {property.price}{" "}
                  <span className="font-normal">night</span>
                </span>
              </div>
            ))
          : properties.map((property, index) => (
              <div
                key={`housing-item-${index}`}
                className="mt-5 mb-3 mx-auto sm:mx-2">
                <CldImage
                  src={property.imageURL}
                  alt="logo"
                  className="rounded-xl object-fit"
                  width={278}
                  height={288}
                  crop="fill"
                />
                <div className="flex justify-between mt-3">
                  <span className="font-bold">{property.title}</span>
                  <div className="flex items-center mr-2">
                    <AiFillStar />
                    <span className="font-normal pl-1">
                      {property.rating}
                    </span>
                  </div>
                </div>
                <h2 className="text-gray-600">{property.desc}</h2>
                <span className="font-bold">
                  &euro; {property.price}{" "}
                  <span className="font-normal">night</span>
                </span>
              </div>
            ))}
      </div>
    </>
  );
};

export default HousingContent;
