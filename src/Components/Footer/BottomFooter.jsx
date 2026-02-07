function BottomFooter() {
    return (
        <div className="flex flex-col items-center py-10 md:flex-row md:justify-between gap-10 px-mobilePadding md:px-componentPadding bg-primary">

            <p className="flex flex-col md:flex-row">
                &copy; 2026 Community Services
                <span className="underline font-bold ml-2">All Right Reserved</span>
            </p>

            <p>
                Developed with by 
                <span className="underline font-bold ml-1">Coding School</span>
            </p>

            <p>
                In partnership with 
                <span className="underline font-bold ml-1">Alight Rwanda</span>
            </p>
        </div>
    );
}
export default BottomFooter