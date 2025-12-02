import { StyleSheet, Text } from 'react-native'
import { Link } from 'expo-router'
import Logo from '../assets/img/open_gate_logo.png'
import  ThemedView  from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import ThemedText from '../components/ThemedText'
import Spacer from '../components/Spacer'

const Home = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedLogo style={styles.logo} />
      <ThemedText style={[styles.title, {color: 'teal'}]}>Open Gates Inc</ThemedText>
      <ThemedText style={{margingTop: 10, marginBottom: 30 }} >
        Reinventing the World
      </ThemedText>

      <Link style={styles.link} href="/login">
        <ThemedText>Login</ThemedText> 
      </Link>
      <Link style={styles.link} href="/register">
        <ThemedText>Register</ThemedText>
      </Link>


    </ThemedView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  }
})