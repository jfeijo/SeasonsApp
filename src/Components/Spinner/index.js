import React from 'react';
import './Spinner.css';


export const Spinner = (props) => {

    return(
          <div class="ui active dimmer">
            <div class="ui big text loader">
                {props.message}
          </div>
        </div>
    );
};

Spinner.defaultProps = {
    message: 'Loading...'
};