import { Helmet } from 'react-helmet-async';
import React from 'react';

type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps): JSX.Element {
  return (
    <Helmet>
      <title>{title} - Bookworm</title>
    </Helmet>
  );
}
