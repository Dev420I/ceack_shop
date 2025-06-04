import type { AppProps } from 'next/app';
import { ThemeProvider } from '@/shared/ui/ThemeProvider';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
