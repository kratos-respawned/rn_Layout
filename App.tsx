import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="  w-full h-full bg-purple-700"  >
      <View className="bg-red-500 flex-1">
        <Text>
          Flex-1
        </Text>
      </View>
      <View className="bg-green-500 flex-1">
        <Text>
          Flex-2
        </Text>
      </View>
      <View className="bg-blue-500 flex-1">
        <Text>
          Flex-3
        </Text>
      </View>
    </View>
  );
}
