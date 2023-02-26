import { View, Text } from "react-native"
function Flex() {
    return (
        <View>
            <View className="bg-fuchsia-500 flex-row  flex-[2]">
                <View className="bg-red-500 flex-1 m-3">
                </View>
                <View className="bg-teal-500 flex-1 m-3">
                </View>
                <View className="bg-rose-500 flex-1 m-3">
                </View>
            </View>
            <View className="bg-green-500 flex-1 ">

            </View>
            <View className="bg-blue-500 flex-1 ">
                <Text>
                    Flex-3
                </Text>
            </View>
        </View>
    )
}

export default Flex