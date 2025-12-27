import { z } from "zod";

export const visualizerSearchSchema = z.object({
  fontSize: z.number().optional().default(14),
  editorExpanded: z.boolean().optional().default(false),
  activeTab: z.string().optional().default("visualize"),
});

export type VisualizerSearch = z.infer<typeof visualizerSearchSchema>;
