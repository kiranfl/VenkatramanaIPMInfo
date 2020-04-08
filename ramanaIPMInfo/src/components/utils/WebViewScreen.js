import React, { useEffect, useState, useCallback } from 'react';
import { View, Button, TouchableOpacity, ScrollView, Text, StyleSheet, Image } from 'react-native';
import { WebView } from 'react-native-webview'
function WebViewScreen(props) {
    return (
        <WebView source={{ uri: props.route.params.url }} />
    )
}
export default WebViewScreen;