import React from 'react';

function ChildComponent() {
  return (
    <div>エラーを発生させます...{window.foo()}</div>
  );
}

export default ChildComponent;
