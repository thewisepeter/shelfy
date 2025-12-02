import { Link } from 'expo-router'
import { StyleSheet, Text, View, Image, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

//themed components. These switch between dark and light depending on the device default
import ThemedLogo from '../components/ThemedLogo'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'

const About = () => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme] ?? Colors.light

  return (
    <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>
        <Link style={styles.link} href="/">
          <ThemedText>Home</ThemedText> 
        </Link>
        <Link style={styles.link} href="/contact">
          <ThemedText>Contact</ThemedText>
        </Link>
      <ThemedText style={styles.title}>About Page</ThemedText>
      <ThemedLogo style={styles.logo} />


  
    </ThemedView>
  )
}

export default About

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