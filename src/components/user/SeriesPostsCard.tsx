import React from 'react';
import styled from '@emotion/styled';
import { postSampleImage } from '../../images/img';
import PostLink from '../posts/PostLink';
import palette from '../../styles/palette';
import { Post } from '../../lib/graphql/post';
import { SeriesPosts } from '../../lib/graphql/series';

const SeriesPostsCardBlock = styled.div`
  background: white;
  display: flex;
  width: 380px;
  margin: 0 0 0.25rem 0;
  .seriesImg {
    width: 40%;
    img {
      width: 100%;
      height: auto;
      :hover {
        opacity: 0.8;
      }
    }
  }
  .seriesInfo {
    width: 60%;
    strong {
      font-size: 0.75rem;
      color: ${palette.gray7};
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.5;
      margin: 0;
    }
  }
`;

interface SeriesPostsCardProps {
  post: Post;
  seriesPosts?: SeriesPosts[];
  useremail?: string;
}

function SeriesPostsCard({
  post,
  seriesPosts,
  useremail
}: SeriesPostsCardProps) {
  if (!post) return null;
  return (
    <SeriesPostsCardBlock>
      <div className="seriesImg">
        <PostLink
          postId={post.id}
          useremail={useremail}
          urlPath={post.urlPath}
          seriesPosts={seriesPosts}
        >
          <img src={postSampleImage} alt="thumbnail" />
        </PostLink>
      </div>
      <div className="seriesInfo">
        <div>시리즈</div>
        <strong>{post.title}</strong>
      </div>
    </SeriesPostsCardBlock>
  );
}

export default SeriesPostsCard;
