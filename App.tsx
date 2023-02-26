import { StatusBar, Text, TouchableHighlight, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 bg-slate-900">
      <StatusBar />
      <TouchableHighlight onPress={() => {
        console.log("Button 1 pressed")
      }} className="my-2    text-white  mx-7 ">
        <Text className=" py-2 px-3 text-white text-center bg-green-400 text-xl ">Success</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {
        console.log("Button 2 pressed")
      }}
        className="my-2    text-white bg-transparent mx-7">
        <Text className=" py-2 px-3 text-white text-center bg-red-500 text-xl ">Error</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {
        alert("Button 3 pressed")
      }}
        className="my-2    text-white bg-transparent mx-7">
        <Text className=" py-2 px-3 text-white text-center bg-fuchsia-500 text-xl ">Alert</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => {
        console.log("Button 4 pressed")
      }}
        className="my-2 text-white bg-transparent mx-7 rounded-2xl overflow-hidden z-10 shadow-xl shadow-lime-600 ">
        <Text className=" py-2 px-3 text-white text-center bg-lime-500 text-xl ">Rounded</Text>
      </TouchableHighlight>
    </View>
  );
}
