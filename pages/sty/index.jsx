import React from 'react'
import Body from '@/components/Body'
import Footer from 'components/Footer'
import Header from 'components/Header'
// import { style } from './index.module.css'

export default function Style() {
    return (
        <>
            <Header />
            <Body />
            <Footer />
            {/* <style jsx global>
                {
                    `
                    body{
                        background: red
                    }
                    `
                }
            </style> */}
        </>
    )
}
