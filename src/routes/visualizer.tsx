import { createFileRoute } from "@tanstack/react-router";
import { Suspense } from "react";

import { Visualizer } from "@/components/visualizer";
import { visualizerSearchSchema } from "@/lib/constants/searchParams";

export const Route = createFileRoute("/visualizer")({
  validateSearch: visualizerSearchSchema,
  component: VisualizerPage,
});

function VisualizerPage() {
  return (
    <div className="flex h-full w-full">
      <Suspense
        fallback={
          <div className="flex h-full w-full items-center justify-center">
            Loading visualizer...
          </div>
        }
      >
        <Visualizer />
      </Suspense>
    </div>
  );
}
