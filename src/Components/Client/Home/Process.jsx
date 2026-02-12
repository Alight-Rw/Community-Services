

const steps = [
  { id: 1, label: "Available services", text: "hello", leftLine: false, rightLine: false },
  { id: 2, label: "Book services", text: "hello", leftLine: true, rightLine: false },
  { id: 3, label: "Booking confirmation", text: "hello", leftLine: true, rightLine: false },
  { id: 4, label: "Service Excution", text: "hello", leftLine: true, rightLine: false },
  { id: 5, label: "Client served", text: "hello", leftLine: true, rightLine: true },
  { id: 6, label: "Happy client", text: "hello", leftLine: true, rightLine: true },
];

 function Process() {
  return (
    <div className="w-full px-componentPadding py-20 flex justify-center items-center">
      <div className="flex justify-center items-center gap-6">

        {steps.map((step) => (
            
          <div key={step.id} className="flex items-center gap-
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
        ">

            {/* Left line */}
            {step.leftLine && (
              <hr className="border-t-2 border-universal mb-15 w-32" />
            )}

            {/* Step */}
            <div className="flex flex-col items-center">

              {/* Diamond */}
              <div className="border-2 border-universal w-[134px] h-[134px] rotate-45 flex justify-center items-center">
                <h1 className="text-blue-500 text-center -rotate-45">
                  {step.text}
                </h1>
              </div>

              {/* Label */}
              <p className="mt-10 text-center text-sm font-medium max-w-[160px]">
                {step.label}
              </p>
            </div>

            {/* Right line */}
            {step.rightLine && (
              <hr className="border-t-2 border-universal mb-15 w-32" />
            )}
          </div>
        ))}

      </div>
    </div>
  );
}
export default Process