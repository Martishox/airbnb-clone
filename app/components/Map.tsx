"use client";

import { FC } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import { usePropertiesData } from "../lib/hooks/usePropertiesData/usePropertiesData";
import { CldImage } from "next-cloudinary";
import L from "leaflet";
import { AiFillStar } from "react-icons/ai";

interface IMapProps {
  selectedCategory: string;
}

const Map: FC<IMapProps> = ({ selectedCategory }) => {
  const { properties } = usePropertiesData();

  function MyComponent() {
    const map = useMapEvents({
      drag: () => {
        map.panInsideBounds(maxBounds, { animate: false });
      },
      zoomend: () => {
        const currentZoom = map.getZoom();
        if (currentZoom < 2.5) {
          map.setZoom(2.5, { animate: false });
        }
      },
    });
    return null;
  }

  const maxBounds = new L.LatLngBounds(
    new L.LatLng(-90, -180),
    new L.LatLng(90, 180)
  );

  const filteredProperties = selectedCategory
    ? properties.filter((property) =>
        property?.category?.includes(selectedCategory)
      )
    : properties;

  return (
    <>
      <div className="h-[81.5vh] w-full">
        <MapContainer
          center={[51.505, -0.09]}
          maxBounds={maxBounds}
          zoom={2.5}
          scrollWheelZoom={true}
          zoomControl={false}
          className="w-full h-full z-20">
          <MyComponent />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ZoomControl position="topright" />
          {filteredProperties.map((property) => (
            <Marker
              key={"filtered-item"}
              position={[
                property.location.latitude,
                property.location.longitude,
              ]}>
              <Popup>
                <div className="w-48">
                  <CldImage
                    src={property.imageURL}
                    alt="logo"
                    className="rounded-xl"
                    width={300}
                    height={300}
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
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
