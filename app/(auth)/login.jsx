import { StyleSheet, Pressable, Text } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '../../constants/Colors';

//themed components. These switch between dark and light depending on the device default
import ThemedLogo from '../../components/ThemedLogo';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';

const Login = () => {
    const handleSubmit = () => {
        // Handle login submission
        console.log('Login Form submitted');
    };
    return (
        <ThemedView style={styles.container}>
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Login in to your Account
            </ThemedText>

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
