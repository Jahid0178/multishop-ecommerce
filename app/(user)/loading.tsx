"use client";
import { Loader } from "@mantine/core";

const loading = () => {
  return (
    <div>
      <Loader
        style={{ fontSize: "150px", height: "200px", textAlign: "center" }}
        size="xl"
        variant="bars"
      />
      ;
    </div>
  );
};

export default loading;
