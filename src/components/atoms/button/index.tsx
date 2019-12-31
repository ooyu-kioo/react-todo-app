import React from 'react';

interface Props {
  onClick: () => void; // クリック時の動作
  label: string; // ボタンの表示名
}

export const Button: React.FC<Props> = ({ onClick, label }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  )
}