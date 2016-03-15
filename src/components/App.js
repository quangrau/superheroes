import React from 'react-native';

const {
  View,
  Text,
  StyleSheet,
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titleText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 32,
  },
});

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Supper Heroes
        </Text>
      </View>
    );
  }
}
