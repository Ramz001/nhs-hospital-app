import KonstaProvider from "./konsta-ui.provider";
import QueryProvider from "./query.provider";
import ThemeProvider from "./theme.provider";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <KonstaProvider>{children}</KonstaProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
