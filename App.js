import { TripViewer } from "./features/TripViewer";

export default function App() {
  const coordinates = [[-122.4324, 37.78825]];

  return <TripViewer coordinates={coordinates} />;
}
