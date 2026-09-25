export function MediaPlaceholder({ label, large = false }: { label?: string; large?: boolean }) {
  return (
    <span
      className={large ? "media-placeholder large-placeholder" : "media-placeholder"}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      <b>R | H</b>Photography coming soon
    </span>
  );
}
