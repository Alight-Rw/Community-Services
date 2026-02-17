
const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className=" bg-blue-700 py-3 px-3 rounded-4xl lg:text-2xl flex justify-center
     w-full max-w-6xl md:rounded-lg mx-auto sm:text-2xl">
      <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl
 font-bold rounded-3xl md:m-5">
        {title}
      </h2>

      {subtitle && (
        <p className="text-blue-100 mt-3 text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
