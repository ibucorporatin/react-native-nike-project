import React, { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import Parse from "parse/react-native";
const schema = yup
  .object({
    username: yup.string().required("username is required"),
    password: yup
      .string()
      .min(6, "it should be more than 6 character")
      .max(11, "it should be less than 11 character")
      .required("username is required"),
  })
  .required();
const image = {
  uri: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
};
const LoginForm = ({ navigation, route }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: route.params ? route.params.name : "",
      password: route.params ? route.params.password : "",
    },
    resolver: yupResolver(schema),
  });

  const formSubmit = (data) => {
    console.log(data);
    // navigation.navigate("profile", data);
  };
  console.log(route);

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageStyle}
          source={image}
          resizeMode="cover"
        >
          <Image
          style={styles.Logo}
            source={require("../data/images/pngegg.png")}
          />
          <View style={styles.formContainer}>
            <Controller
              control={control}
              name="username"
              // rules={{ required: "username is required" }}
              render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
              }) => (
                <View>
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={[
                      styles.input,
                      { borderColor: error ? "red" : "black" },
                    ]}
                    placeholder={"Username"}
                    autoCapitalize={"none"}
                    onBlur={onBlur}
                  />
                  {error && (
                    <Text style={styles.errorMessage}>{error.message}</Text>
                  )}
                </View>
              )}
            />
            <Controller
              control={control}
              name="password"
              // rules={{ required: "passwoed is required" }}
              render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
              }) => (
                <View>
                  <TextInput
                    onChangeText={onChange}
                    value={value}
                    style={[
                      styles.input,
                      { borderColor: error ? "red" : "black" },
                    ]}
                    placeholder={"passwoed"}
                    autoCapitalize={"none"}
                    onBlur={onBlur}
                    secureTextEntry={true}
                  />
                  {error && (
                    <Text style={styles.errorMessage}>{error.message}</Text>
                  )}
                </View>
              )}
            />

            <View style={styles.buttonViewContainer}>
              <View style={styles.buttonWrapper}>
                {/* <Pressable
                  onPress={handleSubmit(formSubmit)}
                  style={styles.button}
                  android_ripple={{
                    color: "#80ff09",
                  }}
                >
                  <Text style={styles.buttonText}>register</Text>
                </Pressable> */}
                <Text
                  style={{
                    color: "#84BFE1",
                    textDecorationLine: "underline",
                    fontSize: 20,
                    paddingTop: 7,
                  }}
                  onPress={() => {
                    navigation.navigate("register", {
                      name: "mohamed from login",
                    });
                  }}
                >
                  register
                </Text>
              </View>
              <View style={styles.buttonWrapper}>
                <Pressable
                  onPress={handleSubmit(formSubmit)}
                  style={styles.button}
                  android_ripple={{
                    color: "#80ff09",
                  }}
                >
                  <Text style={styles.buttonText}>Sign in</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: "red",
    alignSelf: "stretch",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  input: {
    height: 45,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderWidth: 1.5,
    borderColor: "black",
    padding: 10,
    borderRadius: 10,
    width: 300,
    color: "black",
    // paddingVertical: 20,
  },
  button: {
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1.5,
    borderColor: "black",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    overflow: "hidden",
    padding: 10,
    // borderRadius: 20,
  },
  buttonWrapper: {
    borderRadius: 10,
    overflow: "hidden",
    width: 100,
  },
  imageStyle: {
    flex: 1,

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    padding: 20,
    backgroundColor: "#0e130fb5",
    height: 340,
    width: 350,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderWidth: 1.5,
    borderColor: "black",
  },
  Logo: {
    width: 190,
    height: 100,
    marginBottom: 20,
  },
  buttonViewContainer: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "space-around",
  },
});
export default LoginForm;
