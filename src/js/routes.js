import React from 'react'
import {Route ,IndexRoute} from 'react-router'

import App from '../test/App'
import Main from '../test/main'
import PlayerModel from '../test/playerModel'


export default (
  <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="/playerModel" component={PlayerModel} />
  </Route>
)
