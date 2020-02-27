import React, { memo, useLayoutEffect } from 'react';
import styled from '@emotion/styled';
import { postSampleImage, loginUserThumbnail } from '../../images/img';
import usePost from './hooks/usePost';
import { formatDate } from '../../lib/utils';
import { Link, useHistory, useLocation } from 'react-router-dom';
import palette from '../../styles/palette';
import {
  MdPlaylistAdd,
  MdReply,
  MdMoreHoriz,
  MdFavoriteBorder,
  MdFavorite
} from 'react-icons/md';
import useUser from '../../lib/hooks/useUser';
import PostComments from './PostComments';
import PostSideList from './PostSideList';
import SeriesPostsCard from '../user/SeriesPostsCard';
import { SeriesPosts } from '../../lib/graphql/series';

const PostViewBlock = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  padding: 0 1rem 0 1rem;

  margin-bottom: 3rem;
  .main {
    flex: 1;
    flex-basis: 0.000000001px;
    display: block;
    padding: 1.25rem 1.25rem 0 0;
  }
  .imgBox {
    position: relative;
    img {
      width: auto;
      height: 200px;
      /* height: auto; */
      border: 1px solid black;
    }
  }
  .info-contents {
    border-bottom: 1px solid;
    padding: 1rem 0 8px 0;
  }
  .info-contents > .tag {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.2rem;
    a {
      text-decoration: none;
      color: ${palette.blue5};
    }
    span {
      margin-right: 0.5rem;
    }
  }
  .info-contents > .title {
    max-height: 4.8rem;
    overflow: hidden;
    font-weight: 600;
    color: ${palette.gray8};
    line-height: 1.5;
    margin-bottom: 1rem;
  }

  .info-contents > .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875rem;
    color: ${palette.gray7};
    line-height: 1.2;
  }
  .info-contents > .info > .infoText {
    display: block;
    max-height: 2.1rem;
    overflow: hidden;
  }
  .info-contents > .info > .infoText > .flex {
    flex: 1;
    flex-basis: 0.000000001px;
  }
  .info-contents > .info > .infoMenu {
    position: relative;
    display: flex;
    align-items: center;
    svg {
      font-size: 1.5rem;
      color: ${palette.gray7};
      cursor: pointer;
      &:hover {
        color: ${palette.blue5};
        opacity: 0.7;
      }
    }
    span {
      margin-right: 1.3rem;
      top: 0;
    }
  }
  .userInfo {
    display: block;
    border-bottom: 1px solid;
    padding-top: 16px;
    margin-bottom: 24px;
    padding-bottom: 16px;
  }
  .userInfo > .user {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }
  .user > .userContents {
    display: flex;
    align-items: center;
    flex: 1;
    /* flex-basis: 0.000000001px; */
    img {
      display: block;
      height: 4rem;
      width: 4rem;
      box-shadow: 0px 0 8px rgba(0, 0, 0, 0.085);
      border-radius: 2rem;
      object-fit: cover;
      transition: 0.125s all ease-in;
      margin-right: 1rem;
    }
  }
  .userContents > .info {
    font-size: 1rem;
    color: ${palette.gray9};
    line-height: 1;
    span {
      font-size: 0.875rem;
      color: ${palette.gray7};
    }
  }
  .userInfo > .content {
    margin-left: 64px;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5rem;
    span {
      /* height: 3.125rem; */
      line-height: 1.5;
      letter-spacing: -0.02em;
      white-space: pre-wrap;
      word-break: normal;
      word-wrap: break-word;

      overflow: hidden;
      /* display: contents; */
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      margin: 0 0 0.5rem 0;
    }
    p {
      span {
        :hover {
          cursor: pointer;
          color: ${palette.gray5};
        }
      }
      color: ${palette.gray7};
    }
  }
  #see {
    display: contents;
  }
  #hide {
    display: none;
  }
