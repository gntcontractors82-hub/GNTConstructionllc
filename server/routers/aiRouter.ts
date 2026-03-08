/**
 * AI Command Center tRPC Router
 * Provides API endpoints for AI system control and monitoring
 */

import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import { commandCenter } from "../ai/commandCenter";
import { scheduler } from "../ai/scheduler";
import { z } from "zod";

export const aiRouter = router({
  /**
   * Get current system status
   */
  getStatus: publicProcedure.query(async () => {
    try {
      const status = await commandCenter.getSystemStatus();
      const schedulerStatus = scheduler.getStatus();
      return {
        success: true,
        commandCenter: status.commandCenter,
        agents: status.agents,
        recentTasks: status.recentTasks,
        schedulerRunning: schedulerStatus.running,
        nextRun: schedulerStatus.nextRun,
      };
    } catch (error) {
      return {
        success: false,
        error: String(error),
      };
    }
  }),

  /**
   * Execute immediate optimization cycle
   */
  executeNow: protectedProcedure.mutation(async ({ ctx }) => {
    if (ctx.user?.role !== "admin") {
      throw new Error("Admin access required");
    }
    try {
      await scheduler.executeNow();
      return { success: true, message: "Optimization cycle started" };
    } catch (error) {
      return { success: false, error: String(error) };
    }
  }),

  /**
   * Pause scheduler
   */
  pauseScheduler: protectedProcedure.mutation(async ({ ctx }) => {
    if (ctx.user?.role !== "admin") {
      throw new Error("Admin access required");
    }
    scheduler.pause();
    return { success: true, message: "Scheduler paused" };
  }),

  /**
   * Resume scheduler
   */
  resumeScheduler: protectedProcedure.mutation(async ({ ctx }) => {
    if (ctx.user?.role !== "admin") {
      throw new Error("Admin access required");
    }
    await scheduler.resume();
    return { success: true, message: "Scheduler resumed" };
  }),

  /**
   * Assign custom task to agent
   */
  assignTask: protectedProcedure
    .input(
      z.object({
        agentId: z.number(),
        taskType: z.string(),
        description: z.string(),
        priority: z.enum(["low", "medium", "high", "critical"]).optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (ctx.user?.role !== "admin") {
        throw new Error("Admin access required");
      }
      try {
        await commandCenter.assignTask(
          input.agentId,
          input.taskType,
          input.description,
          input.priority || "medium"
        );
        return { success: true, message: "Task assigned" };
      } catch (error) {
        return { success: false, error: String(error) };
      }
    }),

  /**
   * Get detailed agent information
   */
  getAgentDetails: publicProcedure
    .input(z.object({ agentId: z.number() }))
    .query(async ({ input }) => {
      try {
        const status = await commandCenter.getSystemStatus();
        const agent = status.agents.find((a: any) => a.id === input.agentId);
        if (!agent) {
          return { success: false, error: "Agent not found" };
        }
        return { success: true, agent };
      } catch (error) {
        return { success: false, error: String(error) };
      }
    }),

  /**
   * Health check
   */
  healthCheck: publicProcedure.query(async () => {
    try {
      const health = await commandCenter.healthCheck();
      return { success: true, health };
    } catch (error) {
      return { success: false, error: String(error) };
    }
  }),
});
