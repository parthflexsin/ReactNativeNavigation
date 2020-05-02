const { Navigation } = require('react-native-navigation');
const React = require('react');
const { View, Text, Button, StyleSheet } = require('react-native');


// Screen A declaration
const ScreenA = (props) => {
  return (
    <View style={styles.root}>
      <Button
        title='Go to Screen B'
        color='#710ce3'
        onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'ScreenB',
            options: {
              topBar: {
                title: {
                  text: 'ScreenB'
                }
              }
            }
          }
        })} />
    </View>
  );
};
ScreenA.options = {
  topBar: {
    title: {
      text: 'Screen A',
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  }
};

// Screen B declaration
const ScreenB = (props) => {
  return (
    <View style={styles.root}>
      <Button
        title='Back To Screen A'
        color='#710ce3'
        onPress={() => Navigation.pop(props.componentId, {
          component: {
            name: 'ScreenA',
            options: {
              topBar: {
                title: {
                  text: 'ScreenA'
                }
              }
            }
          }
        })} />
    </View>
  );
};
ScreenB.options = {
  topBar: {
    title: {
      text: 'Screen B',
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  }
};

Navigation.registerComponent('ScreenA', () => ScreenA);
Navigation.registerComponent('ScreenB', () => ScreenB);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'ScreenA'
            }
          }
        ]
      }
    }
  });
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});