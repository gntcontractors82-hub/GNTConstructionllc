CREATE TABLE `agent_tasks` (
	`id` int AUTO_INCREMENT NOT NULL,
	`agentId` int NOT NULL,
	`taskType` varchar(128) NOT NULL,
	`description` text,
	`status` enum('pending','in_progress','completed','failed') NOT NULL DEFAULT 'pending',
	`priority` enum('low','medium','high','critical') NOT NULL DEFAULT 'medium',
	`result` json,
	`errorMessage` text,
	`executionTime` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`completedAt` timestamp,
	CONSTRAINT `agent_tasks_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `ai_command_center` (
	`id` int AUTO_INCREMENT NOT NULL,
	`status` enum('active','paused','maintenance') NOT NULL DEFAULT 'active',
	`lastHealthCheck` timestamp NOT NULL DEFAULT (now()),
	`systemVersion` varchar(32) NOT NULL DEFAULT '1.0.0',
	`totalAgentsActive` int NOT NULL DEFAULT 0,
	`improvementScore` decimal(5,2) NOT NULL DEFAULT '0.00',
	`config` json,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `ai_command_center_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `autonomous_agents` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(128) NOT NULL,
	`type` enum('content','performance','analytics','seo','security','ux','chatbot','testing') NOT NULL,
	`status` enum('active','idle','learning','error') NOT NULL DEFAULT 'idle',
	`lastAction` timestamp,
	`tasksCompleted` int NOT NULL DEFAULT 0,
	`successRate` decimal(5,2) NOT NULL DEFAULT '100.00',
	`intelligence` decimal(5,2) NOT NULL DEFAULT '50.00',
	`config` json,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `autonomous_agents_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `customer_interactions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`type` enum('form_submission','chat','phone_call','email','review') NOT NULL,
	`customerName` varchar(256),
	`customerEmail` varchar(320),
	`customerPhone` varchar(20),
	`message` text,
	`sentiment` enum('positive','neutral','negative') DEFAULT 'neutral',
	`serviceInterest` varchar(256),
	`leadScore` int DEFAULT 0,
	`status` enum('new','contacted','qualified','converted','lost') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `customer_interactions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `improvements_log` (
	`id` int AUTO_INCREMENT NOT NULL,
	`agentId` int NOT NULL,
	`category` varchar(128) NOT NULL,
	`description` text NOT NULL,
	`impact` enum('low','medium','high','critical') NOT NULL,
	`before` json,
	`after` json,
	`autoApplied` boolean NOT NULL DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `improvements_log_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `seo_metrics` (
	`id` int AUTO_INCREMENT NOT NULL,
	`keyword` varchar(256) NOT NULL,
	`currentRank` int,
	`targetRank` int DEFAULT 1,
	`searchVolume` int,
	`difficulty` int,
	`lastChecked` timestamp,
	`trend` enum('improving','stable','declining') DEFAULT 'stable',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `seo_metrics_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `system_metrics` (
	`id` int AUTO_INCREMENT NOT NULL,
	`metricType` varchar(128) NOT NULL,
	`value` decimal(10,2) NOT NULL,
	`unit` varchar(32),
	`timestamp` timestamp NOT NULL DEFAULT (now()),
	`agentId` int,
	`metadata` json,
	CONSTRAINT `system_metrics_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `website_content` (
	`id` int AUTO_INCREMENT NOT NULL,
	`section` varchar(128) NOT NULL,
	`key` varchar(256) NOT NULL,
	`value` text NOT NULL,
	`lastOptimizedBy` int,
	`optimizationScore` decimal(5,2) DEFAULT '0.00',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `website_content_id` PRIMARY KEY(`id`)
);
