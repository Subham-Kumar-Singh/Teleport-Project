import Navbar from "./components/Navbar";
// import HTML from "./components/home";
import React, { useState } from "react";
import axios from "axios";
import { GetStaticProps } from "next";

interface todo {
  title: string;
  publishedAt: string;
  author: string;
  url: string;
  content: string;
  description: string;
  urlToImage: string;
}

export const getStaticProps: GetStaticProps = async () => {
  // general
  const apiUrl =
    "https://newsapi.org/v2/everything?q=general&apikey=ad07050197494943b1c37676780b2fb9";
  const todolist = await axios.get(apiUrl);
  const general: todo[] = todolist.data.articles;

  // technology
  const apitech =
    "https://newsapi.org/v2/everything?q=technology&apikey=ad07050197494943b1c37676780b2fb9";
  const tech = await axios.get(apitech);
  const technology: todo[] = tech.data.articles;

  // sports
  const apisports =
    "https://newsapi.org/v2/everything?q=sports&apikey=ad07050197494943b1c37676780b2fb9";
  const spo = await axios.get(apisports);
  const sport: todo[] = spo.data.articles;

  // Defence
  const apidefence =
    "https://newsapi.org/v2/everything?q=defence&apikey=ad07050197494943b1c37676780b2fb9";
  const def = await axios.get(apidefence);
  const defence: todo[] = def.data.articles;

  // enter
  const apienter =
    "https://newsapi.org/v2/everything?q=entertainment&apikey=ad07050197494943b1c37676780b2fb9";
  const enter = await axios.get(apienter);
  const entertainment: todo[] = enter.data.articles;

  // politics
  const apipoli =
    "https://newsapi.org/v2/everything?q=politics&apikey=ad07050197494943b1c37676780b2fb9";
  const poli = await axios.get(apipoli);
  const politic: todo[] = poli.data.articles;

  const alldata: Array<todo[]> = [
    general,
    sport,
    entertainment,
    defence,
    politic,
    technology,
  ];

  if (!general || !technology || !sport) {
    return {
      notFound: true,
    };
  }
  return {
    props: { alldata },
  };
};

const Home = ({ alldata }: { alldata: Array<todo[]> }) => {
  const [more, increase] = useState(10);

  const [variable, changevarible] = useState(0);

  function bb(b: any) {
    changevarible(b);
  }

  return (
    <div>
      <Navbar prop={bb} />
      <div className="thrid-div">
        {alldata[variable].slice(0, more).map((item, index) => {
          return (
            <div key={index}>
              <div className="card">
                <div className="card-img">
                  {item.urlToImage ? (
                    <img
                      src={item.urlToImage}
                      alt="Some alt text"
                      className="card-img"
                      width={280}
                      height={280}
                    />
                  ) : (
                    <img
                      className="card-img"
                      width={280}
                      height={280}
                      src="https://cdn.searchenginejournal.com/wp-content/uploads/2023/01/software-suites-63c69a81ad507-sej.jpg"
                      alt="Some alt text"
                    />
                  )}
                </div>
                <div className="item-restcontent">
                  <h2 className="item-p">{item.title.substr(0, 50)}</h2>
                  <p className="item-p">Published At: {item.publishedAt}</p>
                  {item.author ? (
                    <p className="item-p">Author: {item.author}</p>
                  ) : (
                    <p className="item-p">Author: Sources</p>
                  )}
                  {item.description ? (
                    <p className="desc">{item.description.substr(0, 150)}</p>
                  ) : (
                    <p className="item-p">
                      Learn to estimate ROI & make smart business decisions.
                      Download the on-demand webinar to discover how to allocate
                      budget & select the best SEO keywords. The post How To
                      Predict Your SEO Success: A 5-Step Formula To Help You Win
                      appeared first on Search Engine…
                    </p>
                  )}

                  {/* {getContent(item.content)} */}
                  <div className="item-btn">
                    <button className="url-btn">
                      <a href={item.url}>Read More</a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div> */}
        <div className="card-readmore">
          <button
            className="readmore-btn"
            onClick={() => {
              increase(more + 10);
            }}
          >
            More HeadLines...
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
