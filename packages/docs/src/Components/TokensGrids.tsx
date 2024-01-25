import '../styles/tokens.grid.css'

interface TokensGridsProps {
  tokens: Record<string, string>
  hasRemValue: boolean
}

export const TokensGrids = ({
  tokens,
  hasRemValue = false,
}: TokensGridsProps) => {
  return (
    <table className="tokens-grid">
      <thead>
        <th>Name</th>
        <th>Value</th>
        {hasRemValue && <th>Pixels</th>}
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (
                <td>{Number(value.replace('rem', '')) * 16}px</td>
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
