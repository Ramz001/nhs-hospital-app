import KonstaProvider from './konsta-ui.provider'
import QueryProvider from './query.provider'
import ThemeProvider from './theme.provider'
import StoreProvider from './store.provider'

export default function RootProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <StoreProvider>
          <KonstaProvider>{children}</KonstaProvider>
        </StoreProvider>
      </QueryProvider>
    </ThemeProvider>
  )
}
