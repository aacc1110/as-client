import { useCallback, useEffect, useRef } from 'react';

interface Params {
  cursor?: string | null;
  onLoadMore?: (cursor: string) => any;
}

export default function useScrollPagenation({ cursor, onLoadMore }: Params) {
  const last = useRef<string | number | null>(null);

  const loadMore = useCallback(() => {
    if (!cursor || !onLoadMore) return;
    if (cursor === last.current) return;
    onLoadMore(cursor);
    last.current = cursor;
  }, [cursor, onLoadMore]);

  const onScroll = useCallback(() => {
    console.log('window.scrollY:', window.scrollY);
    console.log(
      'document.documentElement.clientHeight:',
      document.documentElement.clientHeight
    );
    console.log(
      'document.documentElement.scrollHeight:',
      document.documentElement.scrollHeight
    );
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 500
    ) {
      loadMore();
    }
  }, [loadMore]);

  useEffect(() => {
    console.log('register scroll event');
    window.addEventListener('scroll', onScroll);
    return () => {
      console.log('unregister scroll event');
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
}
