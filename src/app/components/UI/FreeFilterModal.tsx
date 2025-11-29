"use client";

import { useState } from "react";
import Modal from "./Modal";

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: Filters) => void;
}

export interface Filters {
  sortByPrice?: "asc" | "desc";
  sortByRating?: "asc" | "desc";
  sortByDiscount?: "asc" | "desc";
}

export default function FreeFilterModal({
  isOpen,
  onClose,
  onApply,
}: FilterModalProps) {
  const [filters, setFilters] = useState<Filters>({});

  const handleCheckboxChange = (key: keyof Filters, value: "asc" | "desc") => {
    setFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? undefined : value, // toggle behavior
    }));
  };

  const handleApply = () => {
    onApply(filters);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="text-white space-y-4">
        <h2 className="text-xl font-semibold mb-2">Sort Options</h2>

        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.sortByRating === "desc"}
              onChange={() => handleCheckboxChange("sortByRating", "desc")}
            />
            Rating: High → Low
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.sortByRating === "asc"}
              onChange={() => handleCheckboxChange("sortByRating", "asc")}
            />
            Rating: Low → High
          </label>
        </div>

        <button
          onClick={handleApply}
          className="mt-4 w-full py-2 bg-white/20 hover:bg-white/30 transition rounded-lg"
        >
          Apply Filters
        </button>
      </div>
    </Modal>
  );
}
