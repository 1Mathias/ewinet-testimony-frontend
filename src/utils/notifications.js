import { notification } from "antd";

export const successNotification = (message) => {
  notification["success"]({
    message: "Success",
    description: message,
  });
};

export const errorNotification = (message) => {
  notification["error"]({
    message: "Error",
    description: message,
  });
};
