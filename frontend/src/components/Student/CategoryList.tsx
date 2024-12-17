import categoryApi from "@/apis/categoryApi";
import { Category } from "@/interfaces";
import { useEffect, useState } from "react";

export default function CategoryList(){
    const [categories, setCategories] = useState<Category[]>([]);
    useEffect(() => {
        async function fetchData() {
            const apiResult = await categoryApi.getAllCategory();
            if (apiResult) {
                setCategories(apiResult.data);
            }
        }
        fetchData();
    }, [categories]);
    return (
        <div className="flex content-center justify-between mx-4 border-b-2 py-4 shadow-xl border-x-transparent">
            {
                categories.map((category) => (
                    <span key={category.id} className="font-bold text-[#5d5fef]">
                        {category.name}
                    </span>
                ))
            }
        </div>
    )
}