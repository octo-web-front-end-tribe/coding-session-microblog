import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import InputMessage from './InputMessage'
import ApiHelper from '../ApiHelper/ApiHelper'

describe('InputMessage component', () => {
  describe('on render', () => {
    it('should render an input', () => {
      const wrapper = shallow(<InputMessage />)

      expect(wrapper.find('input')).to.have.length(1)
    })
  })

  describe('on change', () => {
    it('should set state with input value', () => {
      // given
      const wrapper = shallow(<InputMessage />)
      const input = wrapper.find('input')

      // when
      input.simulate('change', {target: {value: 'toto'}})

      // then
      expect(wrapper.state('inputValue')).to.equal('toto')
    })
  })

  describe('onKeyPress', () => {
    let spyApiHelperPostMessage

    before(() => {
      spyApiHelperPostMessage = sinon.stub(ApiHelper, 'postMessage')
    })

    afterEach(() => {
      spyApiHelperPostMessage.reset()
    })

    after(() => {
      spyApiHelperPostMessage.restore()
    })

    describe('with a key different than enter', () => {
      it('should do nothing', () => {
        // given
        const input = shallow(<InputMessage />).find('input')
        const notEnter = 0

        // when
        input.simulate('keyPress', {keyCode: 'notEnter'})

        // then
        sinon.assert.notCalled(spyApiHelperPostMessage)
      })
    })

    describe('with a key different than enter', () => {
      it('should call ApiHelper.postMessage with value', () => {
        // given
        const wrapper = shallow(<InputMessage />)
        wrapper.setState({inputValue: 'My new message'})
        const input = wrapper.find('input')
        const enter = 13

        // when
        input.simulate('keyPress', {key: 'Enter'})

        // then
        sinon.assert.calledOnce(spyApiHelperPostMessage)
        sinon.assert.calledWith(spyApiHelperPostMessage, {author:'enDur', content:'My new message'})
        expect(wrapper.state('inputValue')).to.equal('')
      })
    })
  })

})
