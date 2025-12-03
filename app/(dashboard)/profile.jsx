import { StyleSheet, Image } from 'react-native';
import Dodo from '../../assets/dodo.jpg';

import Spacer from '../../components/Spacer';
import ThemedText from '../../components/ThemedText';
import ThemedView from '../../components/ThemedView';

const Profile = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText title={true} style={styles.heading}>
                Your Email
            </ThemedText>
            <Spacer />

            <ThemedText>Time to start reading some books...</ThemedText>
            <Spacer />
            <Image source={Dodo} style={{ width: 200, height: 200, borderRadius: 100 }} />
        </ThemedView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
});
