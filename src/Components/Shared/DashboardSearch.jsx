import React, { useEffect, useState, useRef } from "react";

import { Search, Calendar } from "lucide-react";

const DashboardSearch = ({
  value,
  onSearch,
  onStartDateChange,
  onEndDateChange,
  placeholder = "Search...",
}) => {

    const [search, setSearch] = useState(value ?? "");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const startRef = useRef(null);
    const endRef = useRef(null);

    useEffect(() => {
      if (value !== undefined) {
        setSearch(value);
      }
    }, [value]);

    const handleSearch = (e) => {
        const value = e.target.value; setSearch(value);

        if (onSearch) onSearch(value);
    };
    const formatFromPicker = (val) => {
        if (!val) return "";
        const [y, m, d] = val.split("-"); return `${d}/${m}/${y}`;
    };
    const inputBaseStyles = "h-11 w-full border dashboard-input rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/30 text-sm font-bold transition-shadow shadow-sm";
    return (
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full py-4 gap-4">
            <div className="relative w-full lg:w-1/2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 dashboard-muted" size={18} />
                <input type="text" placeholder={placeholder} value={search} onChange={handleSearch} className={`${inputBaseStyles} pl-10 pr-4`} /> </div>
            <div className="flex flex-col md:flex-row flex-1 justify-end items-center gap-4 lg:gap-8 w-full lg:w-auto">
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <label className="text-sm text-[var(--dashboard-text)] font-bold whitespace-nowrap">Start Date:</label>
                    <div className="relative flex items-center w-full md:w-44">
                        <input type="text" placeholder="01/01/2026" value={startDate} onChange={(e) => { setStartDate(e.target.value); onStartDateChange?.(e.target.value); }} className={`${inputBaseStyles} px-3 pr-10`} />
                        <input type="date" ref={startRef} className="absolute opacity-0 pointer-events-none" onChange={(e) => { const formatted = formatFromPicker(e.target.value); setStartDate(formatted); onStartDateChange?.(formatted); }} />
                        <Calendar size={18} className="absolute right-3 dashboard-muted cursor-pointer hover:text-secondary transition-colors" onClick={() => startRef.current.showPicker()} />
                    </div> </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                    <label className="text-sm text-[var(--dashboard-text)] font-bold whitespace-nowrap">End Date:</label>
                    <div className="relative flex items-center w-full md:w-44">
                        <input type="text" placeholder="01/01/2026" value={endDate} onChange={(e) => { setEndDate(e.target.value); onEndDateChange?.(e.target.value); }} className={`${inputBaseStyles} px-3 pr-10`} />
                        <input type="date" ref={endRef} className="absolute opacity-0 pointer-events-none" onChange={(e) => { const formatted = formatFromPicker(e.target.value); setEndDate(formatted); onEndDateChange?.(formatted); }} />
                        <Calendar size={18} className="absolute right-3 dashboard-muted cursor-pointer hover:text-secondary transition-colors"
                            onClick={() => endRef.current.showPicker()} />
                    </div>
                </div>
            </div>
        </div>);
};
export default DashboardSearch;
