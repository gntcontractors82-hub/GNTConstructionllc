/**
 * AI System Initialization
 * Starts the autonomous AI system on server startup
 */

import { scheduler } from "./scheduler";

let initialized = false;

export async function initializeAISystem(): Promise<void> {
  if (initialized) {
    console.log("[AI System] Already initialized");
    return;
  }

  try {
    console.log("[AI System] Initializing...");
    
    // Start the scheduler (runs every hour)
    await scheduler.start(3600000);
    
    initialized = true;
    console.log("[AI System] Initialized and running!");
  } catch (error) {
    console.error("[AI System] Initialization failed:", error);
    // Don't throw - allow server to continue even if AI system fails
  }
}

export function isAISystemInitialized(): boolean {
  return initialized;
}
