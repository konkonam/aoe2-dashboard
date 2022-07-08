import React, { useState, useEffect } from 'react'
import ExamplePropsInterface from './example.interface'
import './example.css'

const Example = (props: ExamplePropsInterface) => {
    const [ property, setProperty ] = useState<string>()

    useEffect(() => {
        setProperty(props.content)
        console.log('component created')
    })

    return (
        <div className='example'>
            {property}
        </div>
    )
}

export default Example