import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure( { adapter: new Adapter() } );

export const shallowFactory = ( Component, defaultProps = {} ) => ( props = {}, children = [] ) => (
	shallow( <Component { ...defaultProps } { ...props }>{ children }</Component> )
);
