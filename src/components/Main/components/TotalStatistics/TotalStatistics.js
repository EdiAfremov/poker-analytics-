import React, { useMemo } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FadeIn from "react-fade-in";
import Typography from "@material-ui/core/Typography";
import Profit from "../Shared/Profit";
import FormattedNumber from "../Shared/FormattedNumber";
import LoadingHOC from "../Shared/LoadingHOC";
import * as Styled from "./TotalStatistics.style";
import usePlayerStatistics from "../../../../hooks/usePlayerStatistics";
import { makeStyles } from "@material-ui/core/styles";

function SubTitle({ children }) {
  return (
    <Typography variant="subtitle2" gutterBottom>
      {children}
    </Typography>
  );
}

const TotalStatistics = () => {
  const {
    totalRevenue,
    avgRevenue,
    avgBuyIn,
    avgCashedOut,
    loading,
  } = usePlayerStatistics();

  const statistics = useMemo(
    () => [
      {
        label: "Avg. Revenue per Game",
        value: () => <Profit profit={avgRevenue} />,
      },
      {
        label: "Avg. Buy-in ",
        value: () => <FormattedNumber number={avgBuyIn} />,
      },
      {
        label: "Avg. Cashed-out",
        value: () => <FormattedNumber number={avgCashedOut} />,
      },
    ],
    [avgRevenue, avgBuyIn, avgCashedOut]
  );

  return useMemo(
    () => (
      <Styled.TotalStatistics>
        <Card elevation={0} variant="outlined">
          <CardContent>
            <FadeIn>
              <>
                <LoadingHOC width="100px" height={21} loading={loading}>
                  <Typography variant="subtitle2" gutterBottom>
                    Total Revenue
                  </Typography>
                </LoadingHOC>
                <LoadingHOC width="100%" height={31} loading={loading}>
                  <Typography variant="h5" component="h5" gutterBottom>
                    <Profit profit={totalRevenue} />
                  </Typography>
                </LoadingHOC>
                <Styled.AvgStatistics>
                  {statistics.map(({ label, value }) => {
                    return (
                      <LoadingHOC
                        key={label}
                        width="100%"
                        height={31}
                        loading={loading}
                      >
                        <Styled.AvgStatisticsContent>
                          <SubTitle>{label}</SubTitle>
                          <SubTitle>{value()}</SubTitle>
                        </Styled.AvgStatisticsContent>
                      </LoadingHOC>
                    );
                  })}

                  {/* <div>Wins</div>
                <div>Even</div>
                <div>Lose</div> */}
                </Styled.AvgStatistics>
              </>
            </FadeIn>
          </CardContent>
        </Card>
      </Styled.TotalStatistics>
    ),
    [loading, statistics, totalRevenue]
  );
};

export default TotalStatistics;
