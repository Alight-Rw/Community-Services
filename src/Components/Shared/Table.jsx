const Table = ({ columns, data, alternatingRows = false, width }) => {
  const getRowBgColor = (index) => {
    if (!alternatingRows) return "bg-white hover:bg-gray-50";
    return index % 2 === 0 ? "bg-gray-50" : "bg-white";
  };

  return (
    <div
      className="rounded-lg shadow px-3 bg-white"
      style={{ width: width || "100%" }}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead className="border-b border-universal">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className="px-6 py-4 text-left text-sm font-bold text-gray"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`transition-colors ${getRowBgColor(rowIndex)}`}
                >
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className="px-6 py-4 text-sm text-gray-700"
                    >
                      {column.render
                        ? column.render(row[column.accessor], row)
                        : row[column.accessor]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-12 text-gray-500"
                >
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
