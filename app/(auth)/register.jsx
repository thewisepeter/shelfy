import { StyleSheet, Text } from 'react-native';
import { Link } from 'expo-router';

//themed components. These switch between dark and light depending on the device default
import ThemedLogo from '../../components/ThemedLogo';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import Spacer from '../../components/Spacer';
import ThemedButton from '../../components/ThemedButton';

const Register = () => {
    const handleSubmit = () => {
        // Handle login submission
        console.log('Register Form submitted');
    };
    return (
        <ThemedView style={styles.container}>
            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Register for an Account
            </ThemedText>

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
