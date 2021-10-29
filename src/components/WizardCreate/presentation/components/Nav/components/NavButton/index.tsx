import React from 'react';
import { NextButton } from './variants/NextButton';
import { PrevButton } from './variants/PrevButton';
import { SubmitButton } from './variants/SubmitButton';

type Variant = 'prev' | 'next' | 'submit';
type Props = { variant: Variant };

export function NavButton({ variant }: Props) {
  const display = {
    prev: <PrevButton />,
    next: <NextButton />,
    submit: <SubmitButton />
  };
  return display[variant];
}
