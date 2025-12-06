import imagePath from "@/src/constants/imagePath";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(false);
  let navigate_to_welcome = () => {
    router.push("/(auth)/terms_agree");
  };
  let loading_timeout = () => {
    setIsLoading(true), setTimeout(navigate_to_welcome, 3000);
  };
  useEffect(() => {
    setTimeout(() => {
      loading_timeout();
    }, 2000);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image
          source={imagePath.logo}
          style={styles.logo_style}
          resizeMode="contain"
        />
        <Text style={styles.app_name_style}>HiThere App</Text>
      </View>
      <View style={styles.footer}>
        {isLoading ? (
          <>
            <ActivityIndicator size={moderateScale(48)} color={"#0ccc83"} />
            <Text style={styles.creator_text}>Loading ...</Text>
          </>
        ) : (
          <>
            <Text style={styles.creation_text}>Made With 💚</Text>
            <Text style={styles.creator_text}>MARIEM MANSOUR</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
  },
  header: {},

  body: {
    alignItems: "center",
    // gap: verticalScale(7),
  },
  footer: {
    alignItems: "center",
    height: verticalScale(80),
    justifyContent: "flex-end",
  },
  creation_text: {
    fontSize: moderateScale(12),
    color: "rgba(79, 76, 76, 1)",
  },
  creator_text: {
    fontSize: moderateScale(15),
    color: "rgba(0, 0, 0, 0)",
  },
  logo_style: {
    height: moderateScale(200),
    width: moderateScale(200),
  },
  app_name_style: {
    fontSize: moderateScale(35),
    color: "rgba(0, 0, 0, 0)",
    fontWeight: "bold",
  },
});

export default Auth;
