import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Util from "global/util";
import ChartData from "./chartDataInterface";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: "420px",
      margin: theme.spacing(0, "auto"),
    },
    chartList: {},
    chartRow: {
      cursor: "pointer",
    },
  })
);

type ChartListProps = {
  chartData: ChartData[];
};

export default function ChartList({ chartData }: ChartListProps) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.chartList}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>순위</b>
                </TableCell>
                <TableCell>
                  <b>곡 명</b>
                </TableCell>
                <TableCell>
                  <b>가수</b>
                </TableCell>
                <TableCell>
                  <b>앨범</b>
                </TableCell>
                <TableCell>
                  <b>좋아요</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {chartData.map((row) => (
                <TableRow key={row.rank} className={classes.chartRow} hover>
                  <TableCell component="th" scope="row">
                    {row.rank}
                  </TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.singer}</TableCell>
                  <TableCell>{row.album}</TableCell>
                  <TableCell>{Util.getFormattedNumber(row.like)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
