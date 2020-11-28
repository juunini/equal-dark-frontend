import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import ProductsPage from 'src/pages/ProductsPage';
import ProductDetailPage from 'src/pages/ProductDetailPage';
import NotFoundPage from 'src/pages/NotFoundPage';
import { Wrapper, Main } from 'src/layout';

export default function App() {
  return (
    <Wrapper>
      <Main>
        <Switch>
          <Route exact path="/" component={ProductsPage} />
          <Route path="/products/:id" component={ProductDetailPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Main>
    </Wrapper>
  );
}
