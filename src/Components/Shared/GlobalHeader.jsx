const GlobalHeader = ({ title, subtitle }) => {
  return (
  <div className="px-componentPadding">
       <div className="bg-secondary w-full rounded-3xl  py-6  ">
      <h2 className="text-white text-3xl sm:text-2xl md:text-4xl px-10 font-bold">
        {title}
      </h2>

      {subtitle && (
        <p className="text-universal text-xm px-10 text-base">
          {subtitle}
        </p>
      )}
    </div>
 </div>
  );
};

export default GlobalHeader;