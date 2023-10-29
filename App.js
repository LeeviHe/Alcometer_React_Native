import { ScrollView, StyleSheet, Switch, Text, TextInput, View, Pressable } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';
import styles from './styles/styles.js';
import { useState, useCallback, useEffect } from 'react';
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [toggleTheme, setToggleTheme] = useState(false)
  const [gender, setGender] = useState ('')
  const [bottles, setBottles] = useState(0)
  const [weight, setWeight] = useState ('')
  const [time, setTime] = useState (0)
  const [result, setResult] = useState (0)

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Agbalumo': require('./assets/font/Agbalumo-Regular.ttf'),
          'Metal': require('./assets/font/MetalMania-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoaded(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  
  function calculation () {
    if (weight.length == 0  || weight == 0) {
      alert('No weight given')
      return
    }
    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = Number(weight) / 10
    let gramsLeft = grams - burning * time
    
    if (gender == 'male') {
      let nilCheck = gramsLeft/(weight * 0.7)
      if (nilCheck > 0) {
        setResult(nilCheck)
      } else {
        setResult(0)
      }
    }
    else if (gender == 'female') {
      let nilCheck = gramsLeft/(weight * 0.6)
      if (nilCheck > 0) {
        setResult(nilCheck)
      } else {
        setResult(0)
      }
    }
  }

  return (
    <ScrollView style={styles.scrollView} onLayout={onLayoutRootView}>
      <View style={toggleTheme ? styles.containertheme2 : styles.containertheme1}>
        <Switch 
        style= {styles.switch}
        value={toggleTheme}
        onValueChange={toggle => setToggleTheme(toggle)}
        />
        <Text style= {styles.title}>Alcometer</Text>
        <View style = {styles.group}>
          <RadioButton.Group 
          onValueChange={setGender} 
          value= {gender}>
            <View style = {{flexDirection:'row'}}>
              <RadioButton value='male'/>
              <Text style = {toggleTheme ? styles.labeltheme2 : styles.labeltheme1}>Male</Text>
            </View>
          </RadioButton.Group>
          <RadioButton.Group
             onValueChange={setGender} 
             value= {gender}>
            <View style = {{flexDirection:'row'}}>
              <RadioButton value='female'/>
              <Text style = {toggleTheme ? styles.labeltheme2 : styles.labeltheme1}>Female</Text>
            </View>
          </RadioButton.Group>
        </View>
        <Text style = {toggleTheme ? styles.labeltheme2 : styles.labeltheme1}>Weight</Text>
        <TextInput 
        keyboardType = 'numeric'
        style={styles.weightInput}
        value={weight}
        onChangeText={e => {setWeight(e)}}
        />
        <View >
          <Text style = {toggleTheme ? styles.labeltheme2 : styles.labeltheme1}>Bottles</Text>
          <NumericInput
            style ={styles.numericInput}
            borderColor={toggleTheme ? '#F5A3C8' :'#8C8C8C'}
            type='up-down'
            value={bottles}
            onChange= {e => {setBottles(e)}}
            minValue={0}
            upDownButtonsBackgroundColor= {toggleTheme ? '#ED0D92' :'red'} />
        </View>
        <View>
          <Text style = {toggleTheme ? styles.labeltheme2 : styles.labeltheme1}>Hours</Text>
          <NumericInput 
          style ={styles.numericInput}
            borderColor={toggleTheme ? '#F5A3C8' :'#8C8C8C'}
            type='up-down'
            value={time}
            onChange={setTime}
            minValue={0}
            upDownButtonsBackgroundColor= {toggleTheme ? '#ED0D92' :'red'} />
        </View>
        <Pressable 
        style={toggleTheme ? styles.buttonTheme2 : styles.buttonTheme1}
        onPress={calculation}
        >
          <Text style = {toggleTheme ? styles.labeltheme2 : styles.labeltheme1}>CALCULATE</Text>
        </Pressable>

        {result < 0.5 &&
        <Text style = {styles.green}>{result > 0 ? result.toFixed(2) : '0.00'}</Text>}
        
        {result > 0.5 && result < 1.2 &&
        <Text style = {styles.yellow}>{result.toFixed(2)}</Text>}
        
        {result > 1.2 &&
        <Text style = {styles.red}>{result.toFixed(2)}</Text>}
        
        </View>
      </ScrollView>
  );
}