import KonstaProvider from "./konsta-ui.provider";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <KonstaProvider>{children}</KonstaProvider>;
}
