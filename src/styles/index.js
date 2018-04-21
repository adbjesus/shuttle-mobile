import { StyleSheet } from 'react-native'

const colors = {
  background: '#F5FCFF',
  foreground: '#333333',
}

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: colors.foreground,
    marginBottom: 5,
  },
})
