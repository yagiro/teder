import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Container, Card, CardItem, Thumbnail, Button, Icon } from 'native-base';

export default class ImageCard extends Component {
    render() {
        return(
            <Card style={{backgroundColor: "#345340"}}>
                <CardItem>
                    <Text>Title</Text>
                </CardItem>
                <CardItem cardBody>
                    <Text style={{fontSize: 60}}>Image</Text>
                </CardItem>
                <CardItem>
                    <Text>Card footer things</Text>
                </CardItem>                
            </Card>
        );
    }
}