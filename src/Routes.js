import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Article from './components/Article/Article'
import ArticleList from './components/ArticleList/ArticleList'

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ArticleList}/>
      <Route path='/article/:article_id' component={Article}/>
    </Switch>
  </main>
)

export default Routes
