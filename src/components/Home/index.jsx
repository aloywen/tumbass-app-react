import React from 'react'
import { Category, Hero, Recomended, Special, Subscribe, Footer, Help } from '../index.js'

export default function Index() {
    return (
        <div>
            <Category />
            <Hero />
            <Special />
            <Recomended />
            <Subscribe />
            <Help />
            <Footer />
        </div>
    )
}
