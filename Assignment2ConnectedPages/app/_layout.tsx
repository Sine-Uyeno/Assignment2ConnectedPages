import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="judepage"/>
      <Tabs.Screen name="ancpage"/>
      <Tabs.Screen name="antpage"/>
    </Tabs>
  );
}