`;

interface PostViewProps {
  useremail?: string;
  urlPath?: string;
  seriesId?: string;
}

function PostView({ useremail, urlPath }: PostViewProps) {
  const { state } = useLocation();

  const { post, onLikeToggle, onPostRead, onPostSave } = usePost(
    useremail,
    urlPath
  );
  const { user } = useUser();
  const history = useHistory();

  useLayoutEffect(() => {
    if (!post) return;
    onPostRead();
  }, [onPostRead, post]);

  const onClick = (mode: string) => {
    const hide: HTMLElement | null = document.getElementById('hide');
    const see: HTMLElement | null = document.getElementById('see');
    const content = document.getElementsByClassName('content')[0]
      .firstChild as HTMLElement;
    if (mode === 'see') {
      content.style.overflow = 'visible';
      content.style.display = 'contents';
      see!.style.display = 'none';
      hide!.style.display = 'contents';
      return;
    } else if (mode === 'hide') {
      content.style.overflow = 'hidden';
      content.style.display = '-webkit-box';
      see!.style.display = 'contents';
      hide!.style.display = 'none';
      return;
    }
  };

  const onLikeClick = () => {
    if (!user) {
      alert('로그인이 필요합니다.');
      history.push('/login');
      return;
    }
    onLikeToggle();
  };

  const onSaveClick = () => {
    if (!user) {
      alert('로그인이 필요합니다.');
      history.push('/login');
      return;
    }
    onPostSave();
  };

  if (!post) return null;

  return (
    <PostViewBlock>
      <div className="main">
        <div>
          <div className="imgBox">
            <img src={postSampleImage} alt="thumbnail" />
          </div>
          <div className="info-contents">
            {post.tags && (
              <div className="tag">
                {post.tags.map(tag => (
                  <span key={tag.id}>
                    <Link to={`/tags/${tag.tag}`}>#{tag.tag}</Link>
                  </span>
                ))}
              </div>
            )}
            <div className="title">{post.title}</div>
            <div className="info">
              <div className="infoText">
                <span>조회수 {post.viewsCount}회</span>
                <span> • {formatDate(post.releasedAt)}</span>
                <div className="flex"></div>
              </div>
              <div className="infoMenu">
                {post.liked ? (
                  <MdFavorite onClick={onLikeClick} />
                ) : (
                  <MdFavoriteBorder onClick={onLikeClick} />
                )}
                <span> {post.likes > 0 ? post.likes : 0}</span>
                <MdPlaylistAdd onClick={onSaveClick} />
                <span> 저장</span>
                <MdReply />
                <span> 공유</span>
                <MdMoreHoriz />
              </div>
            </div>
          </div>
        </div>
        <div className="userInfo">
          <div className="user">
            <div className="userContents">
              <Link to={`/@${post.user.email}`}>
                <img src={loginUserThumbnail} alt="thumbnail" />
              </Link>
              <div className="info">
                <div>
                  <b>{post.user.name}</b>
                </div>
                <div>
                  <span>구독자 : 0</span>
                </div>
              </div>
            </div>
            {user && user.id === post.user.id ? null : (
              <div className="subscript">
                <Link to="/">구독</Link>
              </div>
            )}
          </div>
          <div className="content" id="content">
            <span>{post.body}</span>
            <p>
              <span id="see" onClick={() => onClick('see')}>
                더보기
              </span>
              <span id="hide" onClick={() => onClick('hide')}>
                간략히
              </span>
            </p>
          </div>
        </div>
        <PostComments
          comments={post.comments}
          commentsCount={post.commentsCount}
          postId={post.id}
          useremail={useremail}
          urlPath={urlPath}
          sub={false}
        />
      </div>
      <div>
        {state.seriesPosts &&
          state.seriesPosts.map((seriesPosts: SeriesPosts) => (
            <section key={seriesPosts.id}>
              <SeriesPostsCard
                post={seriesPosts.post}
                seriesPosts={state.seriesPosts}
                useremail={useremail}
              />
            </section>
          ))}
        <PostSideList />
      </div>
    </PostViewBlock>
  );
}

export default memo(PostView);
