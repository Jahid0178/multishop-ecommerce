'use client'
import { Loader } from '@mantine/core';

const loading = () => {
  return (
    <div>
      <Loader size="xl" variant="bars" />;
    </div>
  );
};

export default loading;
