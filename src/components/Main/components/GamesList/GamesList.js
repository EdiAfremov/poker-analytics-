import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import mock from "../../../../mock";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import FadeIn from "react-fade-in";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import Profit from "../Shared/Profit";
import Pagination from "@material-ui/lab/Pagination";
import chunk from "lodash/chunk";
import * as Styled from "./GamesList.style";
import Divider from "@material-ui/core/Divider";

function PaginationLoader() {
  return (
    <Styled.PaginationLoader>
      <Skeleton animation="wave" width="100%" height="42px" />
    </Styled.PaginationLoader>
  );
}

function LoadingList({ containerHeight }) {
  const list = new Array(5).fill(null);
  return list.map((_) => (
    <React.Fragment key={Math.random()}>
      <Styled.GameContent height={Math.round(containerHeight / 5)}>
        <Skeleton
          animation="wave"
          width="100%"
          height={Math.round(containerHeight / 5 - 20)}
        />
      </Styled.GameContent>
      <Divider />
    </React.Fragment>
  ));
}

const GamesList = () => {
  const [games, setGames] = useState(chunk(mock, 5));
  const [page, setPage] = useState(0);

  const [loading, setLoading] = useState(true);
  const [containerHeight, setContainerHeight] = useState(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (containerRef && containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, [containerRef]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Styled.GameList>
      <Card elevation={0} variant="outlined">
        <CardHeader title="Games Played" />
        <CardContent ref={containerRef}>
          {!loading && (
            <FadeIn>
              {games[page].map((game) => {
                return (
                  <React.Fragment key={game.id}>
                    <Styled.GameContent
                      height={Math.round(containerHeight / 5)}
                    >
                      {game.date}
                      <Profit profit={game.profit} />
                    </Styled.GameContent>
                    <Divider />
                  </React.Fragment>
                );
              })}
            </FadeIn>
          )}
          {loading && containerHeight && (
            <div ref={containerRef} style={{ height: "100%", width: "100%" }}>
              <LoadingList containerHeight={containerHeight} />
            </div>
          )}
        </CardContent>
        <CardActions>
          {!loading ? (
            <FadeIn>
              <Pagination
                count={games.length - 1}
                color="primary"
                onChange={(e, page) => setPage(page)}
              />
            </FadeIn>
          ) : (
            <PaginationLoader />
          )}
        </CardActions>
      </Card>
    </Styled.GameList>
  );
};

export default GamesList;
