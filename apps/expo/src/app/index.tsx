import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styled } from "nativewind";

const StyledView = styled(View);
const StyledImage = styled(Image);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

const RangePage = () => {
  return (
    <StyledView className="flex-1 items-center justify-center">
      <StyledText>Hello world Range</StyledText>
      <StyledImage
        className="h-[200px] w-[200px]"
        alt="image not found"
        source={require("./../../assets/icon.png")}
      />
    </StyledView>
  );
};

const UpkeepPage = () => {
  return (
    <StyledView className="flex-1 items-center justify-center">
      <StyledText>Hello world Upkeep</StyledText>
    </StyledView>
  );
};

const InventoryPage = () => {
  return (
    <StyledView className="flex-1 items-center justify-center">
      <StyledText>Hello world Inventory</StyledText>
    </StyledView>
  );
};

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Range");

  const handleTabPress = (tabName: string) => {
    setSelectedTab(tabName);
  };

  const renderPage = () => {
    switch (selectedTab) {
      case "Range":
        return <RangePage />;
      case "Upkeep":
        return <UpkeepPage />;
      case "Inventory":
        return <InventoryPage />;
      default:
        return null;
    }
  };

  return (
    <StyledView className="flex-1">
      {renderPage()}
      <StyledView className="absolute bottom-0 left-0 right-0 h-[60px] flex-row items-center bg-gray-900">
        <StyledTouchableOpacity
          className={`flex-1 ${selectedTab === "Range" ? "bg-gray-700" : null}`}
          onPress={() => handleTabPress("Range")}
        >
          <StyledText
            className={`text-center text-lg font-bold text-white ${
              selectedTab === "Range" ? "text-gray-200" : null
            }`}
          >
            Range
          </StyledText>
        </StyledTouchableOpacity>

        <StyledTouchableOpacity
          className={`flex-1 ${
            selectedTab === "Upkeep" ? "bg-gray-700" : null
          }`}
          onPress={() => handleTabPress("Upkeep")}
        >
          <StyledText
            className={`text-center text-lg font-bold text-white ${
              selectedTab === "Upkeep" ? "text-gray-200" : null
            }`}
          >
            Upkeep
          </StyledText>
        </StyledTouchableOpacity>

        <StyledTouchableOpacity
          className={`flex-1 ${
            selectedTab === "Inventory" ? "bg-gray-700" : null
          }`}
          onPress={() => handleTabPress("Inventory")}
        >
          <StyledText
            className={`text-center text-lg font-bold text-white ${
              selectedTab === "Inventory" ? "text-gray-200" : null
            }`}
          >
            Inventory
          </StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </StyledView>
  );
};

export default App;
