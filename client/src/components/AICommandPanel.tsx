/**
 * AI Command Panel
 * Control interface for the autonomous AI system
 * Shows system status and allows manual control when needed
 */

import { useState, useEffect } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertCircle, Play, Pause, Zap, Settings } from "lucide-react";

export default function AICommandPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [autoRunning, setAutoRunning] = useState(true);

  // Queries
  const statusQuery = trpc.ai.getStatus.useQuery();
  const healthQuery = trpc.ai.healthCheck.useQuery();

  // Mutations
  const executeNowMutation = trpc.ai.executeNow.useMutation();
  const pauseMutation = trpc.ai.pauseScheduler.useMutation();
  const resumeMutation = trpc.ai.resumeScheduler.useMutation();

  useEffect(() => {
    // Refresh status every 30 seconds
    const interval = setInterval(() => {
      statusQuery.refetch();
      healthQuery.refetch();
    }, 30000);

    return () => clearInterval(interval);
  }, [statusQuery, healthQuery]);

  const handleExecuteNow = async () => {
    await executeNowMutation.mutateAsync();
    statusQuery.refetch();
  };

  const handlePause = async () => {
    await pauseMutation.mutateAsync();
    setAutoRunning(false);
    statusQuery.refetch();
  };

  const handleResume = async () => {
    await resumeMutation.mutateAsync();
    setAutoRunning(true);
    statusQuery.refetch();
  };

  const status = statusQuery.data;
  const health = healthQuery.data;

  return (
    <>
      {/* Floating Command Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
        title="AI Command Center"
      >
        <Zap size={24} />
      </button>

      {/* Command Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-96 max-h-96 overflow-y-auto">
          <Card className="bg-white shadow-2xl border-2 border-red-600">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">AI Command Center</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {/* Status Indicator */}
              <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      autoRunning ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  />
                  <span className="font-semibold text-gray-700">
                    {autoRunning ? "Auto-Running" : "Paused"}
                  </span>
                </div>
                {status && (
                  <div className="text-sm text-gray-600">
                    <p>Active Agents: {status.agents?.length || 0}</p>
                    <p>System Status: {status.commandCenter?.status || "unknown"}</p>
                  </div>
                )}
              </div>

              {/* Agent Status */}
              {status?.agents && status.agents.length > 0 && (
                <div className="mb-4">
                  <h3 className="font-semibold text-gray-700 mb-2">Agents</h3>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {status.agents.slice(0, 4).map((agent: any) => (
                      <div
                        key={agent.id}
                        className="text-sm p-2 bg-gray-50 rounded border border-gray-200"
                      >
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">{agent.name}</span>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              agent.status === "active"
                                ? "bg-green-100 text-green-700"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {agent.status}
                          </span>
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          Tasks: {agent.tasksCompleted} | Success: {agent.successRate}%
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Control Buttons */}
              <div className="space-y-2 mb-4">
                <Button
                  onClick={handleExecuteNow}
                  disabled={executeNowMutation.isPending}
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  <Zap size={16} className="mr-2" />
                  Execute Now
                </Button>

                {autoRunning ? (
                  <Button
                    onClick={handlePause}
                    disabled={pauseMutation.isPending}
                    variant="outline"
                    className="w-full"
                  >
                    <Pause size={16} className="mr-2" />
                    Pause Auto
                  </Button>
                ) : (
                  <Button
                    onClick={handleResume}
                    disabled={resumeMutation.isPending}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Play size={16} className="mr-2" />
                    Resume Auto
                  </Button>
                )}
              </div>

              {/* Health Status */}
              {health?.health && (
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-sm">
                  <div className="flex items-start gap-2">
                    <AlertCircle size={16} className="text-blue-600 mt-0.5" />
                    <div className="text-gray-700">
                      <p className="font-semibold">System Health</p>
                      <p className="text-xs">
                        Agents: {health.health.agentsActive}/{health.health.totalAgents}
                      </p>
                      <p className="text-xs">
                        Tasks: {health.health.tasksInProgress} in progress
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="mt-4 pt-3 border-t border-gray-200 text-xs text-gray-500">
                <p>AI System automatically optimizes your website 24/7</p>
                <p>Click "Execute Now" to run optimization immediately</p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
