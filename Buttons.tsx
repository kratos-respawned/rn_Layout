import { Text, TouchableHighlight, View } from "react-native";
function Buttons() {
    return (
        <View>
            <TouchableHighlight className="my-10 bg-green-400 text-white  ">
                <Text className=" py-2 px-3 text-white text-xl">Button 1</Text>
            </TouchableHighlight>
            <TouchableHighlight className="my-10 bg-green-400 text-white ">
                <Text className=" py-2 px-3 text-white text-xl">Button 2</Text>
            </TouchableHighlight>
        </View>

    )
}

export default Buttons