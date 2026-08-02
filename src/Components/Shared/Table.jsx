/** @format */

const Table = ({
  columns,
  data = [],
  alternatingRows = false,
  width,
  loading,
  error,
}) => {
  const getRowBgColor = (index) => {
    if (!alternatingRows) return 'bg-[var(--dashboard-surface)] dashboard-hover';
    return index % 2 === 0
      ? 'bg-[var(--dashboard-surface-strong)]'
      : 'bg-[var(--dashboard-surface)]';
  };

  return (
    <div
      className='rounded-lg px-3 dashboard-panel border'
      style={{ width: width || '100%' }}
    >
      <div className='overflow-x-auto'>
        <table className='w-full min-w-[600px]'>
          <thead className='border-b dashboard-border'>
            <tr>
              {columns.map((column, index) => (
                <th
                  key={index}
                  className='px-6 py-4 text-left text-sm font-bold dashboard-muted'
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className='text-center py-12 dashboard-muted'
                >
                  Loading...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td
                  colSpan={columns.length}
                  className='text-center py-12 text-red-500'
                >
                  {error}
                </td>
              </tr>
            ) : data.length > 0 ? (
              data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`transition-colors ${getRowBgColor(rowIndex)}`}
                >
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className='px-6 py-4 text-sm text-[var(--dashboard-text)]'
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
                  className='text-center py-12 dashboard-muted'
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
