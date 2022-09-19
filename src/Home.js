import React from 'react'
import { TouchableOpacity, View, Image, Dimensions, ScrollView} from 'react-native'
import Images from './Images';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const Home = () => {
    return (
        <ScrollView>
        <View>
            {
                Images.map((image, index) => (
                    <TouchableOpacity key={index} onPress={() => { }}>
                        <Image source={image.url} style={{height: deviceHeight/3, width: deviceWidth/3, borderRadius: 10, margin: 2}}/>
                    </TouchableOpacity>
                ))
            }
        </View>
        </ScrollView>
    )
}

export default Home 