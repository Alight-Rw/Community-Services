const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="bg-blue-800 py-6 px-4 sm:px-6 lg:px-8 w-full max-w-[calc(100%-48px)] mx-auto rounded-xl">
      <h2 className="text-white text-xl sm:text-2xl md:text-2xl font-bold -mt-8 px-5 py-5">
        {title}
      </h2>

      {subtitle && (
        <p className="text-blue-100 text-sm md:text-base mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
};
export default SectionHeader