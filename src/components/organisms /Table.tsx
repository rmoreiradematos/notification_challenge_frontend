import React from "react";

interface Log {
  notificationId: number;
  userSentMessage: string;
  userReceivedMessage: string;
  message: string;
  channelId: number;
}

interface TableProps {
  logs: Log[];
}

export const Table: React.FC<TableProps> = ({ logs }) => {
  return (
    <div className="container mx-auto px-4">
      <table className="min-w-full table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">
              User that sent the message
            </th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">
              Message
            </th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">
              Channel
            </th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">
              Notification
            </th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-600 uppercase">
              User that received the message
            </th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.notificationId}>
              <td>{log.userSentMessage}</td>
              <td>{log.message}</td>
              <td>{log.channelId}</td>
              <td>{log.notificationId}</td>
              <td>{log.userReceivedMessage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
