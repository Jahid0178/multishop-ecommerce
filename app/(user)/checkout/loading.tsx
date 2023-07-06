"use client";
import { Loader } from "@mantine/core";

const loading = () => {
  return (
    <div style={{ textAlign: "center" }}>
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
