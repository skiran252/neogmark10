import React from "react";
import "./Display.css";
const Display = (props) => {
  let remaining = props.change;
  const notes = [
    {
      note: 2000,
      count: 0,
    },
    {
      note: 500,
      count: 0,
    },
    {
      note: 200,
      count: 0,
    },
    {
      note: 100,
      count: 0,
    },
    {
      note: 50,
      count: 0,
    },
    {
      note: 10,
      count: 0,
    },
    {
      note: 5,
      count: 0,
    },
    {
      note: 2,
      count: 0,
    },
    {
      note: 1,
      count: 0,
    },
  ];

  notes.forEach((note) => {
    if (note.note <= remaining) {
      note.count = Math.floor(remaining / note.note);
      const remainder = remaining % note.note;
      remaining = remainder;
    }
  });
  return (
    <div className="d-flex justify-content-center text-center">
      <div className="mt-5">
        <h3 className="text-center">
          Minimum Number of Notes to be returned are
        </h3>
        <div className="card-body">
          <table className="">
            <thead>
              <tr>
                <th key={"count heading"}>COUNT</th>
                {notes.map((note) => (
                  <td key={note.note + " " + note.count}>{note.count}</td>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th key={"note heading"} className="table-cell">
                  NOTE
                </th>
                {notes.map((note, index) => (
                  <th key={note.note} className="table-cell">
                    {note.note}
                  </th>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Display;
