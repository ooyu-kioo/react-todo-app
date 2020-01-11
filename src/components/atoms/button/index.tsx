import React from 'react';

interface Props {
  label: string; // ボタンの表示名
  onClick: () => void; // クリック時の動作
}

export const Button: React.FC<Props> = ({ onClick, label }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  )
}