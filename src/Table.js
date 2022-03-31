import React, {useState} from 'react';
import { isEmpty, remove } from "lodash"

const DataGrid = () => {
    const [selectedSessions, SetSelectedSessions] = useState([])

  const columns = [
    {
      id: 1,
      accessor: "Sun",
      value: "Sunday",
    },
    {
      id: 2,
      accessor: "Mon",
      value: "Monday",
    },
    {
      id: 3,
      accessor: "Tue",
      value: "Tuesday",
    },
    {
      id: 4,
      accessor: "Wed",
      value: "Wednesday",
    },
    {
      id: 5,
      accessor: "Thu",
      value: "Thursday",
    },
    {
      id: 6,
      accessor: "Fri",
      value: "Friday",
    },
    {
      id: 7,
      accessor: "Sat",
      value: "Saturday",
    },
  ]

  const rowArray = [
    {
      id: 1,
      session: "Morning",
      time: "6.00AM - 9.00AM",

    },
    {
      id: 2,
      session: "Late Morning",
      time: "9.00AM - 12.00PM",

    },
    {
      id: 3,
      session: "Afternoon",
      time: "12.00PM - 15.00PM",

    },
    {
      id: 4,
      session: "Late Afternoon",
      time: "15.00PM - 18.00PM",

    },
    {
      id: 5,
      session: "Evening",
      time: "18.00PM - 21.00PM",

    },
    {
      id: 6,
      session: "Late Evening",
      time: "21.00PM - 12.00AM",

    },
  ]



  const handleSelect = (day, time, session, columnId, rowId) => {
    // let alreadyChecked = false
    const selectedSlot = {
      session: session,
      dayOfWeek: day,
      time: time,
      dayId: columnId,
      slotId: rowId,
    }

    const updatedArray = selectedSessions.find(
      (s) => s.slotId === selectedSlot.slotId && s.dayId === selectedSlot.dayId
    )

    var index = selectedSessions.indexOf(updatedArray)
    console.log(index)
    if (index > -1) {

      console.log("zero index comes here, remove method here");
      // console.log(selectedSessions.splice(index, 1))

      const removedArray = remove(selectedSessions, (s) =>(s.slotId === selectedSlot.slotId && s.dayId === selectedSlot.dayId) )

      console.log(removedArray, 'remove array');

    } else {
      console.log('-ve index goes here');
      SetSelectedSessions([selectedSlot, ...selectedSessions])
    }

    // const index  = selectedSessions.findIndex((curItem) => curItem.dayId === selectedSlot.dayId && curItem.slotId === selectedSlot.slotId);

    const some = selectedSessions.some(
      (slot) =>
        slot.dayId === selectedSlot.dayId && slot.slotId === selectedSlot.slotId
    )

    // console.log(index, "index", some, 'some', updatedArray, 'updatedArray');

    // if(){
    //   console.log("oobj already there");

    //   console.log(index, updatedArray, 'updated Array');

    // }else{
    //   console.log("Added new obj");
    //   SetSelectedSessions([selectedSlot, ...selectedSessions]);
    // }
  }

  console.log(selectedSessions, "total array")

    return (
        <div>
            <table className="table-bordered">
            <thead >
              <tr>
                <th >Time slots</th>
                {columns.map((item) => {
                  return (
                    <th
                      className="text-center"
                      key={item.id}
                    >
                      <h2>
                        {item.accessor}
                      </h2>
                      <div className="">
                        <input
                          className=""
                          type="checkbox"
                          checked={
                            !isEmpty(
                              selectedSessions.find(
                                (obj) => obj.dayId === item.id
                              )
                            )
                          }
                          name={item.value}
                          id={`${item.id} flexCheckChecked`}
                        />
                        <label className="" htmlFor="flexCheckChecked"></label>
                      </div>
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {rowArray.map((item) => {
                return (
                  <tr>
                    <td
                      className="d-flex "
                      key={item.id}
                    >
                      <span className="checkIcon2 m-1 p-1">{item.icon}</span>
                      <div className="d-flex flex-column">
                        <span >
                          {item.session}
                        </span>
                        <span>
                          {item.time}
                        </span>
                      </div>
                    </td>

                    {columns.map((data) => {
                      // console.log(selectedSessions, 'inside table cell');
                      return (
                        <td
                          className="text-center"
                          key={data.id}
                          onClick={() => {
                            handleSelect(
                              data.value,
                              item.time,
                              item.session,
                              data.id,
                              item.id
                            )
                          }}
                        >
                          <input type="checkbox" />
                        </td>
                      )
                    })}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
    );
};

export default DataGrid;