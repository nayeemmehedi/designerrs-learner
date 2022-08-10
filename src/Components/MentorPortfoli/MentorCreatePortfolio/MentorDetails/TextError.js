import React from 'react';

function TextError(props) {
  return (
    <div
      className="mt-1"
      style={{ color: '#f46a6a', fontSize: '11px', fontWeight: 'normal' }}
    >
      {props.children}
    </div>
  );
}

export default TextError;