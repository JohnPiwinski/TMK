import * as React from 'react';
import {Component} from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { Image, Button } from "react-native";

import * as Speech from 'expo-speech';

import { TOPOKANJI } from '../assets/kanji/topokanji.tsx';

export default class TabTwoScreen extends Component {
    state={
        kanji_index: 0,
        current_kanji: TOPOKANJI[0]
    };

    render() {
        const tryRequire = (path) => {
            try {
                return require(`${path}`);
            } catch (err) {
                console.error(err)
                return null;
            }
        };

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
            separator: {
                marginVertical: 30,
                height: 1,
                width: '80%',
            },
        });
        //let path = "../assets/card_images/" + this.state.kanji_index.toString() + "/" + Math.floor(Math.random() * 41) + ".png"
        let path = "http://localhost:8000/" + this.state.kanji_index.toString() + "/" + (Math.floor(Math.random() * 10 + 20)).toString() + ".png";
        let image = tryRequire(path);
        console.log(path);
        console.log("Rerender ", image);
        return (
            <View>
            <Image
            //source={image ? path : require("../assets/card_images/missing")}
            source={{uri: path}}
            style={{
                height: '500%',
                    width:'100%',
                    alignSelf:'center'
            }}
            />
            <Text>{this.state.current_kanji[0]}</Text>
            <Text style={{ color: "#777", paddingTop: 5 }}>
            {this.state.current_kanji[this.state.kanji_index]}
            </Text>
            <Button title="聴く" onPress={() => Speech.speak(this.state.current_kanji, {language: "ja-JP", rate: 0.7})} />
            <Button title="分かります" onPress={() => {this.state.current_kanji = TOPOKANJI[++this.state.kanji_index]; console.log(this.state.current_kanji); this.forceUpdate();}} />
            <Button title="分かりません" onPress={() => Speech.speak(current_kanji, {language: "ja-JP", rate: 0.7})} />
            </View>
        );
    }
}
