//import liraries
import React, {useState} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	Alert,
} from "react-native";

import styles from "./src/styles/ManipulandoStyles";

// create a component
function App() {
	const Home = ({navigation}) => {
		const regex = /[^@]*/;

		return (
			<View style={styles.container}>
				<Text>Bem vindo</Text>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						navigation.navigate(Login);
					}}
				>
					<Text style={styles.buttonText}>Sair</Text>
				</TouchableOpacity>
			</View>
		);
	};

	const Login = ({navigation}) => {
		const [email, setEmail] = useState("");
		const [password, setPassword] = useState("");

		const handleEmail = (text) => {
			setEmail(text);
		};

		const handlePassword = (text) => {
			setPassword(text);
		};

		const pressed = () => {
			var regex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i;
			if (regex.test(email) && password.length >= 8) {
				Alert.alert("Logando");
				navigation.navigate(Home);
			} else {
				Alert.alert("Email Incorreto ou senha incorreta");
			}
		};

		return (
			<View style={styles.container}>
				<Image
					source={require("./src/image/reactnative.png")}
					style={styles.logo}
				/>

				<TextInput
					style={styles.input}
					onChangeText={handleEmail}
					placeholder='Informe seu e-mail'
				/>

				<TextInput
					style={styles.input}
					onChangeText={handlePassword}
					placeholder='Digite sua senha'
					secureTextEntry={true}
				/>

				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						pressed();
					}}
				>
					<Text style={styles.buttonText}>Acessar</Text>
				</TouchableOpacity>
			</View>
		);
	};

	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Login'>
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='Home' component={Home} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

//make this component available to the app
export default App;
