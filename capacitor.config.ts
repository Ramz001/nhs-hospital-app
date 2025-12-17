import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nhs.hospital.app',
  appName: 'NHS Hospital App',
  webDir: 'out',
  server: {
    url: `http://${process.env.LOCAL_IP || ""}:3000`,
    cleartext: true,
  },
};

export default config;