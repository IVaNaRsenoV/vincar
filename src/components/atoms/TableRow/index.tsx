export const TableRow = ({ value,variable }: {  value: string; variable: string; }) => (
    <tr>
      <td>{variable}</td>
      <td>{value}</td>
    </tr>
);
