import React from 'react'
import { AntDesign } from "@expo/vector-icons"


export default function Icon({name,size,color}) {
    return (
<AntDesign name={name} size={size || 24} color={color || "black"} />
    )
}
