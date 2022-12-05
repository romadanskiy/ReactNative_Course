import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface Props {
  titleText?: string,
  titleFontSize?: number,
}

const defaultProps: Props = {
  titleText: 'This is a Counter',
  titleFontSize: 20,
}

const Counter: React.FunctionComponent<Props> = (props: Props) => {
  const [count, setCount] = React.useState(0);

  const plus = () => {
    setCount(count+1)
  }

  const minus = () => {
    setCount(count-1)
  }

  return (
    <View style={styles.counerContainer}>
      <View>
        <Text style={[styles.titleText, {fontSize: props.titleFontSize}]}>
          {props.titleText}
        </Text>
      </View>

      <View style={styles.row}>
        <View style={{marginLeft: 40}}>
          <TouchableOpacity onPress={() => minus()}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>-</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.counterText}>{count}</Text>
        </View>
          
        <View style={{marginRight: 40}}>
          <TouchableOpacity onPress={() => plus()}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}

Counter.defaultProps = defaultProps;

const styles = StyleSheet.create({
  counerContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 350,
    height: 250,
    backgroundColor: 'rgba(0,0,0,0.15)',
    borderTopColor: 'rgba(240,240,240,0.3)',
    borderEndColor: 'rgba(150,150,150,0.35)',
    borderBottomColor: 'rgba(150,150,150,0.3)',
    borderStartColor: 'rgba(240,240,240,0.25)',
    borderWidth: 1,
    borderRadius: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderTopColor: 'rgba(240,240,240,0.2)',
    borderEndColor: 'rgba(150,150,150,0.25)',
    borderBottomColor: 'rgba(150,150,150,0.2)',
    borderStartColor: 'rgba(240,240,240,0.15)',
    borderRadius: 10,
    borderWidth: 1,
  },
  btnText: {
    color: 'white',
    fontSize: 35,
  },
  counterText: {
    color: 'white',
    fontSize: 70,
  },
  titleText: {
    color: 'white',
  }
});

export { Counter };