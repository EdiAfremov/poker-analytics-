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
      <Card>
        <CardHeader title="Games Played" />
        <CardContent ref={containerRef}>
          {!loading && (
            <FadeIn>
              {games[page].map((game) => {
                return (
                  <>
                    <Styled.GameContent
                      height={Math.round(containerHeight / 5)}
                    >
                      {game.date}
                      <Profit profit={game.profit} />
                    </Styled.GameContent>
                    <Divider />
                  </>
                );
              })}
            </FadeIn>
          )}
        </CardContent>
        <CardActions>
          <Pagination
            count={games.length - 1}
            color="primary"
            onChange={(e, page) => setPage(page)}
          />
        </CardActions>
      </Card>
    </Styled.GameList>
  );
};

export default GamesList;

// {loading && containerHeight && (
//   <div ref={containerRef} style={{ height: "100%", width: "100%" }}>
//     {new Array(Math.round(containerHeight / 41))
//       .fill(null)
//       .map((_) => (
//         <ListItem divider>
//           <Styled.GameContent>
//             <Skeleton animation="wave" width="100%" height={41} />
//           </Styled.GameContent>
//         </ListItem>
//       ))}
//   </div>
// )}
