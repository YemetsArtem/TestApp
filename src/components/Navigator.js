import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import PhotoList from "./PhotoList"
import BigPhoto from './BigPhoto'


const Navigator = createStackNavigator(
    {
        PhotoList: PhotoList,
        BigPhoto: BigPhoto
    },
    { 
        headerMode: 'none'
    },
    {
        initialRouteName: 'PhotoList',
    }
);

export default createAppContainer(Navigator)
