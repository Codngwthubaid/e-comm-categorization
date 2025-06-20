import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import type { Category } from "@/types/category.types";

interface CategoryCardProps {
    category: Category;
    isSelected: boolean;
    onSelect: (id: string) => void;
}

export default function CategoryCard({ category, isSelected, onSelect }: CategoryCardProps){
    return (
        <Card className="p-4 flex flex-col gap-2 shadow">
            <img src={category.image} alt={category.name} className="rounded h-32 object-cover" />
            <h3 className="text-lg font-semibold">{category.name}</h3>
            <p className="text-sm text-gray-500">{category.description}</p>
            <Checkbox
                checked={isSelected}
                onCheckedChange={() => onSelect(category._id)}
                className="self-end"
            />
        </Card>
    );
}

