import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, json, boolean, decimal } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * AI Command Center - Master Orchestrator
 * Manages all autonomous agents and coordinates system-wide improvements
 */
export const aiCommandCenter = mysqlTable("ai_command_center", {
  id: int("id").autoincrement().primaryKey(),
  status: mysqlEnum("status", ["active", "paused", "maintenance"]).default("active").notNull(),
  lastHealthCheck: timestamp("lastHealthCheck").defaultNow().notNull(),
  systemVersion: varchar("systemVersion", { length: 32 }).default("1.0.0").notNull(),
  totalAgentsActive: int("totalAgentsActive").default(0).notNull(),
  improvementScore: decimal("improvementScore", { precision: 5, scale: 2 }).default("0.00").notNull(),
  config: json("config"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type AICommandCenter = typeof aiCommandCenter.$inferSelect;
export type InsertAICommandCenter = typeof aiCommandCenter.$inferInsert;

/**
 * Autonomous Agents
 */
export const autonomousAgents = mysqlTable("autonomous_agents", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 128 }).notNull(),
  type: mysqlEnum("type", ["content", "performance", "analytics", "seo", "security", "ux", "chatbot", "testing"]).notNull(),
  status: mysqlEnum("status", ["active", "idle", "learning", "error"]).default("idle").notNull(),
  lastAction: timestamp("lastAction"),
  tasksCompleted: int("tasksCompleted").default(0).notNull(),
  successRate: decimal("successRate", { precision: 5, scale: 2 }).default("100.00").notNull(),
  intelligence: decimal("intelligence", { precision: 5, scale: 2 }).default("50.00").notNull(),
  config: json("config"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type AutonomousAgent = typeof autonomousAgents.$inferSelect;
export type InsertAutonomousAgent = typeof autonomousAgents.$inferInsert;

/**
 * Agent Tasks
 */
export const agentTasks = mysqlTable("agent_tasks", {
  id: int("id").autoincrement().primaryKey(),
  agentId: int("agentId").notNull(),
  taskType: varchar("taskType", { length: 128 }).notNull(),
  description: text("description"),
  status: mysqlEnum("status", ["pending", "in_progress", "completed", "failed"]).default("pending").notNull(),
  priority: mysqlEnum("priority", ["low", "medium", "high", "critical"]).default("medium").notNull(),
  result: json("result"),
  errorMessage: text("errorMessage"),
  executionTime: int("executionTime"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  completedAt: timestamp("completedAt"),
});

export type AgentTask = typeof agentTasks.$inferSelect;
export type InsertAgentTask = typeof agentTasks.$inferInsert;

/**
 * System Metrics
 */
export const systemMetrics = mysqlTable("system_metrics", {
  id: int("id").autoincrement().primaryKey(),
  metricType: varchar("metricType", { length: 128 }).notNull(),
  value: decimal("value", { precision: 10, scale: 2 }).notNull(),
  unit: varchar("unit", { length: 32 }),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
  agentId: int("agentId"),
  metadata: json("metadata"),
});

export type SystemMetric = typeof systemMetrics.$inferSelect;
export type InsertSystemMetric = typeof systemMetrics.$inferInsert;

/**
 * Improvements Log
 */
export const improvementsLog = mysqlTable("improvements_log", {
  id: int("id").autoincrement().primaryKey(),
  agentId: int("agentId").notNull(),
  category: varchar("category", { length: 128 }).notNull(),
  description: text("description").notNull(),
  impact: mysqlEnum("impact", ["low", "medium", "high", "critical"]).notNull(),
  before: json("before"),
  after: json("after"),
  autoApplied: boolean("autoApplied").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ImprovementsLog = typeof improvementsLog.$inferSelect;
export type InsertImprovementsLog = typeof improvementsLog.$inferInsert;

/**
 * Customer Interactions
 */
export const customerInteractions = mysqlTable("customer_interactions", {
  id: int("id").autoincrement().primaryKey(),
  type: mysqlEnum("type", ["form_submission", "chat", "phone_call", "email", "review"]).notNull(),
  customerName: varchar("customerName", { length: 256 }),
  customerEmail: varchar("customerEmail", { length: 320 }),
  customerPhone: varchar("customerPhone", { length: 20 }),
  message: text("message"),
  sentiment: mysqlEnum("sentiment", ["positive", "neutral", "negative"]).default("neutral"),
  serviceInterest: varchar("serviceInterest", { length: 256 }),
  leadScore: int("leadScore").default(0),
  status: mysqlEnum("status", ["new", "contacted", "qualified", "converted", "lost"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type CustomerInteraction = typeof customerInteractions.$inferSelect;
export type InsertCustomerInteraction = typeof customerInteractions.$inferInsert;

/**
 * Website Content
 */
export const websiteContent = mysqlTable("website_content", {
  id: int("id").autoincrement().primaryKey(),
  section: varchar("section", { length: 128 }).notNull(),
  key: varchar("key", { length: 256 }).notNull(),
  value: text("value").notNull(),
  lastOptimizedBy: int("lastOptimizedBy"),
  optimizationScore: decimal("optimizationScore", { precision: 5, scale: 2 }).default("0.00"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type WebsiteContent = typeof websiteContent.$inferSelect;
export type InsertWebsiteContent = typeof websiteContent.$inferInsert;

/**
 * SEO Metrics
 */
export const seoMetrics = mysqlTable("seo_metrics", {
  id: int("id").autoincrement().primaryKey(),
  keyword: varchar("keyword", { length: 256 }).notNull(),
  currentRank: int("currentRank"),
  targetRank: int("targetRank").default(1),
  searchVolume: int("searchVolume"),
  difficulty: int("difficulty"),
  lastChecked: timestamp("lastChecked"),
  trend: mysqlEnum("trend", ["improving", "stable", "declining"]).default("stable"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type SEOMetric = typeof seoMetrics.$inferSelect;
export type InsertSEOMetric = typeof seoMetrics.$inferInsert;