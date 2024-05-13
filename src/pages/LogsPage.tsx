import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Table } from "../components/organisms /Table";

interface LogEntry {
  userSentMessage: string;
  message: string;
  notificationId: number;
  channelId: number;
  userReceivedMessage: string;
  createdAt: string;
}

const LogsPage: React.FC = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLogs = async () => {
      const token = localStorage.getItem("token");
      setLoading(true);
      try {
        const { data } = await api.get("/subscriptions/logs", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLogs(data);
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
      setLoading(false);
    };

    fetchLogs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-semibold mb-4">Logs</h1>
      <Table logs={logs} />
    </div>
  );
};

export default LogsPage;
