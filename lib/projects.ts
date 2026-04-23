export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  highlights: string[];
  status: "shipped" | "wip";
  github?: string;
  index: string;
};

export const projects: Project[] = [
  {
    id: "boltx",
    name: "BoltX",
    tagline: "Fast file search for developers",
    description:
      "A cross-platform CLI file search tool built in Go. Uses fuzzy matching to recursively search the file system — no exact names required. Designed for developer speed with clean, modular, extensible architecture.",
    tags: ["Go", "CLI", "Developer tool"],
    highlights: ["Fuzzy matching engine", "Recursive traversal", "Modular architecture"],
    status: "shipped",
    github: "https://github.com/Tomdabom27",
    index: "01",
  },
  {
    id: "notes",
    name: "Notes",
    tagline: "A native desktop writing tool",
    description:
      "A fast desktop note-taking app with live Markdown preview, syntax highlighting, and autosave. Built with Rust and Tauri for native performance. Feels like a professional tool — because it's engineered like one.",
    tags: ["Rust", "Tauri", "Desktop app"],
    highlights: ["Live Markdown preview", "Syntax highlighting", "Autosave"],
    status: "shipped",
    github: "https://github.com/Tomdabom27",
    index: "02",
  },
  {
    id: "toolshare",
    name: "Tool Share",
    tagline: "Rent tools from your neighbours",
    description:
      "A mobile app where neighbours rent tools using a credit system. Rethinking how communities share physical resources — built in Flutter with a clean marketplace UI and community-first concept.",
    tags: ["Flutter", "Mobile", "Marketplace"],
    highlights: ["Credit-based system", "Community marketplace", "Flutter"],
    status: "wip",
    github: "https://github.com/Tomdabom27",
    index: "03",
  },
];
