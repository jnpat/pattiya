import React from "react";
import { Table } from "react-bootstrap";

function Tables(props) {
  return (
    <Table>
      <tbody>
        <tr>
          <th>{props.one}</th>
        </tr>
        <tr>
          <th>{props.two}</th>
        </tr>
        <tr>
          <th>{props.three}</th>
        </tr>
        {props.four !== "" ? (
          <tr>
            <th>{props.four}</th>
          </tr>
        ) : (
          <></>
        )}
        {props.five !== "" ? (
          <tr>
            <th>{props.five}</th>
          </tr>
        ) : (
          <></>
        )}
        {props.six !== "" ? (
          <tr>
            <th>{props.six}</th>
          </tr>
        ) : (
          <></>
        )}
      </tbody>
    </Table>
  );
}
export default Tables;
