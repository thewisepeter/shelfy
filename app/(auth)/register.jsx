import { StyleSheet, Text, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

import ThemedTextInput from '../../components/ThemedTextInput';

//themed components. These switch between dark and light depending on the device default
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        // Handle login submission
        Keyboard.dismiss();
        console.log('Register Form submitted', email, password);
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ThemedView style={styles.container}>
                <Spacer />
                <ThemedText title={true} style={styles.title}>
                    Register for an Account
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
                    <Text style={{ color: '#f2f2f2' }}>Register</Text>
                </ThemedButton>

                <Spacer height={100} />
                <ThemedText style={{ textAlign: 'center' }}>
                    Already have an account?
                    <Link href="/login">
                        <ThemedText style={{ textDecorationLine: 'underline', color: 'teal' }}>
                            {' '}
                            Log in.
                        </ThemedText>
                    </Link>
                </ThemedText>
            </ThemedView>
        </TouchableWithoutFeedback>
    );
};

export default Register;

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
});
