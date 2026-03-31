import { Project } from "@/types/portfolio";

export const featuredProject: Project = {
  title: "Vaccine Game",
  status: "Live / Deployed",
  role: "Full-Stack Developer",
  shortDescription:
    "A browser-based single-player and multiplayer strategy game where players coordinate infrastructure, resources, vaccines, ERFs, and event-card responses to contain a global virus outbreak.",
  expandedDescription:
    "I built a web-based strategy game centered on outbreak management, logistics, and cooperative decision-making. Players join a shared game session, choose continents and colors, build infrastructure such as research centers, distribution hubs, airports, CDCs, and ports, then move resources, vaccines, ERFs, and ships across a world map while responding to dynamic event cards and escalating virus pressure. The project was designed to create a more systems-driven, replayable experience than a static board or solo simulation, with configurable difficulty, multiplayer synchronization, and a UI built to support complex game state without losing usability.",
  whyItMatters:
    "This project turns a complex outbreak-response simulation into an interactive, multiplayer strategy experience that emphasizes systems thinking, tradeoffs, and coordination. It demonstrates how game design, UI design, and transactional real-time state management can work together in a polished web application.",
  techStack: [
    "TypeScript",
    "React",
    "Vite",
    "React Router",
    "Firebase / Firestore",
    "Tailwind CSS",
    "Headless UI",
    "Framer Motion",
    "Vitest",
    "Storybook",
  ],
  contributions: [
    "Built the game's core systems for turn flow, outbreak logic, end-game resolution, difficulty-based configuration, and event-card behavior.",
    "Implemented real-time multiplayer state synchronization with Firestore transactions for player actions, shared board state, and game progression.",
    "Designed and shipped the world-map gameplay UI, including region actions, overlays, title bar status systems, modal flows, and board-level interaction patterns.",
    "Added advanced logistics systems such as ports, ocean zones, ships, cargo transfer, and shared event-card state visible across players.",
    "Wrote and maintained automated tests for game rules, config resolution, deployment actions, event cards, ship actions, and end-game behavior.",
  ],
  liveUrl: "https://vaccinegame-c0029.firebaseapp.com/",
  githubUrl: "https://github.com/jmcahal/v",
};
