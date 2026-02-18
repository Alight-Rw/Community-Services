import ShowGallery from "../../Components/Client/WorkedGallery/ShowGallery";
import GlobalSearch from "../../Components/Shared/GlobalSearch";

export function WorkGallery() {
  return (
    <>
      <GlobalSearch />
      <div className=" px-[30px] md:px-componentPadding">
        <ShowGallery />
      </div>
    </>
  );
}
