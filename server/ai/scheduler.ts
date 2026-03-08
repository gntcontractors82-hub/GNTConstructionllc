/**
 * AI Scheduler - Automated Task Execution Engine
 * Runs autonomous agents on a schedule to continuously improve the website
 */

import { commandCenter } from "./commandCenter";

let schedulerRunning = false;
let schedulerInterval: NodeJS.Timeout | null = null;

export class AIScheduler {
  private static instance: AIScheduler;

  private constructor() {}

  static getInstance(): AIScheduler {
    if (!AIScheduler.instance) {
      AIScheduler.instance = new AIScheduler();
    }
    return AIScheduler.instance;
  }

  /**
   * Start the automatic scheduler
   * Runs tasks every hour by default
   */
  async start(intervalMs: number = 3600000): Promise<void> {
    if (schedulerRunning) {
      console.log("[AI Scheduler] Already running");
      return;
    }

    try {
      console.log("[AI Scheduler] Starting automatic execution...");
      
      // Initialize command center
      await commandCenter.initialize();

      // Run initial health check
      await commandCenter.healthCheck();

      // Schedule recurring tasks
      schedulerInterval = setInterval(async () => {
        await this.executeCycle();
      }, intervalMs);

      schedulerRunning = true;
      console.log(`[AI Scheduler] Running automatically every ${intervalMs / 1000 / 60} minutes`);

      // Execute first cycle immediately
      await this.executeCycle();
    } catch (error) {
      console.error("[AI Scheduler] Failed to start:", error);
      throw error;
    }
  }

  /**
   * Stop the scheduler
   */
  stop(): void {
    if (schedulerInterval) {
      clearInterval(schedulerInterval);
      schedulerInterval = null;
    }
    schedulerRunning = false;
    console.log("[AI Scheduler] Stopped");
  }

  /**
   * Execute one complete optimization cycle
   */
  private async executeCycle(): Promise<void> {
    try {
      console.log("[AI Scheduler] Starting optimization cycle...");

      // Health check
      const health = await commandCenter.healthCheck();
      console.log("[AI Scheduler] System health:", health);

      // Assign tasks to agents
      const tasks = [
        {
          agentId: 1, // Content Optimizer
          taskType: "optimize_content",
          description: "Optimize homepage and service descriptions for clarity and SEO",
          priority: "high" as const,
        },
        {
          agentId: 2, // Performance Monitor
          taskType: "analyze_performance",
          description: "Analyze page load times and performance metrics",
          priority: "medium" as const,
        },
        {
          agentId: 4, // SEO Specialist
          taskType: "update_seo",
          description: "Update SEO strategy and optimize for target keywords",
          priority: "high" as const,
        },
        {
          agentId: 5, // Security Guardian
          taskType: "security_scan",
          description: "Perform security scan and check for vulnerabilities",
          priority: "critical" as const,
        },
        {
          agentId: 3, // Analytics Engine
          taskType: "analyze_performance",
          description: "Analyze user behavior and conversion metrics",
          priority: "medium" as const,
        },
      ];

      // Assign all tasks
      for (const task of tasks) {
        await commandCenter.assignTask(
          task.agentId,
          task.taskType,
          task.description,
          task.priority
        );
      }

      // Process all pending tasks
      await commandCenter.processTasks();

      // Get updated system status
      const status = await commandCenter.getSystemStatus();
      console.log("[AI Scheduler] Cycle complete. Active agents:", status.agents.length);
    } catch (error) {
      console.error("[AI Scheduler] Cycle failed:", error);
    }
  }

  /**
   * Get scheduler status
   */
  getStatus(): {
    running: boolean;
    nextRun?: Date;
  } {
    return {
      running: schedulerRunning,
      nextRun: schedulerRunning ? new Date(Date.now() + 3600000) : undefined,
    };
  }

  /**
   * Force immediate execution
   */
  async executeNow(): Promise<void> {
    console.log("[AI Scheduler] Executing immediately...");
    await this.executeCycle();
  }

  /**
   * Pause scheduler
   */
  pause(): void {
    if (schedulerInterval) {
      clearInterval(schedulerInterval);
      schedulerInterval = null;
    }
    console.log("[AI Scheduler] Paused");
  }

  /**
   * Resume scheduler
   */
  async resume(): Promise<void> {
    if (!schedulerRunning) {
      await this.start();
    }
  }
}

export const scheduler = AIScheduler.getInstance();
