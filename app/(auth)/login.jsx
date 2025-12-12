import {
    StyleSheet,
    Pressable,
    Keyboard,
    Text,
    TextInput,
    TouchableWithoutFeedback,
} from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '../../constants/Colors';
import { useState } from 'react';
import { useUser } from '../../hooks/useUser';

//themed components. These switch between dark and light depending on the device default
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';
import ThemedTextInput from '../../components/ThemedTextInput';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login } = useUser();

    const handleSubmit = async () => {
        try {
            await login(email, password);
            console.log('Current user is', user);
        } catch (error) {
            console.error('Login failed:', error);
        }
        Keyboard.dismiss();
        console.log('Register Form submitted', email, password);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <Spacer />
                <ThemedText title={true} style={styles.title}>
                    Login in to your Account
                </ThemedText>

                <ThemedTextInput
                    placeholder="Email"
                    keyboardType="email-address"
                    onChangeText={setEmail}
                    value={email}
                    style={{
                        width: '80%',
                        marginBottom: 20,
                    }}
                />
                <ThemedTextInput
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                    style={{
                        width: '80%',
                        marginBottom: 20,
                    }}
                />

                <ThemedButton onPress={handleSubmit}>
                    <Text style={{ color: '#f2f2f2' }}>Login</Text>
                </ThemedButton>

                <Spacer height={100} />
                <ThemedText style={{ textAlign: 'center' }}>
                    <Link href="/register">
                        <ThemedText style={{ textDecorationLine: 'underline', color: 'teal' }}>
                            Register
                        </ThemedText>
                    </Link>{' '}
                    instead
                </ThemedText>
            </ThemedView>
        </TouchableWithoutFeedback>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        margin: 30,
    },
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 5,
    },
    pressed: {
        opacity: 0.8,
    },
});
