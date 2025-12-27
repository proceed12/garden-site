import { useNavigate, useSearch } from "@tanstack/react-router";
import { useCallback } from "react";

import type { VisualizerSearch } from "@/lib/constants/searchParams";

type SearchParamsSetter = (
  updater:
    | Partial<VisualizerSearch>
    | ((prev: VisualizerSearch) => Partial<VisualizerSearch>),
) => void;

const useSearchParams = (): [VisualizerSearch, SearchParamsSetter] => {
  const search = useSearch({ from: "/visualizer" });
  const navigate = useNavigate();

  const setSearchParams: SearchParamsSetter = useCallback(
    (updater) => {
      navigate({
        to: "/visualizer",
        search: (prev) => {
          const updates =
            typeof updater === "function"
              ? updater(prev as VisualizerSearch)
              : updater;
          return { ...prev, ...updates };
        },
        replace: true,
      });
    },
    [navigate],
  );

  return [search as VisualizerSearch, setSearchParams];
};

export default useSearchParams;
