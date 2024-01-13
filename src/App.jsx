import React from 'react'
import { Demo, Nav_info } from './components/index'


const App = () => {
    return (
        <main>
            {/* The backgrounds */}
            <div className="main">
                <div className='gradient'/>
            </div>

            {/* The components */}
            <div className='app'>
                <Nav_info />
                <Demo />
            </div>

        </main>
    )
}

export default App