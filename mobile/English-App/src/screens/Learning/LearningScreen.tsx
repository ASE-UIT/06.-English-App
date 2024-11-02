import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";
import CourseItem from "../../components/CourseItem";

const dataForCourseItem = [
  {
    srcImg:
      "https://images.unsplash.com/photo-1728996152930-233c5aca21d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    title: "TOEIC",
    teacherName: "Vinh Thinh",
    progress: 25,
    rated: 3,
  },
  {
    srcImg:
      "https://images.unsplash.com/photo-1728996152930-233c5aca21d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
    title: "IELTS",
    teacherName: "Vinh Thinh Dep Trai",
    progress: 50,
    rated: 5,
  },
];

export default function LearningScreen() {
  const [buttonSelected, setButtonSelected] = React.useState("All");
  return (
    <ScrollView className="w-full px-[24px] py-6">
      <Text className="font-semibold text-base text-[#5D5FEF] mb-4">
        My Courses
      </Text>
      <View className="w-full flex flex-row items-center justify-between">
        <Button
          title="All"
          type={buttonSelected === "All" ? "solid" : "outline"}
          className="rounded-[30px] px-3 py-[14px]"
          buttonStyle={{
            backgroundColor:
              buttonSelected === "All" ? "#EF5DA8" : "transparent",
          }}
          titleStyle={{
            color: buttonSelected === "All" ? "#ffffff" : "#000000",
          }}
          onPress={() => setButtonSelected("All")}
        ></Button>
        <Button
          title="In progress"
          type={buttonSelected === "In progress" ? "solid" : "outline"}
          className="rounded-[30px] px-3 py-[14px]"
          buttonStyle={{
            backgroundColor:
              buttonSelected === "In progress" ? "#EF5DA8" : "transparent",
          }}
          titleStyle={{
            color: buttonSelected === "In progress" ? "#ffffff" : "#000000",
          }}
          onPress={() => setButtonSelected("In progress")}
        ></Button>
        <Button
          title="Finished"
          type={buttonSelected === "Finished" ? "solid" : "outline"}
          className="rounded-[30px] px-3 py-[14px]"
          buttonStyle={{
            backgroundColor:
              buttonSelected === "Finished" ? "#EF5DA8" : "transparent",
          }}
          titleStyle={{
            color: buttonSelected === "Finished" ? "#ffffff" : "#000000",
          }}
          onPress={() => setButtonSelected("Finished")}
        ></Button>
        <Button
          title="Favorited"
          type={buttonSelected === "Favorited" ? "solid" : "outline"}
          className="rounded-[30px] px-3 py-[14px]"
          buttonStyle={{
            backgroundColor:
              buttonSelected === "Favorited" ? "#EF5DA8" : "transparent",
          }}
          titleStyle={{
            color: buttonSelected === "Favorited" ? "#ffffff" : "#000000",
          }}
          onPress={() => setButtonSelected("Favorited")}
        >
          Favorited
        </Button>
      </View>
      <View className="w-full flex flex-col gap-2 items-center mt-5">
        {dataForCourseItem.map((course, index) => (
          <CourseItem
            key={index}
            srcImg={course.srcImg}
            title={course.title}
            teacherName={course.teacherName}
            progress={course.progress}
            rated={course.rated}
            onPressItem={() => {}}
          />
        ))}
      </View>
    </ScrollView>
  );
}
