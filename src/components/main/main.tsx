import styled from "styled-components";

import { ADS, NEWS_CONTENT } from "../../constants";
import { Image } from "../image";

const Styles = {
  Root: styled.main`
    width: 84%;
    max-width: 1280px;
    display: flex;
    margin: 0 auto;
    margin-top: 12px;
  `,
  SectionHead: styled.h3`
    font-size: 20px;
  `,
  NewsSection: styled.section`
    flex: 2.25;
    padding: 16px;
    border-radius: 6px;
    background-color: white;
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
  AdsContainer: styled.div`
    margin-top: 16px;

    > * + * {
      margin-top: 16px;
    }
  `,
  AdsHeightContainer: styled.div`
    background-color: white;
    padding: 16px;
    border-radius: 6px;
  `,
  AdContainer: styled.div`
    cursor: pointer;

    &:hover b {
      text-decoration: underline;
    }
  `,
  AdTitle: styled.b`
    font-weight: normal;
  `,
  Advertiser: styled.span`
    display: block;
    margin-top: 4px;
    font-size: 12px;
    color: grey;
  `,
  AdTip: styled.i`
    display: block;
    margin-top: 18px;
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
  `,
};

export const Main = () => (
  <Styles.Root>
    <Styles.NewsSection>
      <Styles.SectionHead>All Stories and Videos</Styles.SectionHead>
      <ul>
        {NEWS_CONTENT.map((news, index) => (
          <Styles.NewsItem key={index}>
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
      <Styles.AdsHeightContainer>
        <Styles.SectionHead>Sponsored Content</Styles.SectionHead>
        <Styles.AdsContainer>
          {ADS.map((ad, index) => (
            <Styles.AdContainer key={index}>
              <img src={ad.imgUrl} alt="ad" />
              <Styles.AdTitle>{ad.title}</Styles.AdTitle>
              <Styles.Advertiser>{ad.advertiser}</Styles.Advertiser>
            </Styles.AdContainer>
          ))}
        </Styles.AdsContainer>
        <Styles.AdTip>by Taboola Sponsored links</Styles.AdTip>
      </Styles.AdsHeightContainer>
    </Styles.AdSection>
  </Styles.Root>
);
