import {VncScreen} from "react-vnc";
import * as React from "@types/react";

export default function Gazebo() {
return (
    <VncScreen
        url='ws://your-vnc-url.com'
        scaleViewport
        background="#000000"
        style={{
            width: '75vw',
            height: '75vh',
        }}

    />
);
}
