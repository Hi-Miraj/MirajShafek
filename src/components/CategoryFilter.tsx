
import { useState } from "react";

interface CategoryFilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
  activeCategory: string;
}

const CategoryFilter = ({
  categories,
  onFilterChange,
  activeCategory,
}: CategoryFilterProps) => {
  return (
    <div className="scrollbar-none flex gap-2 overflow-x-auto py-2">
      <button
        onClick={() => onFilterChange("ALL")}
        className={`whitespace-nowrap rounded-full px-4 py-1 text-sm font-medium transition-colors ${
          activeCategory === "ALL"
            ? "bg-primary text-primary-foreground"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        }`}
      >
        ALL
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`whitespace-nowrap rounded-full px-4 py-1 text-sm font-medium transition-colors ${
            activeCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
