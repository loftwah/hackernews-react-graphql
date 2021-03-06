import * as React from 'react';

import { NewsFeedView } from '../src/components/news-feed';
import { sampleData } from '../src/data/sample-data';
import { withDataAndRouter } from '../src/helpers/with-data';
import { MainLayout } from '../src/layouts/main-layout';

export const BestCommentsPage = withDataAndRouter((props) => {
  const pageNumber = (props.router.query && +props.router.query.p) || 0;

  return (
    <MainLayout currentUrl={props.router.pathname}>
      <NewsFeedView
        currentUrl={props.router.pathname}
        first={30}
        newsItems={sampleData.newsItems}
        skip={pageNumber * 30}
      />
    </MainLayout>
  );
});

export default BestCommentsPage;
