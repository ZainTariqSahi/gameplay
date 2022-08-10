// import React, { useCallback, useMemo, useRef, useState } from 'react';
import React, { useState, useMemo } from 'react';
import './AnimateTable.scss';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';

var countDownDirection = true;

// the code below executes an action every 2,000 milliseconds.
// it's an interval, and each time it runs, it takes the next action
// from the 'actions' list below
const StartInterval = (api, columnApi) => {
  var actionIndex = 0;
  resetCountdown();
  executeAfterXSeconds();
  function executeAfterXSeconds() {
    setTimeout(function () {
      var action = getActions()[actionIndex];
      action(api, columnApi);
      actionIndex++;
      if (actionIndex >= getActions().length) {
        actionIndex = 0;
      }
      resetCountdown();
      executeAfterXSeconds();
    }, 3000);
  }
};

const resetCountdown = () => {
  document.querySelector('#animationCountdown').style.width = countDownDirection
    ? '100%'
    : '0%';
  countDownDirection = !countDownDirection;
};

const getActions = () => {
  return [
    function (api, columnApi) {
      columnApi.applyColumnState({
        state: [{ colId: 'betamount', sort: 'asc' }],
        defaultState: { sort: null },
      });
    },
    function (api, columnApi) {
      columnApi.applyColumnState({
        state: [{ colId: 'multiplier', sort: 'asc' }],
        defaultState: { sort: null },
      });
    },
    function (api, columnApi) {
      columnApi.applyColumnState({
        state: [{ colId: 'payout', sort: 'asc' }],
        defaultState: { sort: null },
      });
    },
  ];
};

const rowData = [
  {
    game: 'Test Game 1',
    user: 'Test User 1',
    time: '00:00',
    betamount: '$1.00',
    multiplier: '1.00x',
    payout: '$1.00',
  },
  {
    game: 'Test Game 2',
    user: 'Test User 2',
    time: '00:01',
    betamount: '$2.00',
    multiplier: '2.00x',
    payout: '$2.00',
  },
  {
    game: 'Test Game 3',
    user: 'Test User 3',
    time: '00:02',
    betamount: '$3.00',
    multiplier: '3.00x',
    payout: '$3.00',
  },
  {
    game: 'Test Game 4',
    user: 'Test User 4',
    time: '00:03',
    betamount: '$4.00',
    multiplier: '3.00x',
    payout: '$4.00',
  },
  {
    game: 'Test Game 5',
    user: 'Test User 5',
    time: '00:04',
    betamount: '$5.00',
    multiplier: '5.00x',
    payout: '$5.00',
  },
  {
    game: 'Test Game 6',
    user: 'Test User 6',
    time: '00:05',
    betamount: '$4.00',
    multiplier: '5.00x',
    payout: '$6.00',
  },
  {
    game: 'Test Game 7',
    user: 'Test User 7',
    time: '00:05',
    betamount: '$6.00',
    multiplier: '4.00x',
    payout: '$7.00',
  },
  {
    game: 'Test Game 8',
    user: 'Test User 8',
    time: '00:05',
    betamount: '$6.00',
    multiplier: '5.00x',
    payout: '$8.00',
  },
  {
    game: 'Test Game 9',
    user: 'Test User 9',
    time: '00:05',
    betamount: '$6.00',
    multiplier: '4.00x',
    payout: '$9.00',
  },
  {
    game: 'Test Game 10',
    user: 'Test User 10',
    time: '00:05',
    betamount: '$6.00',
    multiplier: '6.00x',
    payout: '$9.00',
  },
  {
    game: 'Test Game 11',
    user: 'Test User 11',
    time: '00:05',
    betamount: '$6.00',
    multiplier: '6.00x',
    payout: '$10.00',
  },
  {
    game: 'Test Game 12',
    user: 'Test User 12',
    time: '00:05',
    betamount: '$6.00',
    multiplier: '6.00x',
    payout: '$9.00',
  },
  {
    game: 'Test Game 13',
    user: 'Test User 13',
    time: '00:05',
    betamount: '$6.00',
    multiplier: '6.00x',
    payout: '$9.00',
  },

];

const AnimateTable = params => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '40vh' }), []);
  const gridStyle = useMemo(
    () => ({ height: '40vh', width: '100%', color: 'white' }),
    []
  );
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 150,
      sortable: true,
      filter: true,
    };
  }, []);
  const autoGroupColumnDef = useMemo(() => {
    return {
      // to get 'game' showing in the leaf level in this column
      cellRenderer: 'agGroupCellRenderer',
      headerName: '',
      minWidth: 200,
      field: '',
    };
  }, []);

  const onGridReady = params => {
    // setGridApi(params)
    const columns = Object.keys(rowData[0]).map(key => ({ field: key }));
    params.api.setColumnDefs(columns);
    StartInterval(params.api, params.columnApi);
  };
  const rowStyle = {
    background: '#071836',
  };
  const getRowStyle = params => {
    if (params.node.rowIndex % 2 === 0) {
      return { background: '##071836' };
    }
  };

  return (
    <>
      <div style={containerStyle}>
        <div className="example-wrapper">
          <div className="example-header">
            <div>
              <div
                id="animationCountdown"
                className="transition-width"
                style={{ backgroundColor: 'grey', height: '100%', width: '0%' }}
              ></div>
            </div>
            <span id="animationAction"></span>
          </div>

          <div style={gridStyle} className="ag-theme-custom-react">
            <AgGridReact
              rowData={rowData}
              defaultColDef={defaultColDef}
              enableRangeSelection={true}
              animateRows={true}
              rowStyle={rowStyle}
              getRowStyle={getRowStyle}
              suppressAggFuncInHeader={true}
              autoGroupColumnDef={autoGroupColumnDef}
              onGridReady={onGridReady}
            ></AgGridReact>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimateTable;
