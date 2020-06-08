import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: "400px",
      margin: theme.spacing(0, "auto"),
    },
    chartList: {},
  })
);

function createData(
  rank: number,
  title: string,
  singer: string,
  album: string,
  like: number
) {
  return { rank, title, singer, album, like };
}

const rows = [
  createData(1, "깡", "식케이,pH-1,박재범,김하온", "깡 Official Remix", 40023),
  createData(2, "에잇(Prod.&Feat. SUGA of BTS)", "아이유", "에잇", 32033),
  createData(
    3,
    "사랑하게 될 줄 알았어",
    "전미도",
    "슬기로운 의사생활 OST Part 11",
    87894
  ),
  createData(4, "아로하", "조정석", "슬기로운 의사생활 OST Part 11", 87988),
  createData(5, "More & More", "TWICE (트와이스)", "More & More", 999999999),
];

export default function ChartList() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.chartList}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>순위</TableCell>
                <TableCell>곡 명</TableCell>
                <TableCell>가수</TableCell>
                <TableCell>앨범</TableCell>
                <TableCell>좋아요</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.rank}>
                  <TableCell component="th" scope="row">
                    {row.rank}
                  </TableCell>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.singer}</TableCell>
                  <TableCell>{row.album}</TableCell>
                  <TableCell>{row.like}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
