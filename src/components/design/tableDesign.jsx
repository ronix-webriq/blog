import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function TableDesign(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table" size="small">
        <TableHead>
          <TableRow>
            <StyledTableCell>Project Name</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Project URL</StyledTableCell>
            <StyledTableCell align="right">Github URL</StyledTableCell>
            <StyledTableCell align="right">Date Created</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.project && props.project.length < 1 ? <div>Loading</div> : props.project.map((item, index) => (
            <StyledTableRow key={item.project_name}>
              <StyledTableCell component="th" scope="row">
                {item.project_name}
              </StyledTableCell>
              <StyledTableCell align="right">{item.description}</StyledTableCell>
              <StyledTableCell align="right">category</StyledTableCell>
              <StyledTableCell align="right"><a href={item.project_url} target="_blank">{item.project_url}</a></StyledTableCell>
              <StyledTableCell align="right">{item.github_url}</StyledTableCell>
              <StyledTableCell align="right">{item.date_created}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
