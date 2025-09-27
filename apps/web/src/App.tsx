import { useState } from 'react';
import { colors, typography, spacing } from '@others/design-tokens';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Design tokens を使ったスタイル
  const headerStyle = {
    padding: spacing[8],
    background: `linear-gradient(135deg, ${colors.primary[500]} 0%, ${colors.primary[700]} 100%)`,
    color: colors.neutral[50],
    fontFamily: typography.fontFamily.sans.join(', '),
  };

  const titleStyle = {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    marginBottom: spacing[2],
  };

  const mainStyle = {
    padding: spacing[8],
    fontFamily: typography.fontFamily.sans.join(', '),
    minHeight: '60vh',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[6],
  };

  const buttonStyle = {
    backgroundColor: colors.primary[500],
    color: colors.neutral[50],
    padding: `${spacing[3]} ${spacing[6]}`,
    border: 'none',
    borderRadius: spacing[2],
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.medium,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  };

  return (
    <div className="app">
      <header style={headerStyle}>
        <h1 style={titleStyle}>他人</h1>
        <p style={{ fontSize: typography.fontSize.lg, opacity: 0.9 }}>
          他人のままでいい。繋がらないことが美しい。
        </p>
      </header>
      
      <main style={mainStyle}>
        <p style={{ fontSize: typography.fontSize.base, color: colors.neutral[600] }}>
          アプリケーションをここに実装していきます
        </p>
        <div className="counter">
          <button 
            style={buttonStyle}
            onClick={() => setCount((count) => count + 1)}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = colors.primary[600];
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = colors.primary[500];
            }}
          >
            count is {count}
          </button>
        </div>
        
        {/* Design Tokens の例を表示 */}
        <div style={{ marginTop: spacing[8], textAlign: 'center' }}>
          <h3 style={{ marginBottom: spacing[4], color: colors.neutral[700] }}>
            感情の色
          </h3>
          <div style={{ display: 'flex', gap: spacing[3], flexWrap: 'wrap', justifyContent: 'center' }}>
            {Object.entries(colors.emotions).map(([emotion, color]) => (
              <div
                key={emotion}
                style={{
                  backgroundColor: color,
                  color: colors.neutral[900],
                  padding: `${spacing[2]} ${spacing[3]}`,
                  borderRadius: spacing[2],
                  fontSize: typography.fontSize.sm,
                  fontWeight: typography.fontWeight.medium,
                }}
              >
                {emotion}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;