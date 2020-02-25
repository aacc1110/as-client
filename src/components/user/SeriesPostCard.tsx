import React from 'react';
import styled from '@emotion/styled';
import { Post } from '../../lib/graphql/post';
import { postSampleImage } from '../../images/img';
import PostLink from '../posts/PostLink';
import palette from '../../styles/palette';

const SeriesPostCardBlock = styled.div`
  background: white;
  display: flex;
  flex-wrap: wrap;
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

interface SeriesPostCardProps {
  post: Post;
}

function SeriesPostCard({ post }: SeriesPostCardProps) {
  return (
    <SeriesPostCardBlock>
      <div className="seriesImg">
        <PostLink
          postId={post.id}
          useremail={post.user.email}
          urlPath={post.urlPath}
        >
          <img src={postSampleImage} alt="thumbnail" />
        </PostLink>
      </div>
      <div className="seriesInfo">
        <strong>{post.title}</strong>
      </div>
    </SeriesPostCardBlock>
  );
}

export default SeriesPostCard;
