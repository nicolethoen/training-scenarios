import React from "react";
import {
    InputGroup,
    Button,
    ButtonVariant,
    TextInput,
} from "@patternfly/react-core";
import { SearchIcon } from '@patternfly/react-icons';

class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        };
    }

    onInputChange = (value) => {
        this.setState({value});
    };

    render() {
        const { id, ariaLabel, value } = this.props;
        return (
            <InputGroup>
                <TextInput name={id} id={id} type="search" aria-label={ariaLabel} onChange={this.onInputChange} value={value}/>
                <Button variant={ButtonVariant.control} aria-label="search button for search input">
                    <SearchIcon />
                </Button>
            </InputGroup>
        );
    }
}

export default Input;