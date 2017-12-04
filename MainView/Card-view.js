import React, { Component } from 'react';


export default class CardView extends Component{
    contructor(props){
        super(props);
    }

    render(){
        return (
            <Card>  
                <CardItem header>
                    <Text>Stock Watcher</Text>
                </CardItem>
                <CardItem> 
                    <Body>
                        <Text>
                            the chart goes here
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        )
    }

}