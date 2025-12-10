"use client";

import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const SearchFormReset = () => {
    const router = useRouter();

    const reset = () => {
        const form = document.querySelector<HTMLFormElement>(".search-form");
        if (form) form.reset();
        router.push("/");
    };

    return (
        <button
            type="button"
            onClick={reset}
            className="search-btn text-white"
        >
            <X className="size-5" />
        </button>
    );
};

export default SearchFormReset;
