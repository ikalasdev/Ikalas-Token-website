import { toast } from "react-toastify";

export default function showToast(
  type = "default",
  message,
  delay = 2000,
  position = "top-right"
) {
  switch (type) {
    case "success":
      toast.success(message, {
        position: position,
        autoClose: delay,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      break;
    case "error":
      toast.error(message, {
        position: "top-center",
        autoClose: delay,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      break;
    case "info":
      toast.info(message, {
        position: position,
        autoClose: delay,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      break;
    case "warning":
      toast.warning(message, {
        position: position,
        autoClose: delay,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      break;
    case "default":
      toast(message, {
        position: position,
        autoClose: delay,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      break;
  }
}
