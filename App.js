import React, { useState, useRef, useEffect } from "react";
import { Text, View } from 'react-native';
import MapView, { AnimatedRegion, Marker, Polyline} from 'react-native-maps';
import AnimatedMarkers from './src/AnimatedMarkers'

const App = () => {
    return(
        <>
            <AnimatedMarkers />
        </>
    )
}

export default App;