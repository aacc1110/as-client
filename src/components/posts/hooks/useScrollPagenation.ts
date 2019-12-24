import { useCallback, useEffect } from 'react';

interface Params {
  cursor?: string | null;
  onLoadMore?: (cursor: string) => any;
}

export default function useScrollPagenation({ cursor, onLoadMore }: Params) {
  const onScroll = useCallback(() => {
    if (
      window.scrollY + document.documentElement.clientHeight >
      document.documentElement.scrollHeight - 300
    ) {
      if (!cursor || !onLoadMore) return;
      onLoadMore(cursor);
    }
  }, [cursor, onLoadMore]);

  useEffect(() => {
    console.log('register scroll event');
    window.addEventListener('scroll', onScroll);
    return () => {
      console.log('unregister scroll event');
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll, onScroll.length]);
}
