import dayjs from 'dayjs';

export const trimText = (text, limit) =>
  text.length > limit ? `${text.slice(0, limit)}...` : text;

export const getDate = (date) => dayjs(date).format('YYYY년 MM월 DD일');
