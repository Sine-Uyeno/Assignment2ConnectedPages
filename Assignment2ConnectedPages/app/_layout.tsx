import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index"/>
      <Tabs.Screen name="EmailDetailsPage"/>
      <Tabs.Screen name="antpage"/>
    </Tabs>
  );
}
