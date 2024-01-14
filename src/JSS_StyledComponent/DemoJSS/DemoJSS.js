import React, { Component } from 'react'
import { Button, SmallButton } from '../Components/Button'
import { StyledLink,Link } from '../Components/Link';
import { TextField } from '../Components/TextField';

export default class DemoJSS extends Component {
    render() {
        return (
            <div>
                <Button primary>DemoJSS</Button>
                <br/>
                <Button fontSize2x>DemoJSS</Button>
                <br/>
                <SmallButton>avasc</SmallButton>
                <br/>
                <StyledLink>bao2301</StyledLink>
                <br/>
                <TextField inputColor = "purple"/>
            </div>
        )
    }
}
