import { expect } from 'chai'
import fetchMock from 'fetch-mock'
import { fetchMessages } from './ApiHelper'

const messages = [
  { id: 'abcd', content: 'fakeContent', author: 'fakeAuthor' }
]

describe('ApiHelper component', () => {
  describe('when the query is successful', () => {
    before(() => (
      fetchMock.get('https://skool-microblog.herokuapp.com/messages', messages)
    ))

    after(fetchMock.reset)

    it('should return a response with the expected messages', () => {
      return fetchMessages()
        .then((response) => {
          expect(fetchMock.calls().matched).to.have.length(1)
          expect(response).to.deep.equal(messages)
        })
    })
  })
})
