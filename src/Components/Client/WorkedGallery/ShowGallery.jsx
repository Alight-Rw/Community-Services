import { GalleryImages } from "./GalleryImages";

function splitIntoColumns(items, cols) {
  const columns = Array.from({ length: cols }, () => []);
  items.forEach((item, i) => {
    columns[i % cols].push(item);
  });
  return columns;
}

export default function ShowGallery() {
  const columns = splitIntoColumns(GalleryImages, 3);

  return (
    <div className="w-full flex flex-col gap-6 p-4 sm:justify-center  sm:flex-row sm:flex-wrap md:flex-nowrap">
      {columns.map((colItems, colIndex) => (
        <div
          key={colIndex}
          className="flex flex-col gap-6 w-full sm:w-[48%] md:flex-1"
        >
          {colItems.map((item, itemIndex) => (
            <div className="relative" key={itemIndex}>
              <img
                className="rounded-xl w-full block object-cover"
                src={item.img}
                alt={item.title}
              />

              <div className="bg-blue-500/50 absolute bottom-2 left-3 text-white text-[8px] sm:text-[10px] font-sans px-3 py-1.5 rounded-md">
                <h1>{item.title}</h1>
                <div>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
