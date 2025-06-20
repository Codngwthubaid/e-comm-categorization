import { useEffect } from "react";
import CategoryCard from "../components/CategoryCard";
import { Button } from "@/components/ui/button";
import { useCategoryStore } from "@/store/category.store";

export default function Interests () {
  const {
    categories,
    selected,
    fetchCategories,
    toggleCategory,
    saveSelected,
    page,
    setPage,
  } = useCategoryStore();

  useEffect(() => {
    fetchCategories();
  }, [page]);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Pick your interests</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {(categories ?? []).map((cat) => (
          <CategoryCard
            key={cat._id}
            category={cat}
            isSelected={selected.includes(cat._id)}
            onSelect={toggleCategory}
          />
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="space-x-2">
          <Button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</Button>
          <Button onClick={() => setPage(page + 1)}>Next</Button>
        </div>
        <Button onClick={saveSelected}>Continue</Button>
      </div>
    </div>
  );
};

