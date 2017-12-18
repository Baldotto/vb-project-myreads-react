import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

/** 
 This course is not designed to teach Test Driven Development. 
 Feel free to use this file to test your application, but it 
 is not required.
**/

describe('<App />', () => {
  it('shallow without crashing', () => {
    expect(shallow(<App />))
  })
})


