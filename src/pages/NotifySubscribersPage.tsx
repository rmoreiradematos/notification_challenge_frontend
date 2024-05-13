import React, { useEffect, useState } from "react";
import Input from "../components/atoms/Input";
import Button from "../components/atoms/Button";
import { useFormData } from "../hooks/useFormData";
import axios from "axios";
import Select from "../components/atoms/Select";
import TextArea from "../components/atoms/TextArea";
import api from "../services/api";

const NotificationSubscribersPage: React.FC = () => {
  const { formData, handleChange, resetForm } = useFormData({
    channelId: "",
    message: "",
  });
  const [channels, setChannels] = useState<Array<{ id: number; name: string }>>(
    [],
  );

  useEffect(() => {
    const fetchChannels = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/channels",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        setChannels(response.data);
      } catch (error) {
        console.error("Failed to fetch channels:", error);
        alert("Failed to fetch channels.");
      }
    };
    fetchChannels();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const notificationData = {
      channelId: parseInt(formData.channelId),
      message: formData.message,
    };

    try {
      const token = localStorage.getItem("token");
      const response = await api.post(
        "/subscriptions/notify",
        notificationData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log("Notification sent:", response.data);
      alert("Notification sent successfully!");
      resetForm();
    } catch (error) {
      console.error("Failed to send notification:", error);
      alert("Failed to send notification.");
    }
  };

  return (
    <div className="h-screen font-sans login bg-cover">
      <div className="container mx-auto h-full flex flex-1 justify-center items-center">
        <div className="w-full max-w-lg">
          <div className="leading-loose"></div>
          <form
            className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="channel"
                className="block text-sm text-black font-medium"
              >
                {" "}
                Channel{" "}
              </label>

              <Select
                name="channelId"
                value={formData.channelId}
                onChange={handleChange}
                options={channels.map((channel) => ({
                  value: channel.id.toString(),
                  label: channel.name,
                }))}
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="message"
                className="block text-sm text-black font-medium"
              >
                {" "}
                Message{" "}
              </label>
              <TextArea
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required={true}
                rows={5}
              />
            </div>
            <div className="mt-4 items-center">
              <Button type="submit">Send Notification</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NotificationSubscribersPage;
