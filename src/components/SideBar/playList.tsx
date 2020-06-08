import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

import COLOR from "global/color";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    playList: {
      backgroundColor: theme.palette.background.paper,
      width: "240px",
      height: "100vh",
      display: "block",
      position: "absolute",
      zIndex: 1,
      overflow: "scroll",
      marginTop: theme.spacing(8),
    },
    title: {
      width: "240px",
      backgroundColor: "rgba(255,255,255, 0.23)",
      borderBottom: `1px solid ${COLOR.Gallery}`,
      marginBottom: theme.spacing(2),
    },
    scrollList: {},
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

function generate(element: React.ReactElement) {
  return [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
  ].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function PalyList() {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <>
      <div className={classes.playList}>
        <List>
          {generate(
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Single-line item"
                secondary={secondary ? "Secondary text" : null}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )}
        </List>
      </div>
    </>
  );
}
