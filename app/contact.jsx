import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import ThemedLogo from '../components/ThemedLogo'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const Contact = () => {
  return (
    < ThemedView style={styles.container}>
        <Link style={styles.link} href="/">
          <ThemedText>Home</ThemedText> 
        </Link>
        <Link style={styles.link} href="/about">
          <ThemedText>About</ThemedText>
        </Link>
      <ThemedText style={styles.title}>Contact Page</ThemedText>
      <ThemedLogo style={styles.logo} />
    </ThemedView>
  )
}

export default Contact

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
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  }
})