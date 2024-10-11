import { SafeAreaView } from "react-native";

import ProgressBar from "./src/components/ProgressBar/ProgressBar";
import SelectionQuestion from "./src/components/SelectionFormat/SelectionQuestion";
import SelectionFormat from "./src/components/SelectionFormat/SelectionFormat";


export default function App() {
  return <SafeAreaView className="w-full h-full pl-4 pt-16">
    <ProgressBar />
    
  </SafeAreaView>;
}
