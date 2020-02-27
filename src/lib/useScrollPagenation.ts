import { useCallback, useEffect, useRef } from 'react';

interface Params {
  offset?: number | null;
  cursor?: string | null;
  stop?: boolean;
  onLoadMore?: (cursor: string) => any;
  onLoadMoreByOffset?: (offset: number) => void;
}

export default function useScrollPagenation({
  cursor,
  stop,
  offset,
  onLoadMore,
  onLoadMoreByOffset
}: Params) {
  const last = useRef<string | number | null>(null);

  const loadMore = useCallback(() => {
    if (!cursor || !onLoadMore) return;
    if (cursor === last.current) return;
    onLoadMore(cursor);
    last.current = cursor;
  }, [cursor, onLoadMore]);

  const loadMoreUsingOffset = useCallback(() => {
    if (stop || !offset || !onLoadMoreByOffset) return;
    if (offset === last.current) return;
    onLoadMoreByOffset(offset);
    last.current = offset;
  }, [offset, onLoadMoreByOffset, stop]);

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
      loadMoreUsingOffset();
    }
  }, [loadMore, loadMoreUsingOffset]);

  useEffect(() => {
    console.log('register scroll event');
    window.addEventListener('scroll', onScroll);
    return () => {
      console.log('unregister scroll event');
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);
}
