import ShowGallery from "../../Components/Client/WorkedGallery/ShowGallery";
import GlobalHeader from "../../Components/Shared/GlobalHeader";
import GlobalSearch from "../../Components/Shared/GlobalSearch";

export function WorkGallery() {
  return (
    <>
      <GlobalSearch />
      <GlobalHeader title='Our Resent Works' subtitle='Explore our portfolio of successfully completed projects showcasing our quality and dedication to every'/>
      <div className=" py-16 px-[30px] md:px-componentPadding">
        <ShowGallery />
      </div>
    </>
  );
}
