import React, { useEffect, useLayoutEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';

import DetailPresenter from '../Detail/DetailPresenter';
import { getImageUrl, movieApi, tvApi } from '../../api';

const Detail = ({
  navigation,
  route: {
    params: { id, title, bgImageUrl, poster, votes, overview, isTv },
  },
}) => {
  const [details, setDetails] = useState({
    loading: true,
    result: {
      title,
      bgImageUrl,
      poster,
      votes,
      overview,
      videos: {
        results: [],
      },
    },
  });

  const getData = async () => {
    const [detail, detailError] = isTv
      ? await tvApi.show(id)
      : await movieApi.movie(id);
    const bgImageUrl = getImageUrl(detail.backdrop_path);

    setDetails({
      loading: false,
      result: {
        ...detail,
        title: detail.title || detail.name,
        bgImageUrl,
        poster: detail.poster_path,
        votes: detail.vote_average,
        overview: detail.overview,
      },
    });
  };

  useLayoutEffect(() => {
    navigation.setOptions({ title });
  }, []);

  useEffect(() => {
    getData();
  }, [id]);

  const openBrowser = async (url) => {
    await WebBrowser.openBrowserAsync(url);
  };

  return <DetailPresenter {...details} openBrowser={openBrowser} />;
};

export default Detail;
