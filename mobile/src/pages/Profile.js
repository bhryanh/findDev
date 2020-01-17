import React from 'react';
import { StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview'

function Profile({navigation}) {
    const github_username = navigation.getParam('github_username');
    return <WebView style={styles.profile} source={{uri: `https://github.com/${github_username}`}} />
}

const styles = StyleSheet.create({
    profile: {
        flex: 1
    }
})

export default Profile;