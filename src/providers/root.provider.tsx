import KonstaProvider from "./konsta-ui.provider";
import QueryProvider from "./query.provider";
import ThemeProvider from "./theme.provider";
import NuqsProvider from "./nuqs.provider";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <NuqsProvider>
          <KonstaProvider>{children}</KonstaProvider>
        </NuqsProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}
