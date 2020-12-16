import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import FadeIn from "react-fade-in";
import Typography from "@material-ui/core/Typography";
import Profit from "../Shared/Profit";
import mock from "../../../../mock";
import * as Styled from "./TotalStatistics.style";

const total = mock.reduce((a, c) => a + c.profit, 0);

const TotalStatistics = () => {
  return (
    <Styled.TotalStatistics>
      <Card elevation={0} variant="outlined">
        <CardHeader title="Statistics"></CardHeader>
        <CardContent>
          <FadeIn>
            <Typography color="textSecondary" gutterBottom>
              Total Profit
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              <Profit profit={total} />
            </Typography>
          </FadeIn>
        </CardContent>
      </Card>
    </Styled.TotalStatistics>
  );
};

export default TotalStatistics;
