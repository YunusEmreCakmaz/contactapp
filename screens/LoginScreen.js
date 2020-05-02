import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { login } from "../services/Usermanager";

export default class LoginScreen extends React.Component {
  state = {
    email: "",
    password: "",
  };

  _login = async () => {
    try {
      const success = await login(this.state.email, this.state.password);
      this.props.navigation.navigate("Main");
    } catch (err) {
      const errMessage = err.message;
      this.setState({ err: errMessage });
    }
  };

  handleEmailUpdate = (email) => {
    this.setState({ email });
  };

  handlePasswordUpdate = (password) => {
    this.setState({ password });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.error}>{this.state.err}</Text>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Email"
            value={this.state.email}
            onChangeText={this.handleEmailUpdate}
            autoCapitalize="none"
            placeholderTextColor="#003f5c"
            style={styles.inputText}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            placeholder="Password"
            value={this.state.password}
            onChangeText={this.handlePasswordUpdate}
            secureTextEntry
            placeholderTextColor="#003f5c"
            style={styles.inputText}
          />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={this._login}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  error: {
    textAlign: "center",
    color: "red",
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});
