/* eslint-disable react/jsx-key */
import { categories } from "@/data/data";
import useSetQueryParams, { SearchQuery } from "@/libs/hooks/setQueryParams";
import {
  Button,
  Card,
  Divider,
  Flex,
  Input,
  RangeSlider,
  Select,
  Text,
  Title
} from "@mantine/core";
import { IconChevronDown, IconSearch } from "@tabler/icons-react";
import React from "react";
const Sidebar = () => {
  const [category, setCategory] = React.useState<string>("");
  const [value, setValue] = React.useState(40);
  const [tagsValue, setTagsValue] = React.useState<string[]>([]);
  const [rangeValue, setRangeValue] = React.useState<[number, number]>([
    0, 800,
  ]);
  // const [];
  const { query, setQuery } = useSetQueryParams<SearchQuery>();
  // dumy tags
  console.log("range value", tagsValue);
  const tags = [
    "bag",
    "Medacia",
    "lion",
    "t shirt",
    "wemen",
    "kids",
    "Bathroom",
    "toys",
  ];

  console.log(category);
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={4}>SHOP BY</Title>
      <Divider size="xs" my={10} />

      {/* search  */}
      <Title order={6}>SEARCH</Title>
      <Input
        icon={<IconSearch size={18} color="#3A3E43" />}
        my={5}
        placeholder="Search..."
        radius="sm"
        type="search"
      />

      {/* Categories  */}
      <Title order={6} mt={10} mb={5}>
        CATEGORIES
      </Title>
      <Select
        label="Your favorite framework/library"
        placeholder="Pick one"
        // onSearchChange={handleclick}
        dropdownPosition="bottom"
        allowDeselect
        rightSection={<IconChevronDown size="1rem" />}
        rightSectionWidth={30}
        styles={{ rightSection: { pointerEvents: "none" } }}
        data={categories.map((category) => {
          return category.categori;
        })}
      />

      {/* Tags  */}
      <Title order={6} mt={20} mb={10}>
        TAGS
      </Title>
      <Flex gap="md" wrap="wrap">
        {tags.map((tag, index) => (
          <Button
            onClick={() => {
              const check = tagsValue.includes(tag);
              if (!check) {
                setTagsValue((prev) => [...prev, tag]);
              }
            }}
            key={index}
            size="xs"
            variant="outline"
            color="gray"
            radius="xl"
          >
            {tag}
          </Button>
        ))}
      </Flex>

      {/* price  */}
      <Title order={6} mt={30} mb={10}>
        PRICE
      </Title>
      <Text mb={5}>Price : $527-$736</Text>
      <>
        <RangeSlider
          min={0}
          max={2000}
          defaultChecked
          value={rangeValue}
          onChange={setRangeValue}
          mt={10}
        />
      </>

      {/* reset and apply button  */}
      <Flex justify={"space-between"} mt={20}>
        <Button variant="outline" color="red">
          RESET RESULT
        </Button>
        <Button
          onClick={() => {
            setQuery({
              priceRange: [0, 200],
              tags: ["hdbdhbdh", "nqdbxqbuh", "jqojdiq"],
              category: "vcgvcgwv ",
              brand: "nbxhjbjh",
            });
          }}
        >
          APPLY
        </Button>
      </Flex>
    </Card>
  );
};

export default Sidebar;
