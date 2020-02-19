import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView
  } from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
    state = { 
        dataalbum: []
     }
     
    async componentWillMount(){
        try{
            const {data} = await Axios.get(`https://rallycoding.herokuapp.com/api/music_albums`)
            console.log(data)
            this.setState({ dataalbum:data })
        } catch(err) {
            console.log(err)
        }
    }

    renderAlbums=()=>{
        return this.state.dataalbum.map((val,index) => {
            return(
                <AlbumDetail key={index} album={val} />
            )
        })
    }

    render() { 
        return ( 
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
         );
    }
}
 
export default AlbumList;