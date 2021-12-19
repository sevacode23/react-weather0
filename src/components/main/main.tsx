import styled from "styled-components";
import { newsContent } from "../../constants";

const Styles = {
  Root: styled.main`
    width: 85%;
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
  SectionHeader: styled.h3`
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
  `,
  NewsImageContainer: styled.div`
    width: 150px;
    flex-shrink: 0;
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
};

export const Main = () => (
  <Styles.Root>
    <Styles.NewsSection>
      <Styles.SectionHeader>All Stories and Videos</Styles.SectionHeader>
      <ul>
        {newsContent.map((news) => (
          <Styles.NewsItem>
            <Styles.NewsImageContainer>
              <img src={news.imgUrl} alt="img" />
            </Styles.NewsImageContainer>
            <Styles.NewsContent>
              <h4>{news.title}</h4>
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
      <div>
        <button>Previous</button>
        <button>Next</button>
      </div>
    </Styles.NewsSection>

    <Styles.AdSection>
      <Styles.SectionHeader>Sponsored Content</Styles.SectionHeader>
      <div></div>
      <i>by Taboola Sponsored links</i>
    </Styles.AdSection>
  </Styles.Root>
);
