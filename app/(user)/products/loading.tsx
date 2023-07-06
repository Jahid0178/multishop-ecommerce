"use client";
import { Loader, Skeleton } from "@mantine/core";

const loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <Loader
        style={{ fontSize: "150px", height: "200px", textAlign: "center" }}
        size="xl"
        variant="bars"
      />
      ; */}
      <>
        <Skeleton height={150} radius="xl" />
        <Skeleton height={150} mt={6} radius="xl" />
        <Skeleton height={150} mt={6} width="70%" radius="xl" />
        <Skeleton height={150} radius="xl" />
        <Skeleton height={150} mt={6} radius="xl" />
        <Skeleton height={150} mt={6} width="70%" radius="xl" />
        <Skeleton height={150} radius="xl" />
        <Skeleton height={150} mt={6} radius="xl" />
        <Skeleton height={150} mt={6} width="70%" radius="xl" />
      </>
    </div>
  );
};

export default loading;
