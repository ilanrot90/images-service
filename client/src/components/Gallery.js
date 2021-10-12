import * as React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import { useInfiniteQuery } from 'react-query';
import { getImages } from '../api/images.api';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import GalleryLoader from './GalleryLoader';
import Card from './Card';

const Gallery = () => {
  const { fetchNextPage, hasNextPage, isLoading, data, isFetchingNextPage } =
    useInfiniteQuery('images', getImages, {
      getNextPageParam: lastPage => lastPage.nextPage,
    });
  const infiniteRef = useInfiniteScroll({
    callback: fetchNextPage,
    isDisabled: isFetchingNextPage || !hasNextPage || isLoading,
  });

  if (isLoading) {
    return (
      <Root container spacing={2}>
        <GalleryLoader />
      </Root>
    );
  }

  return (
    <Root container spacing={2}>
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.data.map(data => (
            <Card data={data} key={data.url} />
          ))}
        </React.Fragment>
      ))}
      <Placeholder ref={infiniteRef} />
    </Root>
  );
};

export default Gallery;

const Root = styled(Grid)``;
const Placeholder = styled.div`
  width: 100%;
  height: 20px;
`;
