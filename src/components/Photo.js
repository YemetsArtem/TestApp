import React from 'react'
import { useDispatch } from 'react-redux'
import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native'
import { selectPhoto } from '../ducks/photos'

const Photo = ({ id, author, description, url, showPhoto }) => {
    const dispatch = useDispatch();
    const handlePress = () => {
        dispatch(selectPhoto(id));
        showPhoto();
    }

    return (
        <TouchableOpacity style={styles.photo} onPress={handlePress}>
            <View>
                <Image style={styles.image} source={{ uri: url }} />
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.author}>{author}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    photo: {
        marginVertical: 5,
        flexBasis: "100%",
        borderWidth: 2,
        borderColor: "gray",
        borderRadius: 15
    },
    author: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        fontSize: 22,
        fontFamily: "cursive",
        color: "gray",
        alignSelf: "flex-end"
    },
    description: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 23,
        fontFamily: "serif",
        alignSelf: "center"
    },
    image: {
        height: 200,
        borderRadius: 5
    }
});

export default Photo