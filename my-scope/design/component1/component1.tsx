import React from 'react';

export type Component1Props = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Component1({ text }: Component1Props) {
  return (
    <div>
      {text}
    </div>
  );
}
