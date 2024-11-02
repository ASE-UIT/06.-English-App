import { View, Text, ScrollView } from "react-native";
import React from "react";
import DirectToSectionCard from "../../components/Home/DirectToSectionCard";
import CategoryCard from "../../components/Home/CategoryCard";
import CourseCard from "../../components/Home/CourseCard";

const Home = () => {
  return (
    <ScrollView
      style={{
        marginTop: 10,
      }}
    >
      <DirectToSectionCard />
      <CategoryCard />
      <CourseCard />
    </ScrollView>
  );
};

export default Home;
