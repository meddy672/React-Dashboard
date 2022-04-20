import React, { useState } from "react";
import AddUserDialog from "./AddUserDialog";
import clsx from "clsx";
import DeleteIcon from "@material-ui/icons/Delete";
import GlobalFilter from "./GlobalFilter";
import IconButton from "@material-ui/core/IconButton";
import { lighten, makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import DatePicker from "react-datepicker";
import { DateTime } from "luxon";
import records from "../../../data/records.js";

import "react-datepicker/dist/react-datepicker.css";

import "./Component.css";

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

function TableToolbar(props) {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const classes = useToolbarStyles();
  const {
    numSelected,
    addUserHandler,
    deleteUserHandler,
    preGlobalFilteredRows,
    setGlobalFilter,
    globalFilter,
  } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <AddUserDialog addUserHandler={addUserHandler} />
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <>
          <Typography className={classes.title} variant="subtitle1">
            <DatePicker
              selectsRange={true}
                placeholderText="Filter By Date"
                startDate={startDate}
              endDate={endDate}
                onChange={(range) => {
                if (range[0] && range[1]) {
                  const d1 = DateTime.fromJSDate(range[0]);
                  const d2 = DateTime.fromJSDate(range[1]);
                  const newData = records.filter((data) => {
                    const jsDate = new Date(data.created);
                    const formattedDate = DateTime.fromJSDate(jsDate);
                    return d1 < formattedDate && d2 > formattedDate;
                  });
                  console.log(newData);
                  if (newData.length) {
                    props.setData(newData);
                  }
                }
                setDateRange(range);
              }}
              isClearable={true}
            />
          </Typography>
        </>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete" onClick={deleteUserHandler}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <GlobalFilter
          sx={{ margin: 100 }}
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      )}
    </Toolbar>
  );
}

TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  addUserHandler: PropTypes.func.isRequired,
  deleteUserHandler: PropTypes.func.isRequired,
  setGlobalFilter: PropTypes.func.isRequired,
  preGlobalFilteredRows: PropTypes.array.isRequired,
  globalFilter: PropTypes.string.isRequired,
};

export default TableToolbar;
