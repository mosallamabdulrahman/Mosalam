import Icon from "./Icon";

export default function ClientLogo({ logo, clientName }) {
  if (logo.kind === "icon") {
    return <Icon name={logo.icon} className={logo.className} size={56} />;
  }

  return (
    <span className={logo.className} style={{ fontFamily: clientName === "Wings" ? "cursive" : undefined }}>
      {logo.text}
    </span>
  );
}
