import React, {PureComponent} from 'react';
import { View, Text } from 'react-native';

class Dashboard extends PureComponent {
    constructor(props){
        super(props);    
    }

    render(){
        return (
            <View>
                <Text>Hello World</Text>
            </View>
        );
    }
}

export default Dashboard;