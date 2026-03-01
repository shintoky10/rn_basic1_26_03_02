import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// - div = View
// - `View` : 전체를 감싸는 컨테이너
// - `Text`: 텍스트를 표시하는 컴포넌트
// - text를 감쌀 떄는 Text 컴포넌트를 사용
// - `style` : 스타일을 적용하는 props
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.mainText}>Hello World!</Text>
      {/* StatusBar 컴포넌트는 화면 전체를 덮는 컨테이너에만 사용해야 합니다. */}
      {/* hidden: 상태바를 숨김 */}
      {/* style: 상태바의 텍스트 색상을 변경 */} 
      {/* dark: 어두운 테마, light: 밝은 테마 */}
      <StatusBar hidden={false} style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 20,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "red",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});