// Custom lightweight event-based Toast Emitter for our Cyberpunk system
type ToastType = "success" | "error" | "info" | "warning";

export interface ToastEventDetail {
  message: string;
  type: ToastType;
  duration?: number;
}

export const toast = {
  show(message: string, type: ToastType = "info", duration = 3000) {
    const event = new CustomEvent("cyber-toast", {
      detail: { message, type, duration } as ToastEventDetail,
    });
    window.dispatchEvent(event);
  },
  success(message: string, duration = 3000) {
    this.show(message, "success", duration);
  },
  error(message: string, duration = 3000) {
    this.show(message, "error", duration);
  },
  info(message: string, duration = 3500) {
    this.show(message, "info", duration);
  },
  warn(message: string, duration = 3000) {
    this.show(message, "warning", duration);
  }
};
