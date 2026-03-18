import { useEffect, useState } from "react";
import { APIsRequestService } from "../../../Services/APIsRequestService";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await APIsRequestService.GalleryAPI();
        const data = await response.json();

        if (!response.ok) return;

        setImages(data.data);
      } catch (error) {
        console.error("Gallery error:", error);
      }
    };

    fetchGallery();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-3 gap-4">
        {images.map((img) => (
          <img
            key={img._id}
            src={img.image}
            alt={img.title}
            className="w-full rounded"
          />
        ))}
      </div>
    </div>
  );
}