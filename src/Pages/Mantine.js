import React from 'react'
import { MantineProvider } from '@mantine/core'
import ListHouse from './ListHouse'


const Mantine = () => {
    return (
        <MantineProvider>
            <ListHouse />
        </MantineProvider>)
}

export default Mantine