import React from 'react'
import { Button } from 'reactstrap'

const Jumbotron = () => {
        return (
            <div className="jumbotron">
                <h3>Welcome To Our Studio!</h3>
                <h1>IT'S NICE TO MEET YOU</h1>
                <Button href="#"
                className="jumboBtn" size="lg">TELL ME MORE</Button>
            </div>
        ) 
}

export default Jumbotron
