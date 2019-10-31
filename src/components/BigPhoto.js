import React from 'react'
import { Image, Text } from 'react-native'
import { useSelector } from 'react-redux'
import { getSelectedPhoto } from '../ducks/photos'

const BigPhoto = () => {
    const selectedPhoto = useSelector(state => getSelectedPhoto(state));

    return (
        <>
            {
                selectedPhoto
                    ? <Image style={{ flex: 1, }} source={{ uri: selectedPhoto.urls.full }} />
                    : <Text style={{fontSize:32, alignSelf:"center"}}>Please select photo</Text>
            }
        </>
    )
}


export default BigPhoto
