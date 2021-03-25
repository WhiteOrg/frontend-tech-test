import React from 'react'
import App from './App'
import {getDataFromAPI} from './utils'
import { cleanup, render, fireEvent} from '@testing-library/react'


afterEach(cleanup)

describe('---- FETCH METHOD ----', () => {
  it('API-FUNCTION-CALL', async function() {
    const response = getDataFromAPI()
    const data = await response
    // EXPECT 1 ASSERTION TO BE CALLED
    expect.assertions(1)
    // CHECKS TYPE OF FETCHED DATA IF IS AN OBJECT
    if ( data.prizeList && typeof data === 'object') {
      expect(data.prizeList[0].title).toBe('P.C')
    }
  })
})

