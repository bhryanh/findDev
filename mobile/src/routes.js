import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                headerTintColor: '#FFF',
                title: 'FindDev',
                headerBackTitleVisible: null,
                headerStyle: {
                    backgroundColor: '#7d40e7'
                },

            }
        },
        Profile
    })
);

export default Routes;