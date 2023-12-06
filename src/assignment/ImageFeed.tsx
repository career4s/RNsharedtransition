import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { Story } from "./Model";
import StoryThumbnail from "./StoryThumbnail";

export const stories: Story[] = [
  {
    id: "2",
    source: require("./assets/stories/2.jpg"), 
  },
  {
    id: "4",
    source: require("./assets/stories/4.jpg"), 
  },  
  {
    id: "5",
    source: require("./assets/stories/5.jpg"), 
  },
  {
    id: "3",
    source: require("./assets/stories/3.jpg"),  
  },
  {
    id: "1",
    source: require("./assets/stories/1.jpg"), 
  },
  {
    id: "6",
    source: require("./assets/stories/6.jpg"), 
  },
];

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});

const ImageFeed = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {stories.map((story) => (
          <StoryThumbnail key={story.id} story={story} />
        ))}
      </View>
    </ScrollView>
  );
};

export default ImageFeed;
