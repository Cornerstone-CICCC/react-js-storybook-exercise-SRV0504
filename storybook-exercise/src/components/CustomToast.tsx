type ToastStatus = "success" | "warning" | "error";

type CustomToastProps = {
  status: ToastStatus;
  text: string;
  hasIcon: boolean;
};

const stylesByStatus: Record<ToastStatus, { bg: string; border: string; icon: string }> = {
  success: { bg: "#d7f7d7", border: "#7bd67b", icon: "✅" },
  warning: { bg: "#ffe8c2", border: "#ffb55a", icon: "⚠️" },
  error: { bg: "#ffd6d6", border: "#ff7b7b", icon: "❌" },
};

export default function CustomToast({ status, text, hasIcon }: CustomToastProps) {
  const { bg, border, icon } = stylesByStatus[status];

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        background: bg,
        border: `1px solid ${border}`,
        borderRadius: 12,
        padding: "12px 14px",
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        fontSize: 14,
        color: "#111",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        maxWidth: 420,
      }}
    >
      {hasIcon && <span style={{ fontSize: 18, lineHeight: 1 }}>{icon}</span>}
      <span>{text}</span>
    </div>
  );
}
