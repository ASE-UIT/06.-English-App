import { View, Text, ScrollView, Image, Button } from "react-native";
import React, { useState, useEffect } from "react";
import DirectToSectionCard from "../../components/Home/DirectToSectionCard";
import CategoryCard from "../../components/Home/CategoryCard";
import CourseCard from "../../components/Home/CourseCard";
import colors from "../../../colors";
import courseCategoryService from "../../services/courseCategory.service";

const Home = () => {
  const userName = "Emma";
  interface CourseCategory {
    id: string;
    name: string;
  }

  const [courseCategories, setCourseCategories] = useState<CourseCategory[]>([]);

  useEffect(() => {
    const fetchCourseCategories = async () => {
      try {
        const result = await courseCategoryService.getCourseCategories();
        setCourseCategories(result.data);
        console.log(courseCategories);
      } catch (error) {
        console.error("Error fetching course categories:", error);
      }
    };

    fetchCourseCategories();
  }, []);

  return (
    <ScrollView
      style={{
        padding: 10,
      }}
      className="flex flex-col gap-4"
    >
      <View className="welcome-container w-3/4 flex flex-row items-center gap-1">
        <Image
          source={require("../../../assets/avatar.png")}
          className="w-12 h-12 p-1 border border-pink1 rounded-full"
        />
        <View className="flex flex-col">
          <Text className="text-xl font-bold text-black">
            Welcome back,{" "}
            <Text className="text-xl font-bold text-blue1">{userName}!</Text>
          </Text>
          <Text className="text-lg text-black">Let’s start learning</Text>
        </View>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 10,
          gap: 10,
        }}
      >
        <DirectToSectionCard />
        <DirectToSectionCard />
        <DirectToSectionCard />
      </ScrollView>
      <View className="categories flex flex-col gap-2">
        <View className="heading flex flex-row justify-between items-center">
          <Text className="text-lg font-bold text-blue1">Categories</Text>
          <Text className="text-sm text-blue1">View all</Text>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{
            gap: 10,
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          {courseCategories.map((category) => (
            <CategoryCard
            name={category.name}
            key={category.id}
             
            />
          ))}
         
        </ScrollView>
      </View>
      <View className="recommend flex flex-col gap-2">
        <View className="heading flex flex-row items-center">
          <Text className="text-lg font-bold text-blue1">
            Recommend for you
          </Text>
        </View>
        <View
          className="courses-container"
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 20,
            marginBottom: 20,
          }}
        >
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
