"use client";
import { DashboardNavbar } from "@/ui/Dashboard";
import { Container, Grid } from "@mantine/core";
import NextTopLoader from "nextjs-toploader";
import React from "react";

export default function DashboardLayoute({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main>
        <NextTopLoader height={3} showSpinner={false} />
        <Container size="xl">
          <Grid>
            <Grid.Col span={12} md={2.4}>
              <nav>
                <DashboardNavbar />
              </nav>
            </Grid.Col>
            <Grid.Col span={12} md={8}>
              {children}
            </Grid.Col>
          </Grid>
        </Container>
      </main>
    </>
  );
}
