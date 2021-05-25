import React from 'react';

export type Component2Props = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Component2({ text }: Component2Props) {
  return (
    <div>
      {text}
    </div>
  );
}
