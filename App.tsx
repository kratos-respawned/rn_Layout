import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="  w-full h-full "  >
      <StatusBar style="auto" />
      <View className="bg-fuchsia-500 flex-row  flex-[2]">
        <View className="bg-red-500 flex-1 m-3">
        </View>
        <View className="bg-teal-500 flex-1 m-3">
        </View>
        <View className="bg-rose-500 flex-1 m-3">
        </View>
      </View>
      <View className="bg-green-500 flex-1 ">
        <Text>
          Flex-2
        </Text>
      </View>
      <View className="bg-blue-500 flex-1 ">
        <Text>
          Flex-3
        </Text>
      </View>
    </View>
  );
}
