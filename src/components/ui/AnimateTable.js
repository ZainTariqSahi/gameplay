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
        state: [{ colId: 'Name', sort: 'asc' }],
        defaultState: { sort: null },
      });
    },
    function (api, columnApi) {
      columnApi.applyColumnState({
        state: [{ colId: 'Win', sort: 'asc' }],
        defaultState: { sort: null },
      });
    },
    function (api, columnApi) {
      columnApi.applyColumnState({
        state: [{ colId: 'Amount', sort: 'asc' }],
        defaultState: { sort: null },
      });
    },
  ];
};

const rowData = [
  {
    Rank: '1',
    Name: 'Zain Wick',
    Amount: '$2000',
    Win: '64'
  },
  {
    Rank: '2',
    Name: 'Suffyan Malik',
    Amount: '$1000',
    Win: '56'
  },
  {
    Rank: '3',
    Name: 'Mathira Zohaib',
    Amount: '$4000',
    Win: '30'
  },
  {
    Rank: '4',
    Name: 'Bushra BB',
    Amount: '$200',
    Win: '20'
  },
  {
    Rank: '5',
    Name: 'Mister X',
    Amount: '$10000',
    Win: '10'
  },
  {
    Rank: '6',
    Name: 'Mister Y',
    Amount: '$5000',
    Win: '45'
  },
  {
    Rank: '7',
    Name: 'Neutrals',
    Amount: '$7000',
    Win: '40'
  },
];

const AnimateTable = params => {
  const containerStyle = useMemo(() => ({ width: '100%', height: '20vh' }), []);
  const gridStyle = useMemo(
    () => ({ height: '20vh', width: '100%', color: 'white' }),
    []
  );
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
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
    background: '#02183E',
  };
  const getRowStyle = params => {
    if (params.node.rowIndex % 2 === 0) {
      return { background: '#071836' };
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
              headerHeight={0}
              defaultColDef={defaultColDef}
              enableRangeSelection={true}
              animateRows={true}
              rowStyle={rowStyle}
              getRowStyle={getRowStyle}
              suppressAggFuncInHeader={true}
              autoGroupColumnDef={autoGroupColumnDef}
              onGridReady={onGridReady}
              detailRowHeight={100}
            ></AgGridReact>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimateTable;
