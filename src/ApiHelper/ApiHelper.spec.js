import { expect } from 'chai'
import fetchMock from 'fetch-mock'
import ApiHelper from './ApiHelper'

const messages = [
  { id: 'abcd', content: 'fakeContent', author: 'fakeAuthor' }
]

describe('ApiHelper component', () => {
  describe('fetchMessages', () => {
    describe('when the query is successful', () => {
      before(() => (
        fetchMock.get('https://skool-microblog.herokuapp.com/messages', messages)
      ))

      after(fetchMock.restore)

      it('should return a response with the expected messages', () => {
        return ApiHelper.fetchMessages()
          .then((response) => {
            expect(fetchMock.calls().matched).to.have.length(1)
            expect(response).to.deep.equal(messages)
          })
      })
    })
  })

  describe('postMessage', () => {
    describe('when the query is successful', () => {
      before(() => (
        fetchMock.post('https://skool-microblog.herokuapp.com/messages', {})
      ))

      after(fetchMock.restore)

      it('should post a message', () => {
        const body = {
          author: 'toto',
          content: 'kikoo'
        }

        return ApiHelper.postMessage(body)
          .then(() => {
            expect(fetchMock.calls().matched).to.have.length(1)
            expect(fetchMock.calls().matched[0][1].body).to.equal(JSON.stringify(body))
          })
      })
    })
  });
})
