import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { donut1, donut2, donut3, donut4, donut5 } from "./assets";

const Screen02 = (props) => {
  // Lấy navigate và route từ props
  const { navigation, route } = props;
  const { navigate, goBack } = navigation;

  const { item } = route.params;

  // Lấy kích thước toàn màn hình
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  const getImageByValue = (value) => {
    // Mapping image values to corresponding imported variables
    const imageMap = {
      donut1,
      donut2,
      donut3,
      donut4,
      donut5,
    };
    return imageMap[value];
  };
  return (
    <View
      style={{
        height: screenHeight,
        width: screenWidth,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          height: screenHeight * 0.45,
          width: screenWidth,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={getImageByValue(item.image)}
          style={{
            height: screenHeight * 0.44,
            width: screenHeight * 0.44,
          }}
        />
      </View>
      <Text
        style={{
          fontWeight: "bold",
          marginTop: 1,
          marginHorizontal: 20,
          fontSize: 22,
          color: "#191919",
        }}
      >
        {item.name}
      </Text>
      <View
        style={{
          marginTop: 10,
          marginHorizontal: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
            color: "#919191",
          }}
        >
          Spicy tasty donut family
        </Text>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: "#191919",
          }}
        >
          {item.price}
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          alignItems: "center",
          height: screenHeight * 0.1,
          marginStart: 20,
          marginEnd: 10,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={require("./assets/vector.png")}
              style={{
                height: 20,
                width: 20,
              }}
            />
            <Text
              style={{
                marginBottom: 3,
                fontSize: 17,
                fontWeight: "bold",
                color: "#919191",
                marginHorizontal: 10,
              }}
            >
              Delivery in
            </Text>
          </View>
          <Text
            style={{
              marginTop: 10,
              marginHorizontal: 10,
              fontSize: 22,
              fontWeight: "bold",
              color: "#191919",
            }}
          >
            30 min
          </Text>
        </View>
        <View
          style={{
            height: screenHeight * 0.1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("./assets/cong.png")}
            style={{
              height: 25,
              width: 25,
              marginHorizontal: 10,
            }}
          />
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: "#191919",
            }}
          >
            1
          </Text>
          <Image
            source={require("./assets/tru.png")}
            style={{
              height: 25,
              width: 25,
              marginHorizontal: 10,
            }}
          />
        </View>
      </View>
      <Text
        style={{
          marginTop: 8,
          marginHorizontal: 22,
          fontSize: 22,
          fontWeight: "bold",
          color: "#191919",
        }}
      >
        Restaurants info
      </Text>
      <Text
        style={{
          marginBottom: 3,
          fontSize: 16,
          fontWeight: "bold",
          color: "#606060",
          marginStart: 20,
          marginEnd: 10,
        }}
      >
        Order a Large Pizza but the size is the equivalent of a medium/small
        from other places at the same price range.
      </Text>
      <TouchableOpacity
        onPress={() => {
          goBack();
        }}
      >
        <View
          style={{
            marginTop: 30,
            borderRadius: 5,
            height: screenHeight * 0.078,
            width: screenWidth - 40,
            alignSelf: "center",
            backgroundColor: "#f1b000",
            borderWidth: 0.5,
            borderColor: "#919191",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 23,
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            Add to cart
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Screen02;

const styles = StyleSheet.create({});
