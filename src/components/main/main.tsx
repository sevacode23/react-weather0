import styled from "styled-components";

import { newsContent } from "../../constants";
import { Image } from "../image";

const Styles = {
  Root: styled.main`
    width: 84%;
    max-width: 1280px;
    display: flex;
    margin: 0 auto;
    margin-top: 12px;

    & > section {
      padding: 16px;
      border-radius: 6px;
      background-color: white;
    }
  `,
  SectionHead: styled.h3`
    font-size: 20px;
  `,
  NewsSection: styled.section`
    flex: 3;
  `,
  AdSection: styled.section`
    margin-left: 12px;
    flex: 1;
  `,
  NewsItem: styled.li`
    max-height: 130px;
    display: flex;
    margin-top: 32px;
    cursor: pointer;

    &:hover .news-head {
      color: blue;
    }
  `,
  NewsImageContainer: styled.div`
    width: 150px;
    flex-shrink: 0;
  `,
  ImageRelativeContainer: styled.div`
    position: relative;
  `,
  PlayIcon: styled(Image)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  NewsContent: styled.div`
    margin-left: 12px;
  `,
  NewsTime: styled.time`
    display: block;
    margin-top: 3px;
    font-size: 14px;
    color: grey;
  `,
  NewsDescription: styled.p`
    margin-top: 6px;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  ButtonsContainer: styled.div`
    margin-top: 20px;
    padding-top: 16px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #dee0e3;

    & > button {
      background: none;
      outline: none;
      border: none;
      font-size: 16px;
    }
  `,
  PrevButton: styled.button`
    color: grey;
  `,
  NextButton: styled.button`
    color: blue;
    cursor: pointer;
  `,
};

export const Main = () => (
  <Styles.Root>
    <Styles.NewsSection>
      <Styles.SectionHead>All Stories and Videos</Styles.SectionHead>
      <ul>
        {newsContent.map((news) => (
          <Styles.NewsItem>
            <Styles.NewsImageContainer>
              <Styles.ImageRelativeContainer>
                <img src={news.imgUrl} alt="img" />
                {news.description && (
                  <Styles.PlayIcon file="play" width="32px" height="32px" />
                )}
              </Styles.ImageRelativeContainer>
            </Styles.NewsImageContainer>
            <Styles.NewsContent>
              <h4 className="news-head">{news.title}</h4>
              <Styles.NewsTime dateTime={news.date.toLocaleString()}>
                {news.date.toLocaleDateString()}
              </Styles.NewsTime>
              <Styles.NewsDescription>
                {news.description}
              </Styles.NewsDescription>
            </Styles.NewsContent>
          </Styles.NewsItem>
        ))}
      </ul>
      <Styles.ButtonsContainer>
        <Styles.PrevButton disabled>{"< Previous"}</Styles.PrevButton>
        <Styles.NextButton>{"Next >"}</Styles.NextButton>
      </Styles.ButtonsContainer>
    </Styles.NewsSection>

    <Styles.AdSection>
      <Styles.SectionHead>Sponsored Content</Styles.SectionHead>
      <div></div>
      <i>by Taboola Sponsored links</i>
    </Styles.AdSection>
  </Styles.Root>
);
