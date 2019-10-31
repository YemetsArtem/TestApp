import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPhotos, loadPhotos, getLoading } from '../ducks/photos'
import { ScrollView, View, Button, StyleSheet } from 'react-native'
import Loader from './common/Loader'
import Photo from './Photo'


const PhotoList = ({ navigation }) => {
    const photos = useSelector(state => getPhotos(state));
    const isLoading = useSelector(state => getLoading(state));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadPhotos());
    }, []);

    const renderPhotos = () => photos.map(photo => (
        <Photo
            id={photo.id}
            url={photo.urls.full}
            author={photo.user.name}
            description={photo.description || photo.alt_description || photo.user.location}
            key={photo.id}
            showPhoto={() => navigation.navigate('BigPhoto')}
        />
    ));

    return (
        <ScrollView>
            {
                isLoading || !photos
                    ? <Loader />
                    : <View style={styles.container}>
                        <Button
                            title="Go to Selected Photo"
                            onPress={() => navigation.navigate('BigPhoto')}
                        />
                        {renderPhotos()}
                      </View>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: "row",
        flexWrap: "wrap",
        alignSelf: "center",
        justifyContent: "space-between"
    }
});

export default PhotoList