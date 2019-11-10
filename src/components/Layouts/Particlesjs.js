import React from 'react';
import Particles from 'react-particles-js';


export default function Particlesjs() {
    return (
        <Particles className="particles-js" params={{
            circle: {
                        enable: false,
                        type: 'inside',
                        "stroke":{
            "width":0,"color":"#000000"}
        ,"polygon":{"nb_sides":5},
                        move: {
                            radius: 160
                        },
                        "number":{
                            "value":160,"density":{
                                "enable":true,"value_area":800}
                            },
                      
                    }
                }}
                />
    )
}
