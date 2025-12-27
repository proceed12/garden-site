import { Garden } from "@omnidotdev/garden";
import { Link, createFileRoute } from "@tanstack/react-router";

import schema from "@/lib/schema/garden.json";

export const Route = createFileRoute("/demo")({
  component: DemoPage,
});

function DemoPage() {
  return (
    <div className="flex h-full w-full flex-col">
      <div className="border-border border-b bg-card p-3 shadow-sm">
        <div className="mx-auto flex items-center justify-between">
          <div>
            <h1 className="font-semibold text-xl">Garden Demo</h1>
            <h4 className="text-foreground/80 text-sm">
              This demo represents what is rendered when using the{" "}
              <code className="mx-1 rounded bg-muted px-1">{`<Garden />`}</code>
              component.
            </h4>
          </div>

          <Link
            to="/visualizer"
            className="rounded border border-primary/20 px-3 py-1 text-primary text-sm hover:border-primary/40 hover:text-primary/80"
          >
            Go to Full Visualizer →
          </Link>
        </div>
      </div>

      <div className="m-12 flex-1">
        <Garden schema={schema} showMinimap={false} showControls={false} />
      </div>
    </div>
  );
}
